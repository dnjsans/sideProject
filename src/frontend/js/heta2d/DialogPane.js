function DialogPane(){
	
	var text = ["Some test text!","Another the line of text","A 3rd line of text"];
	
	//글자에 태두리를 주기 위한 작업.. 미친... 
	var topLeftImage = new Image();
	topLeftImage.src = "img/hud/dialog/topLeft.png";
	
	var topImage = new Image();
	topImage.src = "img/hud/dialog/top.png";
	
	var topRightImage = new Image();
	topRightImage.src = "img/hud/dialog/topRight.png";
	
	var leftImage = new Image();
	leftImage.src = "img/hud/dialog/left.png";
	
	var rightImage = new Image();
	rightImage.src = "img/hud/dialog/right.png";
	
	//글자에 태두리를 주기 위한 작업.. 미친... 
	var bottomLeftImage = new Image();
	bottomLeftImage.src = "img/hud/dialog/bottomLeft.png";
	
	var bottomImage = new Image();
	bottomImage.src = "img/hud/dialog/bottom.png";
	
	var bottomRightImage = new Image();
	bottomRightImage.src = "img/hud/dialog/bottomRight.png";
	
	var renderHorizontalBar = function (ctx, width, dialogMargin, panelY, leftImage, middleImage, rightImage){
		ctx.drawImage(leftImage, dialogMargin, panelY );	//왼쪽 꺽쇠
		
		//상단 바
		if(middleImage.width > 0)
		for(var panelX = dialogMargin+ leftImage.width; panelX < width-(rightImage.width+dialogMargin); panelX+= middleImage.width){
			ctx.drawImage(middleImage, panelX, panelY);
		}
		
		ctx.drawImage(rightImage, width-(rightImage.width+dialogMargin), panelY );	//우측꺽쇠
	}
	
	this.renderToHud = function(ctx, tick, fontRenderer){	//fontRenderer = hudFontRenderer.js입니다.
		var height = ctx.canvas.height;
		var width = ctx.canvas.width;
		//console.log(text);
		
		var dialogMargin = 8;
		var panelY = 100;
		
		renderHorizontalBar(ctx, width, dialogMargin, panelY, topLeftImage, topImage, topRightImage);
		panelY += topLeftImage.height;
		for(var i =0 ; i < 5; i++){
			ctx.drawImage(leftImage, dialogMargin, panelY+topLeftImage.height+(i*leftImage.height));
		}
		panelY += leftImage.height;
		renderHorizontalBar(ctx, width, dialogMargin, panelY + 64, bottomLeftImage, bottomImage, bottomRightImage);
		//택스트.
		var fontY = 100 + topLeftImage.height;	//100씩 띄우면서 글을 찍기위해 초기값 100을 설정. (topLeftImage.height 왼쪽위 꺽쇠부분인데 그만큼 내려준다. )
		var dialogMargin = 8;
		for(var i in text){
//		fontRenderer.renderText(ctx, text[i], 8, 100);		//화면 중간 우측에 글자 보여준다.
			fontRenderer.renderText(ctx, text[i], dialogMargin + topLeftImage.width, fontY);		//화면 중간 우측에 글자 보여준다.
			fontY += fontRenderer.charHeight;
		}
		
		
	}
} 