//<script src="${ctx}/js/workflow-1.0.js"></script>
//<script src="${ctx}/js/workflowViewer.js"></script>
//      var options = {
//    		  openDialog: function (eventId) {
//              },
//              openLink: function(){
//                workflowDetail(widgetData.workflowId);
//              }
//      };
//      var tflowDiv = jWidgetTag.find('.tflow'); //div relative
//      var fc = new WorkflowViewer(tflowDiv, widget.workflowScriptCont, options);
      //fc.resize();

//웹에디터 연동
hetajs.DataSource.Add("WebEditorMgmt",{type:"LINK", target:function(d){
	if(d.data.stage.mode == 'VIEW'){
		d.data.id = d.data.stage.id + d.data.id;	//id를 stageId와 itemId조합으로 구성.	
		return webEditorMgmtView[d.type] && webEditorMgmtView[d.type](d.data);	//update, init, destroy, active, deactive
	}else{
		return webEditorMgmt[d.type] && webEditorMgmt[d.type](d.data);	//update, init, destroy, active, deactive
	}
}});


//박스 사이즈 확장 버튼 
hetajs.DataSource.Add("LayerExpandButton",{type:"IMAGE", target:"/img/workflow/workflow_expand.png"});


//Workflow 플로우차트 모양
hetajs.DataSource.Add("SVG_WORKFLOW",{type:"TEXT", target:'M63,0C28.206,0,0,28.207,0,63s28.206,63,63,63s63-28.207,63-63S97.794,0,63,0z M104,93.274c0,1.275-1.033,2.31-2.31,2.31 H81.685c-1.275,0-2.31-1.034-2.31-2.31V80.105c0-1.275,1.035-2.311,2.31-2.311h7.378V60.866H64.305v16.929h7.691 c1.277,0,2.31,1.035,2.31,2.311v13.169c0,1.275-1.033,2.31-2.31,2.31H51.993c-1.277,0-2.31-1.034-2.31-2.31V80.105 c0-1.275,1.033-2.311,2.31-2.311h7.692V60.866H34.925v16.929h7.379c1.275,0,2.31,1.035,2.31,2.311v13.169 c0,1.275-1.035,2.31-2.31,2.31H22.301c-1.277,0-2.311-1.034-2.311-2.31V80.105c0-1.275,1.034-2.311,2.311-2.311h8.004V58.556 c0-1.275,1.035-2.31,2.31-2.31h27.069v-8.807H41.451c-1.277,0-2.31-1.034-2.31-2.31V23.568c0-1.275,1.033-2.311,2.31-2.311h41.07 c1.276,0,2.311,1.035,2.311,2.311V45.13c0,1.275-1.035,2.31-2.311,2.31H64.305v8.807h27.069c1.277,0,2.31,1.034,2.31,2.31v19.239 h8.006c1.277,0,2.31,1.035,2.31,2.311V93.274z M39.373,90.001c0,0.353-0.351,0.639-0.783,0.639H25.765c-0.432,0-0.783-0.286-0.783-0.639v-6.346 c0-0.353,0.351-0.639,0.783-0.639h12.825c0.432,0,0.783,0.286,0.783,0.639V90.001z M77.344,40.126c0,0.632-0.735,1.146-1.641,1.146H48.85c-0.906,0-1.641-0.514-1.641-1.146V28.749 c0-0.633,0.735-1.146,1.641-1.146h26.854c0.906,0,1.641,0.514,1.641,1.146V40.126z M69.294,90.001c0,0.353-0.351,0.639-0.783,0.639H55.686c-0.432,0-0.783-0.286-0.783-0.639v-6.346 c0-0.353,0.351-0.639,0.783-0.639h12.825c0.432,0,0.783,0.286,0.783,0.639V90.001z M98.849,90.001c0,0.353-0.351,0.639-0.783,0.639H85.241c-0.432,0-0.783-0.286-0.783-0.639v-6.346 c0-0.353,0.351-0.639,0.783-0.639h12.825c0.432,0,0.783,0.286,0.783,0.639V90.001z'});
//System 모니터 모양 
hetajs.DataSource.Add("SVG_SYSTEM",{type:"TEXT", target:'M62.693-0.258c-34.794,0-63,28.207-63,63s28.206,63,63,63s63-28.207,63-63S97.487-0.258,62.693-0.258z M99.209,75.091 c0,5.76-4.687,10.445-10.447,10.445H72.979l4.104,14.885H45.328l4.104-14.885H33.647c-5.759,0-10.445-4.686-10.445-10.445V36.785 c0-5.76,4.686-10.445,10.445-10.445h55.115c5.761,0,10.447,4.686,10.447,10.445V75.091z M28.046,75.091c0,3.088,2.513,5.602,5.601,5.602h55.115c3.09,0,5.604-2.514,5.604-5.602v-2.022H28.046V75.091z M54.455,85.536 L51.688,95.578 L70.723,95.578 L67.955,85.536z M88.762,31.184H33.647c-3.088,0-5.601,2.513-5.601,5.602v31.439h66.319V36.785C94.365,33.696,91.852,31.184,88.762,31.184z M70.557,56.609l-7.948-7.948L51.612,59.656H33.85v-4.844h15.756L62.608,41.81l9.954,9.956h9.528l-0.437-0.437l3.426-3.425 l8.705,8.705H70.557z'});
//Menu 리스트 모양 
hetajs.DataSource.Add("SVG_MENU",{type:"TEXT", target:'M63,0C28.206,0,0,28.207,0,63s28.206,64,63,64S126,97.793,126,63S97.793,0,63,0z M35.159,91.341 c-3.548,0-6.425-2.877-6.425-6.425c0-3.549,2.877-6.425,6.425-6.425c3.549,0,6.425,2.876,6.425,6.425 C41.583,88.464,38.708,91.341,35.159,91.341z M35.159,69.925c-3.548,0-6.425-2.877-6.425-6.425c0-3.549,2.877-6.425,6.425-6.425 c3.549,0,6.425,2.876,6.425,6.425C41.583,67.048,38.708,69.925,35.159,69.925z M35.159,48.509c-3.548,0-6.425-2.877-6.425-6.425 c0-3.549,2.877-6.425,6.425-6.425c3.549,0,6.425,2.876,6.425,6.425C41.583,45.632,38.708,48.509,35.159,48.509z M97.265,87.593 c0,1.183-0.959,2.142-2.142,2.142H48.008c-1.183,0-2.142-0.959-2.142-2.142v-5.354c0-1.184,0.959-2.142,2.142-2.142h47.115 c1.183,0,2.142,0.958,2.142,2.142V87.593z M97.265,66.177c0,1.183-0.959,2.142-2.142,2.142H48.008c-1.183,0-2.142-0.959-2.142-2.142 v-5.354c0-1.184,0.959-2.142,2.142-2.142h47.115c1.183,0,2.142,0.958,2.142,2.142V66.177z M97.265,44.761 c0,1.183-0.959,2.142-2.142,2.142H48.008c-1.183,0-2.142-0.959-2.142-2.142v-5.354c0-1.184,0.959-2.142,2.142-2.142h47.115 c1.183,0,2.142,0.958,2.142,2.142V44.761z'});
//Link 띠 모양
hetajs.DataSource.Add("SVG_DIRECT",{type:"TEXT", target:'M62.73-0.059c-34.794,0-63,28.207-63,63s28.206,64,63,64s63.001-29.207,63.001-64S97.524-0.059,62.73-0.059z M72.89,84.051 c-0.016,0.018-0.034,0.035-0.052,0.054l-9.62,9.619c-8.483,8.482-22.287,8.481-30.769,0c-8.484-8.483-8.484-22.287,0-30.771 l5.311-5.312c1.409-1.408,3.834-0.473,3.908,1.519c0.093,2.536,0.548,5.085,1.387,7.546c0.283,0.834,0.081,1.756-0.542,2.379 l-1.873,1.872c-4.012,4.013-4.138,10.545-0.165,14.596c4.012,4.09,10.604,4.114,14.647,0.072l9.619-9.617 c4.035-4.035,4.018-10.558,0-14.576c-0.531-0.529-1.065-0.939-1.481-1.227c-0.525-0.36-0.97-1.169-0.994-1.805 c-0.057-1.513,0.479-3.071,1.674-4.266l3.014-3.014c0.79-0.792,2.03-0.888,2.946-0.249c0.87,0.608,2.186,1.712,2.937,2.462 C81.392,61.896,81.272,75.622,72.89,84.051z M93.012,63.929L87.7,69.24c-1.408,1.41-3.833,0.475-3.906-1.517 c-0.093-2.538-0.548-5.086-1.387-7.546c-0.283-0.835-0.081-1.756,0.542-2.379l1.874-1.873c4.012-4.012,4.137-10.544,0.165-14.595 c-4.011-4.092-10.605-4.114-14.647-0.073l-9.619,9.618c-4.036,4.035-4.019,10.557,0,14.575c0.53,0.529,1.063,0.939,1.48,1.228 c0.525,0.36,0.97,1.168,0.995,1.804c0.056,1.513-0.479,3.072-1.675,4.267l-3.014,3.014c-0.79,0.79-2.03,0.888-2.946,0.249 c-0.871-0.609-2.187-1.712-2.938-2.462c-8.553-8.562-8.434-22.288-0.052-30.717c0.016-0.018,0.034-0.036,0.052-0.054l9.62-9.619 c8.483-8.483,22.285-8.482,30.769,0S101.496,55.447,93.012,63.929z'});
//Link Edm
hetajs.DataSource.Add("SVG_EDM",{type:"TEXT", target:'M58.354,61.608v11.076h1.357c3.201,0,4.921-1.88,4.921-5.587c0-3.726-1.72-5.489-4.921-5.489H58.354z M74.629,27.578 L73.925,27.582 L74.633,27.582z M86.723,43.833H76.084c-3.329,0-6.038-2.708-6.038-6.036V27.604L39.8,27.771v66.771l46.952-0.192V40.278l-0.029-0.03 V43.833z M79.883,62.624l-1.192,3.442l-2.592,7.106H74.64l-2.612-7.106l-1.176-3.442h-0.079c0.101,1.356,0.282,3.28,0.282,4.614 v7.371H68.95V59.707h2.693l2.733,7.531c0.346,0.992,0.649,2.007,0.994,3.018h0.102c0.344-1.011,0.628-2.025,0.972-3.018 l2.692-7.531h2.713v14.902h-2.186v-7.371c0-1.334,0.183-3.258,0.303-4.614H79.883z M46.709,48.792h32.108 c1.636,0,2.962,1.102,2.962,2.463c0,1.358-1.326,2.461-2.962,2.461H46.709c-1.637,0-2.965-1.103-2.965-2.461 C43.744,49.894,45.072,48.792,46.709,48.792z M67.06,67.098c0,4.84-2.609,7.512-7.064,7.512h-3.99V59.707h3.868 C64.451,59.707,67.06,62.238,67.06,67.098z M52.883,65.821v1.986h-5.467v4.818h6.683v1.983h-9.032V59.707h8.806v1.965h-6.458v4.149 H52.883z M79.386,87.018H47.279c-1.639,0-2.964-1.102-2.964-2.461c0-1.361,1.326-2.463,2.964-2.463h32.106 c1.639,0,2.964,1.102,2.964,2.463C82.35,85.916,81.024,87.018,79.386,87.018z M75.673,28.672 L75.673,38.207 L84.775,38.207z M63,0C28.206,0,0,28.207,0,63s28.206,63,63,63s63-28.207,63-63S97.794,0,63,0z M92.478,94.711 c0,3.331-2.708,6.042-6.038,6.042H39.767c-3.33,0-6.038-2.711-6.038-6.042V28.232c0-3.33,2.708-6.04,6.038-6.04h36.035 c0.859,0,1.686,0.334,2.304,0.934l13.364,12.938c0.645,0.623,1.009,1.482,1.009,2.379V94.711z'});

