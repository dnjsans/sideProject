/**
 * 팝업 레이어 관리
 * workflowInf 기능들을 copy 새로운 UI에 맞게 수정함.
 * DUO 1차때 동작 하던 기능들에 영향이 없도록 생성함.
 * 
 * openText
 * 
 */
var CommonEditPopupTools = {
	popupId   : ".ly_Workflow-tooledit",    //새로운 레이어(텍스트) 팝업
	alignArea : ".note-edges",              //위치 영역 ...맨앞으로 보내기도 같이 포함되어 있음
	fontArea  : ".Workflow-toolbar-font",	//폰트 영역 
	lineArea  : ".Workflow-toolbar-line",	//툴바 라인영역
	textArea  : ".ly-textarea",				//textarea
	rightObj  :".ly_Workflow-RightObj",     //우클릭레이어(한개 선택)
	rightObjs :".ly_Workflow-RightObjs",    //우클릭레이어(다중 선택)
	
	opentextObjArea :".opentextObjArea",//폰트 설정 영역  face, color, style 
	
	itemId : "",
	
	data : {} , //Caret data 백업용
	
	init :  function(){
		
		this.$pop = $(this.popupId);//텍스트 박스 수정 버튼 클릭시
		this.$rightObjPop = $(this.rightObj);//텍스트박스 우클릭
		this.$rightObjsPop = $(this.rightObjs);//텍스트박스 우클릭
		
		this.$opentextObjArea = $(this.opentextObjArea);

		this.$alignArea = this.$pop.find('.note-edges');
		this.$fontArea = this.$pop.find('.Workflow-toolbar-font');
		this.$lineArea = this.$pop.find('.Workflow-toolbar-line');
		//this.$lineArea = $(this.lineArea);
		
		this.$lineWeight = this.$pop.find('.lineWeight'); //선굵기
		this.$lineStyle = this.$pop.find('.lineStyle'); //선 타입
		
		this.$topline = this.$pop.find('.topline');
		
		this.$fontFace = this.$pop.find('select:eq(0)'); //글자 형식
		this.$fontSize = this.$pop.find('select:eq(1)'); //글자 사이즈
		this.$fontStyle = this.$pop.find('.fa-italic');
		this.$fontWeight = this.$pop.find('.fa-bold');
		this.$fontUnderline = this.$pop.find('.fa-underline');
		
		this.$textAlignLeft   = this.$pop.find('#ly_text_align_left');   //텍스트 왼쪽 정렬
		this.$textAlignCenter = this.$pop.find('#ly_text_align_center'); //텍스트 가운데 정렬
		this.$textAlignRight  = this.$pop.find('#ly_text_align_right');  //텍스트 오른쪽 정렬		
		
/*		this.$fontColor = this.$pop.find('.btn-font-current-color');	//fontcolor_fill 레이어 팝업용
		this.$fontColorFill = this.$pop.find('.font-color');*/
		
		this.$fontColor = $('#ly_text_color');               // 폰트 컬러
		this.$fontColorFill = this.$pop.find('.fontcolor_tool_fill');// 폰트 컬러
		
		
		this.$Color 	= $("#popupColor");//라인컬러
		this.$ColorFill = $("#popupColor").find('div');//라인컬러
		
		this.$lineColor = $("#toolsLineColor");//라인컬러
		this.$lineColorFill = $("#toolsLineColor").find('div');//라인컬러
		
		this.$textArea = this.$pop.find('.ly-textarea');
		this.$inputArea = this.$pop.find('.ly-input');
		this.$buttonArea = this.$pop.find('.ly-button');	//메뉴수정 버튼 팝업 
		
		//도형
		this.$rect   = $("#rect");
		this.$circle   = $("#circle");
		this.$text     = $("#font");
		this.$diamond  = $("#diamond");
		this.$round    = $("#round");
		this.$arrow    = $("#arrow");
		
		//링크
		this.$changeLink = $("#change_link");
		this.$removeLink = $("#remove_link");
		
		this.$iconColorLink = $("#icon_color_link");
		this.$link_fill = this.$pop.find(".link_fill");
		
		
		//도형 색상 버튼
		this.$toolsItemColor = $("#toolsItemColor");
		//도형 타입
		this.$polygonArea = $("#polygon_area");
		//링크 영역
		this.$linkArea = $("#link_area");
		
		
		//정렬
		this.$btnAlignLeft_ly      = $("#btnAlignLeft_ly");
		this.$btnAlignCenterH_ly   = $("#btnAlignCenterH_ly");
		this.$btnAlignRight_ly     = $("#btnAlignRight_ly");
		this.$btnAlignTop_ly       = $("#btnAlignTop_ly");
		this.$btnAlignCenterV_ly   = $("#btnAlignCenterV_ly");
		this.$btnAlignBottom_ly    = $("#btnAlignBottom_ly");
		
		//맨앞으로 보내기
		this.$objectTopFront = $("#objectTopFront");      //상단 버튼
		this.$objectTopFront_ly = $("#objectTopFront_ly");//레이어 버튼
		//맨뒤로 보내기
		this.$objectTopBack = $("#objectTopBack");      //상단 버튼
		this.$objectTopBack_ly = $("#objectTopBack_ly");//레이어 버튼
		
		//=============================== 라인 설정
		//선 굵기
		this.$lineArea.find('.lineWeight100').click(function(){ CommonEditPopupTools.toggleLineWidth($(this), 1.5); });
		this.$lineArea.find('.lineWeight200').click(function(){ CommonEditPopupTools.toggleLineWidth($(this), 2.5); });
		this.$lineArea.find('.lineWeight300').click(function(){ CommonEditPopupTools.toggleLineWidth($(this), 4); });
		//라인  종류
		this.$lineArea.find('.linetType100').click(function(){ CommonEditPopupTools.toggleLineType($(this), "SOLID"); });
		this.$lineArea.find('.linetType300').click(function(){ CommonEditPopupTools.toggleLineType($(this), "DASH"); });
		this.$lineArea.find('.linetType200').click(function(){ CommonEditPopupTools.toggleLineType($(this), "DOT"); });
		
		
		//도형 종류
		this.$rect.click(function(){ CommonEditPopupTools.togglePolygonType($(this), "RECT"); });
		this.$circle.click(function(){ CommonEditPopupTools.togglePolygonType($(this), "CIRCLE"); });
		this.$text.click(function(){ CommonEditPopupTools.togglePolygonType($(this), "TEXT"); });
		this.$diamond.click(function(){ CommonEditPopupTools.togglePolygonType($(this), "DIAMOND"); });
		this.$round.click(function(){ CommonEditPopupTools.togglePolygonType($(this), "ROUND"); });
		this.$arrow.click(function(){ CommonEditPopupTools.togglePolygonType($(this), "ARROW"); });
		
		//링크 연결
		this.$changeLink.click(function(){
			WorkflowInf.changeLinkPop();
		});
		//링크 삭제
		this.$removeLink.click(function(){
			WorkflowInf.removeLink();
		});
		//링크 color 변경

		//fontFace변경
		this.$fontFace.change(function(){
			CommonEditPopupTools.changeFontFace(this.value);
		});
		//fontStyle변경
		this.$fontSize.change(function(){
			CommonEditPopupTools.changeFontSize(this.value);
		});
		
		//텍스트 왼쪽 정렬
		this.$textAlignLeft.click(function(){
			CommonEditPopupTools.changeTextAlign('justifyleft');
		});
		//텍스트 가운데 정렬
		this.$textAlignCenter.click(function(){
			CommonEditPopupTools.changeTextAlign('justifycenter');
		});
		//텍스트 오른쪽 정렬
		this.$textAlignRight.click(function(){
			CommonEditPopupTools.changeTextAlign('justifyright');
		});		
		this.$fontWeight.click(function(){//굵게 버튼 클릭
			CommonEditPopupTools.changeFontStyle('bold');
		});
		this.$fontStyle.click(function(){
			CommonEditPopupTools.changeFontStyle('italic');
		});	
		
		this.$fontUnderline.click(function(){
			CommonEditPopupTools.changeFontStyle('Underline');
		});		

		
		
		//택스트가 수정될때마다. 글짜를 변경해준다.
//		this.$ta = this.$pop.find('textarea');
//		this.$ta.keyup(function(){
//			CommonEditPopup.changeText($(this).val());
//		});
//		this.$in = this.$pop.find('input[type=text]');
//		this.$in.keyup(function(){
//			CommonEditPopup.changeText($(this).val());
//		});
		
		//닫기 버튼
		this.$pop.find('.close').click(function(){
			CommonEditPopupTools.Hide();
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
		this.$iconColorLink.ColorPicker({
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
				CommonEditPopupTools.$link_fill.css('backgroundColor', '#' + hex);
//				CommonEditPopupTools.changeLineColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				WorkflowInf.changeIconColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},
			onBeforeShow : function(colpkr) {
				var fillcolor = CommonEditPopupTools.$link_fill.css('backgroundColor');
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
				CommonEditPopupTools.$lineColor.find('.fontcolor_fill').css('backgroundColor', '#' + hex);
				CommonEditPopupTools.changeLineColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
//				$('#text_color .fontcolor_fill').css('backgroundColor', '#' + hex);
//				$('.font-color-bar.fontcolor_fill').css('backgroundColor', '#' + hex);
//			    $('#text_color .fontcolor_fill').css('color', '#' + hex);
//				WorkflowInf.changeFontColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},

			onBeforeShow : function(colpkr) {
//				$(this).ColorPickerSetColor($('#text_color .fontcolor_fill').css('backgroundColor'));
				var fillcolor = CommonEditPopupTools.$lineColor.find('.fontcolor_fill').css('backgroundColor');
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
//				CommonEditPopupTools.$fontColor.css('backgroundColor', '#' + hex);
			    CommonEditPopupTools.$fontColorFill.css('color', '#' + hex);
			    CommonEditPopupTools.$fontColorFill.css('background-color', '#' + hex);
			    
				CommonEditPopupTools.changeFontColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
			},
			onBeforeShow : function(colpkr) {
//				var fillcolor = CommonEditPopupTools.$fontColor.css('backgroundColor');
			    var fillcolor = CommonEditPopupTools.$fontColorFill.css('background-color');
				$(this).ColorPickerSetColor(fillcolor);
			}
		}); 

		
	},
	//colorpicker 변경시 호출
	changeFontColor : function(color){
		
		var pArr = WorkflowInf.stage.getSelectedObjects();
		webEditorMgmt.exec(pArr,function(item, c){
			document.execCommand('ForeColor', false, c);	
		},color);
		
//		var result = Caret.Load(); 
//		var pArr = this.stage.getSelectedAllObjects();
//		
//		if(result == false){
//			if(pArr != null){
//				for(var i in pArr){
//					webEditorMgmt.allTextCheck(pArr[i].id);
//					document.execCommand('ForeColor', false, color);	
//				}
//			}
//		}else{ // 영역을 선택했을 경우
//			document.execCommand('ForeColor', false, color);
//		}
	}, 
	//고딕, ..
	changeFontFace :function(face){
		
		var pArr = WorkflowInf.stage.getSelectedObjects();
		webEditorMgmt.exec(pArr,function(item, f){
			document.execCommand('fontName', false, f);	
		},face);
		
		
//		var result = Caret.Load(); 
//		var pArr = this.stage.getSelectedAllObjects();
//		
//		if(result == false){
//			if(pArr != null){
//				for(var i in pArr){
//					webEditorMgmt.allTextCheck(pArr[i].id);
//					document.execCommand('fontName', false, face);	
//				}
//			}
//		}else{ // 영역을 선택했을 경우
//			document.execCommand('fontName', false, face);
//		}
			
	},
	changeFontSize :function(size){
		
		var pArr = WorkflowInf.stage.getSelectedObjects();
		webEditorMgmt.exec(pArr,function(item, s){
			document.execCommand('fontSize', false, s);	
			$("font[size]", $('#'+item.id)).removeAttr("size").css("font-size", s+"px");
		},size);
		
		
		
//		var result = Caret.Load(); 
//		var pArr = this.stage.getSelectedAllObjects();
//		
//		if(result == false){
//			if(pArr != null){//한개 이상 선택했을 경우
//				for(var i in pArr){
//					webEditorMgmt.allTextCheck(pArr[i].id);
//					document.execCommand('fontSize', false, size);	
//					$("font[size]", $('#'+pArr[i].id)).removeAttr("size").css("font-size", size+"px");
//				}
//			}
//		}else{ // 영역을 선택했을 경우
//			document.execCommand('fontSize', false, size);
//			$("font[size]", $('#'+pArr[0].id)).removeAttr("size").css("font-size", size+"px");
//		}

	},
	changeFontStyle : function(type){   //bold italic underLine

		var pArr = WorkflowInf.stage.getSelectedObjects();
		webEditorMgmt.exec(pArr,function(item,t){
			document.execCommand(t);
		},type);
		
		
//		var pArr = this.stage.getSelectedAllObjects();
//		if(pArr.length === 1){	//0 선택된것이 없으면 ..{	//1개 이상 선택했을때
//			if(!Caret.Load()){	//저장되어 있는 게 없어도 현재 열린 selection이 있으면 selection이 넘어옴
//				//넘어 올게 없으면 전체 선택 
//				var ele = $('#'+pArr[0].id+' > div')[0];
//				Caret.allTextCheck(ele);		//해당id영역 전체 선택
//				document.execCommand(type);
//			}else{
//				//선택 블럭이 있으면.
//				document.execCommand(type);	// 1개인데
//				Caret.Save();
//			}
//		}else if(pArr.length > 1){	//2개면 무조건 allTextCheck를 져온다 
//
//			//2개이면서 블럭이 있는것이 있는데... 2개 이상이면 무조건 allTextCheck를 해준다.
//			for(var i in pArr){
//				var ele = $('#'+pArr[0].id+' > div')[0];
//				Caret.allTextCheck(ele);		//해당id영역 전체 선택
//				document.execCommand(type);
//			}
//		}
		
	},
	changeTextAlign : function(align){	
		var pArr = WorkflowInf.stage.getSelectedObjects();
		webEditorMgmt.exec(pArr,function(item,a){
			document.execCommand(a);
		},align);
		
		
//		if(result == false){
//			if(pArr != null){
//				for(var i in pArr){
//					webEditorMgmt.allTextCheck(pArr[i].id);
//					document.execCommand(align);
//				}
//			}
//		}else{ // 영역을 선택했을 경우
//			document.execCommand(align);
//		}
	},
	changeLineColor : function(color){
//		if(this.item != null)
		var pArr = WorkflowInf.stage.getSelectedAllObjects();
		if(pArr != null){
			for(var i in pArr){
				this.stage.setColor(pArr[i], color);
			}
		}
	},
	//RECT, ROUND, CIRCLE, ARROW, DIAMOND   202006 추가
	changePolygonType : function(type){
		var pArr = WorkflowInf.stage.getSelectedObjects();
		if(pArr != null){
			for(var i in pArr){
				this.stage.changePolygonType(pArr[i], type);
			}			
		}

	},	
	//Line 두께 toggle
	toggleLineWidth : function($ele, width){
		//토글작업 
		this.$lineArea.find('.lineWeight100').removeClass("active");
		this.$lineArea.find('.lineWeight200').removeClass("active");
		this.$lineArea.find('.lineWeight300').removeClass("active");

		$ele.addClass("active");
		WorkflowInf.changeLineWidth(width);
		
	},
	//Line 버튼 누를때마다 활성화 toggle
	toggleLineType : function($ele, type){
		//라인  종류                                 
		this.$lineArea.find('.linetType100').removeClass("active");
		this.$lineArea.find('.linetType200').removeClass("active");
		this.$lineArea.find('.linetType300').removeClass("active");
		
		$ele.addClass("active");
		WorkflowInf.changeLineType(type);
		
	},
	//도형 버튼 누를때마다 활성화 toggle
	togglePolygonType : function($ele, type){
		//라인  종류
		this.$lineArea.find('.rect').removeClass("active");
		this.$lineArea.find('.circle').removeClass("active");
		this.$lineArea.find('.text').removeClass("active");
		this.$lineArea.find('.diamond').removeClass("active");
		this.$lineArea.find('.round').removeClass("active");
		this.$lineArea.find('.arrow').removeClass("active");
		
		$ele.addClass("active");
		
		this.changePolygonType(type); 			
		
	},		
	openTextObj : function(item, stage, sender){// 객체가 하나만 선택 되어 있는 경우 레이어 팝업 셋팅
		this.stage = stage;
		var vo = item.getSaveData();
		
		var topline = this.$fontArea.hasClass('topline'); //레이어 팝업 탑라인
		
		//===================== 보기 설정
		this.$alignArea.show(); // 위치  맨앞으로 보내기도 포함되어 있음
		
		//this.$alignArea.css({width:'30%'});
		
		//this.$objectTopFront_ly.show();//맨앞 맨뒤로 보내기는 객체 한개가 선택되어 있어도 보여야 함
		//this.$objectTopBack_ly.show();//맨앞 맨뒤로 보내기는 객체 한개가 선택되어 있어도 보여야 함
		
		this.$btnAlignLeft_ly.attr('disabled', true);
		this.$btnAlignCenterH_ly.attr('disabled', true);
		this.$btnAlignRight_ly.attr('disabled', true);
		this.$btnAlignTop_ly.attr('disabled', true);
		this.$btnAlignCenterV_ly.attr('disabled', true);
		this.$btnAlignBottom_ly.attr('disabled', true);
		
		this.$fontArea.show();   //폰트       
		//this.$lineArea.show();   //라인종류     
		this.$textArea.hide();   //택스트 엔터 가능
		this.$inputArea.hide();  //택스트 엔터 불가
		
		this.$Color.hide();			//기본컬러
		//this.$lineColor.show();		//라인 보이기
		
		this.$buttonArea.hide();	//menu수정 버튼 영역
		
		this.$rightObjsPop.hide();//우클릭 레이어
		this.$rightObjPop.hide();//우클릭 레이어
		
		if(vo.polygonType != "TEXT"){
			
			//링크 영역
			this.$linkArea.show();	
			
			this.$lineColor.show();		//라인 보이기
			//도형 색상 버튼
			this.$toolsItemColor.show();
			//도형 타입
			this.$polygonArea.show();
			
			this.$lineWeight.show();
			this.$lineStyle.show();
			
			this.$lineArea.show();
			
			this.$topline.show();
			
			if(topline != true){ this.$fontArea.addClass('topline'); }//탑라인 그리기

		}else{
			
			//링크 영역
			this.$linkArea.hide();	
			
			//도형 색상 버튼
			this.$toolsItemColor.hide();
			//도형 타입
			this.$polygonArea.hide();

			this.$lineColor.hide();		//라인 보이기
			
			this.$lineWeight.hide();
			this.$lineStyle.hide();		
			
			this.$lineArea.hide();
			this.$topline.hide();
			
			this.$fontArea.removeClass('topline'); //탑라인 제거

		}

		
		this.$opentextObjArea.show();
		
		this.$pop.show();//텍스트 박스 수정 버튼 클릭시
		
		//===================== 위치설정  
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;
	    var w = sender.position.width;
	    
	    this.$pop.css({position:'absolute',top: y+'px', left: x+w+'px'});	
			
	    this.Show(item);
	},
	
	openLine : function(item, stage, sender){// 객체가 하나만 선택 되어 있는 경우 레이어 팝업 셋팅  //라인 레이어 팝업
		this.stage = stage;
		var vo = item.getSaveData();
		
		//===================== 보기 설정
		this.$alignArea.hide(); // 위치
		
		this.$lineArea.show();   //라인종류
		this.$lineWeight.show(); //선굵기
		this.$lineStyle.show();  //선스타일
		
		
		this.$textArea.hide();   //택스트 엔터 가능
		this.$inputArea.hide();  //택스트 엔터 불가
		this.$Color.hide();			//기본컬러
		this.$lineColor.show();		//라인 보이기
		this.$buttonArea.hide();	//menu수정 버튼 영역
		
		this.$rightObjsPop.hide();//우클릭 레이어
		this.$rightObjPop.hide();//우클릭 레이어
		
		
		this.$fontArea.hide();   //폰트       
		//도형 색상 버튼
		this.$toolsItemColor.hide();
		//도형 타입
		this.$polygonArea.hide();
		//링크 영역
		this.$linkArea.hide();
		// 하단 폰트 스타일 설정 영역
		this.$opentextObjArea.hide();
		
		this.$pop.show();//텍스트 박스 수정 버튼 클릭시
		
		//===================== 위치설정  
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();	//좌측 메뉴 크기 (유동)
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;	//55 상단 메뉴바 크기 
	    
	    this.$pop.css({top: y+'px', left: x+'px'});	
			
	    this.Show(item);
	},	
	//webeditorMgmt에서 호출하며 객체를 업데이트 할때 호출된다.
	updateCss : function(x, y, w, h){
//		x += $('.lnb').width();
//		y += 55;
		
		let rect = WorkflowInf.stage.canvas.getBoundingClientRect();		//모서리 좌표.
		x += rect.left;
		y += rect.top;
		x += $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    y += $('.content-wrapper').scrollTop()  - 55;	//55는 상단메뉴 
	    this.$pop.css({top: y, left: x+ w + 30}); 	//30은 객체의 우측 여백
	    //아래 붙이기
//	    x += $('.content-wrapper').scrollLeft() - $('.lnb').width();
//	    y += $('.content-wrapper').scrollTop()  - 55;	//55는 상단메뉴
//	    this.$pop.css({top: y + h + 15, left: x});	//15는 객체의 아래 여백
		
	},
	openTextObjs : function(item, stage, sender){
		this.stage = stage;
		var vo = item.getSaveData();
		
		//===================== 보기 설정
		this.$alignArea.show(); // 위치  맨앞으로 보내기도 포함되어 있음
		//this.$alignArea.css({width:''});
		
		//this.$objectTopFront_ly.show();//맨앞 맨뒤로 보내기는 객체 한개가 선택되어 있어도 보여야 함
		//this.$objectTopBack_ly.show();//맨앞 맨뒤로 보내기는 객체 한개가 선택되어 있어도 보여야 함
		
		this.$btnAlignLeft_ly.attr('disabled', false);
		this.$btnAlignCenterH_ly.attr('disabled', false);
		this.$btnAlignRight_ly.attr('disabled', false);
		this.$btnAlignTop_ly.attr('disabled', false);
		this.$btnAlignCenterV_ly.attr('disabled', false);
		this.$btnAlignBottom_ly.attr('disabled', false);		
		
		this.$fontArea.show();   //폰트       
		this.$lineArea.show();   //라인종류       
		this.$textArea.hide();   //택스트 엔터 가능
		this.$inputArea.hide();  //택스트 엔터 불가
		this.$Color.hide();			//기본컬러
		this.$lineColor.show();		//라인 보이기 
		
		this.$buttonArea.hide();	//menu수정 버튼 영역
		
		this.$rightObjPop.hide();//우클릭 레이어
		this.$rightObjsPop.hide();//우클릭 레이어

		//도형 색상 버튼
		this.$toolsItemColor.show();
		//도형 타입
		this.$polygonArea.show();
		//링크 영역
		this.$linkArea.show();
		
		this.$opentextObjArea.show();
		
		this.$pop.show();//텍스트 박스 수정 버튼 클릭시
		
		//===================== 위치설정  
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;
	    var w = sender.position.width;
	    
//	    this.$pop.css({position:'absolute',top: y+'px', left: x+w+'px'});
	    this.$pop.css({top: y , left: x+w+ 25}); 	//25은 객체의 우측 여백
			
	    this.Show(item);
	},	
	openText_right : function(item, stage, sender,    objs){
		this.stage = stage;
		var vo = item.getSaveData();
		
		//===================== 보기 설정
/*		this.$fontArea.hide();   //폰트       
		this.$lineArea.hide();   //라인종류     
		this.$textArea.hide();   //택스트 엔터 가능
		this.$inputArea.hide();  //택스트 엔터 불가
		this.$Color.hide();			//기본컬러
		this.$lineColor.hide();		//라인 보이기 
*/		
		if(objs == true){//다중 선택
			this.$rightObjPop.hide();//우클릭 레이어
			this.$rightObjsPop.show();//우클릭 레이어
		}else{
			this.$rightObjPop.show();//우클릭 레이어
			this.$rightObjsPop.hide();//우클릭 레이어			
		}

		//도형 색상 버튼
/*		this.$toolsItemColor.show();
		//도형 타입
		this.$polygonArea.show();
		//링크 영역
		this.$linkArea.show();
		
		this.$opentextObjArea.show();
		
		this.$pop.hide();//텍스트 박스 수정 버튼 클릭시
		
		this.$buttonArea.hide();	//menu수정 버튼 영역
*/		
		//===================== 위치설정  
		var x = sender.position.x + $('.content-wrapper').scrollLeft() - $('.lnb').width();
	    var y = sender.position.y + $('.content-wrapper').scrollTop()  - 55;
	    var w = sender.position.width;
	    
	    if(objs == true){//다중 선택
	    	this.$rightObjsPop.css({position:'absolute',top: y+'px', left: x+w+'px'});	    	
	    }else{
	    	this.$rightObjPop.css({position:'absolute',top: y+'px', left: x+w+'px'});
	    }
			
	    this.Show(item);
	},
	alignBtn : function(bool){
		if(bool == true){
			//정렬기능 비활성화
			$('#btnAlignLeft_ly').attr('disabled', true);
			$('#btnAlignCenterH_ly').attr('disabled', true);
			$('#btnAlignRight_ly').attr('disabled', true);
			$('#btnAlignTop_ly').attr('disabled', true);
			$('#btnAlignCenterV_ly').attr('disabled', true);
			$('#btnAlignBottom_ly').attr('disabled', true);			
		}else{
			//정렬기능 활성화
			$('#btnAlignLeft_ly').attr('disabled', false);
			$('#btnAlignCenterH_ly').attr('disabled', false);
			$('#btnAlignRight_ly').attr('disabled', false);
			$('#btnAlignTop_ly').attr('disabled', false);
			$('#btnAlignCenterV_ly').attr('disabled', false);
			$('#btnAlignBottom_ly').attr('disabled', false);		
		}
	},
	Show : function(item){
		$(this.popupId).show();
		this.item = item;
		CommonEditPopupTools.itemId = this.item.id;
		
		
		var fontFace =  CommonEditPopupTools.data.fontFace;  //Caret.save에서 설정된 
		var fontColor =  CommonEditPopupTools.data.fontColor;  //Caret.save에서 설정된 
		var fontSize =  CommonEditPopupTools.data.fontSize;  //Caret.save에서 설정된 
		
		if(fontFace != "" && fontFace != null){
			this.$pop.find('select:eq(0)').val(fontFace); // 폰트 face 설정
		}else{
			this.$pop.find('select:eq(0)').val($('#text_style_edit option:selected').val()); 
		}
		if(fontColor != ""){
			this.$pop.find('.fontcolor_tool_fill').css("background-color", fontColor); // 폰트 color 설정
		}
		if(fontSize != "" && fontSize != null){
			this.$pop.find('select:eq(1)').val(fontSize.replace('px',''));// 폰트 size 설정
		}else{
			this.$pop.find('select:eq(1)').val($('#text_size_edit option:selected').val());
		}			
		
//		if(isTextArea === true){
//			this.$ta.focus();
//		}else{
//			this.$in.focus();
//		}
	},
	Hide : function(){
		$(this.popupId).hide();
		this.item = null;			//선택된 item이 들어 온다.
	},
	Hide_rightClick : function(){
		$(this.rightObj).hide();
		$(this.rightObjs).hide();
		this.item = null;			//선택된 item이 들어 온다.
	}	
};

var ToolLineControl = {
        init : function(){
            $('#btnLineWidth01_tool').click(function(){ 
                $('#borderSize_tool').addClass('border-size-100'); 
                $('#borderSize_tool').removeClass('border-size-200');
                $('#borderSize_tool').removeClass('border-size-300');
            });
            $('#btnLineWidth02_tool').click(function(){ 
                $('#borderSize_tool').removeClass('border-size-100');
                $('#borderSize_tool').addClass('border-size-200');   
                $('#borderSize_tool').removeClass('border-size-300');                
            }); 
            $('#btnLineWidth03_tool').click(function(){ 
                $('#borderSize_tool').removeClass('border-size-100');
                $('#borderSize_tool').removeClass('border-size-200');  
                $('#borderSize_tool').addClass('border-size-300');   
            });    
            
            
            $('#line-solid_tool').click(function(){ 
                $('#borderStyle_tool').addClass('border-style-solid'); 
                $('#borderStyle_tool').removeClass('border-style-dotted');
                $('#borderStyle_tool').removeClass('border-style-dashed');
            });
            $('#line-dot_tool').click(function(){ 
                $('#borderStyle_tool').removeClass('border-style-solid');
                $('#borderStyle_tool').addClass('border-style-dotted');   
                $('#borderStyle_tool').removeClass('border-style-dashed');                
            }); 
            $('#line-dash_tool').click(function(){ 
                $('#borderStyle_tool').removeClass('border-style-solid');
                $('#borderStyle_tool').removeClass('border-style-dotted');  
                $('#borderStyle_tool').addClass('border-style-dashed');   
            });             
            
        }
}

var polygonTypeControl = {
		init: function(){
            $('#rect').click(function(){ 
                $('#polygonType').removeClass('far fa-circle');
                $('#polygonType').removeClass('far fa-object-text');
                $('#polygonType').removeClass('fas fa-object01');
                $('#polygonType').removeClass('fas fa-object02');
                $('#polygonType').removeClass('fas fa-object03');
                
                $('#polygonType').addClass('far fa-square'); 
            });	
            
            $('#circle').click(function(){ 
                $('#polygonType').removeClass('far fa-square');
                $('#polygonType').removeClass('far fa-object-text');
                $('#polygonType').removeClass('fas fa-object01');
                $('#polygonType').removeClass('fas fa-object02');
                $('#polygonType').removeClass('fas fa-object03');
                
                $('#polygonType').addClass('far fa-circle'); 
            });	
            
            $('#text').click(function(){ 
                $('#polygonType').removeClass('far fa-square'); 
                $('#polygonType').removeClass('far fa-circle');
                $('#polygonType').removeClass('fas fa-object01');
                $('#polygonType').removeClass('fas fa-object02');
                $('#polygonType').removeClass('fas fa-object03');
                
                $('#polygonType').addClass('far fa-object-text');
            });	 
            
            $('#diamond').click(function(){ 
            	$('#polygonType').removeClass('far fa-object-text');
                $('#polygonType').removeClass('far fa-square'); 
                $('#polygonType').removeClass('far fa-circle');
                $('#polygonType').removeClass('fas fa-object02');
                $('#polygonType').removeClass('fas fa-object03');
                
                $('#polygonType').addClass('fas fa-object01');
                
            });	  
            
            $('#round').click(function(){ 
            	$('#polygonType').removeClass('far fa-object-text');
                $('#polygonType').removeClass('far fa-square'); 
                $('#polygonType').removeClass('far fa-circle');
                $('#polygonType').removeClass('fas fa-object01');
                $('#polygonType').removeClass('fas fa-object03');
                
                $('#polygonType').addClass('fas fa-object02');
            });	  
            
            $('#arrow').click(function(){ 
            	$('#polygonType').removeClass('far fa-object-text');
                $('#polygonType').removeClass('far fa-square'); 
                $('#polygonType').removeClass('far fa-circle');
                $('#polygonType').removeClass('fas fa-object01');
                $('#polygonType').removeClass('fas fa-object02');
                $('#polygonType').addClass('fas fa-object03');
            });	  
		}
}

//색깔 변경
var colorChangeTools = {
		currColor :"#0000ff",	//아이콘색
		currBgColor :"#ffffff",	//배경색
		currColorType : "color",  //color, bgColor, textColor 현재 선택된 타입 
		init : function(){
			
 			//color picker 선택시
			$('#toolsItemColor').ColorPicker({
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
					$('#toolsItemColor span').css('backgroundColor', '#' + hex);
//					console.log('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
					colorChangeTools.preview('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				//	WorkflowInf.changeColor('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
				},

				onBeforeShow : function(colpkr) {
					$(this).ColorPickerSetColor('rgb(0.5,0.8,0.1)');
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
			
			
		},
		// 활성화된 버튼 색깔 바꾸기
		preview : function(color){
			
			WorkflowInf.changeBgColor(color);//열림일때도 선택되어 있으면 선택된 객체 배경색이 변경되도록
		}
			
	} ;



var Caret = {
		data : null,
		Load : function(){	//Caret.Load
			if(this.data != null){	//이미 저장된 것이 있으면 (colorpicker 일때)
				
				try{
					var newRange = document.createRange();
					newRange.setStart(this.data.startContainer, this.data.startOffset);
					newRange.setEnd(this.data.endContainer, this.data.endOffset);
	
					// Selection에 range를 전달
					var selection = document.getSelection();
					selection.removeAllRanges();
					selection.addRange(newRange);
					
					//역방향으로 선택하면 선택 블럭이 없음. (다시 역방향으로 선택한다.)
					if(selection.isCollapsed){	//선택 caret이 없으면 true
						newRange.setStart(this.data.endContainer, this.data.endOffset);
						newRange.setEnd(this.data.startContainer, this.data.startOffset);
	
						selection.removeAllRanges();
						selection.addRange(newRange);
						
					}
					return selection;
				}catch(e){	//Caret이 다른곳에서 설정되버릴때 colorpicker같은.. offset이 안맞는 오류 
					console.log("Error - Caret.Load : "+e);
				}
			}else{
				//저장해 놓은것이 없으면 블럭이 있는지 체크 한다. 없으면 false;
				var selection = document.getSelection();
				if(selection.isCollapsed){	//선택 caret이 없으면
					return false;
				}else{
					return selection; 
				}
			}
			return false;
/*			else{//선택한 영역이 없을 경우
				
	                //var sel = $('#'+webEditorMgmt.selectedItem).select();
//				    var sel = document.getElementById(webEditorMgmt.selectedItem);
				    var sel = $('#'+webEditorMgmt.selectedItem+' > div')[0];
				    
				   
					var range = document.createRange();
//					range.selectNode(sel);
					//자식노드 설정
					range.selectNodeContents(sel);
					
					// Selection에 range를 전달
					var selection = document.getSelection();
					selection.removeAllRanges();
					selection.addRange(range);

		
			}*/
		},
		Clean : function(){
			try{
				var selection = document.getSelection();
				selection.removeAllRanges(); 
			}catch(e){}	//선택된것이 없으면 에러 발생해요
			this.data = null;
		},
		Save : function(){	//Caret.Save
			var selection = document.getSelection();
			
			//click시 range내에 정보를 취득, tool박스 정보 셋팅용 ( fontface, )
//			var fontFace = "";
//			var fontColor = "";
//			var fontSize = "";
//			var setData = {};

//			$(".webeditor").bind("mouseup", function( event ){
//				fontFace = selection.getRangeAt(0).startContainer.parentNode.face;
//				fontColor = selection.getRangeAt(0).startContainer.parentNode.color;
//				fontSize = selection.getRangeAt(0).startContainer.parentNode.style.fontSize;
//				
//				if(fontFace === undefined){
//					fontFace = "";
//				}
//				if(fontColor === undefined){
//					fontColor = "";
//				}
//				if(fontSize === undefined){
//					fontSize = "";
//				}				
//				
//				setData.fontFace = fontFace;
//				setData.fontColor = fontColor;
//				setData.fontSize = fontSize;
//				
//				CommonEditPopupTools.data = setData;
//			});
			
			if(selection.isCollapsed){	//선택 caret이 없으면 true
				this.data = null;
			}else{
				var data = {};	
				data.startContainer = selection.anchorNode;
				data.startOffset = selection.anchorOffset;
				data.endContainer = selection.focusNode;
				data.endOffset = selection.focusOffset;
				this.data = data;
			}
		},
		allTextCheck: function(sel){
			var range = document.createRange();
			
			var selection = document.getSelection();
			//if(selection.focusNode == null) return;		//선택된 노드가 없으면... 리턴
			//var sel = $('#'+id+' > div')[0];
			
			range.selectNodeContents(sel);
			
			// Selection에 range를 전달
			selection.removeAllRanges();
			selection.addRange(range);
			
			return selection;
		}
	};


var webEditorMgmt = {
		selectedItem : "",
		init : function(item){	//추가
// 			var s = '<div id="'+item.id+'" contenteditable="true" style="position:absolute; border:1px solid red;z-index:1;">'+item.text+'</div>';
			var s = '<div class="webeditor" id="'+item.id+'" activeindex="0" style="position:absolute;z-index:0;overflow:hidden;"><div style="text-align:center;vertical-align:'+item.valign+';display:table-cell;-ms-word-break: break-all;line-height:1;" contenteditable="true" >'+item.text+'</div></div>';
			$(s).insertAfter('#canvas-2d');
			
			var motivatebox = document.getElementById(item.id);
			motivatebox.addEventListener('mouseup', function(e){
				//캐럿을 저장한다.	
					Caret.Save();
					
				//해당 위치의 font정보 가져오기
				try{
					var selection = document.getSelection();
					//click시 range내에 정보를 취득, tool박스 정보 셋팅용 ( fontface, )
					var fontFace = "";
					var fontColor = "";
					var fontSize = "";
					var setData = {};
					fontFace = selection.getRangeAt(0).startContainer.parentNode.face;
					fontColor = selection.getRangeAt(0).startContainer.parentNode.color;
					fontSize = selection.getRangeAt(0).startContainer.parentNode.style.fontSize;
					
					if(fontFace === undefined){
						fontFace = "";
					}
					if(fontColor === undefined){
						fontColor = "";
					}
					if(fontSize === undefined){
						fontSize = "";
					}				
					
					setData.fontFace = fontFace;
					setData.fontColor = fontColor;
					setData.fontSize = fontSize;
					
					CommonEditPopupTools.data = setData;
					
				}catch(e){console.log(e);}
					
					
			}, false);
			
			//WorkflowInf.init에서 적용됨.
//			motivatebox.addEventListener('keyup', function(e){	//화살표키와 쉬프트 키가 눌렸을때.
//				if(event.keyCode > 36 && event.keyCode < 41){	//화살표 :좌상우하  37,38,39,40
//					if(event.shiftKey){					
//						//캐럿을 저장한다.	
//						Caret.Save();
//					}
//				}
//			}, false);
		},
		// 
		exec : function(pArr, cb, params){
			/*
			webEditorMgmt.exec(pArr,function(param){
				document.execCommand(param);
			},params);
			*/
			if(pArr == null) pArr = [];
			if(typeof cb != 'function') cb = function(){};
			
			if(pArr.length === 1){	//0 선택된것이 없으면 ..{	//1개 이상 선택했을때
				if(!Caret.Load()){	//저장되어 있는 게 없어도 현재 열린 selection이 있으면 selection이 넘어옴
					//넘어 올게 없으면 전체 선택 
					var ele = $('#'+pArr[0].id+' > div')[0];
					Caret.allTextCheck(ele);		//해당id영역 전체 선택
//					document.execCommand(type);	// 1개인데
					cb(pArr[0],params);
				}else{
					//선택 블럭이 있으면.
//					document.execCommand(type);	// 1개인데
					cb(pArr[0],params);
					Caret.Save();
				}
			}else if(pArr.length > 1){	//2개면 무조건 allTextCheck를 져온다 

				//2개이면서 블럭이 있는것이 있는데... 2개 이상이면 무조건 allTextCheck를 해준다.
				for(var i in pArr){
					var ele = $('#'+pArr[i].id+' > div')[0];
					Caret.allTextCheck(ele);		//해당id영역 전체 선택
//					document.execCommand(type);
					cb(pArr[i],params);
				}
			}
		},
		setText : function(item){		//초기값 text 불러올때 및 바꿀때  
			$('#'+item.id+' > div').html(item.text);
		},
		getText : function(item){		//마지막에 저장핧때 (필수)
			return $('#'+item.id+' > div').html();
		},
		getTitle : function(item){		//마지막에 저장핧때 (필수)
			return $('#'+item.id+' > div').text();
			return alert($('#In9fe0bd06rou > div').text());
		},
		setVAlign : function(item){		//verticalAlign 설정할때.
			$('#'+item.id+' > div').css("verticalAlign", item.valign);
		},
		getVAlign : function(item){	//valign을 저장할때 (필수)
			return $('#'+item.id+' > div').css("verticalAlign");
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
			$('#'+item.id).css({top: y , left: x , width: w , height:h , zoom:item.zoom, zIndex:idx});
			$('#'+item.id+' > div').css({width: w , height:h});
			
			
			//편집일때만 - 편집창도 함께 이동 
			if(item.id == CommonEditPopupTools.itemId){	//선택한 객체를 움직일때만 함께 이동.
				CommonEditPopupTools.updateCss(x,y,w * item.zoom,h * item.zoom);
			}
			
		},
		destroy : function(item){	//삭제
			$('#'+item.id).remove();
		},
		active : function(item){
			$('#'+item.id).attr('activeindex',500);
			$('#'+item.id).css('border','1px dashed #aaa');
			$('#'+item.id+' > div').attr({contenteditable:true}).blur();
			if(item.type != "LINE") this.selectedItem = item.id;
			
			//선택되어 있는 stage 객체들 취득
			var pArr = WorkflowInf.stage.getSelectedAllObjects();
			var oArr = WorkflowInf.stage.getSelectedObjects();
			var lArr = WorkflowInf.stage.getSelectedLineObjects();
			
			//다수의 객체가 선택 되어 있는지 확인 한다...
			//라인 객체 하나만 선택되어 있을 경우  텍스트 편집 기능을 비활성화 시킨다.
			//라인객체만 복수 선택되어 있을 경우 텍스트 편집 기능을 비활성화 시킨다.
			//라인만 선택시에는 맨앞,맨뒤 버튼은 비활성화 시킨다.
			
			//일반 텍스트 편집 가능 객체와 라인이 복수 선택되어 있을 경우 텍스트 기능을 활성 화 시킨다.
			
			//일반 텍스트 편집 가능 객체 하나만 선택되어 있을경우 텍스트 편집 기능을 활성화 시킨다.
			// 일반 텍스트 편집 가능 객체가 복수 선택되어있을 경우 텍스트 편집 기능을 활성화 시킨다.
			
			//일반객체가 두개 이상 선택 되어 있을 경우  정렬 버튼 활성화
			//일반 객체가 한개 이상 선택되어있을 경우 맨앞,맨뒤로 가져오기 버튼 활성화
			
			var objFlg = false; //일반 객체가 존재 하는지
			var linkObj = false; //링크는 연결되어 있지 않다.
			
			if(pArr != null){
				for(var i in pArr){
					if(pArr[i].itemType != 'LINE'){
						objFlg = true; 
					} //라인객체가 아닌 일반 객체가  포함되어 있을 경우만 텍스트 편집 기능을 활성화 시킨다.
					
					if(WorkflowManager.linkObjs[pArr[i].id] != null){
						linkObj = true; //링크가 연결되어있는 것이 존재한다.
					}
				}
				if(objFlg == false){//라인객체만 존재 할경우는 objFlg = false 일것
					buttonControl.textBtn(true);//텍스트 편집 기능 버튼 안보이게
					buttonControl.frontBackBtn(false);//맨앞,맨뒤 버튼 보이지 않게
				}else{
					buttonControl.textBtn(false);//텍스트 편집 기능 버튼 보이게
					buttonControl.frontBackBtn(true);//맨앞,맨뒤 버튼 보이게
				}
				
				if(linkObj == true){//링크 연결되어 있으면 버튼 활성화
					buttonControl.linkBtn(true);//링크 제거 컬러 설정 버튼 보이게
				}else{
					buttonControl.linkBtn(false);//링크 제거 컬러 설정 버튼 보이지 않게
				}
				
				if(pArr.length > 1){
					buttonControl.alignBtn(false);//정렬버튼 보이게
					CommonEditPopupTools.alignBtn(false);//정렬버튼 보이게
					if(objFlg == false){//라인객체만 존재 할경우는 objFlg = false 일것
						buttonControl.alignBtn(true);//정렬버튼 안보이게
						CommonEditPopupTools.alignBtn(true);//정렬버튼 안보이게
					}
				}else{
					buttonControl.alignBtn(true);//정렬버튼 안보이게
					CommonEditPopupTools.alignBtn(true);//정렬버튼 안보이게
				}
				
				buttonControl.lineBtn(true);//선관련 버튼 보이게
			}
		}, 
		deactive : function(item){
			$('#'+item.id).attr('activeindex',0);
			$('#'+item.id).css('border','none');
			$('#'+item.id+' > div').attr({contenteditable:false});		//blur를 해서 커서를 분리한다. del키를 누를때 focus를 체크 하기 때문에 
//			if(item.type != "LINE") this.selectedItem = "";
			
			Caret.Clean();
			buttonControl.alignBtn(true);//정렬버튼 안보이게
			CommonEditPopupTools.alignBtn(true);//정렬버튼 보이게
		}
		
	};
	