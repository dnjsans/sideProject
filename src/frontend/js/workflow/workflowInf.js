/*
 * 	Workflow Edit Mode
 */
var WorkflowManager = {
	selectedId :"",
	x : null,
	y : null,
	linkObjs : {},	////{nodeId: {nodeId, nodeType, menuId, menuCnt, gbmCode, sysCode, 				menuName,alertYn}}
	init :function (){
		//CommonEditPopup.init();		//워크플로어에서 사용하는 팝업 모음
		CommonEditPopupTools.init();//워크플로어에서 사용하는 팝업 duo 2차
		//interface
		WorkflowInf.init();		//edit모드
		
		
		colorChange.init();//컬러설정
		lineChange.init();//라인설정
		fontManager.init();//폰트설정
		
		
	    $( ".flowobject" ).draggable({helper: "clone"});
        $( "#canvas-2d" ).droppable({
            drop: function( event, ui ) {
                if(ui.helper.context != undefined){
	            	callType = 'drag';
	                //id넣기 
	                WorkflowManager.selectedId = ui.draggable[0].id;
	                WorkflowManager.x = ui.offset.left;
	                WorkflowManager.y = ui.offset.top;
	                WorkflowManager.popupEvent();
	                
                }
                console.log(ui.offset.left, ui.offset.top);
                console.log(event, ui);
                
                event.stopPropagation();
                event.preventDefault();
        }});

		$(".flowobject").click(function(){
			callType = 'drag';
			WorkflowManager.selectedId = $(this).attr("id");
			WorkflowManager.x = null;
            WorkflowManager.y = null;
			WorkflowManager.popupEvent();
		});
		
		//좌측 도형 툴바
//		$(".btn-workflowTool").click(function(){
//			callType = 'drag';
//			WorkflowManager.selectedId = $(this).attr("id");
//			WorkflowManager.x = null;
//            WorkflowManager.y = null;
//			WorkflowManager.popupEvent();
//		});			
		
		// 라인  종류

		// 객체만 정렬 (선 제외)
		$('#btnAlignLeft').click(function(){ WorkflowInf.alignObjects("LEFT"); });
		$('#btnAlignTop').click(function(){ WorkflowInf.alignObjects("TOP"); });
		$('#btnAlignRight').click(function(){ WorkflowInf.alignObjects("RIGHT"); });
		$('#btnAlignBottom').click(function(){ WorkflowInf.alignObjects("BOTTOM"); });
		$('#btnAlignCenterH').click(function(){ WorkflowInf.alignObjects("CENTER_H"); });
		$('#btnAlignCenterV').click(function(){ WorkflowInf.alignObjects("CENTER_V"); });
		
		
		//우클릭 이벤트
		$('#btnAlignLeft_Rightclick').click(function(){ WorkflowInf.alignObjects("LEFT"); });
		$('#btnAlignTop_Rightclick').click(function(){ WorkflowInf.alignObjects("TOP"); });
		$('#btnAlignRight_Rightclick').click(function(){ WorkflowInf.alignObjects("RIGHT"); });
		$('#btnAlignBottom_Rightclick').click(function(){ WorkflowInf.alignObjects("BOTTOM"); });
		$('#btnAlignCenterH_Rightclick').click(function(){ WorkflowInf.alignObjects("CENTER_H"); });
		$('#btnAlignCenterV_Rightclick').click(function(){ WorkflowInf.alignObjects("CENTER_V"); });
		
		//레이어 팝업(텍스트)
		WorkflowToolsManager.init();
		
		
		//맨앞으로 가져오기
		$('#objectTopFront').click(function(){ WorkflowInf.alignObjects("FRONT"); });
		//맨뒤로 가져오기
		$('#objectTopBack').click(function(){ WorkflowInf.alignObjects("BACK"); });
		
		//맨앞으로 가져오기(레이어 팝업)
		$('#objectTopFront_ly').click(function(){ WorkflowInf.alignObjects("FRONT"); });
		//맨뒤로 가져오기(레이어 팝업)
		$('#objectTopBack_ly').click(function(){ WorkflowInf.alignObjects("BACK"); });		


		$('#btnClear').click(function(){ WorkflowInf.removeAll(); });		//비우기

		//===============================DirectPopup을 설정
		
		//zoon-in,out
		$('#zoomIn').click(function(){WorkflowInf.zoomIn();});
		$('#zoomOut').click(function(){WorkflowInf.zoomOut();});
		$('#zoomInTop').click(function(){WorkflowInf.zoomIn();});
		$('#zoomOutTop').click(function(){WorkflowInf.zoomOut();});		
		$('#canvasReset').click(function(){WorkflowInf.reset();});		
		$('#zoomToFit').click(function(){WorkflowInf.zoomToFit();});

		
		//=============================== resize
		$(window).resize(function(){
			WorkflowManager.resize();
		});
		WorkflowManager.resize();
	},
	resize : function(){
		var w = $("#canvas-2d").parent().width() -5;
		$("#canvas-2d").attr("width", w);
		$("#canvas-2d").css("width", w);
		
		$("#canvas-ui").attr("width", w);
		$("#canvas-ui").css("width", w);
		WorkflowInf.stage.Resize();
	},
	//각 버튼 클릭시 팝업
	popupEvent : function(){
		
		var id= this.selectedId;
		
		if(id =='SVG_IMAGE' || id=='IMG'){ 
			
			/* $("#fileInput").replaceWith( $("#fileInput").clone(true) );
			document.getElementById('fileInput').click(); */
			inputImageModalInit();
			$("#modal_input_image").modal();
			
		}
		else if(id =='SVG_TEXT'){ 
			WorkflowManager.insertText();
		}
		else if(id =='ROUND' || id =='RECT' || id =='ARROW' ||id =='DIAMOND' ||id =='CIRCLE'||id =='TEXT'){ 
			WorkflowManager.insertTextTool();
		}
		else{
			SearchMenuManager.open();
		}		
	},
	//IMAGE 등록
	insertImage : function(e){
		WorkflowInf.insertImagePop(e, this.x, this.y);		//this.x,y는 droppable한 위치 
  		this.x=null;
		this.y=null;  
	},
	//TEXT 등록
	insertText : function(){
		WorkflowInf.insertTextPop(this.x, this.y);			//this.x,y는 droppable한 위치
		this.x=null;
		this.y=null;
	},
	//workflow tool 
	insertTextTool : function(){
		WorkflowInf.insertTextPop(this.x, this.y, this.selectedId);			//this.x,y는 droppable한 위치
		this.x=null;
		this.y=null;
	},	
	/**
		SYSTEM, MENU, WORKFLOW를 등록합니다. (추가 : URL을 등록합니다.) 
		linkObj : {
						//link:type
						menuId: menuId,
						sysCode: sysCode,
						gbmCode: gbmCode,
						menuName: menuName,
						alertYn: alertYn,
						menuCnt: menuCnt
					}
	*/
	//모든 객체 입력이 이쪽으로 옵니다.
	insertNode : function(linkObj){
		//WorkflowInf.insertShapeObj(this.selectedId , linkObj );
		//alert("=====================>>> "+linkObj.linkType);
		var objType = "SVG_"+linkObj.linkType;
		var url = '';
		if(linkObj.linkType == "DIRECT"){
			url = linkObj.sysCode;
			
			//edm링크 인지 체크
			if(url.indexOf("://edm") > -1){
				objType = "SVG_EDM";
			}
			
		}
		if(linkObj.linkType == "MENU"){ 
			linkObj.oriText = linkObj.menuName;

		}
		var id = WorkflowInf.insertShapeObj(objType, linkObj.menuName, url, this.x, this.y, linkObj.color);
		this.linkObjs[id] = linkObj;
		
// 		console.log(this.linkObjs[id]);
		this.x=null;
		this.y=null;
		
		return id;
	},
	modifyNode : function(linkObj, itemId){
		var objType = "SVG_"+linkObj.linkType;
		var url = '';
		if(linkObj.linkType == "DIRECT"){
			url = linkObj.sysCode;
			
			//edm링크 인지 체크
			if(url.indexOf("://edm") > -1){
				objType = "SVG_EDM";
			}
			
		}
		var id = WorkflowInf.modifyShapeObj(itemId, objType, linkObj.menuName, url);
		this.linkObjs[itemId] = linkObj;
		
		return id;
	},
	removeLinkObj : function(itemId){
		if(this.linkObjs[itemId] != null)
			delete this.linkObjs[itemId];
	},
	//수정화면에서 기존 데이터 불러오기
	load : function(jsonData, isFirstLoading){
		
		if(jsonData == "") return;
		
		if(jsonData == null){
			//오리지널 데이터 넣기
			jsonData = jsonObj;			//전역 데이터..
		}
		
		this.resize();		//다시 보여지는거라서 canvas resize해준다.
		
		
		//비워준다. 
		WorkflowInf.removeAll();
		$("#menuList").html("");
		
		//로드 합니다. 
		this.linkObjs = WorkflowInf.loadWorkflow(jsonData,function() {}, isFirstLoading);
		//컬러를 설정
		settingColorCategory.loadColorRow(jsonData.colors);

	},
	//저장하기
	save : function(){ 
		
		//console.log(this.linkObjs);
		var mbp = WorkflowInf.saveWorkflow(this.linkObjs);
		
		if(mbp.camera != null){
			mbp.camera.scaleX = this.scaleX;		//스케일.
		}
		
		var colors = settingColorCategory.getColors();
		mbp.colors =  colors;
		//2. 기존에 저장하던데로 저장
		//alert("저장 되었습니다.");
		return mbp;
		
	}
};