//클릭하면 동작 보통 데이터의 View팝업을 띄운다.  
hetajs.DataSource.Add("ClickPopupLink",{type:"LINK", target:function(item, stage, sender){
	var param = item.getSaveData();
//		id, text, url
	if(typeof stage.openLink == 'function'){
		stage.openLink(param,stage.linkObjs[param.id],sender.event);
	} 
}});

//메뉴경로를 클립보드에 복사하기 
hetajs.DataSource.Add("DoubleClickMenuPath",{type:"LINK", target:function(item, stage, sender){
	var linkObj = stage.linkObjs[item.id];
	if(linkObj != null){
		
		var url = OpenLink.getUrl(linkObj);
		
		//item = 메뉴 text
		var dummy = document.createElement("textarea");
		document.body.appendChild(dummy);
		dummy.value = url;
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
		Toast("clipboard에 Menu경로가 저장되었습니다.<br/>"+url);
	}
}});

/*
function workflowDetail(workflowId) {
    var url = contextPath + "/portal/workflow/workflow.do?method=link&workflowId=" + workflowId;
    var winDetailWorkflow = window.open(url, 'detailWorkflow', "width=1024,height=768,resizable=yes,scrollbars=yes");
    winDetailWorkflow.focus();
}
*/

/**
	var w01 = new WorkflowViewer('canvas-2d');
	w01.load(data);
 * 
 */
