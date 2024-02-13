function HudFontRenderer(fontImageLightLocation, fontImageDarkLocation, fontMap,
		maxCharWidth, charHeight, letterSpacing){
	
	//======================================dark image
	var fontDarkImage = new Image();
	var scope = this;
	var tempCanvas = document.createElement('canvas');
	var margins = {};
	
	this.charHeight = charHeight;	//글자 높이를 담아둔다. 
	
	var calculateMargins = function(){
		tempCanvas.width = fontDarkImage.width;
		tempCanvas.height = fontDarkImage.height;
		var ctx = tempCanvas.getContext('2d');
		ctx.imageSmoothingEnabled = false;
		ctx.clearRect(0,0, fontDarkImage.width, fontDarkImage.height);
		//어두운 이미지를 그린다.
		ctx.drawImage(fontDarkImage, 0, 0, fontDarkImage.width, fontDarkImage.height);
		
		for(var rowIndex in fontMap){	//받아온 폰트 멥
			var fontMapRow = fontMap[rowIndex];
			var startY = rowIndex * charHeight;
			for(var mi in fontMapRow){
				var startX = mi * maxCharWidth;
				var valueFound = false;
				for(var x=0; x< maxCharWidth && !valueFound; x++){	//x가 charwidth보다 작고 vlueFound가 false일동안. 
					for(var y=0; y< maxCharHeight && !valueFound; y++){
						//픽셀 컬러 가져오기
						var pixelData = ctx.getImageData(startX+x, startY+y, 1,1).data;
						if(pixelData[3] > 0){ //r,g,b,a 3은 알파 값
							valueFound = true;
						}
					}
				}
				
				margins[fontMapRow[mi]] = {"left":x-1};
			
				
				var valueFound = false;
				for(var x=0; x< maxCharWidth && !valueFound; x++){	//x가 charwidth보다 작고 vlueFound가 false일동안. 
					for(var y=0; y< maxCharHeight && !valueFound; y++){
						//픽셀 컬러 가져오기
						var pixelData = ctx.getImageData((startX+maxCharWidth)-(x+1), startY+y, 1,1).data;
						if(pixelData[3] > 0){ //r,g,b,a 3은 알파 값
							valueFound = true;
						}
					}
				}
				margins[fontMapRow[mi]].right = (x-1);
			}
		}
	}
	
	fontDarkImage.onload = calculateMargins;
	fontDarkImage.src = fontImageDarkLocation;
	
	//======================================light image
	var fontLightImage = new Image();
	fontLightImage.src = fontImageLightLocation;
	
	this.getTextWidth = function(text){
		return (text.length * (maxCharWidth+letterSpacing)) +letterSpacing;
	}
	
	this.renderText = function(ctx, text, x, y){
		var currentX = x+1;
		for(var i in text){
			var currentChar = text[i];		//String
			var fontMapXIndex = -1;
			var fontMapYIndex = 0;
			for(var mi in fontMap){
				var fontMapRow = fontMap[mi];
				fontMapXIndex = fontMapRow.indexOf(currentChar);
				if(fontMapXIndex > -1){ //현재 케릭터가 존재하면 빠져나간다. 
					break;
				}
				fontMapYIndex++;	//다음줄로. 
			}
			var leftMargin = 0;
			var rightMargin = 0;
			var charWidth = maxCharWidth;
			if(fontMapXIndex > -1){	//포함하고 있으면 
				if(currentChar in margins){
					leftMargin = margins[currentChar].left;
					rightMargin = margins[currentChar].right;
				}
				charWidth = maxCharWidth-(leftMargin+rightMargin);
				ctx.drawImage(fontDarkImage, fontMapXIndex*maxCharWidth+leftMargin, fontMapYIndex*charHeight, charWidth, charHeight-1);
				ctx.drawImage(fontDarkImage, fontMapXIndex*maxCharWidth+leftMargin, fontMapYIndex*charHeight, charWidth, charHeight-2);
				ctx.drawImage(fontDarkImage, fontMapXIndex*maxCharWidth+leftMargin, fontMapYIndex*charHeight, charWidth, charHeight-3);
				ctx.drawImage(fontDarkImage, fontMapXIndex*maxCharWidth+leftMargin, fontMapYIndex*charHeight, charWidth, charHeight-4);
				ctx.drawImage(fontLightImage, fontMapXIndex*maxCharWidth+leftMargin, fontMapYIndex*charHeight, charWidth, charHeight-5);
				
			}
			currentX += charWidth+letterSpacing;
		}
	}
	
}