var colorChange = {
		currColor :"#0000ff",	//아이콘색
		currBgColor :"#ffffff",	//배경색
		currColorType : "color",  //color, bgColor, textColor 현재 선택된 타입 
		init : function(){
			
			$(".SettingColorCategoryList").find("span").click(function(){
				console.log($(this).css("background-color"));
				colorChange.preview($(this).css("background-color"));
			});
			
 			//color picker 선택시
			$('#colorSelector').ColorPicker({
				onSubmit : function(hsb, hex, rgb, el) {
					$(el).val(hex);
					$(el).ColorPickerHide();

				},
				color : '#00ff00',
				onShow : function(colpkr) {
					$(colpkr).fadeIn(500);
					return false;
				},
				onHide : function(colpkr) {
					$(colpkr).fadeOut(500);
					return false;
				},
				onChange : function(hsb, hex, rgb) {
					$('#colorSelector div').css('backgroundColor', '#' + hex);
//					console.log('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
					colorChange.preview('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				//	WorkflowInf.changeColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				},

				onBeforeShow : function(colpkr) {
					$(this).ColorPickerSetColor('rgb(0.5,0.8,0.1)');
				}
			});
			//상단 툴바 선색 설정 버튼
			$('#toolsLineColorTop').ColorPicker({
				onSubmit : function(hsb, hex, rgb, el) {
					$(el).val(hex);
					$(el).ColorPickerHide();

				},
				color : '#00ff00',
				onShow : function(colpkr) {
					$(colpkr).fadeIn(500);
					return false;
				},
				onHide : function(colpkr) {
					$(colpkr).fadeOut(500);
					return false;
				},
				onChange : function(hsb, hex, rgb) {
					$('#toolsLineColorTop').find('.fontcolor_fill').css('background-color', '#' + hex);
					CommonEditPopupTools.changeLineColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
					//CommonEditPopupTools.changeLineColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
//					$('#text_color .fontcolor_fill').css('backgroundColor', '#' + hex);
//					$('.font-color-bar.fontcolor_fill').css('backgroundColor', '#' + hex);
//				    $('#text_color .fontcolor_fill').css('color', '#' + hex);
//					WorkflowInf.changeFontColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				},

				onBeforeShow : function(colpkr) {
//					$(this).ColorPickerSetColor($('#text_color .fontcolor_fill').css('backgroundColor'));
					var fillcolor = $('#toolsLineColorTop').find('.fontcolor_fill').css('background-color');
					$(this).ColorPickerSetColor(fillcolor);
				}
			}); 			
			
			//colorsetting 활성화
		    $(".colorsetting").find("span").click(function(){
		    	colorChange.toggleColorBox($(this));
		   });
			
			//초기 셋팅
			$(".line-ui-color").trigger('click');//선색상 선택
			
		    $(".colorsetting").find("span:eq(1)").trigger('click');
		    $(".colorsetting").find("span:eq(0)").trigger('click');
			
		},
		//color 버튼 누를때마다 활성화 toggle
		toggleColorBox : function($ele){
			$(".colorsetting").removeClass("active");
			$ele.parent().parent().addClass("active");
			//선택된class
			this.currColorType = $ele.attr("class");
			
			
			
			//TODO changeColor를 호출 bg면 
			if(this.currColorType =="line-ui-color"){
				this.currColor = $("."+this.currColorType).css("background-color");
				console.log(this.currColor);
				WorkflowInf.changeColor(this.currColor);
			}else if(this.currColorType =="bg-ui-color"){
				this.currBgColor = $("."+this.currColorType).css("background-color");
				WorkflowInf.changeBgColor(this.currBgColor);
			}
			
			
		},
		// 활성화된 버튼 색깔 바꾸기
		preview : function(color){
			
			//settingColorCategory열림상태일때는 동작안하도록
			if(settingColorCategory.isOpen==false){
				//line-ui-color
				$("."+this.currColorType).css("background-color", color);
				
				if(this.currColorType =="line-ui-color"){
					this.currColor = color;
					WorkflowInf.changeColor(color);
				}else if(this.currColorType =="bg-ui-color"){
					this.currBgColor = color;
					WorkflowInf.changeBgColor(color);
				}
			}else{
				settingColorCategory.colorChange(color);
				WorkflowInf.changeBgColor(color);//열림일때도 선택되어 있으면 선택된 객체 배경색이 변경되도록
			}
		}
			
	} ;



var settingColorCategory_list = { //specific-colors-body 설정, 관리
		colorlist:"",//specific color 관리
		isOpen:false,//colorChange
		init:function(){
            this.$button = $('#dropmenuLayer_list').find('.btn-toolbox');
            this.$layer =  $('#dropmenuLayer_list').find('.dropdown-menu');
            
            this.$button.click(function(){
            	if(settingColorCategory_list.isOpen){
            		settingColorCategory_list.close();
            		$(this).find('span').attr('class', 'caret-down');
            	}else{
            		settingColorCategory_list.close();
            		$('#settingColorLayer_list').append($('#ui-add_wrap'));//flowchart li를 list에 구성한다. 
//            		$('#ui-add_wrap').hide();
            		settingColorCategory_list.open();
            		$(this).find('span').attr('class', 'caret-up');
            	}
            	});
            //this.$layer.mouseleave(function(){settingColorCategory.close();});
            
            this.$layer.delegate('.color_fill', 'click', function(){
            	//다른애들을 active 비활성화 
            	$('#dropmenuLayer_list').find('.dropdown-menu').find('.color_fill').removeClass('active');
            	
            	$(this).addClass('active');
            	

            });
            
		},
		colorChange :function(color){
			this.$layer.find('.color_fill').each(function(){
				 if($(this).hasClass('active') == true){
					 $(this).css('backgroundColor', color);
				} 
			});
		},
		open :function(){
			this.$layer.show();
			this.isOpen = true;
		},
		close:function(){
			this.$layer.hide();
			this.isOpen = false;
		},
//		resetColors:function(){
//			colorlist  = $('.ui-add_listwrap');
//		},//기존 컬러를 지운다.
//		addColorRow:function(ele){
//			this.$layer.find('.color_fill').removeClass('active');
//			 var html = 
//	                '<li style="width: 190px" class="li">'+
//		                '<div class="ui-categoryadd" > <span class="color_fill active"></span>'+
//		                    '<input type="text" class="w100c" placeholder="카테고리명 " style="width:100px">'+
//		                    '<a href="#" onclick="settingColorCategory_list.delColorRow(this);" title="delect" ><span class="delect" > 삭제</span></a>'+
//		                '</div>'+
//            		'</li>';
//			$('.ui-add_listwrap ul').append(html);
//			
//		},
		loadColorRow:function(colors){//수정화면에서 초기 로드시 컬러정보 셋팅
			if(colors != null){
				for(var i=0;i < colors.length; i++){
					 var html = 
			                '<li style="width: 190px" class="li">'+ 
				                '<div class="ui-categoryadd" > <span class="color_fill active" style="background-color:'+colors[i]['rgb']+'"></span>'+
				                    '<input type="text" class="w100c" placeholder="카테고리명 " value="'+colors[i]['description']+'" style="width:100px">'+
				                    '<a href="#" onclick="settingColorCategory_list.delColorRow(this);" title="delect" ><span class="delect" > 삭제</span></a>'+
				                '</div>'+
		         		'</li>';
					$('.ui-add_listwrap ul').append(html);	
				}
			}
		},
//		delColorRow:function(ele){
//			$(ele).parent().parent().remove();
//		},
		getColors:function(){
			var obj=[];
			$('#dropmenuLayer_list').find('.dropdown-menu').find('.color_fill').each(function(){
				var colorObj = {rgb:"", description:""};
				colorObj.rgb  = $(this).css('backgroundColor');
				colorObj.description = $(this).next().val();
				obj.push(colorObj);
			});
			return obj;
		}//nodes.colors[]에 설정되어있는 값을 가져온다.(수정화면)
};




var settingColorCategory = { //specific-colors-body 설정, 관리
		colorlist:"",//specific color 관리
		isOpen:false,//colorChange
		init:function(){
// 			<div class="btn-group mr5"  id="dropmenuLayer">
//             <div class="btn btn-toolbox dropdown-toggle" > Setting Color Category <span class="caret"></span></div>
//             <div class="dropdown-menu" role="menu">
            this.$button = $('#dropmenuLayer').find('.btn-toolbox');
            this.$layer =  $('#dropmenuLayer').find('.dropdown-menu');
            
            this.$button.click(function(){
            	if(settingColorCategory.isOpen){
            		settingColorCategory.close();
            		$(this).find('span').attr('class', 'caret-down');
            	}else{
            		settingColorCategory.close();
//            		$('#ui-add_wrap').append($('#ui-add_listwrap'));//list의 li를 flowchart에 구성한다.
            		$('#settingColorLayer').append($('#ui-add_wrap'));
//            		$('#ui-add_wrap').hide();
            		settingColorCategory.open();
            		$(this).find('span').attr('class', 'caret-up');
            	}
            	});
            //this.$layer.mouseleave(function(){settingColorCategory.close();});
            
            $('#dropmenuLayer').find('.dropdown-menu').delegate('.color_fill', 'click', function(){
            	//다른애들을 active 비활성화 
            	$('#dropmenuLayer').find('.dropdown-menu').find('.color_fill').removeClass('active');
            	
            	$(this).addClass('active');
            	

            });
			
				$('.btn.color-add').click(function(){settingColorCategory.addColorRow($(this));});//add user color 버큰 클릭시	
 					$(".ui-add_listwrap_ul").on('click', '.color_fill', function(){
 						WorkflowInf.changeBgColor($(this).css("background-color"));
// 						listDisplayControl.changeBgColor($(this).css("background-color"));//list 객체 배경색도 변경
 					});//add user color 의 카테고리 컬러 클릭시 선택된 객체 색상도 변경
 						
		},
		colorChange :function(color){
			this.$layer.find('.color_fill').each(function(){
				 if($(this).hasClass('active') == true){
					 $(this).css('backgroundColor', color);
				} 
			});
		},
		open :function(){
			this.$layer.show();
			this.isOpen = true;
		},
		close:function(){
			this.$layer.hide();
			this.isOpen = false;
		},
		resetColors:function(){
			colorlist  = $('.ui-add_listwrap');
		},//기존 컬러를 지운다.
		addColorRow:function(ele){
			$('#dropmenuLayer').find('.dropdown-menu').find('.color_fill').removeClass('active');
			$('#dropmenuLayer_list').find('.dropdown-menu').find('.color_fill').removeClass('active');
			 var html = 
	                '<li style="width: 190px" class="li">'+
		                '<div class="ui-categoryadd" > <span class="color_fill active"></span>'+
		                    '<input type="text" class="w100c" placeholder="카테고리명 " style="width:100px">'+
		                    '<a href="#" onclick="settingColorCategory.delColorRow(this);" title="delect" ><span class="delect" > 삭제</span></a>'+
		                '</div>'+
            		'</li>';
			$('.ui-add_listwrap ul').append(html);
			
		},
		loadColorRow:function(colors){//수정화면에서 초기 로드시 컬러정보 셋팅
			if(colors != null){
				for(var i=0;i < colors.length; i++){
					 var html = 
			                '<li style="width: 190px" class="li">'+ 
				                '<div class="ui-categoryadd" > <span class="color_fill active" style="background-color:'+colors[i]['rgb']+'"></span>'+
				                    '<input type="text" class="w100c" placeholder="카테고리명 " value="'+colors[i]['description']+'" style="width:100px">'+
				                    '<a href="#" onclick="settingColorCategory.delColorRow(this);" title="delect" ><span class="delect" > 삭제</span></a>'+
				                '</div>'+
		         		'</li>';
					$('.ui-add_listwrap ul').append(html);	
				}
			}
		},
		delColorRow:function(ele){
			$(ele).parent().parent().remove();
		},
		getColors:function(){
			var obj=[];
			this.$layer.find('.color_fill').each(function(){
				var colorObj = {rgb:"", description:""};
				colorObj.rgb  = $(this).css('backgroundColor');
				colorObj.description = $(this).next().val();
				obj.push(colorObj);
			});
			return obj;
		}//nodes.colors[]에 설정되어있는 값을 가져온다.(수정화면)
};

//font 설정
var fontManager = {
		currFont:"",//현재 폰트설정
		textBold:"normal",
		textItalic:"normal",
		type:"",
		init:function(){
			//this.currFont = 'normal normal 12px "맑은 고딕"';
			//============================폰트===========
			
			//텍스트 왼쪽 정렬 
			$('#text_align_left').click(function() {              //active면 
				CommonEditPopupTools.changeTextAlign('justifyleft');
			});
			//텍스트 가운데 정렬 
			$('#text_align_center').click(function() {              //active면 
				CommonEditPopupTools.changeTextAlign('justifycenter');
			});
			//텍스트 오른쪽 정렬
			$('#text_align_right').click(function() {              //active면 
				CommonEditPopupTools.changeTextAlign('justifyright');
			});
			
		    //노드 객체들의 폰트 변경을 설정.
/*			$('#text_style').change(function(e) {
				WorkflowInf.changeFontFace($(this).val());		//선택한 객체의 폰트중에서 face를 변경해주는거 
				fontManager.makeFontString();
			}).click(function(e) {
				WorkflowInf.changeFontFace($(this).val());		//선택한 객체의 폰트중에서 face를 변경해주는거 
				fontManager.makeFontString();
			});
			
			$('#text_size').change(function() {
				WorkflowInf.changeFontSize($(this).val());
				fontManager.makeFontString();
			}).click(function() {
				WorkflowInf.changeFontSize($(this).val());
				fontManager.makeFontString();
			});*/
/*			$('#text_bold').click(function() {              //active면 bold    normal
				var selection = window.getSelection();
				
				if($(this).hasClass('active') == true){
					$(this).removeClass('active');
					fontManager.textBold = "normal";
					WorkflowInf.changeFontWeight("normal");	//normal
					
					document.execCommand('normal');
				}else{
					$(this).addClass('active');
					fontManager.textBold = "bold";
					WorkflowInf.changeFontWeight("bold");	//normal
					
					document.execCommand('bold');
				}
				fontManager.makeFontString();
			});*/
			
			$('#text_size').change(function() {
				CommonEditPopupTools.changeFontSize($(this).val());
			});
			
			$('#text_style').change(function(e) {
				CommonEditPopupTools.changeFontFace($(this).val());
			});			
	
			$('#text_bold').click(function() {              //active면 bold    normal
				
				CommonEditPopupTools.changeFontStyle('bold');
			});				
/*			$('#text_italic').click(function() {

				if($(this).hasClass('active') == true){
					$(this).removeClass('active');
					fontManager.textItalic = "normal";
					WorkflowInf.changeFontStyle("normal");	//normal
					
					document.execCommand('normal');
					
				}else{
					$(this).addClass('active');
					fontManager.textItalic = "italic";
					WorkflowInf.changeFontStyle("italic");	//normal
					
					document.execCommand('italic');
				}
				fontManager.makeFontString();
			});*/
			$('#text_italic').click(function() {
				CommonEditPopupTools.changeFontStyle('italic');
			});			
			//color picker 선택시
/*			$('#text_color').ColorPicker({
				onSubmit : function(hsb, hex, rgb, el) {
					$(el).val(hex);
					$(el).ColorPickerHide();

				},
				color : '#00ff00',
				onShow : function(colpkr) {
					$(colpkr).fadeIn(500);
					return false;
				},
				onHide : function(colpkr) {
					$(colpkr).fadeOut(500);
					return false;
				},
				onChange : function(hsb, hex, rgb) {
					$('#text_color .fontcolor_fill').css('backgroundColor', '#' + hex);
					$('.font-color-bar.fontcolor_fill').css('backgroundColor', '#' + hex);
//				    $('#text_color .fontcolor_fill').css('color', '#' + hex);
					WorkflowInf.changeTextColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				},

				onBeforeShow : function(colpkr) {
//					$(this).ColorPickerSetColor($('#text_color .fontcolor_fill').css('backgroundColor'));
				    $(this).ColorPickerSetColor($('#text_color .fontcolor_fill').css('color'));
				}
			}); */
			
			$('#text_color').ColorPicker({
				onSubmit : function(hsb, hex, rgb, el) {
					$(el).val(hex);
					$(el).ColorPickerHide();
				},
				color : '#00ff00',
				onShow : function(colpkr) {
					$(colpkr).fadeIn(500);
					return false;
				},
				onHide : function(colpkr) {
					$(colpkr).fadeOut(500);
					return false;
				},
				onChange : function(hsb, hex, rgb) {
					$('#text_color .fontcolor_fill').css('color', '#' + hex);
					$('#text_color .fontcolor_fill').css('background-color', '#' + hex);
					CommonEditPopupTools.changeFontColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				},
				onBeforeShow : function(colpkr) {
				    var fillcolor = $('#text_color .fontcolor_fill').css('background-color');
					$(this).ColorPickerSetColor(fillcolor);
				}
			}); 			
			
			
			this.makeFontString();
			
		},
		makeFontString : function(){
			
			//'normal normal 12px "맑은 고딕"'
			//'italic bold 14px "맑은 고딕"'
			var style = '"' + $('#text_style').val() + '"';		
			var weight = fontManager.textBold;		//active면 bold    normal
			var size = $('#text_size').val() + "px";
			var face = fontManager.textItalic; //actvie면 italic  normal
		
			this.currFont = face + " " + weight + " " + size + " " +style;
		}
};


var lineChange = {
		currLineType:"SOLID",//DASH , DOT, SOLID
		currLineWidth:1.5, //1.5, 2.5, 4
		init :function(){
			//선 굵기
			$('#btnLineWidth01').click(function(){ lineChange.toggleLineWidth($(this), 1.5); });
			$('#btnLineWidth02').click(function(){ lineChange.toggleLineWidth($(this), 2.5); });
			$('#btnLineWidth03').click(function(){ lineChange.toggleLineWidth($(this), 4); });
			//선 굵기(workflowEditorLayer)
			$('#btnLineWidth01_tool').click(function(){ lineChange.toggleLineWidth($(this), 1.5); });
			$('#btnLineWidth02_tool').click(function(){ lineChange.toggleLineWidth($(this), 2.5); });
			$('#btnLineWidth03_tool').click(function(){ lineChange.toggleLineWidth($(this), 4); });			
			
			// 라인  종류 
			$('#line-solid').click(function(){ lineChange.toggleLineType($(this), "SOLID"); });
			$('#line-dash').click(function(){ lineChange.toggleLineType($(this), "DASH"); });
			$('#line-dot').click(function(){ lineChange.toggleLineType($(this), "DOT"); });
			
			$('#line-solid_tool').click(function(){ lineChange.toggleLineType($(this), "SOLID"); });
			$('#line-dash_tool').click(function(){ lineChange.toggleLineType($(this), "DASH"); });
			$('#line-dot_tool').click(function(){ lineChange.toggleLineType($(this), "DOT"); });			
/* 			
			//초기 셋팅
			$("#btnLineWidth01").trigger('click');//라인 굵기 선택
			$("#line-solid").trigger('click');//라인 종류 선택 */
		},
		//Line 두께 toggle
		toggleLineWidth : function($ele, width){
			//토글작업 
			$("#btnLineWidth01").removeClass("active");
			$("#btnLineWidth02").removeClass("active");
			$("#btnLineWidth03").removeClass("active");
			
			$("#btnLineWidth01_tool").removeClass("active");
			$("#btnLineWidth02_tool").removeClass("active");
			$("#btnLineWidth03_tool").removeClass("active");
			
			//console.log($ele);
			$ele.addClass("active");
			
			this.currLineWidth = width;
			WorkflowInf.changeLineWidth(width); 
			
		},
		//Line 버튼 누를때마다 활성화 toggle
		toggleLineType : function($ele, type){
			$("#line-solid").removeClass("active");
			$("#line-dash").removeClass("active");
			$("#line-dot").removeClass("active");
			
			$("#line-solid_tool").removeClass("active");
			$("#line-dash_tool").removeClass("active");
			$("#line-dot_tool").removeClass("active");
			$ele.addClass("active");
			
			this.currLineType = type;
			WorkflowInf.changeLineType(type); 			
			
		}	
};

	

/**
 * SearchMenuModal.jsp 팝업을 관리해준다. 
 * 
 * (List모드/ flow모드) 가 있고 (수정/신규) 입력이 있음.
 * 
 */
var SearchMenuManager = {
	popid : "#modal_menu",
	open : function(opt){
		callType = 'drag';
		if(opt != null){
			
			this.itemId = opt.id;			//수정할 객체 등록해 놓는다. (중요)
			
			
			$('.allAdd').hide();	//선택추가 버튼을 숨긴다. (incItemInsertPop용)
			$('.allAdd_').hide();	//선택추가 버튼을 숨긴다.  (searchMenuModal용)
			
			//탭 고르기
			this.$tabs = $(this.popid).find('.nav-tabs a');
			if(this.$tabs != null){
				
				if(opt.dataSource == "TEXT"){		//$$$ 신규. 20200601 
//					opt.dataSource = opt.iconType;
					this.fromText = true;	//택스트로 부터 온거면 링크 삭제 버튼을 추가한다. 그거 체크용 TODO
				}
				
				if(opt.dataSource == "SVG_MENU"){
					this.$tabs.eq(0).trigger('click');
				}else if(opt.dataSource == "SVG_SYSTEM"){
					this.$tabs.eq(1).trigger('click');
				}else if(opt.dataSource == "SVG_WORKFLOW"){
					this.$tabs.eq(2).trigger('click');
				}else if(opt.dataSource == "SVG_DIRECT" || opt.dataSource == "SVG_EDM" ){
					this.$tabs.eq(3).trigger('click');

					$('#linkUrl').val(opt.url);			//수정할 url 미리 등록해 놓기
				}
				
				if(opt.title == ''){
					$('#linkName').val(opt.title);		//수정할 택스트 미리 등록해 놓기 
					$('.linkNameArea').show();
				}else{
					$('#linkName').val(opt.text);
					$('.linkNameArea').hide();
				}
				
			}
		}else{
			$('.allAdd').show();	//선택추가 버튼을 보여준다.  (incItemInsertPop용)
			$('.allAdd_').show();	//선택추가 버튼을 보여준다.  (searchMenuModal용)
			try{ resetMenuModal();}catch(e){console.log(e);}	//리셋하기		//TODO 메뉴 모달
			
			this.itemId = null;
		}
		
		$(this.popid).modal();	//추가 팝업열기
	
		//insert가 실행 되기 전에  popup이  close될수 있다.
		
	},
	insert : function(linkObj){
//		var linkObj = {
//			linkType:type,
//			menuId: menuId,
//			sysCode: sysCode,
//			gbmCode: gbmCode,
//			menuName: menuName,
//			alertYn: alertYn,
//			menuCnt: menuCnt
//		}
		var id = "";
		if(this.itemId == null){
			id = WorkflowManager.insertNode(linkObj);	//신규.
		}else{
			//linkObj
			id = WorkflowManager.modifyNode(linkObj, this.itemId);	//수정.
		}
		
		this.itemId = null;
		return id;
	}
};




/**
 * 팝업 레이어 관리
 * 1개씩만 수정할수 있습니다.
 * 
 * openText, openLine, openObj로 나눠서 호출하면 됩니다.
 * 
 * CommonEditPopup.init();
 */
var CommonEditPopup = {
	popupId : ".ly_Workflow-edit",
	fontArea : ".Workflow-toolbar-font",	//폰트 영역 
	lineArea : ".Workflow-toolbar-line",	//라인영역
	textArea : ".ly-textarea",				//textarea
	rightclickId:".ly_Workflow-Rightclick", //우클릭레이어
	 //<a href="#" class="clse"><span></span></a>
	init : function(){
		this.$pop = $(this.popupId);
		
		this.$fontArea = this.$pop.find('.Workflow-toolbar-font');
		this.$lineArea = this.$pop.find('.Workflow-toolbar-line');
		this.$fontFace = this.$pop.find('select:eq(0)');
		this.$fontSize = this.$pop.find('select:eq(1)');
		this.$fontStyle = this.$pop.find('.fa-italic');
		this.$fontWeight = this.$pop.find('.fa-bold');
		
		this.$textAlignLeft   = this.$pop.find('#ly_text_align_left');   //텍스트 왼쪽 정렬
		this.$textAlignCenter = this.$pop.find('#ly_text_align_center'); //텍스트 가운데 정렬
		this.$textAlignRight  = this.$pop.find('#ly_text_align_right');  //텍스트 오른쪽 정렬
		
		
		this.$fontColor = this.$pop.find('.font-color').parent();	//fontcolor_fill 레이어 팝업용
		this.$fontColorFill = this.$pop.find('.fontcolor_fill');
		
		this.$Color 	= $("#popupColor");//라인컬러
		this.$ColorFill = $("#popupColor").find('div');//라인컬러
		
		this.$bgColor 	= $("#popupBgColor");//라인컬러
		this.$bgColorFill = $("#popupBgColor").find('div');//라인컬러
		
		this.$lineColor = $("#popupLineColor");//라인컬러
		this.$lineColorFill = $("#popupLineColor").find('div');//라인컬러
		
		this.$textArea = this.$pop.find('.ly-textarea');
		this.$inputArea = this.$pop.find('.ly-input');
		this.$buttonArea = this.$pop.find('.ly-button');	//메뉴수정 버튼 팝업 
		
		
		
		//=============================== 라인 설정
		//선 굵기
		this.$lineArea.find('.lineWeight100').click(function(){ CommonEditPopup.toggleLineWidth($(this), 1.5); });
		this.$lineArea.find('.lineWeight200').click(function(){ CommonEditPopup.toggleLineWidth($(this), 2.5); });
		this.$lineArea.find('.lineWeight300').click(function(){ CommonEditPopup.toggleLineWidth($(this), 4); });
		//라인  종류
		this.$lineArea.find('.linetType100').click(function(){ CommonEditPopup.toggleLineType($(this), "SOLID"); });
		this.$lineArea.find('.linetType300').click(function(){ CommonEditPopup.toggleLineType($(this), "DASH"); });
		this.$lineArea.find('.linetType200').click(function(){ CommonEditPopup.toggleLineType($(this), "DOT"); });
		
		
		//fontFace변경
		this.$fontFace.change(function(){
			CommonEditPopup.changeFontFace(this.value);
		});
		//fontStyle변경
		this.$fontSize.change(function(){
			CommonEditPopup.changeFontSize(this.value);
		});
		this.$fontWeight.click(function(){
			if($(this).hasClass('active')){
				CommonEditPopup.changeFontWeight('normal');
				$(this).removeClass('active');
			}else{
				CommonEditPopup.changeFontWeight('bold');
				$(this).addClass('active');
			}
		});
		this.$fontStyle.click(function(){
			if($(this).hasClass('active')){
				CommonEditPopup.changeFontStyle('normal');
				$(this).removeClass('active');
			}else{
				CommonEditPopup.changeFontStyle('italic');
				$(this).addClass('active');
			}
		});
		//텍스트 왼쪽 정렬
		this.$textAlignLeft.click(function(){
			CommonEditPopup.changeTextAlign('left');
		});
		//텍스트 가운데 정렬
		this.$textAlignCenter.click(function(){
			CommonEditPopup.changeTextAlign('center');
		});
		//텍스트 오른쪽 정렬
		this.$textAlignRight.click(function(){
			CommonEditPopup.changeTextAlign('right');
		});		
		
		//택스트가 수정될때마다. 글짜를 변경해준다.
		this.$ta = this.$pop.find('textarea');
		this.$ta.keyup(function(){
			CommonEditPopup.changeText($(this).val());
		});
		this.$in = this.$pop.find('input[type=text]');
		this.$in.keyup(function(){
			CommonEditPopup.changeText($(this).val());
		});
		//닫기 버튼
		this.$pop.find('.clse').click(function(){
			CommonEditPopup.Hide();
		});
		
		
		//버튼을 누르면 메뉴 수정 팝업 관리자로 연결 
		this.$buttonArea.find('.btn-modify-pop').click(function(){
			//선택된 객체 정보를 넘긴다.
			var opt = CommonEditPopup.item.getSaveData();
			console.log(opt);
			SearchMenuManager.open(opt);
			CommonEditPopup.Hide();
		});
		
		
		//color picker 선택시
		this.$Color.ColorPicker({
			onSubmit : function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			color : '#00ff00',
			onShow : function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide : function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange : function(hsb, hex, rgb) {
				CommonEditPopup.$ColorFill.css('backgroundColor', '#' + hex);
				CommonEditPopup.changeColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},
			onBeforeShow : function(colpkr) {
				var fillcolor = CommonEditPopup.$ColorFill.css('backgroundColor');
				$(this).ColorPickerSetColor(fillcolor);
			}
		}); 
		
		//color picker 선택시
		this.$bgColor.ColorPicker({
			onSubmit : function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			color : '#00ff00',
			onShow : function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide : function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange : function(hsb, hex, rgb) {
				CommonEditPopup.$bgColorFill.css('backgroundColor', '#' + hex);
				CommonEditPopup.changeBgColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},
			onBeforeShow : function(colpkr) {
				var fillcolor = CommonEditPopup.$bgColorFill.css('backgroundColor');
				$(this).ColorPickerSetColor(fillcolor);
			}
		}); 
		
		//color picker 선택시
		this.$lineColor.ColorPicker({
			onSubmit : function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			color : '#00ff00',
			onShow : function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide : function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange : function(hsb, hex, rgb) {
				CommonEditPopup.$lineColorFill.css('backgroundColor', '#' + hex);
				CommonEditPopup.changeLineColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},
			onBeforeShow : function(colpkr) {
				var fillcolor = CommonEditPopup.$lineColorFill.css('backgroundColor');
				$(this).ColorPickerSetColor(fillcolor);
			}
		}); 
		
		//color picker 선택시
		this.$fontColor.ColorPicker({
			onSubmit : function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			color : '#00ff00',
			onShow : function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide : function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange : function(hsb, hex, rgb) {
				CommonEditPopup.$fontColorFill.css('backgroundColor', '#' + hex);
//			    CommonEditPopup.$fontColorFill.css('color', '#' + hex);
				CommonEditPopup.changeTextColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},
			onBeforeShow : function(colpkr) {
				var fillcolor = CommonEditPopup.$fontColorFill.css('backgroundColor');
//			    var fillcolor = CommonEditPopup.$fontColorFill.css('color');
				$(this).ColorPickerSetColor(fillcolor);
			}
		}); 
		
		
		
		
	},
	openLine : function(item, stage, sender){
		this.stage = stage;
		var vo = item.getSaveData();
		
		//===================== 보기 설정
		this.$fontArea.show();      //폰트       
		this.$lineArea.show();      //라인종류     
		this.$textArea.hide();  //택스트 엔터 가능
		this.$inputArea.show();     //택스트 엔터 불가
		
		this.$Color.hide();			//기본컬러
		this.$bgColor.hide();		//배경컬러
		this.$lineColor.show();		//라인 보이기 
		this.$buttonArea.hide();	//menu수정 버튼 영역 
		
		//===================== 값 설정
		this.setFont(null, null, vo.textColor, vo.lineColor, vo.font);
		this.setLine(""+vo.lineWidth, ""+vo.lineType);
		
		//TODO setFont를 설정
//		lineColor 	
//		textColor
//		font
		
		this.$ta.val('');
		this.$in.val(vo.text);
		//===================== 위치설정  
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;
	    this.$pop.css({position:'absolute',top: y+'px', left: x+'px'});
		
	    this.Show(item);
	},
	openText : function(item, stage, sender){
		this.stage = stage;
		var vo = item.getSaveData();
		
		//===================== 보기 설정
		this.$fontArea.show();   //폰트       
		this.$lineArea.hide();   //라인종류     
		this.$textArea.show();   //택스트 엔터 가능
		this.$inputArea.hide();  //택스트 엔터 불가
		this.$Color.hide();			//기본컬러
		this.$bgColor.show();		//배경컬러
		this.$lineColor.hide();		//라인 보이기 
		
		this.$buttonArea.hide();	//menu수정 버튼 영역
		//===================== 값 설정
//		font		
//		textColor	
//		bgColor		
		this.setFont(null, vo.bgColor, vo.textColor, null, vo.font);
		this.$ta.val(vo.text);
		this.$in.val('');
		
		//===================== 위치설정  
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;
	    var w = sender.position.width;
	    
	    this.$pop.css({position:'absolute',top: y+'px', left: x+w+'px'});	
			
	    this.Show(item,true);
	},	
	openObj : function(item, stage, sender){	//객체를 수정할때  택스트와
		this.stage = stage;
		var vo = item.getSaveData();
		
		//===================== 보기 설정
		this.$fontArea.show();		//폰트
		this.$lineArea.hide();	//라인종류
		this.$textArea.hide();	//택스트 엔터 가능
		this.$inputArea.show();		//택스트 엔터 불가
		this.$Color.show();			//기본컬러
		this.$bgColor.show();		//배경컬러
		this.$lineColor.hide();		//라인 보이기 
		this.$buttonArea.show();	//menu수정 버튼 영역
		
		this.$rightclickPop.hide();//우클릭 레이어
		//===================== 값 설정
//		color		
//		bgColor		
//		textColor	
//		font 		
		this.setFont(vo.color, vo.bgColor, vo.textColor, null, vo.font);
		this.$ta.val('');
		this.$in.val(vo.text);
		
		//===================== 위치설정  
		
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;
	    var w = sender.position.width;
	    this.$pop.css({position:'absolute',top: y+'px', left: (x+w)+'px'});
		
	    this.Show(item);
	},
	//Line 두께 toggle
	toggleLineWidth : function($ele, width){
		//토글작업 
		this.$lineArea.find('.lineWeight100').removeClass("active");
		this.$lineArea.find('.lineWeight200').removeClass("active");
		this.$lineArea.find('.lineWeight300').removeClass("active");
		
		//console.log($ele);
		$ele.addClass("active");
		this.stage.changeLineStyle(this.item, {lineWidth: width});
		
	},
	//Line 버튼 누를때마다 활성화 toggle
	toggleLineType : function($ele, type){
		//라인  종류                                 
		this.$lineArea.find('.linetType100').removeClass("active");
		this.$lineArea.find('.linetType200').removeClass("active");
		this.$lineArea.find('.linetType300').removeClass("active");
		
		$ele.addClass("active");
		this.stage.changeLineStyle(this.item, {lineType: type}); 			
		
	},
	setFont : function(color, bgcolor, textcolor, linecolor, font){
		
		if(color != null){
			this.$ColorFill.css('backgroundColor', color);
		}
		if(bgcolor != null){
			this.$bgColorFill.css('backgroundColor', bgcolor);
		}
		if(linecolor != null){
			this.$lineColorFill.css('backgroundColor', linecolor);
		}
		if(textcolor != null){
			this.$fontColorFill.css('backgroundColor', textcolor);
//		    this.$fontColorFill.css('color', textcolor);
		}
		
		
		
		//무조건 공백이 3개 이상이어야 합니다.
		var fontsws = font.substring(0, font.indexOf('"')-1);
		var fontface = font.substring(font.indexOf('"'), font.length-1).replace('"', "");
		var pFont = fontsws.split(" ");
		if(pFont.length > 2){
			var fontStyle = pFont[0];	//italic
			var fontWeight = pFont[1];	//bold
			var fontSize = Number(pFont[2].replace("px", ""));
			var fontFace = fontface;
			
			this.$fontStyle.removeClass('active');
			this.$fontWeight.removeClass('active');
			if(fontStyle == "italic"){
				this.$fontStyle.addClass('active');
			}
			if(fontWeight == "bold"){
				this.$fontWeight.addClass('active');
			}
			this.$fontFace.val(fontFace);
			this.$fontSize.val(fontSize); 
			
			//$("#selectBox option:contains('searchText')").prop('selected', 'selected');
			
		}else{
			console.log('Error : please check Mask of Font.(style weight size "face")');
		}
	},
	setLine : function(lineWidth, lineType){
		this.$lineArea.find('.line').removeClass('active');
		
		
		if(lineWidth == "1.5"){
			this.$lineArea.find('.lineWeight100').addClass("active");
		}else if(lineWidth == "2.5"){ 
			this.$lineArea.find('.lineWeight200').addClass("active");
		}else if(lineWidth == "4"){ 
			this.$lineArea.find('.lineWeight300').addClass("active");
		}
		
		if(lineType == 'SOLID' || lineType == "null" || lineType == null){
			this.$lineArea.find('.linetType100').addClass("active");
		}else if(lineType == 'DASH' || lineType == "15,5"){ 
			this.$lineArea.find('.linetType300').addClass("active");
		}else if(lineType == 'DOT' || lineType == "5,5"){ 
			this.$lineArea.find('.linetType200').addClass("active");
		}

		
	},
	//고딕, ..
	changeFontFace :function(face){
//		if(this.item != null)
			this.stage.setFontFace(this.item, face);
	},
	changeFontSize :function(size){
//		if(this.item != null)
			this.stage.setFontSize(this.item, size);
	},
	//이택릭
	changeFontStyle :function(style){
//		if(this.item != null)
			this.stage.setFontStyle(this.item, style);
	},
	changeTextAlign :function(style){
//		if(this.item != null)
		this.stage.setTextAlign(this.item, style);
	},
	changeFontWeight :function(weight){
//		if(this.item != null)
			this.stage.setFontWeight(this.item, weight);
	},
	changeColor : function(color){
//		if(this.item != null)
			this.stage.setColor(this.item, color);
	},
	changeTextColor : function(color){
//		if(this.item != null)
			this.stage.setTextColor(this.item, color);
	},
	changeBgColor : function(color){
//		if(this.item != null)
			this.stage.setBgColor(this.item, color);
	},
	changeLineColor : function(color){
//		if(this.item != null)
			this.stage.setColor(this.item, color);
	},
	changeText : function(text){
//		if(this.item != null)
			this.stage.setText(this.item, text);
	},
	Show : function(item, isTextArea){
		$(this.popupId).show();
		this.item = item;
		
		if(isTextArea === true){
			this.$ta.focus();
		}else{
			this.$in.focus();
		}
	},
	Hide : function(){
		$(this.popupId).hide();
		this.item = null;			//선택된 item이 들어 온다.
	}
};






	
/**
 * Workflow Interface View Mode 
 */
var WorkflowInf_view = {
		init: function(){
			this.stage = hetajs.init(document.getElementById("canvas-2d_view"));
			this.stage.mode = "VIEW";    //EDIT
			this.stage.Start();
		},
		/*
			데이터 load후 stage에 뿌리기
		*/
		loadWorkflow : function(mbp,callback){
			
			this.stage.removeAll();
			
			//신규 로드 
			var json = DuoMapper.MbpToDuo(mbp,'view');			//기존 데이터 마이그레이션
			this.stage.loadJson(json, callback);		//워크 플로우에 item 넣어주는 함수 
			return json.linkObjs;		//{nodeId: {nodeId, nodeType, menuId, menuCnt, gbmCode, sysCode}}
		}
};




/*
var webEditorMgmt = {
	selectedItem : "",
	init : function(item){	//추가
// 			var s = '<div id="'+item.id+'" contenteditable="true" style="position:absolute; border:1px solid red;z-index:1;">'+item.text+'</div>';
		var s = '<div class="webeditor" id="'+item.id+'" activeindex="0" style="display:none;position:absolute;z-index:0;overflow:hidden;"><div style="text-align:center;vertical-align:middle;display:table-cell;-ms-word-break: break-all;" contenteditable="true" >'+item.text+'</div></div>';
		$(s).insertAfter('#canvas-2d');
		
		var motivatebox = document.getElementById(item.id);
		 
		motivatebox.addEventListener('mouseup', function(e){
		//캐럿을 저장한다.	
		Caret.Save();
		    
		}, false)
		
		//item을 저장한다.
		this.selectedItem = item;
		
	},
//	setText : function(item){
//		$('#'+item.id+' > div').html(item.text);
//	},
	getText : function(item){		//마지막에 저장핧때 
		return $('#'+item.id+' > div').html();
	},
	update : function(item){	//수정
		
		//좌표 변경, 크기 변경 , zoom설정
		var x = item.x;
		var y = item.y;
		var w = item.w;
		var h = item.h;
		x += $(window).scrollLeft();		//매번하지 말자.!!! TODO 
		y += $(window).scrollTop();
		
		var idx = Number(item.index) + Number($('#'+item.id).attr('activeindex'));
		$('#'+item.id).css({top: y , left: x , width: w , height:h , zoom:item.zoom, zIndex:idx}).show();
		$('#'+item.id+' > div').css({width: w , height:h});
	},
	destroy : function(item){	//삭제
		$('#'+item.id).remove();
	},
	active : function(item){
		$('#'+item.id).attr('activeindex',500);
		$('#'+item.id).css('border','1px dashed #aaa');
		$('#'+item.id+' > div').attr({contenteditable:true}).blur();
		this.selectedItem = item.id;
	}, 
	deactive : function(item){
		$('#'+item.id).attr('activeindex',0);
		$('#'+item.id).css('border','none');
		$('#'+item.id+' > div').attr({contenteditable:false});		//blur를 해서 커서를 분리한다. del키를 누를때 focus를 체크 하기 때문에 
		this.selectedItem = "";
		
		Caret.Clean();
	}
	
};
*/




/**
 * Workflow Interface Edit Mode
 * @checkpoint : DataSource는 Resource를 view mode와 함께 사용한다. 
 */
var WorkflowInf = {
		init : function(){

			
			
			//키보드 이벤트 연속 막기  삭제 버튼 누르면 객체를 삭제하는데.... canvasUi위에 있을때만 동작 
			document.onkeyup = function(event){
				
				//화살표키와 쉬프트 키가 눌렸을때.
				if(event.keyCode > 36 && event.keyCode < 41){	//화살표 :좌상우하  37,38,39,40
					if(event.shiftKey){					
						//캐럿을 저장한다.	
						Caret.Save();
					}
				}
				
					if(WorkflowInf.stage.focusOnCanvas === true){		//커서가 캔버스에 있을때... 
						if(event.keyCode === 46){	//del키
								//포커스 되어 있지 않으면 삭제 한다.
								if(!$('.webeditor > div').is(':focus')){		//하지만 편집중이면 삭제하지 않는다.
									//선택된 객체 삭제 
									WorkflowInf.removeObjects();
									//editbox닫기
									CommonEditPopupTools.Hide();
								}
						}
						//Ctrl + C , V
						if(event.ctrlKey){
							if(event.keyCode === 67){	//c
								//selectedIcon을 목록에 복사
								WorkflowInf.copyObjects();
							}else if(event.keyCode === 86){	//v
								WorkflowInf.pasteObjects();
							}
						}
					}
			};
			
			
			
			hetajs.DataSource.Add("WebEditorMgmt",{type:"LINK", target:function(d){
				if(d.data.stage.mode == 'VIEW'){
					d.data.id = d.data.stage.id + d.data.id;	//id를 stageId와 itemId조합으로 구성.	
					return WebEditorMgmtView[d.type] && WebEditorMgmtView[d.type](d.data);	//update, init, destroy, active, deactive
				}else{
					return webEditorMgmt[d.type] && webEditorMgmt[d.type](d.data);	//update, init, destroy, active, deactive
				}
				
			}});
			
			//링크 아이콘 버튼을 누르면 동작
			hetajs.DataSource.Add("ChangeLinkPop",{type:"LINK", target:function(item, stage, sender){
				var opt = item.getSaveData();
				WorkflowInf.changeLinkPop(opt);
			}});
			
			
			
			/** Datasource란...  
			
				CALLBACK : 내부에서 옵션값을 외부로 부터 받을때 사용
				LINK : 내부에서 특정 액션을 발생할때 외부에서 호출되는 함수
				IMAGE : 이미지 객체
				TEXT : 스트링을 그대로 전달
			*/
			
			//blur될때 마다 호출된다. 
			hetajs.DataSource.Add("CanvasBlur",{type:"LINK", target:function(item, stage, sender){
				//다른 모든 팝업을 닫아준다. 			
				CommonEditPopup.Hide();
				CommonEditPopupTools.Hide();            // tool 레이어
				CommonEditPopupTools.Hide_rightClick(); //우클릭 레이어
				Caret.Clean();
				buttonControl.allBtnReset();//버튼 초기화
			}});
			
			
			//옵젝트 입력할때 컬러를 자동으로 가져가기 위함.  
			hetajs.DataSource.Add("textOptionsCallback",{type:"CALLBACK", target:function(item, stage, sender){
				sender.bgColor = colorChange.currBgColor;
				sender.textColor = "#222222";
				sender.font = fontManager.currFont;		//'italic bold 14px "맑은 고딕"'
				
				
				
				sender.lineColor = colorChange.currColor;		// $("colorpicker").val(); 이런식..!
	 			sender.lineWidth = lineChange.currLineWidth; 	//DOT, DASH, SOLID
				sender.lineType = lineChange.currLineType; 	//DOT, DASH, SOLID
				
				console.log(sender);
				return sender;  
			}});
			
			//옵젝트 입력할때 컬러를 자동으로 가져가기 위함.  
			hetajs.DataSource.Add("itemOptionsCallback",{type:"CALLBACK", target:function(item, stage, sender){
				sender.color = colorChange.currColor;		//icon컬러
				sender.bgColor = colorChange.currBgColor;
				sender.textColor = "#222222";
				sender.font = fontManager.currFont;
				
				return sender;  
			}});
			
			//Link연결시 [[[수동]]] 연결할때 기존의 컬러와 설정을 가져오기    
			hetajs.DataSource.Add("lineOptionsCallback",{type:"CALLBACK", target:function(item, stage, sender){
				sender.color = "#00ff00";		// $("colorpicker").val(); 이런식..!
	 			sender.lineWidth = lineChange.currLineWidth; 	//DOT, DASH, SOLID
				sender.lineType = lineChange.currLineType; 	//DOT, DASH, SOLID
//	 			sender.color = "#00ff00";		//이곳의 라인 컬러 또는 택스트 컬러를 할당해서 보낸다.
				sender.font = fontManager.currFont;
				
				return sender;  
			}});
			

			//삭제하면 동작하는 액션. 
	        hetajs.DataSource.Add("RemoveItemCallback",{type:"LINK", target:function(item, stage, sender){
	            //item.id 가 node id입니다.
//	            var vo = item.getSaveData();
//	            if(vo.dataSource != "SVG_TEXT" && vo.dataSource != "SVG_IMAGE"){
//	            	listDisplayControl.delObj(vo.id);
//	            }
	        }});
			
			//Setting Event
			//미리 등록해 놓습니다.
	        hetajs.DataSource.Add("LayerExpandButton",{type:"IMAGE", target:"/img/workflow/workflow_expand.png"});
	        
			hetajs.DataSource.Add("LayerDelButton",{type:"IMAGE", target:"/img/workflow/del.png"});
			hetajs.DataSource.Add("LayerEditButton",{type:"IMAGE", target:"/img/workflow/edit.png"});
			hetajs.DataSource.Add("LayerSwapButton",{type:"IMAGE", target:"/img/workflow/arrow.png"});
//	 		hetajs.DataSource.Add("ConnectIcon",{type:"IMAGE", target:"/img/icon_system.png"});
		

			//폴리곤 수정은 공백을 대문자 L로 변경 입력 : M30.293,50.229L28.181,57.891L41.741,57.891L39.628,50.229z
			//Rect 수정은 공백을 대문자 R로 변경 입력 : 

			//Workflow 플로우차트 모양
	 		hetajs.DataSource.Add("SVG_WORKFLOW",{type:"TEXT", target:'M63,0C28.206,0,0,28.207,0,63s28.206,63,63,63s63-28.207,63-63S97.794,0,63,0z M104,93.274c0,1.275-1.033,2.31-2.31,2.31 H81.685c-1.275,0-2.31-1.034-2.31-2.31V80.105c0-1.275,1.035-2.311,2.31-2.311h7.378V60.866H64.305v16.929h7.691 c1.277,0,2.31,1.035,2.31,2.311v13.169c0,1.275-1.033,2.31-2.31,2.31H51.993c-1.277,0-2.31-1.034-2.31-2.31V80.105 c0-1.275,1.033-2.311,2.31-2.311h7.692V60.866H34.925v16.929h7.379c1.275,0,2.31,1.035,2.31,2.311v13.169 c0,1.275-1.035,2.31-2.31,2.31H22.301c-1.277,0-2.311-1.034-2.311-2.31V80.105c0-1.275,1.034-2.311,2.311-2.311h8.004V58.556 c0-1.275,1.035-2.31,2.31-2.31h27.069v-8.807H41.451c-1.277,0-2.31-1.034-2.31-2.31V23.568c0-1.275,1.033-2.311,2.31-2.311h41.07 c1.276,0,2.311,1.035,2.311,2.311V45.13c0,1.275-1.035,2.31-2.311,2.31H64.305v8.807h27.069c1.277,0,2.31,1.034,2.31,2.31v19.239 h8.006c1.277,0,2.31,1.035,2.31,2.311V93.274z M39.373,90.001c0,0.353-0.351,0.639-0.783,0.639H25.765c-0.432,0-0.783-0.286-0.783-0.639v-6.346 c0-0.353,0.351-0.639,0.783-0.639h12.825c0.432,0,0.783,0.286,0.783,0.639V90.001z M77.344,40.126c0,0.632-0.735,1.146-1.641,1.146H48.85c-0.906,0-1.641-0.514-1.641-1.146V28.749 c0-0.633,0.735-1.146,1.641-1.146h26.854c0.906,0,1.641,0.514,1.641,1.146V40.126z M69.294,90.001c0,0.353-0.351,0.639-0.783,0.639H55.686c-0.432,0-0.783-0.286-0.783-0.639v-6.346 c0-0.353,0.351-0.639,0.783-0.639h12.825c0.432,0,0.783,0.286,0.783,0.639V90.001z M98.849,90.001c0,0.353-0.351,0.639-0.783,0.639H85.241c-0.432,0-0.783-0.286-0.783-0.639v-6.346 c0-0.353,0.351-0.639,0.783-0.639h12.825c0.432,0,0.783,0.286,0.783,0.639V90.001z'});
			//System 모니터 모양 
			hetajs.DataSource.Add("SVG_SYSTEM",{type:"TEXT", target:'M62.693-0.258c-34.794,0-63,28.207-63,63s28.206,63,63,63s63-28.207,63-63S97.487-0.258,62.693-0.258z M99.209,75.091 c0,5.76-4.687,10.445-10.447,10.445H72.979l4.104,14.885H45.328l4.104-14.885H33.647c-5.759,0-10.445-4.686-10.445-10.445V36.785 c0-5.76,4.686-10.445,10.445-10.445h55.115c5.761,0,10.447,4.686,10.447,10.445V75.091z M28.046,75.091c0,3.088,2.513,5.602,5.601,5.602h55.115c3.09,0,5.604-2.514,5.604-5.602v-2.022H28.046V75.091z M54.455,85.536 L51.688,95.578 L70.723,95.578 L67.955,85.536z M88.762,31.184H33.647c-3.088,0-5.601,2.513-5.601,5.602v31.439h66.319V36.785C94.365,33.696,91.852,31.184,88.762,31.184z M70.557,56.609l-7.948-7.948L51.612,59.656H33.85v-4.844h15.756L62.608,41.81l9.954,9.956h9.528l-0.437-0.437l3.426-3.425 l8.705,8.705H70.557z'});
			//Menu 리스트 모양 
	 		hetajs.DataSource.Add("SVG_MENU",{type:"TEXT", target:'M63,0C28.206,0,0,28.207,0,63s28.206,64,63,64S126,97.793,126,63S97.793,0,63,0z M35.159,91.341 c-3.548,0-6.425-2.877-6.425-6.425c0-3.549,2.877-6.425,6.425-6.425c3.549,0,6.425,2.876,6.425,6.425 C41.583,88.464,38.708,91.341,35.159,91.341z M35.159,69.925c-3.548,0-6.425-2.877-6.425-6.425c0-3.549,2.877-6.425,6.425-6.425 c3.549,0,6.425,2.876,6.425,6.425C41.583,67.048,38.708,69.925,35.159,69.925z M35.159,48.509c-3.548,0-6.425-2.877-6.425-6.425 c0-3.549,2.877-6.425,6.425-6.425c3.549,0,6.425,2.876,6.425,6.425C41.583,45.632,38.708,48.509,35.159,48.509z M97.265,87.593 c0,1.183-0.959,2.142-2.142,2.142H48.008c-1.183,0-2.142-0.959-2.142-2.142v-5.354c0-1.184,0.959-2.142,2.142-2.142h47.115 c1.183,0,2.142,0.958,2.142,2.142V87.593z M97.265,66.177c0,1.183-0.959,2.142-2.142,2.142H48.008c-1.183,0-2.142-0.959-2.142-2.142 v-5.354c0-1.184,0.959-2.142,2.142-2.142h47.115c1.183,0,2.142,0.958,2.142,2.142V66.177z M97.265,44.761 c0,1.183-0.959,2.142-2.142,2.142H48.008c-1.183,0-2.142-0.959-2.142-2.142v-5.354c0-1.184,0.959-2.142,2.142-2.142h47.115 c1.183,0,2.142,0.958,2.142,2.142V44.761z'});
			//Link 띠 모양
			hetajs.DataSource.Add("SVG_DIRECT",{type:"TEXT", target:'M62.73-0.059c-34.794,0-63,28.207-63,63s28.206,64,63,64s63.001-29.207,63.001-64S97.524-0.059,62.73-0.059z M72.89,84.051 c-0.016,0.018-0.034,0.035-0.052,0.054l-9.62,9.619c-8.483,8.482-22.287,8.481-30.769,0c-8.484-8.483-8.484-22.287,0-30.771 l5.311-5.312c1.409-1.408,3.834-0.473,3.908,1.519c0.093,2.536,0.548,5.085,1.387,7.546c0.283,0.834,0.081,1.756-0.542,2.379 l-1.873,1.872c-4.012,4.013-4.138,10.545-0.165,14.596c4.012,4.09,10.604,4.114,14.647,0.072l9.619-9.617 c4.035-4.035,4.018-10.558,0-14.576c-0.531-0.529-1.065-0.939-1.481-1.227c-0.525-0.36-0.97-1.169-0.994-1.805 c-0.057-1.513,0.479-3.071,1.674-4.266l3.014-3.014c0.79-0.792,2.03-0.888,2.946-0.249c0.87,0.608,2.186,1.712,2.937,2.462 C81.392,61.896,81.272,75.622,72.89,84.051z M93.012,63.929L87.7,69.24c-1.408,1.41-3.833,0.475-3.906-1.517 c-0.093-2.538-0.548-5.086-1.387-7.546c-0.283-0.835-0.081-1.756,0.542-2.379l1.874-1.873c4.012-4.012,4.137-10.544,0.165-14.595 c-4.011-4.092-10.605-4.114-14.647-0.073l-9.619,9.618c-4.036,4.035-4.019,10.557,0,14.575c0.53,0.529,1.063,0.939,1.48,1.228 c0.525,0.36,0.97,1.168,0.995,1.804c0.056,1.513-0.479,3.072-1.675,4.267l-3.014,3.014c-0.79,0.79-2.03,0.888-2.946,0.249 c-0.871-0.609-2.187-1.712-2.938-2.462c-8.553-8.562-8.434-22.288-0.052-30.717c0.016-0.018,0.034-0.036,0.052-0.054l9.62-9.619 c8.483-8.483,22.285-8.482,30.769,0S101.496,55.447,93.012,63.929z'});

			hetajs.DataSource.Add("SVG_EDM",{type:"TEXT", target:'M58.354,61.608v11.076h1.357c3.201,0,4.921-1.88,4.921-5.587c0-3.726-1.72-5.489-4.921-5.489H58.354z M74.629,27.578 L73.925,27.582 L74.633,27.582z M86.723,43.833H76.084c-3.329,0-6.038-2.708-6.038-6.036V27.604L39.8,27.771v66.771l46.952-0.192V40.278l-0.029-0.03 V43.833z M79.883,62.624l-1.192,3.442l-2.592,7.106H74.64l-2.612-7.106l-1.176-3.442h-0.079c0.101,1.356,0.282,3.28,0.282,4.614 v7.371H68.95V59.707h2.693l2.733,7.531c0.346,0.992,0.649,2.007,0.994,3.018h0.102c0.344-1.011,0.628-2.025,0.972-3.018 l2.692-7.531h2.713v14.902h-2.186v-7.371c0-1.334,0.183-3.258,0.303-4.614H79.883z M46.709,48.792h32.108 c1.636,0,2.962,1.102,2.962,2.463c0,1.358-1.326,2.461-2.962,2.461H46.709c-1.637,0-2.965-1.103-2.965-2.461 C43.744,49.894,45.072,48.792,46.709,48.792z M67.06,67.098c0,4.84-2.609,7.512-7.064,7.512h-3.99V59.707h3.868 C64.451,59.707,67.06,62.238,67.06,67.098z M52.883,65.821v1.986h-5.467v4.818h6.683v1.983h-9.032V59.707h8.806v1.965h-6.458v4.149 H52.883z M79.386,87.018H47.279c-1.639,0-2.964-1.102-2.964-2.461c0-1.361,1.326-2.463,2.964-2.463h32.106 c1.639,0,2.964,1.102,2.964,2.463C82.35,85.916,81.024,87.018,79.386,87.018z M75.673,28.672 L75.673,38.207 L84.775,38.207z M63,0C28.206,0,0,28.207,0,63s28.206,63,63,63s63-28.207,63-63S97.794,0,63,0z M92.478,94.711 c0,3.331-2.708,6.042-6.038,6.042H39.767c-3.33,0-6.038-2.711-6.038-6.042V28.232c0-3.33,2.708-6.04,6.038-6.04h36.035 c0.859,0,1.686,0.334,2.304,0.934l13.364,12.938c0.645,0.623,1.009,1.482,1.009,2.379V94.711z'});
			
			
			

			//text edit레이어 팝업을 연다.
			hetajs.DataSource.Add("TextEditPopupLink",{type:"LINK", target:function(item, stage, sender){
				
				var rect = stage.canvas.getBoundingClientRect();		//canvas 모서리 좌표.
				sender.position.x += rect.left;
				sender.position.y += rect.top;
				
				
				var pArr = stage.getSelectedObjects();
				
				//레이어 팝업을 표시 전에 다수의 객체가 선택 되어 있는지 확인 한다...
				if(pArr != null && pArr.length > 1){
					CommonEditPopupTools.openTextObjs(item, stage, sender);//하나이상 선택 되어 있는 경우
				}else{
					CommonEditPopupTools.openTextObj(item, stage, sender);//하나만 선택 되어 있는 경우
				}
				
				//webeditor에서 마우스 우측 버튼 동작 
				$(".webeditor").bind("mousedown", function( event ){
					//우측 클릭시에만 레이어 팝업 호출
				  if ((event.button == 2) || (event.which == 3)) {  //우클릭 표시
					  var pArr = stage.getSelectedObjects();
					  
						//레이어 팝업을 표시 전에 다수의 객체가 선택 되어 있는지 확인 한다...
						if(pArr != null && pArr.length > 1){
							CommonEditPopupTools.openText_right(item, stage, sender,   true);//다중 선택 되어 있는 경우
						}else{
							CommonEditPopupTools.openText_right(item, stage, sender,   false);//하나만 선택 되어 있는 경우
						}						  
					  
				  }else{                                           //레이어 팝업
					  CommonEditPopupTools.Hide_rightClick();
				  }
				  
				  event.stopPropagation();
	              //event.preventDefault();
				});				
				
				
			}});
			
			//item에 마우스 우측 클릭시 
//			hetajs.DataSource.Add("TextEditPopupLinkRight",{type:"LINK", target:function(item, stage, sender){
//				
//				var rect = stage.canvas.getBoundingClientRect();		//canvas 모서리 좌표.
//				sender.position.x += rect.left;
//				sender.position.y += rect.top;
//				
//				var pArr = stage.getSelectedObjects();
//						
//				//레이어 팝업을 표시 전에 다수의 객체가 선택 되어 있는지 확인 한다...
//				if(pArr != null && pArr.length > 1){
//					CommonEditPopupTools.openText_right(item, stage, sender,   true);//다중 선택 되어 있는 경우
//				}else{
//					CommonEditPopupTools.openText_right(item, stage, sender,   false);//하나만 선택 되어 있는 경우
//				}
//				sender.event.stopPropagation();
//				sender.event.preventDefault();
//				
//			}});
			

			
			//Item을 수정할때 호출하는 함수 입니다.
/*			hetajs.DataSource.Add("EditPopupLink",{type:"LINK", target:function(item, stage, sender){
				//this.id는 item객체의 id입니다.
//				console.log("Object 수정 하는 레이어를 호출 : " + item.icon.dataSource);
				
				//
//				var opt = item.getSaveData();
//				if(opt.dataSource == "SVG_DIRECT" || opt.dataSource == "SVG_EDM" ){
//					linkManager.open(item, opt);				
//				}else{
					CommonEditPopup.openObj(item, stage, sender);
//				}
				
				
			}});*/
			
			//line을 수정할때 호출하는 함수 입니다.
			hetajs.DataSource.Add("LineEditPopupLink",{type:"LINK", target:function(item, stage, sender){
//				CommonEditPopup.openLine(item, stage, sender);
				
				var rect = stage.canvas.getBoundingClientRect();		//canvas 모서리 좌표.
				sender.position.x += rect.left;
				sender.position.y += rect.top;
				
				
				CommonEditPopupTools.openLine(item, stage, sender);//하나만 선택 되어 있는 경우
			}});
			
			
			
			//line을 수정할때 호출하는 함수 입니다.
			hetajs.DataSource.Add("DoubleClickMenuPath",{type:"LINK", target:function(item, stage, sender){
				//item = 메뉴 text
				  var dummy = document.createElement("textarea");
				  document.body.appendChild(dummy);
				  dummy.value = item;
				  dummy.select();
				  document.execCommand("copy");
				  document.body.removeChild(dummy);
				  
				  alert("clipboard에 Menu경로가 저장되었습니다.");
				
			}});
			
			
			
			
			
			
			this.stage = hetajs.init(document.getElementById("canvas-2d"),document.getElementById("canvas-ui"));
			this.stage.mode = "EDIT";
			this.stage.controlMode = "MOUSE";	//DRAG
			this.stage.Start();
			
		},
        zoomToFit : function(showZoomToFit){    //옵션
            //리사이즈 div의 사이즈 가져오기
            var offsetScreen = {x:0, y:0};
            if(typeof showZoomToFit == 'function'){
                offsetScreen = showZoomToFit();
            }
            
            this.stage.zoomToFit(offsetScreen.x, offsetScreen.y, offsetScreen.w, offsetScreen.h);       //왼쪽으로 붙이기              ... offsetScreen.w 는 작은 화면 사이즈 .
            
            this.stage.Resize();
        },		
		//여러개를 선택했을때만 동작. 
		alignObjects: function(direction){	//direction	LEFT, UP, RIGHT, DOWN	//$$$멀티 선택에선 라인 선택불가.
			var pArr = this.stage.getSelectedObjects();
			if(direction == 'BACK'){
				this.stage.sendToBack();				//맨뒤
			}else if(direction == 'FRONT'){
				this.stage.bringToFront();				//맨앞
			}else{
				if(pArr != null && pArr.length > 1){
					this.stage.alignObjects(pArr,direction);	//left정렬 
				}else{
					alert("객체를 2개 이상 선택해 주세요.(Line 제외)");
				}
			}
		},
		changeTooltip : function(fn){		//WorkflowInf.changeTooltip
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
			this.stage.Render();
		},
		//링크 설정하기
		// WorkflowInf.changeLinkPop(item 또는 {id:"I09823094802394"});
		changeLinkPop : function(opt){
			if(opt != null){
				SearchMenuManager.open(opt);	//opt.id필수 ( 빈통에는 id만 있음)
			}else{
				//아이콘을 선택했고 opt가 null이면  
				var pArr = this.stage.getSelectedObjects();
				if(pArr.length > 0){
					//다른 모든 팝업을 닫아준다
					opt = pArr[0].getSaveData();	//선택한것 중에서 1개만 가져온다.
					SearchMenuManager.open(opt);
				}
			}
		},
		//링크 제거 
		removeLink : function(){
			var pArr = this.stage.getSelectedObjects();
			for(var i in pArr){
				this.stage.setIcon(pArr[i], null);	//아이콘에 null을 넣어서 안보이게 한다.
				
				this.stage.setUrl(pArr[i], null);	//url도 null
				
				//linkObj를 제거 한다.
				WorkflowManager.removeLinkObj(pArr[i].id);
			}
		},
		
		//화살표인지 손가락인지.설정 .
		changeControlMode : function(mode){	//mode : MOUSE DRAG(기본)
			this.stage.controlMode = mode;
		},
		
		
		//링크를 달면 아이콘이 보인다.. 그래서 아이콘을 제거 한다.
		changeIconColor : function(color){	//아이콘 컬러 입니다.
			var pArr = this.stage.getSelectedObjects();
			for(var i in pArr){
				this.stage.setIconColor(pArr[i], color);
			}
		},
		//객체의 색을 변경.(아이콘에 해당)
		changeColor : function(color){
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setColor(pArr[i], color);
			}
		},
		//객체의 글자 색을 변경.
		changeTextColor : function(color){
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setTextColor(pArr[i], color);
			}
		},
		//객체의 배경색을 변경.
		changeBgColor : function(color){
			var pArr = this.stage.getSelectedObjects();
			for(var i in pArr){
				this.stage.setBgColor(pArr[i], color);
			}
		},
		//선택된 라인의 두깨를 설정.
		changeLineWidth : function(w){
			var lineArr = this.stage.getSelectedAllObjects();			//선택된 객체.		getSelectedLineObjects
			for(var i in lineArr){
				this.stage.changeLineStyle(lineArr[i], {lineWidth: w});
			}
		},
		//DASH, SOLID, DOT
		changeLineType : function(type){
			var lineArr = this.stage.getSelectedAllObjects();			//getSelectedLineObjects
			for(var i in lineArr){
				this.stage.changeLineStyle(lineArr[i], {lineType: type});
			}
			
		},
		//RECT, ROUND, CIRCLE, ARROW, DIAMOND   202006 추가
		changePolygonType : function(type){
			var pArr = this.stage.getSelectedObjects();
			for(var i in pArr){
				this.stage.changePolygonType(pArr[i], type);
			}
			
		},
		
		/** ========================================================
		폰트 관련 수정 함수
		*/
		//객체의 글자 색을 변경.
		changeTextColor : function(color){
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setTextColor(pArr[i], color);
			}
			
			Caret.Load();
			
			document.execCommand('ForeColor', false, color);
		},
		changeFontStyle : function(style){	//italic, normal 두종류.
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setFontStyle(pArr[i], style);
			}
		},
		changeTextVAlign : function(align){	//top, middle, bottom   신규 추가 
			var pArr = this.stage.getSelectedObjects();
			for(var i in pArr){
				this.stage.setTextVAlign(pArr[i], align);
			}
		},
		changeTextAlign : function(align){	//italic, normal 두종류.
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setTextAlign(pArr[i], align);
			}
		},
		changeFontWeight : function(weight){	//bold, normal 두종류.
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setFontWeight(pArr[i], weight);
			}
		},
		changeFontSize : function(size){	//12 이상 으로
			size = Number(size);
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setFontSize(pArr[i], size);
			}
		},
		changeFontFace : function(face){	//굴림체 등등 폰트 체
			var pArr = this.stage.getSelectedAllObjects();
			for(var i in pArr){
				this.stage.setFontFace(pArr[i], face);
			}
		},
	
		/** ========================================================
			사이즈 관련 수정 함수 
		*/
		zoomIn : function(){
			this.stage.zoomIn(100);
			this.stage.Render();
		},
		zoomOut : function(){
			this.stage.zoomOut(100);
			this.stage.Render();
		},
		reset : function(){
			
			if(!confirm("Reset 하시겠습니까? \n데이터를 다시 불러옵니다.\n(신규 작성시는 데이터가 사라집니다.)")){
				return;
			}
			
			//if(this.jsonData == null){		//이걸 제거 하지 않으면 list갔다가 flow갔을때 reset하면 라인이 남는다.
			this.stage.removeAll();
			//}
			
			this.stage.loadJson(this.jsonData);
			this.stage.Render();
		},
		setDefaultOpen : function(id, YN){
			this.stage.setDefaultOpen(id, YN);
		},
		/* ==========================================
		text를 추가한다.
	*/
	insertTextPop : function(x, y, pType){
		//TODO 입력 팝업이 뜬다.
		if(pType == null) pType = 'RECT';
		
		this._insertTextBox("", x, y, pType);	
	},
	
	//글자 입력하기.
	_insertTextBox : function(text, x, y, pType){
		var latest = this.stage.getLatestPosition();	//최근 액션이 일어 났던 위치. 없으면 화면에서 center를 가져온다.

		if(x != null && y != null){
			x -= $(window).scrollLeft();
			y -= $(window).scrollTop();
			
			var rect = this.stage.canvas.getBoundingClientRect();		//모서리 좌표.
			x -= rect.left;
			y -= rect.top;
			var v = this.stage.scene.camera.ScreenToWorld(x, y);	//스크린을 월드 좌표로 변환
			latest.x = v.x;
			latest.y = v.y;
		}
		
		
		var id = this.stage.addObject("TEXT",{ x : latest.x, y : latest.y, text: text, polygonType:pType} );
		
		

		
		//택스트 일때는 잘 안보이기 때문에 포커스를 위치 시킨다. 생성할때 1회만 한다.
		if(pType == 'TEXT'){
			
			this.stage.blur();	//신규 추가시 나머지 선택해제
			
			var item = this.stage.scene.getItem(id);
			if(item.isSelected === false){
				//오브젝트를 활성화 상태로 바꿈
				item.Toggle();
				$('#'+item.id+' > div').focus();		//포커스	1회만 
			}
		}
		
	},
	
	/* ==========================================
		이미지를 추가한다.
	*/
	insertImagePop : function(e, x, y){
		//TODO 입력 팝업이 뜬다.
		//file:///D://Server//imgae//data//bbs//image//1.jpg
		var URL = window.webkitURL || window.URL;
		
		//파일 목록 || 드래그 파일 목록
		var targetFiles = e.target.files || e.dataTransfer.files;
		
		if (!targetFiles) {
			Alert("이미지를 찾을 수 없습니다.");
			return;
		}
		
		//var url = URL.createObjectURL(e.target.files[0]);
		var url = URL.createObjectURL(targetFiles[0]);
		
        //이미지 사이즈 알아내기 
        var img = new Image();
		img.onload = function() {
			WorkflowInf._insertImageBox(url, this.naturalWidth, this.naturalHeight, x, y);
		};
		img.src = url;
		
		
// 		this._insertImageBox("file://C:/Users/HP450/Downloads/이원재.jpg");	//보이긴 하는데 보안때문에 저장이 안됨.
// 		this._insertImageBox("https://homepages.cae.wisc.edu/~ece533/images/airplane.png");
		
	},
	//이미지 입력하기
	_insertImageBox : function(url,w,h, x, y){
		var latest = this.stage.getLatestPosition();	//최근 액션이 일어 났던 위치. 없으면 화면에서 center를 가져온다.

		if(x != null && y != null){
			x -= $(window).scrollLeft();
			y -= $(window).scrollTop();
			
			var rect = this.stage.canvas.getBoundingClientRect();		//모서리 좌표.
			x -= rect.left;
			y -= rect.top;
			
			
			var v = WorkflowInf.stage.scene.camera.ScreenToWorld(x, y);	//스크린을 월드 좌표로 변환
			latest.x = v.x;
			latest.y = v.y;
		}
		
		
		this.stage.addObject("IMAGE",{ x : latest.x, y : latest.y, width:w, height:h, url : url} );
	},
	/* ==========================================
		객체를 추가한다.
	*/
	//객체 입력하기.
	insertShapeObj : function(type, text, url, x, y, color){		//x,y는 w, h는 null일수 있음.
		var latest = this.stage.getLatestPosition();	//최근 액션이 일어 났던 위치. 없으면 화면에서 center를 가져온다.
		
		if(x != null && y != null){
			x -= $(window).scrollLeft();
			y -= $(window).scrollTop();
			
			var rect = this.stage.canvas.getBoundingClientRect();		//모서리 좌표.
			x -= rect.left;
			y -= rect.top;
			var v = WorkflowInf.stage.scene.camera.ScreenToWorld(x, y);	//스크린을 월드 좌표로 변환
			latest.x = v.x;
			latest.y = v.y;
		}

		//this.stage.getCenterPosition();
		
		var id = this.stage.addObject(type,{ x : latest.x, y : latest.y, text:text,url:url, color:color, polygonType:"ROUND"} );		
		return id;
	},
	//객체 입력하기.
	modifyShapeObj : function(itemId, type, text, url){		//x,y는 w, h는 null일수 있음.
		
		webEditorMgmt.setText({text:text,id:itemId});		//택스트는 tag에 바로 저장 
		
		this.stage.modifyObject(itemId, type,{url:url} );		//canvas에 text는 더이상 사용하지 않음. 
	},
	copyObjList: [],	//카피 목록 
	copyObjects: function(){
		var pArr = this.stage.getSelectedObjects();
		if(pArr.length > 0){
			this.copyObjList = [];
			for(var i in pArr){
				var item = pArr[i];
				var data = item.getSaveData();
				this.copyObjList.push(data);
			}
			Toast("선택 객체 "+ pArr.length+"개가 copy되었습니다.");
		}else{
			Toast("선택된 객체가 없습니다.");
		}
		return pArr.length;
	},
	pasteObjects: function(){
		if(this.copyObjList.length == 0) Toast("저장된 객체가 없습니다.");
		for(var i in this.copyObjList){
			var opt = this.copyObjList[i];
			opt.id = null;
			opt.x += 40;				//선택한 객체들의 사이즈 만큼 ... 이동해서 붙이기
			opt.y += 20;
			this.stage.addObject(opt.dataSource,opt );
		}
	},
	//객체 제거 
	removeObjects: function(){
		var lArr = this.stage.getSelectedLineObjects();
		this.stage.removeObjects(lArr);
		
		var pArr = this.stage.getSelectedObjects();
		this.stage.removeObjects(pArr);	
	},
	//객체 제거 
	removeObject: function(id){
		this.stage.removeObject(id);	
	},	
	removeAll : function() {
		this.stage.removeAll();
	},
	/*
		데이터 load후 stage에 뿌리기
	*/
	loadWorkflow : function(mbp,callback,isFirstLoading){
		

		//신규 로드 
		var json = DuoMapper.MbpToDuo(mbp,null,isFirstLoading);			//기존 데이터 마이그레이션
		
		this.jsonData = json;	//다시 불러오기 위함
		
		this.stage.loadJson(json, callback);		//워크 플로우에 item 넣어주는 함수 
		
		return json.linkObjs;		//{nodeId: {nodeId, nodeType, menuId, menuCnt, gbmCode, sysCode}}
	},
	/*
		데이터 저장하기
		{objects : [], links : [], camera : {} }
		objects[i]  = {id:"", x:0, y:0, width:10, height:10, text}
	 */
	saveWorkflow : function(linkObjs) {
		if(linkObjs == null) linkObjs = {};
		var json = this.stage.getAllData(); //현재 scene에서 데이터를 가져온다.
	
//			console.log(json);
		var mbp = DuoMapper.DuoToMbp(json,linkObjs);	//TODO두번째 인자로 컬러를 넣는다. 3번째 인자는 linkObjs 입니다.
//			console.log(mbp);
//			alert("저장 데이터를 수집했습니다. console을 확인하세요.");
		
		return mbp;
	}
};
	