var WorkflowViewer = function($div, jsonData, options) {
	
		//================== create canvas
		this.$div = $div;	//태두리 jquery
		this.jsonData = jsonData;	//다시 불러오기 위함
		//<canvas width='400' height='400'></canvas>
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.$div.width(); 
		this.canvas.height = this.$div.height();
		this.canvas.style.width = this.$div.width();
		this.canvas.style.height = this.$div.height();
		this.canvas.style.position = 'absolute';	//$$$ 추가 202006
		this.canvas.style.backgroundColor = '#ffffff';	//$$$ 추가 202006
		this.canvas.style.zIndex = 0;	//$$$ 추가 202006
		
		$(this.canvas).appendTo($div);

//		<canvas id='canvas-2d' class="canvas1" width='500' height='650' style="position:absolute;"></canvas>
//		<canvas id='canvas-ui' class="canvas1" width='500' height='650' style="position:absolute;z-index:499;"></canvas>
		
		//$$$ 추가 202006
		this.$div.css('position','relative');
		this.canvasUi = document.createElement('canvas');
		this.canvasUi.width = this.$div.width(); 
		this.canvasUi.height = this.$div.height();
		this.canvasUi.style.position = 'absolute';
		this.canvasUi.style.width = this.$div.width();
		this.canvasUi.style.height = this.$div.height();
		this.canvasUi.style.zIndex = 499;
		$(this.canvasUi).appendTo($div);
		
		
		//확대 축소 아이콘 추가
		var s = '<ul class="list-unstyled list-view-control" style="z-index:1100;">';
		if(options.showZoomIn !== false){
		    s+='	<li><a href="javascript:;" title="zoom-in" class="control"><span class="zoom-in"><i class="fas fa-search-plus"></i></span></a></li>';
		}
		if(options.showZoomOut !== false){
		    s+='	<li><a href="javascript:;" title="zoom-out"  class="control"><span class="zoom-out"><i class="fas fa-search-minus"></i></span></a></li>';
		}
		if(options.showZoomToFit !== false){
		    
		    if(typeof options.showZoomToFit == 'function' ) this.showZoomToFit = options.showZoomToFit;       //펑션일때만.
		    
			s+='	<li><a href="javascript:;" title="zoom-to-fit" class="control"><span class="zoom-to-fit"><i class="fas fa-expand-arrows-alt"></i></span></a></li>';
		}
		if(options.showReload !== false){
		    s+='	<li><a href="javascript:;" title="reload" class="control"><span class="reset"><i class="fas fa-redo"></i></span></a></li>';
		}
		s+='</ul>';
		$(s).appendTo($div);
		
		
		
		//================== create Stage
		this.stage = hetajs.init(this.canvas,this.canvasUi);
		this.stage.mode = "VIEW";	//VIEW
		this.stage.Start();
		this.stage.Pause();
		
		//================== callback 함수 설정 
		this.stage.openLink = options.openLink || function(param, linkObj, e){
		    var url = "";
	           //linkName
	           if(linkObj.linkType == 'MENU'){
	               url = OpenLink.menu(linkObj.menuId);
	           }else if(linkObj.linkType == 'SYSTEM'){
	               url = OpenLink.system(linkObj.menuId);
	           }else if(linkObj.linkType == 'WORKFLOW'){
	               url = OpenLink.widget(linkObj.menuId);
	           }else if(linkObj.linkType == 'DIRECT'){
	               url = linkObj.linkUrl;
	           }
	           OpenLink.winPop(url, "WorkflowLink", 1200, 800, "yes", "yes");
		};
		this.stage.openDialog = options.openDialog || function(){};		//객체 클릭하면 발생하는 함수.
		this.stage.scrollable = (options.scrollable === false)? false:true;		//스크롤 줌 가능여부.
		//마우스 오버시에만 동작 하도록 이벤트주기
		

		//마우스가 화면을 떠나면 동작을 잠시 멈춘다.
		var that = this;
		if(options.onmouseover != null){ //
		    if(typeof options.onmouseover == 'function'){
		        this.AddEvent(this.stage.canvasUi, 'mouseover', options.onmouseover);
		    }
		}else{
		    //기본값은 resume
		    this.AddEvent(this.stage.canvasUi, 'mouseover', function(e){
                that.stage.Resume();
            });
		}
		if(options.onmouseout != null){ //
            if(typeof options.onmouseout == 'function'){
                this.AddEvent(this.stage.canvasUi, 'mouseout', options.onmouseout);
            }
        }else{
            //기본값은 pause
    		this.AddEvent(this.stage.canvasUi, 'mouseout', function(e){
    			that.stage.Pause();
    		});
    		
        }
		
		//================== 버튼 동작 설정
		this.$div.find('.zoom-in').parent().click(function() {
			that.zoomIn();
		});
		this.$div.find('.zoom-out').parent().click(function() {
			that.zoomOut();
		});
		this.$div.find('.zoom-to-fit').parent().click(function() {
			that.zoomToFit(that.showZoomToFit);
		});
		this.$div.find('.reset').parent().click(function() {
			that.reset();
		});
		
		//================== data load
		this.load(jsonData);
//		this.resize();
};

