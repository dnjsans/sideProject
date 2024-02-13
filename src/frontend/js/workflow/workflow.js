//어디서 사용하지????


var workFlow = {
		
		//점 4개 받고 3개를 추가
		getRect3D : function (pArr){
	   		var r = [];	//결과
			var aa = {x: pArr[0], y : pArr[1]};
			var a = {x: pArr[2], y : pArr[3]};
			var b = {x: pArr[4], y : pArr[5]};
			var bb = {x: pArr[6], y : pArr[7]};
			var center = {x: (b.x+a.x)*0.5, y : (b.y+a.y)*0.5};			//중심
			
			r.push(aa.x);r.push(aa.y);
			r.push(a.x);r.push(a.y);
			
//	 		r.push(center.x);r.push(center.y);
			
			var p1 = this.getDirectionPoint(center, aa,a);
			if(p1 != null){
				r.push(p1.x);r.push(p1.y);	// p1 추가.
			}
			var p2 = this.getDirectionPoint(center, bb,b);
			if(p2 != null){
				if(p1 != null){
					var t = this.getThirdPoint(center, p1, p2);
					if(t != null){
						r.push(t.x);r.push(t.y);	//t 추가.
					}else{
						
					}
				}
				r.push(p2.x);r.push(p2.y);	// p2 추가.
			}
			r.push(b.x);r.push(b.y);
			r.push(bb.x);r.push(bb.y);
			
			return r;
	    },
	   	
	   	//거리 측정을 하지 말고 좌표 측정을  각각 한다. center와 비교.
	    getDirectionPoint : function (c, v1,v2){		//중심, 시작, 끝점.
	   		var point = null;
	   		//시작 점과 끝점으로 방향을 알수 있음.
	   		//가로 관련 계산.
	   		var d1 = this.getDistance(c, v1);
	   		var d2 = this.getDistance(c, v2); 
	   		
	   		if(v1.y==v2.y && d1 > d2 ){		//가로로 나가는선.	//센터의 y와 끝의 x를  적용하면 된다.
	   			point = {x: c.x, y: v2.y};
	   		}else if(v1.y==v2.y &&  d1 < d2 ){	//꺽이는선. 끝점의 x와 center의 y를 적용한다.
	   		//세로 관련 계산.
	   			point = {x: v2.x, y: c.y};
	   		}else if(v1.x==v2.x &&  d1 > d2 ){// 세로에서 나가는선.	//센터의 y와 끝의 x를  적용하면 된다.
	   			point = {x: v2.x, y: c.y };
	   		}else if(v1.x==v2.x &&   d1 < d2 ){	//세로 꺽이는선. 끝점의 y와 center의 x를 적용한다.
	   			point = {x: c.x , y: v2.y};
	   		}
	   		return point;
	   	},
	   	
	   	//x가 같거나 y가 같으면 추가 안한다.
	   	getThirdPoint : function (c, s1,s2){		//추가된 2점이 center와 관계가 없으면 점을 1개 더 추가한다.
	   		var point = null;
	   		if( (s1.x == s2.x) || (s1.y == s2.y) ){
	   			return c;	//중심을 리턴한다. (뭐 빼도 된다.);
	   		}else{	//모서리 점을 리턴 어디껀가......;;;;;;
	   			if(c.x == s1.x){		//s1의 세로축에 있음.
	   				return {x: s2.x, y: s1.y};
	   			}else if(c.y == s1.y){	//s1이 가로축에 있음. 
	   				return {x: s1.x, y: s2.y};
	   			}
	   			return null;	//있을수 없음. 에러
	   		}
	   	},
	   	
	   	
	   	
	  //거리측정
	   	getDistance : function (v1,v2){
	    	var disX = v1.x - v2.x;
	    	var disY = v1.y - v2.y;
	    	return Math.sqrt(Math.abs(disX*disX) + Math.abs(disY*disY));
	    }
	    
};



