'use strict';

var LightMapScene = function(gl){
	this.gl = gl;
	
};

LightMapScene.prototype.Load = function(cb){
//	console.log('Loading demo scene');
	//var fragmentShader          = getShaderText("shader-fs");
	//var vertexShader            = getShaderText("shader-vs");
	var me = this;
	var gl = this.gl;
	gl.enable(gl.CULL_FACE);
	gl.enable(gl.DEPTH_TEST);
//	gl.frontFace(gl.CCW);
//	gl.cullFace(gl.BACK);
	gl.clearColor(0, 0, 0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	async.parallel({
		Models:function(callback){
			async.map({
				RoomModel: '/js/shadowmap/Room.json'
			},loadJSONResource, callback);
		}
		,ShaderCode:function(callback){
			async.map({
				'NoShadow_VSText':'/js/shadowmap/NoShadow.vs.glsl',
				'NoShadow_FSText':'/js/shadowmap/NoShadow.fs.glsl',
				'Shadow_VSText':'/js/shadowmap/Shadow.vs.glsl',
				'Shadow_FSText':'/js/shadowmap/Shadow.fs.glsl',
				'ShadowMapGen_VSText':'/js/shadowmap/ShadowMapGen.vs.glsl',
				'ShadowMapGen_FSText':'/js/shadowmap/ShadowMapGen.fs.glsl',
			},loadTextResource, callback);
		}
	},function(loadErrors, loadResults){
		if(loadErrors){
			cb(loadErrors);
			return;
		}
		
		//
		// Create Model Objects
		//
		var meshes = loadResults.Models.RoomModel.meshes;
		for(var i = 0; i < meshes.length; ++i){
			var mesh = meshes[i];
			switch(mesh.name){
			case 'MonkeyMesh':
				me.MonkeyMesh = new ModelBuffer(me.gl, 
						mesh.vertices,
						[].concat.apply([],mesh.faces),
						mesh.normals,
						vec4.fromValues(0.8,0.8,1.0,1.0)
				);
				
				//$$$ TODO translation정보가 loadResults.Models.RoomModel.rootNode.children[] 에
				// name으로 체크 동일 레벨의 transformation[]에 순서데로 mat4로 들어 있음.
				/* -0.0841335	-0.996317 	0			0
				 * 0.996454		-0.084145	0			0
				 * 0			0			1			0
				 * 2.07919		-0.985586	1.7574		1
				 *  
				 *   이동 : 맨아래줄
				 *   회전 : 좌상단.
				 *   확대 : 우측라인  
				 * 
				 * 
				 * */
				//몽키가 blender로 봤을때 tranform메뉴에 Axis Angle의 값만큼 회전 시켜 줘야만 보인다.
				mat4.rotate(me.MonkeyMesh.world, me.MonkeyMesh.world,
						glMatrix.toRadian(94.87),
						vec3.fromValues(0,0,-1)
				);
				mat4.translate(me.MonkeyMesh.world, me.MonkeyMesh.world,
						vec3.fromValues(2.07919,-0.98559,1.75740)
				);
				break;
			case 'TableMesh':
				me.TableMesh = new ModelBuffer(me.gl, 
						mesh.vertices,
						[].concat.apply([],mesh.faces),
						mesh.normals,
						vec4.fromValues(1,0,1,1) //컬러
				);
				//blender로 봤을때 tranform메뉴에 Axis Angle의 값만큼 회전 시켜 줘야만 보인다.
				mat4.translate(me.TableMesh.world, me.TableMesh.world,
						vec3.fromValues(1.57116, -0.79374, 0.49672)
				);
				break;
			case 'SofaMesh':
				me.SofaMesh = new ModelBuffer(me.gl, 
						mesh.vertices,
						[].concat.apply([],mesh.faces),
						mesh.normals,
						vec4.fromValues(0,1,1,1) //컬러
				);
				//blender로 봤을때 tranform메뉴에 Axis Angle의 값만큼 회전 시켜 줘야만 보인다.
				mat4.translate(me.SofaMesh.world, me.SofaMesh.world,
						vec3.fromValues(-3.28768, 0, 0.78448)
				);
				break;
			case 'LightBulbMesh':
				me.lightPosition = vec3.fromValues(0, 0.0, 2.58971);
				me.LightBulbMesh = new ModelBuffer(me.gl, 
						mesh.vertices,
						[].concat.apply([],mesh.faces),
						mesh.normals,
						vec4.fromValues(4,4,4,1) //컬러
				);
				//blender로 봤을때 tranform메뉴에 Axis Angle의 값만큼 회전 시켜 줘야만 보인다.
				mat4.translate(me.LightBulbMesh.world, me.LightBulbMesh.world,me.lightPosition);
				break;
			case 'WallsMesh':
				me.WallsMesh = new ModelBuffer(me.gl, 
						mesh.vertices,
						[].concat.apply([],mesh.faces),
						mesh.normals,
						vec4.fromValues(0.3,0.3,0.3,1) //컬러
				);
				break;
			}
		}
		
		
		
		if(!me.MonkeyMesh){ cb('Failed to load MonkeyMesh mesh');return;}
		if(!me.TableMesh){ cb('Failed to load TableMesh mesh');return;}
		if(!me.SofaMesh){ cb('Failed to load SofaMesh mesh');return;}
		if(!me.LightBulbMesh){ cb('Failed to load LightBulbMesh mesh');return;}
		if(!me.WallsMesh){ cb('Failed to load WallsMesh mesh');return;}

		//=============================
		// TODO 입력된 mesh 배열을 생성. 
		me.Meshes = [
			me.MonkeyMesh, 
			me.TableMesh, 
			me.SofaMesh, 
			me.LightBulbMesh, 
			me.WallsMesh
		];
		
		//============================
		//프로그램 만들기.
		me.NoShadowProgram = CreateShaderProgram(me.gl, 
				loadResults.ShaderCode.NoShadow_VSText,
				loadResults.ShaderCode.NoShadow_FSText
		);
		if(me.NoShadowProgram.error){
			cb('NoShadowProgram :' + me.NoShadowProgram.error); return;
		}
		// 샤도우 프로그램 만들기.
		me.ShadowProgram = CreateShaderProgram(me.gl, 
				loadResults.ShaderCode.Shadow_VSText,
				loadResults.ShaderCode.Shadow_FSText
		);
		if(me.ShadowProgram.error){
			cb('ShadowProgram :' + me.ShadowProgram.error); return;
		}
		// 샤도우 프로그램 만들기.
		me.ShadowMapGenProgram = CreateShaderProgram(me.gl, 
				loadResults.ShaderCode.ShadowMapGen_VSText,
				loadResults.ShaderCode.ShadowMapGen_FSText
		);
		if(me.ShadowMapGenProgram.error){
			cb('ShadowMapGenProgram :' + me.ShadowMapGenProgram.error); return;
		}
		
		
		//console.log(loadResults);
		//=========================================================
		//attribute 및 uniform
		me.NoShadowProgram.uniforms = {
			mProj : me.gl.getUniformLocation(me.NoShadowProgram,'mProj'), 
			mView : me.gl.getUniformLocation(me.NoShadowProgram,'mView'), 
			mWorld : me.gl.getUniformLocation(me.NoShadowProgram,'mWorld'),
			
			pointLightPosition : me.gl.getUniformLocation(me.NoShadowProgram,'pointLightPosition'),
			meshColor : me.gl.getUniformLocation(me.NoShadowProgram,'meshColor')
		};
		me.NoShadowProgram.attribs = {
			vPos : me.gl.getAttribLocation(me.NoShadowProgram, 'vPos'),
			vNorm: me.gl.getAttribLocation(me.NoShadowProgram, 'vNorm')
		};
		//shadow $$$
		me.ShadowProgram.uniforms = {
				mProj : me.gl.getUniformLocation(me.ShadowProgram,'mProj'), 
				mView : me.gl.getUniformLocation(me.ShadowProgram,'mView'), 
				mWorld : me.gl.getUniformLocation(me.ShadowProgram,'mWorld'),
				pointLightPosition : me.gl.getUniformLocation(me.ShadowProgram,'pointLightPosition'),
				meshColor : me.gl.getUniformLocation(me.ShadowProgram,'meshColor'),
				lightShadowMap : me.gl.getUniformLocation(me.ShadowProgram,'lightShadowMap'),	//samplerCube
				shadowClipNearFar : me.gl.getUniformLocation(me.ShadowProgram,'shadowClipNearFar')	//vec2
		};
		me.ShadowProgram.attribs = {
				vPos : me.gl.getAttribLocation(me.ShadowProgram, 'vPos'),
				vNorm: me.gl.getAttribLocation(me.ShadowProgram, 'vNorm')
		};
		//shadow gen
		me.ShadowMapGenProgram.uniforms = {
				mProj : me.gl.getUniformLocation(me.ShadowMapGenProgram,'mProj'), 
				mView : me.gl.getUniformLocation(me.ShadowMapGenProgram,'mView'), 
				mWorld : me.gl.getUniformLocation(me.ShadowMapGenProgram,'mWorld'),
				
				pointLightPosition : me.gl.getUniformLocation(me.ShadowMapGenProgram,'pointLightPosition'),
				shadowClipNearFar : me.gl.getUniformLocation(me.ShadowMapGenProgram,'shadowClipNearFar')	//vec2
		};
		me.ShadowMapGenProgram.attribs = {
				vPos : me.gl.getAttribLocation(me.ShadowMapGenProgram, 'vPos')
		};
		
		//======================== $$$ 프레임 버퍼가.. 렌더링으로 생성한 이미지 입니다.
		// Create FrameBuffer and Textures
		me.shadowMapCube = me.gl.createTexture();
		me.gl.bindTexture(me.gl.TEXTURE_CUBE_MAP, me.shadowMapCube);
		//리니어 방식 보간
		me.gl.texParameteri(me.gl.TEXTURE_CUBE_MAP, me.gl.TEXTURE_MIN_FILTER, me.gl.LINEAR);
		me.gl.texParameteri(me.gl.TEXTURE_CUBE_MAP, me.gl.TEXTURE_MAG_FILTER, me.gl.LINEAR);
		//미러식 택스쳐 반복
		me.gl.texParameteri(me.gl.TEXTURE_CUBE_MAP, me.gl.TEXTURE_WRAP_S, me.gl.MIRRORED_REPEAT);
		me.gl.texParameteri(me.gl.TEXTURE_CUBE_MAP, me.gl.TEXTURE_WRAP_T, me.gl.MIRRORED_REPEAT);
		
		for(var i = 0; i < 6; i++){
			me.gl.texImage2D(
				me.gl.TEXTURE_CUBE_MAP_POSITIVE_X +i,
				0, me.gl.RGBA,
				me.textureSize, me.textureSize,
				0, me.gl.RGBA,
				me.gl.UNSIGNED_BYTE, null
			);
		}
		//  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
		//Demo.gl.TEXTURE_CUBE_MAP_POSITIVE_X = 34069
		//Demo.gl.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070
		//Demo.gl.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071
		//Demo.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072
		//Demo.gl.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073
		//Demo.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074
		
		//프레임 버퍼 (멀티 택스쳐용.)
		me.shadowMapFramebuffer = me.gl.createFramebuffer();
		me.gl.bindFramebuffer(me.gl.FRAMEBUFFER, me.shadowMapFramebuffer);
		
		//큐브멥.?? 
		me.shadowMapRenderbuffer = me.gl.createRenderbuffer();
		me.gl.bindRenderbuffer(me.gl.RENDERBUFFER, me.shadowMapRenderbuffer);
		me.gl.renderbufferStorage(
				me.gl.RENDERBUFFER, me.gl.DEPTH_COMPONENT16,
				me.textureSize, me.textureSize);	//16BIT Depth component
		
		//gl.RGBA4 : 4비트 
		//DEPTH_COMPONENT16 (webgl renderbufferStorage로 검색) 16이면 높은 값. 
		//============= 
		me.gl.bindTexture(me.gl.TEXTURE_CUBE_MAP, null);
		me.gl.bindFramebuffer(me.gl.FRAMEBUFFER, null);
		me.gl.bindRenderbuffer(me.gl.RENDERBUFFER, null);
		
		
		
		
		//=============================
		//Logical Values
		//
		me.camera = new Camera(
			vec3.fromValues(0,0,1.85),
			vec3.fromValues(-0.3, -1, 1.85),
			vec3.fromValues(0,0,1)
		);
		
		//기본 변수.
		me.viewMatrix = mat4.create();		//update에서 카메라 위치 조정. render에서 적용.
		me.projMatrix = mat4.create();		//render에서 프로젝션 설정.
		
		me.calculatePerspective();
		
		
		//console.log(loadResults);
		
		
		
		//샤도우 카메라가 6개 필요. 
		me.shadowMapCameras = [
			//Positive X
			new Camera(
					me.lightPosition, 
					vec3.add(vec3.create(), me.lightPosition, vec3.fromValues(1,0,0)),
					vec3.fromValues(0, -1, 0)
			),
			//Negative X
			new Camera(
					me.lightPosition, 
					vec3.add(vec3.create(), me.lightPosition, vec3.fromValues(-1,0,0)),
					vec3.fromValues(0, -1, 0)
			),
			//Positive Y
			new Camera(
					me.lightPosition, 
					vec3.add(vec3.create(), me.lightPosition, vec3.fromValues(0,1,0)),
					vec3.fromValues(0, 0 , 1)	//z방향 이것만 다름
			),
			//Negative Y
			new Camera(
					me.lightPosition, 
					vec3.add(vec3.create(), me.lightPosition, vec3.fromValues(0,-1,0)),
					vec3.fromValues(0, 0, -1)	//z방향 이것만 다름
			),
			//Positive Z
			new Camera(
					me.lightPosition, 
					vec3.add(vec3.create(), me.lightPosition, vec3.fromValues(0,0,1)),
					vec3.fromValues(0, -1, 0)
			),
			//Negative Z
			new Camera(
					me.lightPosition, 
					vec3.add(vec3.create(), me.lightPosition, vec3.fromValues(0,0,-1)),
					vec3.fromValues(0, -1, 0)
			)
		];
		
		//뷰 메트릭스들 6개.
		me.shadowMapViewMatrices = [
			mat4.create(),
			mat4.create(),
			mat4.create(),
			mat4.create(),
			mat4.create(),
			mat4.create()
		];
		
		me.shadowMapProj = mat4.create();
		me.shadowClipNearFar = vec2.fromValues(0.05, 15.0);
		mat4.perspective(		//펄스 팩티브.
			me.shadowMapProj,
			glMatrix.toRadian(90),
			1.0,
			me.shadowClipNearFar[0],
			me.shadowClipNearFar[1]
			
		);
		

		cb();
	});
	
	//키조작
	me.PressedKeys = {
		Right: false,
		Left: false,
		Forward: false,
		Back: false,

		Up: false,
		Down: false,
		RotLeft: false,
		RotRight: false,
	};
	me.MoveForwardSpeed = 3.5;
	me.RotateSpeed = 1.5;
	
	me.textureSize = 512;	//샤도우 멥에서 생성되는 이미지의 사이즈 높을수록 그림자가 정교해짐.$$$
	

	//==================================== 라이트 왔다 갔다 하기  
	me.lightDisplacementInputAngle = 0.0;
	//==================================== 라이트 왔다 갔다 하기 
	
};
LightMapScene.prototype.Unload = function(){
	this.MonkeyMesh = null;
	this.TableMesh = null;
	this.SofaMesh = null;
	this.LightBulbMesh = null;
	this.WallsMesh = null;
	
	this.NoShadowProgram = null;	//안쓴다.
	this.ShadowProgram = null;
	this.ShadowMapGenProgram = null;
	
	this.camera = null;
	this.lightPosition = null;
	
	this.Meshes = null;
	
	
	this.shodowMapCube = null;		//큐브 그림자 멥.
	
	
	//궂이 .....
	this.PressedKeys = null;
	
	this.MoveForwardSpeed = null;
	this.RotateSpeed = null;
	this.textureSize = null;
	
	
	this.shadowMapCameras = null;
	this.shadowMapViewMatrices = null;
};
LightMapScene.prototype.Begin = function(){
	var me = this;
	
	//Add events
	this.__ResizeWindowListener = this._OnResizeWindow.bind(this);
	this.__KeyDownWindowListener = this._OnKeyDown.bind(this);
	this.__KeyUpWindowListener = this._OnKeyUp.bind(this);
	AddEvent(window, 'resize', this.__ResizeWindowListener);
	AddEvent(window, 'keydown', this.__KeyDownWindowListener);
	AddEvent(window, 'keyup', this.__KeyUpWindowListener);
	
	
	
	//Render loop
	var previousFrame = performance.now();
	var dt = 0;
	var loop = function(currentFrameTime){
		dt = currentFrameTime - previousFrame;
		me._Update(dt);
		previousFrame = currentFrameTime;
		
		//추가.
		me._GenerateShadowMap();
		
		me._Render();
		me.nextFrameHandle = requestAnimationFrame(loop);
	};
	me.nextFrameHandle = requestAnimationFrame(loop);
	
	
	this._OnResizeWindow();
};
LightMapScene.prototype.End = function(){
	if (this.__ResizeWindowListener) {
		RemoveEvent(window, 'resize', this.__ResizeWindowListener);
	}
	if (this.__KeyUpWindowListener) {
		RemoveEvent(window, 'keyup', this.__KeyUpWindowListener);
	}
	if (this.__KeyDownWindowListener) {
		RemoveEvent(window, 'keydown', this.__KeyDownWindowListener);
	}
	
	if(me.nextFrameHandle){
		cancelAnimationFrame(me.nextFrameHandle);
	} 
};

//Private Methods
LightMapScene.prototype._Update = function(dt){
	//================ 몽키 회전
	mat4.rotateZ( this.MonkeyMesh.world, this.MonkeyMesh.world , 
			dt / 1000 * (2 * Math.PI) * 0.3
	); //how many time rotate 0.3
	
	//================= 키보드 동작
	if (this.PressedKeys.Forward && !this.PressedKeys.Back) {
		this.camera.moveForward(dt / 1000 * this.MoveForwardSpeed);
	}

	if (this.PressedKeys.Back && !this.PressedKeys.Forward) {
		this.camera.moveForward(-dt / 1000 * this.MoveForwardSpeed);
	}

	if (this.PressedKeys.Right && !this.PressedKeys.Left) {
		this.camera.moveRight(dt / 1000 * this.MoveForwardSpeed);
	}

	if (this.PressedKeys.Left && !this.PressedKeys.Right) {
		this.camera.moveRight(-dt / 1000 * this.MoveForwardSpeed);
	}

	if (this.PressedKeys.Up && !this.PressedKeys.Down) {
		this.camera.moveUp(dt / 1000 * this.MoveForwardSpeed);
	}

	if (this.PressedKeys.Down && !this.PressedKeys.Up) {
		this.camera.moveUp(-dt / 1000 * this.MoveForwardSpeed);
	}

	if (this.PressedKeys.RotRight && !this.PressedKeys.RotLeft) {
		this.camera.rotateRight(-dt / 1000 * this.RotateSpeed);
	}

	if (this.PressedKeys.RotLeft && !this.PressedKeys.RotRight) {
		this.camera.rotateRight(dt / 1000 * this.RotateSpeed);
	}
	
	//==================================== 라이트 왔다 갔다 하기 
	this.lightDisplacementInputAngle += dt / 2300;		//900높을수록 느리게 이동. 
	var xDisplacement = Math.sin(this.lightDisplacementInputAngle) * 2.8;	//끝에서 부드럽게 움직이기 위함.
	this.LightBulbMesh.world[12] = xDisplacement;
	for (var i = 0; i < this.shadowMapCameras.length; i++) {
		mat4.getTranslation(this.shadowMapCameras[i].position, this.LightBulbMesh.world);
		this.shadowMapCameras[i].GetViewMatrix(this.shadowMapViewMatrices[i]);
	}
	//==================================== 라이트 왔다 갔다 하기 
	
	
	//카메라 뷰 갱신.
	this.camera.GetViewMatrix(this.viewMatrix);
};



LightMapScene.prototype._GenerateShadowMap =function(){
	var gl = this.gl;
	
	// Set GL state status
	gl.useProgram(this.ShadowMapGenProgram);
	gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.shadowMapCube);
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.shadowMapFramebuffer);
	gl.bindRenderbuffer(gl.RENDERBUFFER, this.shadowMapRenderbuffer);
	
	gl.viewport(0,0, this.textureSize, this.textureSize);
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.CULL_FACE);
	
	// Set per-frame uniforms
	gl.uniform2fv(this.ShadowMapGenProgram.uniforms.shadowClipNearFar,
			this.shadowClipNearFar);
	gl.uniform3fv(this.ShadowMapGenProgram.uniforms.pointLightPosition,
			this.lightPosition);
	gl.uniformMatrix4fv(
			this.ShadowMapGenProgram.uniforms.mProj,
			gl.FALSE,
			this.shadowMapProj
			);
	
	for(var i = 0; i < this.shadowMapCameras.length; i++){
		//Set per light uniforms
		gl.uniformMatrix4fv(
				this.ShadowMapGenProgram.uniforms.mView,
				gl.FALSE,
				this.shadowMapCameras[i].GetViewMatrix(this.shadowMapViewMatrices[i])
		);
		
		//framebufferTexture2D로 검색. target, attachment, textarget, texture, level 
		gl.framebufferTexture2D(
				gl.FRAMEBUFFER,
				gl.COLOR_ATTACHMENT0,
				gl.TEXTURE_CUBE_MAP_POSITIVE_X +i,
				this.shadowMapCube,
				0
				);
		//gl.COLOR_ATACHMENT0
		//gl.DEPTH_ATACHMENT
		//gl.STENCIL_ATTACHMENT
		//gl.DEPTH_STENCIL_ATTACHMENT
		
		gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, 
				gl.RENDERBUFFER,
				this.shadowMapRenderbuffer);
		
		gl.clearColor(0,0,0,1);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		
		
		//아래 있는 메쉬 뿌리는거 카피 해서...
		// TODO... NoShadowProgram를 ShadowMapGenProgram으로 변경.
		// color와 Normal은 필요없음. 
		//Drawing meshes
		for(var j = 0; j < this.Meshes.length; j++){
			//per object uniforms
			gl.uniformMatrix4fv(this.ShadowMapGenProgram.uniforms.mWorld, gl.FALSE, this.Meshes[j].world);
//			gl.uniform4fv(this.ShadowMapGenProgram.uniforms.meshColor,this.Meshes[i].color);
			
			//Set Attribute
			// position
			gl.bindBuffer(gl.ARRAY_BUFFER, this.Meshes[j].vbo);
			gl.vertexAttribPointer(
					this.ShadowMapGenProgram.attribs.vPos,
					3, gl.FLOAT, gl.FALSE, 0, 0
			);
			gl.enableVertexAttribArray(this.ShadowMapGenProgram.attribs.vPos);
			
			//normals
//			gl.bindBuffer(gl.ARRAY_BUFFER, this.Meshes[j].nbo);
//			gl.vertexAttribPointer(
//					this.ShadowMapGenProgram.attribs.vNorm,
//					3, gl.FLOAT, gl.FALSE, 0, 0
//			);
//			gl.enableVertexAttribArray(this.ShadowMapGenProgram.attribs.vNorm);
			
			gl.bindBuffer(gl.ARRAY_BUFFER,null);	//인덱스 버퍼와 다르기때문에 일단 비운다.
			
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.Meshes[j].ibo);
			
			gl.drawElements(gl.TRIANGLES, this.Meshes[j].nPoints, gl.UNSIGNED_SHORT,0);
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);	//인덱스 버퍼와 다르기때문에 일단 비운다.
			

		}
		
		
		
	}

	
	
	
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
};