/*
	로드 함수 
 */
WorkflowViewer.prototype.load = function(jsonData){
	this.stage.removeAll();	//모두 지우고 
	var json = DuoMapperViewer.MbpToDuo(jsonData);			//기존 데이터 마이그레이션
	this.linkObjs = json.linkObjs;		//{nodeId: {nodeId, nodeType, menuId, menuCnt, gbmCode, sysCode}}
	this.stage.linkObjs = this.linkObjs;		//linkObjs
	
	
//	console.log(json.camera);
	
	this.stage.loadJson(json, function(stage, param) {
	    stage.changeCollision(true);
		if(param.camera.scaleX != null){
			stage.SetScaleX(param.camera.scaleX);	//비율을 유지하면서 거리를 설정해준다.
		}
		stage.Update();
		stage.Render();
	});
};
	//zoomin 
WorkflowViewer.prototype.zoomIn = function(){
	this.stage.zoomIn(100);
	this.stage.Update();
	this.stage.Render();
};
	//zoomout
WorkflowViewer.prototype.zoomOut = function(){
	this.stage.zoomOut(100);
	this.stage.Update();
	this.stage.Render();
};
WorkflowViewer.prototype.zoomToFit = function(showZoomToFit){	//옵션
	//리사이즈 div의 사이즈 가져오기
	var offsetScreen = {x:0, y:0};
	if(typeof showZoomToFit == 'function'){
		offsetScreen = showZoomToFit();				//함수에서 x,y,w,h를 리턴한다.
	}
	
	this.stage.zoomToFit(offsetScreen.x, offsetScreen.y, offsetScreen.w, offsetScreen.h);		//왼쪽으로 붙이기				... offsetScreen.w 는 작은 화면 사이즈 .
	
	this.stage.Resize();
};
WorkflowViewer.prototype.resize = function(){
	//리사이즈 div의 사이즈 가져오기
	
	var w = this.$div.width();
	var h = this.$div.height();
	
	this.$div.find('canvas').each(function(){
		$(this).attr('width',w);
		$(this).attr('height',h);
		$(this).css('width',w);
		$(this).css('height',h);
	});
	
//	var canvsTag = $("[workflowid='"+workflowId+"']").find("canvas");
//	var cWidth = canvsTag.parent().width() - 5;
//	var cHeight = canvsTag.parent().height() - 5;
//	
//	canvsTag.css({
//		"width" : cWidth
//		,"height" : cHeight
//	});
//	canvsTag.attr("width", cWidth);
//	canvsTag.attr("height", cHeight);
	//console.log("width : " + cWidth + ", height : " + cHeight);
	
	
//	this.canvas.width	= w;
//	this.canvas.height	= h;
//	this.canvas.style.width = w;
//	this.canvas.style.height= h;
//	this.canvasUi.width = w;
//	this.canvasUi.height= h;
//	this.canvasUi.style.width	= w;
//	this.canvasUi.style.height	= h;
	
	this.stage.Resize();
};