/** ============================================================
데이터간의 멥핑
*/
/*		
 * 

 {
		"nodes" : [ {
			"nodeId" : "1f4239c0-f870-47e5-94a3-819695356066",
			left : 667,
			top : 390,
			width : 140,
			height : 50,
			nodeType : "action",
			menuId : "DSS_Foundry_MENU_00880",
			title : "6-1,2라인",
			textColor : "",
			bgColor : "rgb(1,79,239)",
			linkType : "MENU",
			menuCnt : "3",
			sysCode : "DSS",
			gbmCode : "Foundry"
		}, {
			"nodeId" : "04683fdd-6b31-4b98-9041-3df63291d9a0",
			left : 219,
			top : 411,
			width : 140,
			height : 50,
			nodeType : "output",
			menuId : "DSS_Foundry_MENU_00668",
			title : "S1          현장관리자          일지",
			textColor : "",
			bgColor : "",
			linkType : "MENU",
			menuCnt : "4",
			sysCode : "",
			gbmCode : ""
		} ],
		connections : [ {
			"connectionId" : "con_17",
			sourceId : "04683fdd-6b31-4b98-9041-3df63291d9a0",
			targetId : "1f4239c0-f870-47e5-94a3-819695356066",
			anchors : [ "RightMiddle", TopCenter ],
			label : ""
		} ],
		colors : []
	}			





 json =   {
 camera: { 
 distance: 900,
 x: -2.4316906929016113,
 y: 0.8105486631393433
 },
 links: [{
	 font: undefined,
	 id: "e8bc519a-b83a-4fd1-8a4d-9541df2b9cc6",
	 lineColor: "#8395a3",
	 source: {
		 direction: "bottom",
		 id: "8593f06d-abb8-40fa-9853-dbc485be9702"
	 },
	 target: {
		 direction: "top",
		 id: "c171a3dd-4fb8-417a-9b1a-50e922f80aa2"
	 },
	 text: undefined,
	 textColor: undefined
 }, {
 font: undefined,
 id: "c588f7d3-8846-440a-aef7-0a76d26ea8a4",
 lineColor: "#8395a3",
 source: {
 direction: "right",
 id: "8593f06d-abb8-40fa-9853-dbc485be9702"
 },
 target: {
 direction: "right",
 id: "c171a3dd-4fb8-417a-9b1a-50e922f80aa2"
 },
 text: undefined,
 textColor: undefined
 }
 ],
 objects: [ {
 bgColor: "#ffffff",
 color: "#333333",
 dataSource: "SVG_01",
 font: 'normal normal 12px "serif"',
 height: 38,
 id: "c171a3dd-4fb8-417a-9b1a-50e922f80aa2",
 text: "...",
 textColor: "#222222",
 url: undefined,
 width: 138,
 x: -442.2421725988388,
 y: 104.46681356430054
 },{
 bgColor: "#ffffff",
 color: "#333333",
 dataSource: "SVG_01",
 font: 'normal normal 12px "serif"',
 height: 126.8671875,
 id: "8593f06d-abb8-40fa-9853-dbc485be9702",
 text: "...",
 textColor: "#222222",
 url: undefined,
 width: 380.2773391008377,
 x: -320.4345794916153,
 y: -104.52441522479057
 }
 ]
 };
 */
