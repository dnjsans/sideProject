'use strict';

var Line = function(){
	
}

var ModelBuffer = function(gl, vertices, indices, normals, color){
	
	this.vbo = gl.createBuffer();
	this.ibo = gl.createBuffer();
	this.nbo = gl.createBuffer();
	this.nPoints = indices.length;
	
	this.world = mat4.create();
	this.color = color;
	
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, this.nbo);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
	
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
};


var CreateShaderProgram = function(gl, vsText, fsText){
	var vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs, vsText);
	gl.compileShader(vs);
	if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
//		gl.deleteShader(vs);
		return {
			error : 'Error compiling vertext shader :'+ gl.getShaderInfoLog(vs)
		};
	}

	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs, fsText);
	gl.compileShader(fs);
	if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
//		gl.deleteShader(vs);
//		gl.deleteShader(fs);
		return {
			error : 'Error compiling fragment shader :'+ gl.getShaderInfoLog(fs)
		};
	}
	
	var program = gl.createProgram();
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
//		gl.deleteShader(vs);
//		gl.deleteShader(fs);
//		gl.deleteProgram(program);
		return {
			error : 'Error linking program :'+ gl.getProgramInfoLog(program)
		};
	}
	
	gl.validateProgram(program);
	if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
//		gl.deleteShader(vs);
//		gl.deleteShader(fs);
//		gl.deleteProgram(program);
		return {
			error : 'Error validating program :'+ gl.getProgramInfoLog(program)
		};
	}
	
	return program;
	// Check: if (result.error)
	// otherwise GL program
};


/**
 * FPS 카메라.. Orb카메라는 따로 만들어야 한다. 
 * http://glmatrix.net/docs/2.2.0/symbols/vec3.html#.subtract
 * 
 * vec3.subtract(out,a,b)
 * {vec3}out,{vec3}a,{vec3}b
 * return : {vec3}out
 */
var Camera = function(position, lookAt, up){
	this.forward = vec3.create();
	this.up = vec3.create();
	this.right = vec3.create();
	
	this.position = position;
	vec3.subtract(this.forward, lookAt, this.position);	//점으로 벡터를 얻고
	vec3.cross(this.right, this.forward, up);		//크로스로 교차점의 90에 해당하는 벡터를얻는다. 
	vec3.cross(this.up, this.right, this.forward);
	
	//3개의 벡터를 얻었다.
	vec3.normalize(this.forward, this.forward);
	vec3.normalize(this.right, this.right);
	vec3.normalize(this.up, this.up);
	
	this.FOV = 30;
	this.minZ = 0.1;
	this.maxZ = 10000;
};
/**
 * Shader계산용 matrix
 * mat4.lookAt(out, eye, center, up)
 * {mat4} out,{vec3}eye,{vec3}center,{vec3}up 
 * return : {mat4}out;
 */
Camera.prototype.GetViewMatrix = function(out){
	var lookAt = vec3.create();
	vec3.add(lookAt, this.position, this.forward);
	mat4.lookAt(out, this.position, lookAt, this.up );
	return out;
};

//위를 기준으로 회전
Camera.prototype.rotateUp = function(rad){
	var upMatrix = mat4.create();
	mat4.rotate(upMatrix, upMatrix, rad, vec3.fromValues(1,0,0));
	vec3.transformMat4(this.forward, this.forward, upMatrix);
	this._realign();	//카메라 회전후 다시 노멀화
};
//우측을 기준으로 회전 
Camera.prototype.rotateRight = function(rad){
	var rightMatrix = mat4.create();
	mat4.rotate(rightMatrix, rightMatrix, rad, vec3.fromValues(0,0,1));
	vec3.transformMat4(this.forward, this.forward, rightMatrix);
	this._realign();	//카메라 회전후 다시 노멀화
};
Camera.prototype._realign = function(rad){
	vec3.cross(this.right, this.forward, this.up);		//크로스로 교차점의 90에 해당하는 벡터를얻는다. 
	vec3.cross(this.up, this.right, this.forward);
	//3개의 벡터를 얻었다.
	vec3.normalize(this.forward, this.forward);
	vec3.normalize(this.right, this.right);
	vec3.normalize(this.up, this.up);
};

Camera.prototype.moveForward = function(dist){
	vec3.scaleAndAdd(this.position, this.position, this.forward, dist);
};
Camera.prototype.moveRight = function(dist){
	vec3.scaleAndAdd(this.position, this.position, this.right, dist);
};
Camera.prototype.moveUp = function(dist){
	vec3.scaleAndAdd(this.position, this.position, this.up, dist);
};