var MakeNormals = {
		
	lineA : [0, 0],
	lineB : [0, 0],
	tangent : [0, 0],
	miter : [0, 0],

	//이게 getNormal이다.[0.0,1.0],[0.2,0.3]
	getNormals : function(pointArr, closed) {
		this.lineA = [0, 0];
		this.lineB = [0, 0];
		this.tangent = [0, 0];
		this.miter = [0, 0];
		
		
		var points = [];
		for(var i = 0; i < pointArr.length;i+=2){
			points.push([pointArr[i],pointArr[i+1]]);
		}
		
		
	    var curNormal = null
	    var out = []
	    if (closed) {
	        points = points.slice(); //clone
	        points.push(points[0]);	//x 맨뒤에 처음꺼를 넣는다. 
	    }
	
	    var total = points.length;
	    for (var i=1; i<total; i++) {
	        var last = points[i-1]
	        var cur = points[i]
	        var next = i<points.length-1 ? points[i+1] : null
	
	        this.direction(this.lineA, cur, last)
	        if (!curNormal)  {
	            curNormal = [0, 0]
	            this.normal(curNormal, this.lineA)
	        }
	
	        if (i === 1) //add initial normals
	            this.addNext(out, curNormal, 1)
	
	        if (!next) { //no miter, simple segment
	            this.normal(curNormal, this.lineA) //reset normal
	            this.addNext(out, curNormal, 1)
	        } else { //miter with last
	            //get unit dir of next line
	            this.direction(this.lineB, next, cur)
	
	            //stores tangent & miter
	            var miterLen = this.computeMiter(this.tangent, this.miter, this.lineA, this.lineB, 1)
	            this.addNext(out, this.miter, miterLen)
	        }
	    }
	
	    //if the polyline is a closed loop, clean up the last normal
	    if (points.length > 2 && closed) {
	        var last2 = points[total-2]
	        var cur2 = points[0]
	        var next2 = points[1]
	
	        this.direction(this.lineA, cur2, last2)
	        this.direction(this.lineB, next2, cur2)
	        this.normal(curNormal, this.lineA)
	        
	        var miterLen2 = this.computeMiter(this.tangent, this.miter, this.lineA, this.lineB, 1)

	        //TODO 여기를 분석하시요. 닫을때 처음꺼에 영향을 받는다.
	        out[0][0] = this.miter.slice()
	        out[total-1][0] = this.miter.slice()
	        out[0][1] = miterLen2	//miter의 길이
	        out[total-1][1] = miterLen2
	        out.pop();	//마지막꺼 빼버림??
	    }
	
	    return out
	},

	addNext : function(out, normal, length) {
		out.push(normal[0]);
		out.push(normal[1]);
	    //out.push([[normal[0], normal[1]], length])
	},
	
	//====================
	tmp : [0,0],
	direction : function (out, a, b) {
	    //get unit dir of two lines
	    this.subtract(out, a, b)
	    this.normalize(out, out)
	    return out
	},
	computeMiter : function(tangent, miter, lineA, lineB, halfThick) {
	    //get tangent line
	    this.add(tangent, lineA, lineB)
	    this.normalize(tangent, tangent)

	    //get miter as a unit vector
	    this.set(miter, -tangent[1], tangent[0])
	    this.set(this.tmp, -lineA[1], lineA[0])

	    //get the necessary length of our miter
	    return halfThick / this.dot(miter, this.tmp)
	},
	normal : function (out, dir) {
	    //get perpendicular
		this.set(out, -dir[1], dir[0])
	    return out
	},
	//====================
	set : function (out, x, y) {
	    out[0] = x
	    out[1] = y
	    return out
	},
	add : function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	},
	dot : function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	},
	subtract : function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	},
	normalize : function (out, a) {
	    var x = a[0],
	        y = a[1]
	    var len = x*x + y*y
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len)
	        out[0] = a[0] * len
	        out[1] = a[1] * len
	    }
	    return out
	}
};