var DuoMapper = {
	//기존을 신규로 (불러올때 사용.)
	MbpToDuo : function(data, mode, isFirstLoading){			//view모드 일때는 MENU제목에 [][] 붙이지 않음.
		if(data.nodes == null ){ alert("정상적인 데이터가 아닙니다."); return;}
		
		var objCenter = {x:0, y:0};		//객체들의 중심을 구한다
		
		var result = {objects:[],links:[],camera:null,linkObjs:{}};	//결과.	linkObjs는 팝업을 통해서 선택한 객체를 차후 조회 할때 사용한다.
		for(var i =0; i < data.nodes.length; i++){
			var node = data.nodes[i];
			var obj = {};
			var linkObj = {};	//linkObj입니다.
			
			node.nodeId = (""+node.nodeId).replace(/[\.]+/g,'');
			
			obj.id 		= node.nodeId;
			obj.x 		= node.left;
			obj.y 		= node.top;
			obj.width 	= node.width;
			obj.height 	= node.height;
/*			if(node.oriText == null){ node.oriText = node.title; }
			if(isFirstLoading === true){
				obj.text 		= this.replaceString(node.title);
			}else{
				obj.text 		= this.replaceString(node.oriText);
			}*/
			obj.textColor	= node.textColor;
			obj.bgColor 	= node.bgColor;
			
			obj.polygonType = node.polygonType;		//도형 모양
			obj.lineColor	= node.lineColor;		//태두리 색
			obj.lineWidth	= node.lineWidth;		//태두리 두깨
			obj.lineType	= node.lineType;		//태두리 모양
			obj.textVAlign = node.textVAlign; //텍스트 정렬
			

			//==========================================
			//TODO 옛날 데이터 ...폰트를 기존거로 적용시키기 !!!!
			//==========================================
			if(node.iconType == null && node.polygonType == null ){	//기존 데이터 ...신규 입력일때는 opts.polygonType이 있음.
				//옛날 데이터 폰트를 9로 설정
				node.title = "<span style='font:"+node.font+"; color:"+node.textColor+";'  >"+node.title+"</font>"
//				node.title = "<font size='2' >"+node.title+"</font>"
				
				if(node.linkType == "TEXT"){
					obj.polygonType = 'RECT';		//text가 아니면
					//옛날 데이터 높이를 10 만큼 줄인다.
					obj.height -= 20;//12
				}else{
					obj.polygonType = 'ROUND';		//text가 아니면
					
					//옛날 데이터 높이를 10 만큼 줄인다.
					obj.height -= 20;//10
				}
			}
			
			
			
			//========================== 신규소스에만 있는부분 
			obj.dataSource 	= this.matchIcon(node.linkType);	//MENU 아이콘 결정 => SVG_MENU   SVG_IMAGE => SVG_IMAGE
			obj.color		= node.color;			//TODO  컬러가 없으면 linkType에서 기본으로 할당한다.
			obj.font		= node.font;
			obj.url			= node.url;
			
			obj.textAlign = node.align; //텍스트 정렬
			result.objects.push(obj);
			
			//========================== 기존소스에만 있는부분은 linkObj에 저장한다.
			linkObj.nodeId 		= node.nodeId;
			linkObj.nodeType	= node.nodeType;	//TODO ARIS, action, output, ...
			linkObj.menuId		= node.menuId;		// "DSS_Foundry_MENU_00880",
			linkObj.menuCnt 	= node.menuCnt;			//저장할때 사용.
			linkObj.sysCode 	= node.sysCode;			//저장할때 사용.
			linkObj.gbmCode 	= node.gbmCode;			//저장할때 사용.
			linkObj.defaultOpen	= node.defaultOpen || 'N';		//저장할때 사용.
//			linkObj.oriText 	= (node.oriText != null)?node.oriText.replace('&lt;','<').replace('&gt;','>'):"";
//			linkObj.oriText 	= this.replaceString(node.oriText);
			linkObj.linkType 	= node.linkType;		//MENU , WORKFLOW, SYSTEM, DIRECT
			result.linkObjs[node.nodeId] = linkObj;
			
//			if(mode !== "view" && isFirstLoading !== true){
//			if(mode !== "view"){
//				if(node.linkType == "MENU"){
//					var str = "";
//					if(node.gbmCode==''){
//						str = "[" + node.sysCode + "] ";	
//					}else if(node.sysCode=='OI'){
//					    var findOiLine = (node.menuId+"").split("_");
//			          str = "[" + node.sysCode + "][" + node.gbmCode + '-' + findOiLine[2] + "] " ;
//					}else{
//						if(node.sysCode !== undefined ){
//							//str = str + "[" + sysCode + "][" + gbmCode + "] " + menuName;
//							str = "[" + node.sysCode + "]";
//						}
//						if(node.gbmCode !== undefined ){
//							str = str + "[" + node.gbmCode + "]";
//						}
//					}
////					str += node.oriText;			
//					obj.text = str; 
//				}else{
//					obj.text = this.replaceString(node.title);
//				}
//			}else{
//				obj.text = this.replaceString(node.title);
//				
//			}
			obj.text = this.replaceString(node.title);
			
//            obj.title = obj.text;
			//중심점 구하기
			objCenter.x += node.left;
			objCenter.y += node.top;
		}
		
		//옵젝트 들의 중심 위치 구하기 
		objCenter.x = objCenter.x/data.nodes.length;
		objCenter.y = objCenter.y/data.nodes.length;
		
	//		"connectionId" : "con_17",
	//		sourceId : "04683fdd-6b31-4b98-9041-3df63291d9a0",
	//		targetId : "1f4239c0-f870-47e5-94a3-819695356066",
	//		anchors : [ "RightMiddle", TopCenter ],
	//		label : ""
		if(data.connections != null){
			for(var i =0; i < data.connections.length; i++){
				var connection = data.connections[i];
				var link = {source:{}, target:{}};
				link.id 				= connection.connectionId;
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
			//TODO 객체좌표의 중앙에 오도록 설정
			result.camera = {
				scaleX: 1,
				x: objCenter.x + 50,		//50만큼 카메라가 더 가야지 됨.
				y: objCenter.y
			};
		}
		
		//컬러도 등록
		result.colors = data.colors;
		
	//console.log(result);
		
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
		
	},
	/*
		신규를 기존거로 (저장할때 사용)
	*/
	DuoToMbp : function(data, linkObjs){
		if(data.objects == null || data.links == null){ alert("정상적인 데이터가 아닙니다."); return;}
		//if(data.nodes == null || data.connections == null){ alert("정상적인 데이터가 아닙니다.확인 요망"); return;}
		
		var result = {nodes:[],connections:[],colors:[]};	//결과.
		for(var i =0; i < data.objects.length; i++){
			var obj = data.objects[i];
			var node = {};
			node.nodeId 	= obj.id;
			node.left 		= obj.x;
			node.top 		= obj.y;
			node.width 		= obj.width;
			node.height 	= obj.height;
			node.title 		= obj.text;
			node.textColor	= obj.textColor;
			node.bgColor 	= obj.bgColor;
			
			
			node.textVAlign	= obj.textVAlign;		//택스트 상하 정렬
			node.polygonType= obj.polygonType;		//도형 모양
			node.lineColor	= obj.lineColor;		//태두리 색
			node.lineWidth	= obj.lineWidth;		//태두리 두깨
			node.lineType	= obj.lineType;		//태두리 모양
			
			//========================== 신규소스에만 있는부분 
	//			node.linkType 	= obj.linkType;		//MENU , WORKFLOW, SYSTEM, DIRECT
			node.linkType 	= this.matchIcon(obj.dataSource);	//MENU 아이콘 결정 => SVG_MENU   SVG_IMAGE => SVG_IMAGE
			node.color		= obj.color;			//TODO  컬러가 없으면 linkType에서 기본으로 할당한다.
			node.font		= obj.font;
			node.url		= obj.url;
			//========================== 기존소스에만 있는부분
			node.align = obj.textAlign; //텍스트 정렬
			
			var linkObj = linkObjs[obj.id];
			if(linkObj != null ){
				node.nodeType	= linkObj.nodeType;	//TODO ARIS, action, output, ...
				node.menuId		= linkObj.menuId;		// "DSS_Foundry_MENU_00880",
				if(linkObj.oriText != null)
				node.menuName	= linkObj.oriText;		// "DSS_Foundry_MENU_00880",
//				if(linkObj.oriText != null)
//				node.title		= linkObj.oriText;		// "DSS_Foundry_MENU_00880",
				//새로 추가된 객체일 경우 linkObj.oriText은 undefined,  draw시 menuName은 필수값
//				if(linkObj.oriText == null)
//				node.menuName  	= linkObj.menuName;	
				node.oriText = linkObj.oriText;
				node.menuCnt 	= linkObj.menuCnt;			//저장할때 사용.
				node.sysCode 	= linkObj.sysCode;			//저장할때 사용.
				node.gbmCode 	= linkObj.gbmCode;			//저장할때 사용.
				node.defaultOpen= linkObj.defaultOpen || 'N';		//기본열기
				node.linkType = linkObj.linkType;		//여기도 있음.
				if(node.url == null || node.url == ''){
					node.url = linkObj.sysCode;
				}
			}			
			
			if(node.linkType == 'DIRECT' || node.linkType == 'SYSTEM' || node.linkType == 'WORKFLOW'){		//리스트로 넘길때만 필요한 데이타
				node.menuName	= obj.text;
			}
			result.nodes.push(node);
		}
		
	//		"connectionId" : "con_17",
	//		sourceId : "04683fdd-6b31-4b98-9041-3df63291d9a0",
	//		targetId : "1f4239c0-f870-47e5-94a3-819695356066",
	//		anchors : [ "RightMiddle", TopCenter ],
	//		label : ""
		for(var i =0; i < data.links.length; i++){
			var link = data.links[i];
			var connection = {anchors:[]};
			connection.connectionId 		= link.id;
			connection.sourceId 			= link.source.id;
			connection.targetId 			= link.target.id;
			connection.anchors[0]			= this.matchDirection(link.source.direction);
			connection.anchors[1]			= this.matchDirection(link.target.direction);
				connection.label				= link.text;
			//===================	신규소스에만 있는부분
				connection.font		 			= link.font;
				connection.lineColor 			= link.lineColor;
				connection.lineType 			= link.lineType;
				connection.lineWidth 			= link.lineWidth;
				connection.textColor			= link.textColor;
			result.connections.push(connection);
		}
		
		//카메라
		if(data.camera != null){
			result.camera = data.camera;
		}
		
		//컬러도 등록
	//		result.colors = data.colors;		//TODO 따로 등록 해야함.
		
		return result;
	}
};