LightMapScene.prototype._Render = function(){
	var gl = this.gl;
	
	
	gl.viewport(0,0, gl.canvas.width, gl.canvas.height);
	
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.CULL_FACE);
//	gl.frontFace(gl.CCW);
//	gl.cullFace(gl.BACK);
	
	
	gl.clearColor(0, 0, 0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	
	gl.useProgram(this.ShadowProgram);
	gl.uniformMatrix4fv(this.ShadowProgram.uniforms.mProj, gl.FALSE, this.projMatrix);
	gl.uniformMatrix4fv(this.ShadowProgram.uniforms.mView, gl.FALSE, this.viewMatrix);
	gl.uniform3fv(this.ShadowProgram.uniforms.pointLightPosition, this.lightPosition);
	
	//======================================== 동적생성. 루프돌면서.... 
	//TODO NoShadowProgram을 ShadowProgram으로 변경. 후 4칸 아래 2줄 추가 $$$ 로 표시 
	gl.uniform2fv(this.ShadowProgram.uniforms.shadowClipNearFar, this.shadowClipNearFar);
	gl.uniform1i(this.ShadowProgram.uniforms.lightShadowMap, 0);	//0으로 ..
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.shadowMapCube);
	//TODO NoShadowProgram을 ShadowProgram으로 변경. 위에 까지가 샤도우 그리기.  
	
	
	//Drawing meshes
	for(var i = 0; i < this.Meshes.length; i++){
		//per object uniforms
		gl.uniformMatrix4fv(this.ShadowProgram.uniforms.mWorld, gl.FALSE, this.Meshes[i].world);
		gl.uniform4fv(this.ShadowProgram.uniforms.meshColor,this.Meshes[i].color);
		
		//Set Attribute
		// position
		gl.bindBuffer(gl.ARRAY_BUFFER, this.Meshes[i].vbo);
		gl.vertexAttribPointer(
				this.ShadowProgram.attribs.vPos,
				3, gl.FLOAT, gl.FALSE, 0, 0
		);
		gl.enableVertexAttribArray(this.ShadowProgram.attribs.vPos);
		
		//normals
		gl.bindBuffer(gl.ARRAY_BUFFER, this.Meshes[i].nbo);
		gl.vertexAttribPointer(
				this.ShadowProgram.attribs.vNorm,
				3, gl.FLOAT, gl.FALSE, 0, 0
		);
		gl.enableVertexAttribArray(this.ShadowProgram.attribs.vNorm);
		
		gl.bindBuffer(gl.ARRAY_BUFFER,null);	//인덱스 버퍼와 다르기때문에 일단 비운다.
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.Meshes[i].ibo);
		
		gl.drawElements(gl.TRIANGLES, this.Meshes[i].nPoints, gl.UNSIGNED_SHORT,0);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);	//인덱스 버퍼와 다르기때문에 일단 비운다.
		

	}
	
};