var MakeNormals22222222 = {
	
	lineA : [0, 0],
	lineB : [0, 0],
	tangent : [0, 0],
	miter : [0, 0],

	//이게 getNormal이다.[0.0,1.0],[0.2,0.3]
	getNormals : function(pointArr, closed) {
		this.lineA = [0, 0];
		this.lineB = [0, 0];
		this.tangent = [0, 0];
		this.miter = [0, 0];
		
		
		var points = [];
		for(var i = 0; i < pointArr.length;i+=2){
			points.push([pointArr[i],pointArr[i+1]]);
		}
		
		
	    var curNormal = null
	    var out = []
	    if (closed) {
	        points = points.slice(); //clone
	        points.push(points[0]);	//x 맨뒤에 처음꺼를 넣는다. 
	    }
	
	    var total = points.length;
	    for (var i=1; i<total; i++) {
	        var last = points[i-1]
	        var cur = points[i]
	        var next = i<points.length-1 ? points[i+1] : null
	
	        this.direction(this.lineA, cur, last)
	        if (!curNormal)  {
	            curNormal = [0, 0]
	            this.normal(curNormal, this.lineA)
	        }
	
	        if (i === 1) //add initial normals
	            this.addNext(out, curNormal, 1)
	
	        if (!next) { //no miter, simple segment
	            this.normal(curNormal, this.lineA) //reset normal
	            this.addNext(out, curNormal, 1)
	        } else { //miter with last
	            //get unit dir of next line
	            this.direction(this.lineB, next, cur)
	
	            //stores tangent & miter
	            var miterLen = this.computeMiter(this.tangent, this.miter, this.lineA, this.lineB, 1)
	            this.addNext(out, this.miter, miterLen)
	        }
	    }
	
	    //if the polyline is a closed loop, clean up the last normal
	    if (points.length > 2 && closed) {
	        var last2 = points[total-2]
	        var cur2 = points[0]
	        var next2 = points[1]
	
	        this.direction(this.lineA, cur2, last2)
	        this.direction(this.lineB, next2, cur2)
	        this.normal(curNormal, this.lineA)
	        
	        var miterLen2 = this.computeMiter(this.tangent, this.miter, this.lineA, this.lineB, 1)
	        out[0][0] = this.miter.slice()
	        out[total-1][0] = this.miter.slice()
	        out[0][1] = miterLen2
	        out[total-1][1] = miterLen2
	        out.pop()
	    }
	
	    return out
	},

	addNext : function(out, normal, length) {
	    out.push([[normal[0], normal[1]], length])
	},
	
	//====================
	tmp : [0,0],
	direction : function (out, a, b) {
	    //get unit dir of two lines
	    this.subtract(out, a, b)
	    this.normalize(out, out)
	    return out
	},
	computeMiter : function(tangent, miter, lineA, lineB, halfThick) {
	    //get tangent line
	    this.add(tangent, lineA, lineB)
	    this.normalize(tangent, tangent)

	    //get miter as a unit vector
	    this.set(miter, -tangent[1], tangent[0])
	    this.set(this.tmp, -lineA[1], lineA[0])

	    //get the necessary length of our miter
	    return halfThick / this.dot(miter, this.tmp)
	},
	normal : function (out, dir) {
	    //get perpendicular
		this.set(out, -dir[1], dir[0])
	    return out
	},
	//====================
	set : function (out, x, y) {
	    out[0] = x
	    out[1] = y
	    return out
	},
	add : function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	},
	dot : function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	},
	subtract : function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	},
	normalize : function (out, a) {
	    var x = a[0],
	        y = a[1]
	    var len = x*x + y*y
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len)
	        out[0] = a[0] * len
	        out[1] = a[1] * len
	    }
	    return out
	}
};



var removeDuplicated = function duplicate(nestedArray, mirror) {
  var out = []
  nestedArray.forEach(function(x){
    let x1 = mirror ? -x : x
    out.push(x1, x)
  })
  return out
};

	//counter-clockwise indices but prepared for duplicate vertices
var	createIndices = function createIndices(length) {
  let indices = new Uint16Array(length * 6)
  let c = 0, index = 0
  for (let j=0; j<length; j++) {
    let i = index
    indices[c++] = i + 0 
    indices[c++] = i + 1 
    indices[c++] = i + 2 
    indices[c++] = i + 2 
    indices[c++] = i + 1 
    indices[c++] = i + 3 
    index += 2
  }
  return indices
};


