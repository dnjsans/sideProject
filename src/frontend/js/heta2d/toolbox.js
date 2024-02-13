var Tools = {
	Walk : {
		description : "Walk",
		modes: {},
		imageLocation: "walk.png"
	},
	Axe : {
		description : "Axe",
		modes: {},
		imageLocation: "axe.png"
	},
	Hammer : {
		description : "Hammer",
		modes: {
			Wall : { description : "Wall",	 imageLocation: "wall.png" },
			Floor : { description : "Floor", imageLocation: "floor.png" },
			Roof : { description : "Roof",	imageLocation: "roof.png" },
			Scaffold : { description : "Scaffold",	imageLocation: "scaffold.png" },
			Stairs : { description : "Stairs",	imageLocation: "stairs.png" }
		},
		imageLocation: "hammer.png"
	},
	Spade : {
		description : "Spade",
		modes: {
			Sapling : { description : "Sapling",	 imageLocation: "sapling.png" }
		},
		imageLocation: "spade.png"
	},
	Saw : {
		description : "Saw",
		modes: {
			OutdoorLight : { description : "Outdoor Light",	 imageLocation: "outdoorLight.png" },
			WallLight : { description : "Wall Light", imageLocation: "wallLight.png" },
			Window : { description : "Window",	imageLocation: "window.png" }
		},
		imageLocation: "saw.png"
	},
	Debug:{
		description : "Debug",
		modes:{},
		imageLocation : "debug.png"
	}
};

var hudSelectionImage = new Image();
hudSelectionImage.src = "img/hud/hudSelection.png";

function Toolbox(){
	var tools = [];
	var randomColors = [];
	var i=0;
	for(var name in Tools){
		var currentTool = Tools[name];
		currentTool.image = new Image();
		if("imagelocation" in currentTool && currentTool.imageLocation){
			currentTool.image.src = "img/hud/"+currentTool.imageLocation;
		} else{
			currentTool.image.scr = "img/hud/placeholder.png";
		}
		tools.push(currentTool);
		currentTool.ordinal = i;
		if(Object.keys(currentTool.modes).length > 0){					//모델에서 키만 빼오기.
			currentTool.modeMenu = new ToolboxModeMenu(currentTool);	//아마도 2depth 모드를 생성하는 부분. 아래있음. 
		}else{
			currentTool.modeMenu = null;
		}
		
		var toolIndex = 0;
		this.selectedTool = tools[toolIndex];
		this.selectedToolChanged = false;
		this.hudNeedsUpdate = true;
		
		this.update = function(input, keyboardInput){
			var prevSelectedTool = this.selectedTool;
			if(input.prevToolDown){	// tool이 눌렸나.
				input.clearPrevToolButton();
				toolIndex -= 1;
				if(toolIndex < 0){
					toolIndex = tools.length -1;		//맨위로가면 아래로 되돌아가기
				}
				this.hudNeedsUpdate = true;
			}
			
			if(input.nextToolDown){
				input.clearNextToolButton();
				toolIndex += 1;
				if(toolIndex >= tools.length){			//맨아래 오면 되돌아가기
					toolIndex = 0;
				}
				this.hudNeedsUpdate = true;
			}
			
			//핫키 관련. 
			var hotKeyUsedForMainTool = false;
			var hotKeyUsedForModeMenu = false;
			var maxHotKey = tools.length;
			if(this.selectedTool.modeMenu != null && this.selectedTool.modeMenu.active){
				hotKeyUsedForModeMenu = this.selectedTool.modeMenu.updateForHotKeyInput(keyboardInput);
			}else{
				for(var i = 0; i < Math.min(tools.length, 9); i++){
					if(keyboardInput.hotKeyMenuButtons[i].down){		//키보드 중 핫키 눌렸으면. 
						keyboardInput.hotKeyMenuButtons[i].clear();
						toolIndex = i;
						hotKeyUsedForMainTool = true;
						break;
						this.hudNeedsUpdate = true;
					}
				}
			}
			this.selectedTool = tools[toolIndex];
			this.selectedToolChanged = prevSelectedTool != this.selectedTool;	//선택한거랑 prev랑 다르면 바뀐거다.
			if(this.selectedToolChanged && prevSelectedTool.modeMenu != null){	//prev메뉴가 있고 바꼈으면 
				prevSelectedTool.modeMenu.active = false;						//활성화를 끈다.
			}
			
			if(this.selectedTool.modeMenu != null){
				this.hudNeedsUpdate |= this.selectedTool.modeMenu.active;	//둘중 한개만 true면 true
				if(hotKeyUsedForMainTool){
					this.selectedTool.modeMenu.active = true;	//메인툴이니?
				}else if(!hotKeyUsedForModeMenu){
					this.selectedTool.modeMenu.update(input);	//모드메뉴가 아니면. modeMenu에 input을 넣어서 update를 해준다
				}
				this.hudNeedsUpdate |= this.selectedTool.modeMenu.active;	//active상태면 update해준다.
			}
		}
		
		var hudSelectedX = 0;
		var hudSelectedTargetX = 0;
		this.renderToHud = function(ctx, tick, fontRenderer){
			var height = ctx.canvas.height;
			var width = ctx.canvas.width;
			
			panelSize = Math.floor(Math.min(height/10, width/tools.length));	//패널 사이즈 .
			
			for(var i = 0; i< tools.length; i++){
				ctx.drawImage(tools[i].image, i*24, 0);
				if(i == this.selectedTool.ordinal){
					hudSelectedTargetX = i * 24;
				}
			}
			for (var i = 0; i < tools.length; i++) {
				ctx.drawImage(tools[i].image, i*24, 0);
			}
			hudSelectedX = Utils.moveTowards(hudSelectedX, hudSelctedTargetX, tick, 5);
			ctx.drawImage(hudSelectionImage, Math.round(hudSelectedX),0);
			if(this.selectedTool.modeMenu != null){
				//모드메뉴를 랜더링 한다. 
				this.selectedTool.modeMenu.renderToHud(hudSelectedTargetX, hudSelectionImage.width, ctx, tick, fontRenderer);
			}
			this.hudNeedsUpdate = hudSelectedX != hudSelectedTargetX;	//타겟이랑 선택된거랑 같지 않으면 업데이트 
		}
	}	//for
	
	
	function ToolboxModeMenu(tool){
		var toolModes = [];
		this.active = false;
		this.selectedToolMode = null;
		this.selectedToolModeChanged = false;
		
		var toolModeIndex = 0;
		for(var name in tool.modes){
			var toolMode = tool.modes[name];
			toolMode.image = new Image();
			if("imageLocation" in toolMode && toolMode.imageLocation){
				toolMode.image.src = "img/hud/"+toolMode.imageLocation;
			}else{
				toolMode.image.src = "img/hud/placeholder.png";
			}
			if(!('description' in toolMode)){
				toolMode.description = 'placeholder';
			}
			toolMode.descriptionUpper = toolMode.description.toUpperCase();
			toolModes.push(tool.modes[name]);
			tool.modes[name].ordinal = i;
			i++;
		}
		
		this.updateForHotKeyInput = function(keyboardInput){
			var hotkeyUsed = false;
			if(this.active){
				...
			}
		}
	}//ToolboxModeMenu
	
	
	
}















