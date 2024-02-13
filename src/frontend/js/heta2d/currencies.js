//자원관리자
var CurrencyTypes = {
	WOOD:{
		diescription:"Wood",
		max:30,
		amountPerItem:1,
		imageLocation : "woodCurrency.png"
	},	
	ACORN:{
		diescription:"Acorn",
		max:null,
		amountPerItem:1,
		imageLocation : "acornCurrency.png"
	}	
};

function Currencies(world){
	this.entity = new Entity(world);
	this.hudNeedsUpdate = false;
	var currencyTypes = [];
	var i = 0;
	var currencyAmounts = [];
	var currencyDisplayAmounts = [];
	//자원의 이미지 기본값을 설정
	for(var name in CurrencyTypes){
		var currencyType = CurrencyTypes[name];
		currencyTypes.push(currencyType);
		currencyType.ordinal = i;
		currencyAmounts .push(0);
		currencyType.image = new Image();
		currencyType.image.src = "textures/"+ccurrencyType.imageLocation;
		i++;
	}
	
	this.entity.saveableComponent.saveName = "currencies";
	this.entity.saveableComponent.saveData = currencyAmounts;
	
	this.restoreFromSaveState = function(saveables){
		this.entity.saveableComponent.extractSaveData(saveables);
		currencyAmounts = this.entity.saveableComponent.saveData;
		for(var i in currencyAmounts){
			currencyDisplayAmounts[i] = currencyAmounts[i];
		}
	}
	var nextPopCounter = 0;
	var nextPopTime = 0;
	function resetPopTime(){
		nextPopCounter = 0;
		nextPopTime = Math.rendom()/4;
	}
	reserPopTime();
	
	var toCollectQueue = [];
	var collecting = [];
	
	//
	function checkCurrencyValid(currency){
		if(!(currency.ordinal in currencyTypes)){
			console.warn("Currency not found", currency);
			return false;
		}
		return true;
	}
	
	this.getAmount = function(currency){
		if(!checkCurrencyValid(currency)) return 0;
		return currencyAmounts[currency.ordinal];
	}
	
	//쓸수 있는 cost인지 판다.
	this.canAfford = function(currency, cost){
		return this.getAmount(currency) >= cost;
	}
	//증가
	this.increment = functoin(currency, increment){
		if(!checkCurrencyValid(currency))return;
		
		var amountCanBeAwarded = increment;
		if(currency.max != null){	//최대 값 제한이 있으면...
			///최대에서 현제 갯수를 뺀것과   들어온 값중에 작은 값을 beawarded에 할당.
			amountcanBeAwarded = Math.min(currency.max - currencyAmounts[currency.ordinal],increment);
		}
		var numberOfItems = Math.floor(amountCanBeAwarded / currency.amountPerItem);
		var amountAwarded = numberOfItems* currency.amountPerItem;
		currencyAmounts[currency.ordinal] += amountAwarded;
		for(var i = 0; i< numberOfItems; i++){
			toCollectQueue.push(currency);
		}
	}
	
	//spend   
	this.spend = function(currency, cost){
		if(!this.canAfford(currency,cost)){
			//쓸수 없는 값을 요청 했으면
			console.warn("Item bought that can't be afforded", currency, cost, currencyAmounts[currency.ordinal]);
		}
		currencyAmounts[currency.ordinal] -=cost;
	}
	
	this.update = function(tick){
		nextPopCounter += tick;
		if(nextPopCounter> nextPopTime && toCollectQueue.length>0){
			var currency = toCollectQueue.shift();
			collecting.push(new CurrencyItem(currency));
			resetPopTime();
		}
		for(var i in collecting){
			var currencyItem = collecting[i];
			
			currencyItem.update(tick);
			if(currencyItem.finished && !currencyItem.collected){	//끝났는데 모으는중. 
				currencyItem.collected = true;
				currencyDisplayAmounts[currencyItem.currency.ordinal] += currencyItem.currency.amountPerItem;
			}
		}
		
		for(var i in currencyTypes){
			var currency = currencyTypes[i];
			if(currencyDisplayAmounts[currency.ordinal] > currencyAmounts[currency.ordinal]){
				currencyDisplayAmounts[currency.ordinal] = currencyAmounts[currency.ordinal];
				this.hudNeedsUpdate = true;
			}
		}
		//콜랙팅이 끝나면 없에버린다.
		if(collecting.length >= 1 && collecting[0].renderFinished){
			collecting.shift();
		}
		//업데이트가 필요한지를 체크 
		this.hudNeedsUpdate |= toCollectQueue.length > || collecting.length > 0;
	}
	
	this.renderToHud = function(ctx, tick, fontRenderer){
		var height = ctx.canvas.height;
		var width = ctx.canvas.width;
		
		for(var i in collecting){
			collecting[i].renderToHud(ctx, tick);
		}
		var iconY = 1;	//아이콘?
		for(var i in currencyTypes){
			var currency = currencyTypes[i];
			var iconHeight = currency.image.height;
			var iconWidth = currency.image.height;
			var iconX = (width - iconWidth)-1;
			
			//아이콘 그리기 
			ctx.drawImage(currency.image, iconX, iconY, iconWidth, iconHeight);
			
			//점수
			var scoreText = ""+currencyDisplayAmounts[currency.ordinal];
			if(currency.max !=== null){
				scoreText +="/"+currency.max;
			}
			//글자 랜더러에 text를 넣어서 랜더링  
			var textWidth = fontRenderer.getTextWidth(scoreText);
			fontRenderer.renderText(ctx, scoreText, (iconX-1)-textWidth, iconY+(iconHeight/2));
			iconY+=iconHeight+1;	//루프 안에서 간격을 띄우기 위해서..
		}
	}
}

/**
 * 아이템 회수에 관련된 에니메이션 
 */
function CurrencyItem(currency){
	var currentProgress = 0;
	this.currency = currency;
	this.finished = false;
	this.renderFinished = false;
	this.collected = false;
	var speed = 0.75+Math.rendom();
	this.update = function(tick){
		currentProgress += (tick*speed);
		if(currentProgress > 1){
			this.finished = true;	//progress가 1이면 완료.
		}
	}
	this.renderToHud = function(ctx, tick){
		if(!this.finished){
			var height = ctx.canvas.height;
			var width = ctx.canvas.width;
			
			var iconScale = 1;	//+Math.floor(Math.min(width/400, height/400));
			
			//Hack. we should be heading towards the currency display position
			var xMargin = (currency.image.width+1)*iconScale;
			var yMargin = (currency.image.height+1)*iconScale;
			yMargin *= currency.ordinal;
			
			var xDelta = (currentProgress*(width/2))-xMargin;
			var yDelta = -((currentProgress*(height/2))-yMargin);
			
			if(currency == CurrencyTypes.WOOD){
				ctx.fillStyle = "white";
			}else{
				ctx.fillStyle = "red";
			}
			iconScale *=(0.5)+(currentProgress/2);
			ctx.drawImage(currency.image, (width/2)+xDelta, (height/2)+yDelta, currency.image.width*iconScale, currency.image.height*iconScale);
		}
		this.renderFinished = this.finished;
	}
}