WorkflowViewer.prototype.resizeCanvas = function(){
	//높이만 가져온다.
	var h = this.$div.height();
	
	
	this.$div.find('canvas').each(function(){
		$(this).attr('height',h);
		$(this).css('height',h);
	});
	
	
	
//	this.canvas.height = h;
//	this.canvas.style.height = h;
	
	this.stage.Resize();
};

//다시 로드
WorkflowViewer.prototype.reset = function(){
	this.load(this.jsonData);
	this.stage.Update();
	this.stage.Render();
};
WorkflowViewer.prototype.removeAll = function(){
	this.stage.removeAll();
	this.stage.Update();
	this.stage.Render();
};

WorkflowViewer.prototype.changeTooltip = function(fn){
	var pArr = this.stage.searchObjectItem({dataSource : "SVG_MENU"});	//MENU만 가져온다.
	if(typeof fn == 'function'){
		for(var i in pArr){
			var text = fn(pArr[i].id);
			this.stage.setTooltip(pArr[i], text);
		}
	}else{
		for(var i in pArr){
			//pArr[i].id
			this.stage.setTooltip(pArr[i], "");
		}
	}
//	var that = this;
//	setTimeout(function(){
		this.stage.Update();
		this.stage.Render();
//	},500);
};


/**
 * 아이템들의 태두리 사이즈.
 */