LightMapScene.prototype.calculatePerspective = function(){
    var c = this.camera;
	//Initialize Perspective matrix
    mat4.identity(this.projMatrix);
    //mat4.perspective(c.FOV, this.c_width / this.c_height, c.minZ, c.maxZ, this.projMatrix);
    mat4.perspective(this.projMatrix, 
    		glMatrix.toRadian(90),	//c.FOV,	 
			this.c_width / this.c_height, 
			c.minZ,
			c.maxZ
	);
};






LightMapScene.prototype._OnResizeWindow = function(){
	var gl = this.gl;
	
//	var targetHeight = window.innerWidth * 9/16;
//	if(window.innerHeight > targetHeight){
//		//Center vertically
//		gl.canvas.width = window.innerWidth;
//		gl.canvas.height = targetHeight;
//		gl.canvas.style.left = '0px';
//		gl.canvas.style.top = (window.innerHeight - targetHeight) / 2 +'px';
//	}else{
//		//Center horizontally
//		gl.canvas.width = window.innerHeight * 16/9;
//		gl.canvas.height = window.innerHeight;
//		gl.canvas.style.left = (window.innerWidth - gl.canvas.width) / 2 +'px';
//		gl.canvas.style.top = '0px';
//	}


	this.c_width = $('#canvasContainer').width();
	this.c_height = $('#canvasContainer').height();
	gl.canvas.width = this.c_width;
	gl.canvas.height = this.c_height;
//	
	this.calculatePerspective();
	
	gl.viewport(0,0,gl.canvas.width, gl.canvas.height);
	
	console.log("OnResizeWindow");
};



