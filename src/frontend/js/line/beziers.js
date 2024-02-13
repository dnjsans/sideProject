
window.BezierDrawer = function(canvas, autoTesselates, mode) {
	
	// consts
	
	var ControlPointRadius = 5.0;	//컨트롤 버튼 크기
	
	var LineWidth = 5.0;
	var LineColor = '#D93F46';
	
	// data
	
	var controlPoints = [];
	var selectedControlPoint;
	var selectedControlPointOffset;

	var tesselationCount = 10;	//부드러움 갯수
	var tesselationPoints;
	var perpendicularVectors;
	
	var width = canvas.width;
	var height = canvas.height;
	
	//
	
	this.getTesselationCount = function () {return tesselationCount;};
	this.setTesselationCount = function (c) {tesselationCount = c; draw();};
	
	// setup

	var scale = 5.0;
	
	//ctx.scale(2, 2)
	
	if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            scale = window.devicePixelRatio;
        }
    }
	
	if (scale > 1) {
		canvas.style.width = width + "px";
		canvas.style.height = height + "px";
		canvas.height = height * scale;
		canvas.width = width * scale;
		canvas.getContext("2d").scale(scale, scale);
	}
	
	canvas.onmousedown = canvasDown;
	canvas.ontouchstart = genericTouchHandler(canvasDown);

	canvas.onmousemove = canvasMove;
	canvas.ontouchmove = genericTouchHandler(canvasMove);
		
	canvas.onmouseup = canvasUp;
	canvas.ontouchup = genericTouchHandler(canvasUp);
	
	for (var i = 1; i < 5; i++) { 
		controlPoints.push(new Point(i * width / 5, ((i % 3) + 1)*height/4));
	}
	
	draw();
	
	// drawing functions
	
	function draw()
	{
		retesselate();
		
		var ctx = canvas.getContext("2d");
		ctx.clearRect (0, 0, canvas.width, canvas.height);
		
		drawBorder(ctx);
		
		if (mode == BezierMode.Line) {
			drawPerfectBezier(ctx);		//라인 그리기
			drawTessLineBezier(ctx);
			drawTessPoints(ctx);
		} else if (mode == BezierMode.Rects) {
			drawTessRectBezier(ctx);
		} else if (mode == BezierMode.Perfect) {
			drawTessPerfectBezier(ctx);
		}
		
		drawControlPoints(ctx);
	}
	
	function drawBorder(ctx)
	{
		ctx.strokeStyle = '#BBBBBB';
		ctx.lineWidth = 5;
		ctx.strokeRect(0, 0, width, height);
		
		ctx.font = "14px sans-serif";
		ctx.textBaseline = "top";
		ctx.fillStyle = '#BBBBBB';
		ctx.fillText("interactive demo", 10, 10);
	}
	
	function drawPerfectBezier(ctx)
	{
		ctx.strokeStyle = '#BBBBBB';

		ctx.beginPath();
	
		ctx.moveTo(controlPoints[0].x, controlPoints[0].y);
		ctx.bezierCurveTo(controlPoints[1].x, controlPoints[1].y,
						  controlPoints[2].x, controlPoints[2].y,
						  controlPoints[3].x, controlPoints[3].y);
		ctx.stroke();
	}

	function drawTessLineBezier(ctx)
	{
		ctx.strokeStyle = LineColor;
	
		ctx.beginPath();
//		ctx.setLineDash([5, 15]);
		ctx.moveTo(tesselationPoints[0].x, tesselationPoints[0].y);
		for (var i = 1; i < tesselationPoints.length; i++) { 
			ctx.lineTo(tesselationPoints[i].x, tesselationPoints[i].y);
		}
		ctx.stroke();
	}
	
	
	function drawTessRectBezier(ctx)
	{
		ctx.fillStyle = LineColor;
		for (var i = 1; i < tesselationPoints.length; i++) { 
			var prevPoint = tesselationPoints[i - 1];
			var currPoint = tesselationPoints[i];
			
			var perp = currPoint.sub(prevPoint).perp().norm().scale(LineWidth);
	
			var corners = [prevPoint.add(perp), currPoint.add(perp),
			               currPoint.sub(perp), prevPoint.sub(perp)];
		
			ctx.beginPath();
			ctx.moveTo(corners[0].x, corners[0].y);
	
			for (var j = 1; j < corners.length; j++) {
				ctx.lineTo(corners[j].x, corners[j].y);
			}
			
			ctx.closePath();
			ctx.fill();
		}
	}
	
	function drawTessPerfectBezier(ctx)
	{
		var aliasFix = 0.4; // fixing aliasing artifacts in canvas shape rendering
		
		ctx.fillStyle = LineColor;
		ctx.strokeStyle = LineColor;
		ctx.LineWidth =  2 * aliasFix;
		
		for (var i = 1; i < tesselationPoints.length; i++) { 
			var prevPoint = tesselationPoints[i - 1];
			var currPoint = tesselationPoints[i];
			
			var prevPerp = perpendicularVectors[i - 1].scale(LineWidth - aliasFix);
			var currPerp = perpendicularVectors[i].scale(LineWidth - aliasFix);
	
			var corners = [prevPoint.add(prevPerp), currPoint.add(currPerp),
						   currPoint.sub(currPerp), prevPoint.sub(prevPerp)];
		
			ctx.beginPath();
			ctx.moveTo(corners[0].x, corners[0].y);

			for (var j = 1; j < corners.length; j++) {
				ctx.lineTo(corners[j].x, corners[j].y);
			}
			
			ctx.closePath();
			ctx.fill();
			ctx.stroke(); 
		}
	}

	
	
	function drawTessPoints(ctx)
	{
		ctx.fillStyle = LineColor;

		for (var i = 0; i <  tesselationPoints.length; i++) { 
			ctx.beginPath();
			ctx.arc(tesselationPoints[i].x, tesselationPoints[i].y, 2.0, 0, 2 * Math.PI, false);
		
			ctx.closePath();
			ctx.fill();
		}
	}

	function drawControlPoints(ctx)
	{
		function drawEndPoint(point) {
			ctx.fillStyle = "rgba(69, 69, 69, 0.7)"

			ctx.beginPath();
			ctx.arc(point.x, point.y, 1.000 * ControlPointRadius, 0, 2 * Math.PI, false);
			ctx.arc(point.x, point.y, 0.902 * ControlPointRadius, 0, 2 * Math.PI, true)
			ctx.arc(point.x, point.y, 0.784 * ControlPointRadius, 0, 2 * Math.PI, false);
			ctx.arc(point.x, point.y, 0.235 * ControlPointRadius, 0, 2 * Math.PI, true)
			ctx.fill();
		}
		
		//컨트롤 포인트 그리기 ( 마우스로 조정이 되야함. 
		function drawControlPoint(point, sign) {
			
			var w = 0.548 * ControlPointRadius;
			var h = 0.236 * ControlPointRadius;
							
			ctx.fillStyle = "rgba(133, 133, 133, 0.7)"

				//버튼을 그린다.
			ctx.beginPath();
			ctx.arc(point.x, point.y, 0.9 * ControlPointRadius, 0, 2 * Math.PI, false);
			ctx.save();
				ctx.translate(point.x, point.y);
				ctx.rotate(sign * Math.PI / 4.0);
				ctx.translate(-w / 2.0, -h / 2.0);
				ctx.moveTo(0, 0);
				ctx.lineTo(0, h);
				ctx.lineTo(w, h);
				ctx.lineTo(w, 0);
			ctx.closePath();
			ctx.restore();
			ctx.fill();
		}

		drawControlPoint(controlPoints[1], 1);
		drawControlPoint(controlPoints[2], -0.5);
		
		drawEndPoint(controlPoints[0]);
		drawEndPoint(controlPoints[3]);
	}
	
	
	// interaction
	
	function retesselate()
	{
		tesselationPoints = [];
		perpendicularVectors = [];
		
		var count = tesselationCount;
		
		if (autoTesselates) {
			count = tesselationSegmentsForLength(approximateLength());
		}
		
		for (var i = 0; i < count; i++) { 
			var t = i / (count - 1);
			
			tesselationPoints.push(bezierAt(t));
			perpendicularVectors.push(bezierPerpAt(t));
		}
	}


	/**
	 * 객체를 선택  거리로 구한다.
	 */
	function closestControlPoint(target)
	{
		var bestLen = Infinity;
		var bestPoint = undefined;
	
		controlPoints.forEach(function(point) {
			var lenSq = point.sub(target).lenSq();
			// ControlPointRadius 버튼의 반지름 
			if (lenSq < bestLen && lenSq < ControlPointRadius*ControlPointRadius) {
				bestLen = lenSq;
				bestPoint = point;
			}
		});
	
		return bestPoint;
	}
	
	// mouse/touch handling

	function mousePositionForEvent(e)
	{
		var rect = canvas.getBoundingClientRect();
		
		return new Point(e.clientX - rect.left, e.clientY - rect.top);
	}
	
	function genericTouchHandler(f)
	{
		return function(e) {
			if (e.touches.length == 1) {	//손가락 1개이상 클릭 
				if (f(e.touches[0])) {	//0번째 터치를 가져온다. 1은 두번째 핑거.   (배열에는 event 정보가 들어있다.
					e.preventDefault(); 	
					return false;
				}
			}
		}
	}

	function canvasDown(e)
	{
		var position = mousePositionForEvent(e);
		selectedControlPoint = closestControlPoint(position);		//점의 위치에서 객체를 선택. (거리를 이용)
	
		if (selectedControlPoint != undefined) {
			selectedControlPointOffset = position.sub(selectedControlPoint);
			window.addEventListener("mousemove", canvasMove, false);
			window.addEventListener("mouseup", canvasUp, false);
		} 
	
		draw();
		
		return selectedControlPoint != undefined;
	}

	function canvasMove(e)
	{
		var position = mousePositionForEvent(e);
		var controlPoint = closestControlPoint(position);
	
		canvas.style.cursor = (controlPoint || selectedControlPoint) ? 'move' : 'default';		//커서가 move로 바뀜.

		if (selectedControlPoint != undefined) {		//뭔가 선택했으면.
			var newPosition = position.sub(selectedControlPointOffset);
		
		
			//좌표 이동하고	width : 캔버스 너
			selectedControlPoint.x = Math.min(Math.max(ControlPointRadius, newPosition.x) , width - ControlPointRadius);
		
			selectedControlPoint.y = Math.min(Math.max(ControlPointRadius, newPosition.y) , height - ControlPointRadius);
		
			draw();	//다시 그리기
			e.preventDefault();
			return true;
		} 
	}

	function canvasUp(e)
	{	
		selectedControlPoint = undefined;
		window.removeEventListener("mousemove", canvasMove, false);
		window.removeEventListener("mouseup", canvasUp, false);
	}

	// Bezier & tesselation
	
	function bezierAt(t)
	{
		var nt = 1.0 - t;
	
		var scalars = [nt*nt*nt, 3.0*nt*nt*t, 3.0*nt*t*t, t*t*t];
		var value = controlPoints.reduce(function(prev, curr, i) {
			return prev.add(curr.scale(scalars[i]));
		}, new Point());
	
		return value;
	}
	
	function bezierPerpAt(t)
	{
		var nt = 1.0 - t;
	
		var scalars = [-3.0*nt*nt, 3.0*(1.0 - 4.0*t + 3.0*t*t), 3.0*(2.0*t - 3.0*t*t), 3.0*t*t];
		var value = controlPoints.reduce(function(prev, curr, i) {	//
			return prev.add(curr.scale(scalars[i]));
		}, new Point());
	
		value = value.norm();
		return new Point(-value.y, value.x);
	}
	
	function approximateLength()
	{
		var allButLast = controlPoints.slice(0, 3);
		var diffs = allButLast.map(function (el, i) {
			return controlPoints[i + 1].sub(el);
		});
		
		var length = diffs.reduce(function (prev, vec) {
			return prev + vec.len();
		}, 0.0);
		
		return length;
	}
	
	function tesselationSegmentsForLength(length)
	{
		var NoLessThan = 10;
		var segs = length/30.0;
		
		return Math.ceil(Math.sqrt(segs*segs*0.6 + NoLessThan*NoLessThan));
	}
}


function Point(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Point.prototype.x = null;
Point.prototype.y = null;
Point.prototype.add = function(v) {
	return new Point(this.x + v.x, this.y + v.y);
};

Point.prototype.sub = function(v) {
	return new Point(this.x - v.x, this.y - v.y);
};

Point.prototype.lenSq = function() {
	return this.x*this.x + this.y*this.y;
};

Point.prototype.len = function() {
	return Math.sqrt(this.lenSq());
};

Point.prototype.perp = function() {
	return new Point(-this.y, this.x);
};

Point.prototype.scale = function(s) {
	return new Point(this.x * s, this.y * s);
};

Point.prototype.norm = function() {
	return this.scale(1.0/this.len());
};

var BezierMode = {
	Line : 0,
	Rects : 1,
	Perfect : 2
}
