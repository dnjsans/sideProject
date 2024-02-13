var container = document.getElementById('container');
var hud = document.getElementById('hud');
container.appendChild(hud);

var stats = new Stats();
stats.setMode(0); //o :fps, 1:ms

container.appendChild(stats.domElement);

var pathWorker = new Worker("js/pathWorker.js");
var lightWorker = new Worker("js/lightWorker.js");

var debugObjects = [];
var lastFrameTime = Date.now();

var keyboardInput = new KeyboardInput();
var gamePadInput = new GamepadInput();
var input  = new MultiInput([keyboardInput, gamePadInput]);
var saveWorld = new SaveWorld();
var camera = new Camera(Camera2D);
var world = new World(scene, pathWorker, lightWorker, saveWorld, camera);
var player = new Player(saveWorld.state.playerPosition.x, 
		saveWorld.state.playerPosition.y,
		2,2,0
		);
camera.setPlayer(player);
var toolbox = new Toolbox();

var clearSave = function(){
	saveWorld.clearLocalSave();
}

var npcs = []
var npcTotal = (Math.random()*70)+5;
for(var i = 0; i < npcTotal; i++){
	npcs.push(new Npc(Utils.randomInt(1,world.worldSize), Utils.random(112,120),
			Textures.npc.Sheet, world, scene, world.pathWorker,..);
}

//리사이즈 함수 설정. 
var respondToResize =function(){
	2dcamera.aspect = window.innerWidth / window.innerHeight;
	2dcamera.updateProjectionMatrix();
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	hud.width = window.innerWidth;
	hud.height = window.innerHeight;
	
}
respondToResize();
window.addEventListener("resize", respondToResize);

this.debugObject = null;

var camZOffset = 16;
var camXOffset = 8;
var camZTargetOffset = 8;
var camXTargetOffset = 4;

var renderOnce = false;

var dialogPane = new DialogPane();

function render(){
	stats.begin();
	var now = Date.now();
	var tick = Math.min(0.1, (now-lastFrameTime)/1000);
	lastFrameTime = now;
	requestAnimationFrame(render);
	
	input.update();
	
	toolbox.update(input, keboardInput);
	
	world.update(input, tick, now, player);
	
	player.update(now, tick, input, world, toolbox);
	
	for(var npcI in npcs){
		npcs[npcI].update(now, tick, world);
	}
	
	camera.update(tick, input);
	
	for(var d in debugMeshes){
		scene.add(debugMeshes[d]);
	}
	
	renderer.render(scene, 2dcamera);
	if(toolbox.hudNeedsUpdate || world.currencies.hudNeedsUpdate){
		hudContext.imageSmoothingEnabled = false;
		hudContext.clearRect(0, 0, hud.width, hud.height);
		hudBufferContext.imageSmoothingEnabled = false;
		hudBufferContext.clearRect(0,0, hudBuffer.width, hudBuffer.height);
		//툴박스 
		toolbox.renderToHud(hudBufferContext, tick, smallHudFontRender);
		//돈회수
		world.currencies.renderToHud(hudBufferContext, tick, smallHudFontRenderer);
		
		// bigHudFontRenderer는 글자를 많이 출력해주는 랜더러.  DialogPane을 참조. 		
		dialogPane.renderToHud(hudBufferContext, tick, bigHudFontRenderer);	
		//화면 비율.
		var widthRatio = hud.width/ hudBuffer.width;
		var heightRatio = hud.height/ hudBuffer.height;
		var ratio = Math.min(widthRatio, heightRatio);
		var destWidth = Math.floor(hudBuffer.width*ratio);
		var destHeight = Math.floor(hudBuffer.height*ratio);
		
		var destX = Math.floor((hud.width - destWidth)/2);
		var destY = Math.floor((hud.height - destHeight)/2);
		
		//buffer는 map이미지를 미리 랜더링 해놓은 임시 이미지 
		hudContext.drawImage(hudBuffer, 0,0, hudBuffer.width, hudBuffer.height, destX, destY, destWidth, destHeight);
	}
	stats.end();	//fps측정.
}

render();