LightMapScene.prototype._OnKeyDown = function (e) {
	switch(e.code) {
		case 'KeyW':
			this.PressedKeys.Forward = true;
			break;
		case 'KeyA':
			this.PressedKeys.Left = true;
			break;
		case 'KeyD':
			this.PressedKeys.Right = true;
			break;
		case 'KeyS':
			this.PressedKeys.Back = true;
			break;
		case 'ArrowUp':
			this.PressedKeys.Up = true;
			break;
		case 'ArrowDown':
			this.PressedKeys.Down = true;
			break;
		case 'ArrowRight':
			this.PressedKeys.RotRight = true;
			break;
		case 'ArrowLeft':
			this.PressedKeys.RotLeft = true;
			break;
	}
};

LightMapScene.prototype._OnKeyUp = function (e) {
	switch(e.code) {
		case 'KeyW':
			this.PressedKeys.Forward = false;
			break;
		case 'KeyA':
			this.PressedKeys.Left = false;
			break;
		case 'KeyD':
			this.PressedKeys.Right = false;
			break;
		case 'KeyS':
			this.PressedKeys.Back = false;
			break;
		case 'ArrowUp':
			this.PressedKeys.Up = false;
			break;
		case 'ArrowDown':
			this.PressedKeys.Down = false;
			break;
		case 'ArrowRight':
			this.PressedKeys.RotRight = false;
			break;
		case 'ArrowLeft':
			this.PressedKeys.RotLeft = false;
			break;
	}
};