WorkflowViewer.prototype.getItemBoundSize = function(){

	var sizeXY = this.stage.getItemBoundSize();
	return sizeXY;
};



/**
 * selector
 * 1. {id:["abcd"]} 특정 id에만 이벤트 적용.
 * 2. {type: [Item,TextBox2D]} 특정 객체에 전부 적용. 
 * 
 * events
 * 1. {click: function(sender){   }, }
 * 
 * ID:"asdfsdf",  type:{Item,Shape,등등}, callback:function 이 있음.  
 * 
 * selector: [canvas, textarea] {}
 */


// 이벤트 추가
WorkflowViewer.prototype.AddEvent = function(obj, type, callback){
	if(obj == null || typeof(obj) == 'undefined')return;
	if(obj.addEventListener){
		obj.addEventListener(type,callback, false);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+type,callback);
	}else{
		obj["on"+type] = callback;
	}
};

// 이벤트 삭제
WorkflowViewer.prototype.RemoveEvent = function(obj, type, callback){
	if(obj == null || typeof(obj) == 'undefined')return;
	if(obj.removeEventListener){
		obj.removeEventListener(type,callback, false);
	}else if(obj.detachEvent){
		obj.detachEvent("on"+type,callback);
	}else{
		delete obj["on"+type];
	}
};



/* ========================================================================================================================== */


var webEditorMgmtView = {
	init : function(item){	//추가
		
// 			var s = '<div id="'+item.id+'" contenteditable="true" style="position:absolute; border:1px solid red;z-index:1;">'+item.text+'</div>';
		var s = '<div id="'+item.id+'" class="webeditor" activeindex="0" style="position:absolute;z-index:-1;overflow:hidden;"><div style="text-align:center;vertical-align:'+item.valign+';display:table-cell;-ms-word-break: break-all;" >'+item.text+'</div></div>';
		$(s).insertAfter(item.stage.canvas);
	
		//item.stage.Update();
	},
	update : function(item){	//수정
		//좌표 변경, 크기 변경 , zoom설정
		var x = item.x;
		var y = item.y;
		var w = item.w;
		var h = item.h;
		x += $(window).scrollLeft();		//매번하지 말자.!!!  
		y += $(window).scrollTop();
		
		var idx = Number(item.index) + Number($('#'+item.id).attr('activeindex'));
		$('#'+item.id).css({top: y , left: x , width: w , height:h , zoom:item.zoom, zIndex:idx});
		$('#'+item.id+' > div').css({width: w , height:h});
	},
	destroy : function(item){	//삭제
		$('#'+item.id).remove();
	},
	active : function(item){
		$('#'+item.id).css('border','1px dashed #aaa');
		$('#'+item.id).attr('activeindex',500);
	}, 
	deactive : function(item){
		$('#'+item.id).css('border','none');
		$('#'+item.id).attr('activeindex',0);
	}
	
};



/* ========================================================================================================================== */

    



	/**
		데이터간의 멥핑
	*/
	var DuoMapperViewer = {
		//기존을 신규로 (불러올때 사용.)
		MbpToDuo : function(data){
			if(data == null){ try{Toast("flowchart Data가 없습니다.");}catch(e){} return;}
			if(data.nodes == null){ try{Toast("정상적인 데이터가 아닙니다.");}catch(e){} return;}
			
			var objCenter = {x:0, y:0};		//객체들의 중심을 구한다
			
			var result = {objects:[],links:[],camera:null,linkObjs:{}};	//결과.	linkObjs는 팝업을 통해서 선택한 객체를 차후 조회 할때 사용한다.
			for(var i =0; i < data.nodes.length; i++){
				var node = data.nodes[i];
				var obj = {};
				var linkObj = {};	//linkObj입니다.
				
				//comment로 들어오는 것을 TEXT로 변경 한다.
				if(node.nodeType == 'comment'){
					node.linkType = 'TEXT';
				}
				
				if(node.responseStatus == '404'){
					node.textColor = '#D3D3D3';
					node.color =  '#D3D3D3';
				}

				node.nodeId = (""+node.nodeId).replace(/[\.]+/g,'');
				
				obj.id 		= node.nodeId;
				obj.x 		= node.left;
				obj.y 		= node.top;
				obj.width 	= node.width;
				obj.height 	= node.height;
				obj.text 		= this.replaceString(node.title);
				obj.textColor	= node.textColor;
				obj.bgColor 	= node.bgColor;
//				obj.textAlign 	= node.textAlign;
				obj.textAlign = node.align; //텍스트 정렬  (이제 안쓴다. tag방식이라 안에 있음.)
				obj.textVAlign = node.textVAlign; //텍스트 정렬
								
				obj.polygonType = node.polygonType;		//도형 모양
				obj.lineColor	= node.lineColor;		//태두리 색
				obj.lineWidth	= node.lineWidth;		//태두리 두깨
				obj.lineType	= node.lineType;		//태두리 모양
				


				//==========================================
				//TODO 옛날 데이터 ...폰트를 기존거로 적용시키기 !!!!
				//==========================================
					if(node.iconType == null && node.polygonType == null ){	//기존 데이터 ...신규 입력일때는 opts.polygonType이 있음.
						//옛날 데이터 폰트를 9로 설정
						node.title = "<span style='font:"+node.font+"; color:"+node.textColor+";'  >"+node.title+"</span>"
	//					node.title = "<font size='2' >"+node.title+"</font>"
						
						if(node.linkType == "TEXT"){
							obj.polygonType = 'RECT';		//text가 아니면
							//옛날 데이터 높이를 10 만큼 줄인다.
							obj.height -= 20;	//12
						}else{
							obj.polygonType = 'ROUND';		//text가 아니면
							
							//옛날 데이터 높이를 10 만큼 줄인다.
							obj.height -= 20;	//10
						}
					}
					
				
				//========================== 신규소스에만 있는부분 
// 				obj.linkType 	= node.linkType;		//MENU , WORKFLOW, SYSTEM, DIRECT
				obj.dataSource 	= this.matchIcon(node.linkType);	//MENU 아이콘 결정 => SVG_MENU   SVG_IMAGE => SVG_IMAGE
				obj.color		= node.color;			//  컬러가 없으면 linkType에서 기본으로 할당한다.
				obj.font		= node.font;
				obj.url			= node.url;
				result.objects.push(obj);
				
				
				//========================== 기존소스에만 있는부분은 linkObj에 저장한다.
				linkObj.nodeId 		= node.nodeId;
				linkObj.nodeType	= node.nodeType;	// ARIS, action, output, ... comment 등
				linkObj.menuId		= node.menuId;		// "DSS_Foundry_MENU_00880",
				linkObj.menuCnt 	= node.menuCnt;			//저장할때 사용.
				linkObj.sysCode 	= node.sysCode;			//저장할때 사용.
				linkObj.gbmCode 	= node.gbmCode;			//저장할때 사용.

				linkObj.linkType 	= node.linkType;
				linkObj.linkUrl 	= node.url;
				linkObj.linkName 	= this.replaceString(node.title);
				
				linkObj.textColor	= node.textColor;
				linkObj.bgColor 	= node.bgColor;
				
				linkObj.defaultOpen = node.defaultOpen;			//기본 열기
				result.linkObjs[node.nodeId] = linkObj;
				
				
//				if(node.oriText == null){
//					if(node.linkType == "MENU"){
//						var str = "";
//						if(node.gbmCode==''){
//							str = "[" + node.sysCode + "] " +node.title;;	
//						}else if(node.sysCode=='OI'){
//						    var findOiLine = (node.menuId+"").split("_");
//				          str = "[" + node.sysCode + "][" + node.gbmCode + '-' + findOiLine[2] + "] " +node.title;
//						}else{
//							if(node.sysCode !== undefined ){
//								//str = str + "[" + sysCode + "][" + gbmCode + "] " + menuName;
//								str = "[" + node.sysCode + "]";
//							}
//							if(node.gbmCode !== undefined ){
//								str = str + "[" + node.gbmCode + "]";
//							}
//							str = str + node.title;			
//						}
//						obj.text = str; 
//					}
//				}
				obj.text = this.replaceString(node.title);
				//중심점 구하기
				objCenter.x += node.left;
				objCenter.y += node.top;
			}
			
			//옵젝트 들의 중심 위치 구하기 
			objCenter.x = objCenter.x/data.nodes.length;
			objCenter.y = objCenter.y/data.nodes.length;
			
// 			"connectionId" : "con_17",
// 			sourceId : "04683fdd-6b31-4b98-9041-3df63291d9a0",
// 			targetId : "1f4239c0-f870-47e5-94a3-819695356066",
// 			anchors : [ "RightMiddle", TopCenter ],
// 			label : ""
			if(data.connections != null){
				for(var i =0; i < data.connections.length; i++){
					var connection = data.connections[i];
					var link = {source:{}, target:{}};
					link.id 				= connection.connectionId;
					link.source.id 			= connection.sourceId;	
					link.target.id 			= connection.targetId;
					//TODO
					link.source.id 			= (""+connection.sourceId).replace(/[\.]+/g,'');	//connection.sourceId;	
					link.target.id 			= (""+connection.targetId).replace(/[\.]+/g,'');	//connection.targetId;
					link.source.direction	= this.matchDirection(connection.anchors[0]);
					link.target.direction	= this.matchDirection(connection.anchors[1]);
		 			link.text				= connection.label;
					//===================	신규소스에만 있는부분
	 	 			link.font 				= connection.font;
	 	 			link.lineColor 			= connection.lineColor;
	 	 			link.lineType 			= connection.lineType;
	 	 			link.lineWidth 			= connection.lineWidth;
		 			link.textColor			= connection.textColor;
					result.links.push(link);
				}
			}
			//카메라
			if(data.camera != null){
				result.camera = data.camera;
			}else{
				result.camera = {
					distance: 1000,
					x: objCenter.x + 50,		//50만큼 카메라가 더 가야지 됨. 왜???
					y: objCenter.y
				};
			}
			
			//컬러도 등록
			result.colors = data.colors;
			return result;
		},
		replaceString : function(str){
			var result = (str != null)?str.replace('&lt;','<').replace('&gt;','>').replace('&amp;','&').replace('||CHR(38)||','&'):"";
			return result;
		},
		//방향을 적당한 
		matchDirection : function(dir){
			if(dir == "RightMiddle"){
				return "right";
			}else if(dir == "LeftMiddle"){
				return "left";
			}else if(dir == "TopCenter"){
				return "top";
			}else if(dir == "BottomCenter"){
				return "bottom";
			}else if(dir == "right"){
				return "RightMiddle";
			}else if(dir == "left"){
				return "LeftMiddle";
			}else if(dir == "top"){
				return "TopCenter";
			}else if(dir == "bottom"){
				return "BottomCenter";
			}
		},
		matchIcon : function(str){
			if(str == "MENU"){
				return "SVG_MENU";
			}else if(str == "SYSTEM"){
				return "SVG_SYSTEM";
			}else if(str == "WORKFLOW"){
				return "SVG_WORKFLOW";
			}else if(str == "DIRECT"){
				return "SVG_DIRECT";
			}else if(str == "SVG_MENU"){
				return "MENU";
			}else if(str == "SVG_SYSTEM"){
				return "SYSTEM";
			}else if(str == "SVG_WORKFLOW"){
				return "WORKFLOW";
			}else if(str == "SVG_DIRECT"){
				return "DIRECT";
			}else{
				return str;
			}
			//MENU, SYSTEM, WORKFLOW, DIRECT
		}
	};
	