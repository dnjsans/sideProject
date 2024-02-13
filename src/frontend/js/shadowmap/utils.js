//	var fragmentShader          = getShaderText("shader-fs");
//  var vertexShader            = getShaderText("shader-vs");

function getShaderText(id) {
    var script = document.getElementById(id);
    if (!script) {
        return null;
    }

     var str = "";
     var k = script.firstChild;
     while (k) {
         if (k.nodeType == 3) {
             str += k.textContent;
         }
         k = k.nextSibling;
     }

     return str;
 }

function getShader(gl, id) {
    var script = document.getElementById(id);
    if (!script) {
        return null;
    }

     var str = "";
     var k = script.firstChild;
     while (k) {
         if (k.nodeType == 3) {
             str += k.textContent;
         }
         k = k.nextSibling;
     }

     var shader, message;
     if (script.type == "x-shader/x-fragment") {
         shader = gl.createShader(gl.FRAGMENT_SHADER);	//셰이더 정의
         message = 'Fragment Shader';
     } else if (script.type == "x-shader/x-vertex") {
         shader = gl.createShader(gl.VERTEX_SHADER);
         message = 'Vertex Shader';
     } else {
         return null;
     }

     gl.shaderSource(shader, str);	//소스 입력
     gl.compileShader(shader);		//컴파일

     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
         alert('There was a problem with the ' + message +':\n\n'+ gl.getShaderInfoLog(shader));
         gl.deleteShader(shader);
         return null;
     }
     return shader;
 }


var loadTextResource = function(url, callback){
	var request = new XMLHttpRequest();
	request.open('GET',url+'?dont-cache='+Math.random(), true);
	request.onload = function(){
		if(request.status == 200){
			callback(null, request.responseText);
		}else{
			callback('Error: HTTP Status '+ request.status +'on resource ' + url);
		}
	};
	request.send();
}

var loadImage = function(url, callback){
	var image = new Image();
	image.onload = function(){
		callback(null, image);
	}
	image.src = url;
}

var loadJSONResource = function(url, callback){
	loadTextResource(url, function(err, result){
		if(err){
			callback(err);
		}else{
			try{
				callback(null, JSON.parse(result));
			}catch(e){
				callback(e);
			}
		}
	});
};


function AddEvent(obj, type, callback){
	if(obj == null || typeof(obj) == 'undefined')return;
	if(obj.addEventListener){
		obj.addEventListener(type,callback, false);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+type,callback);
	}else{
		obj["on"+type] = callback;
	}
}

function RemoveEvent(obj, type, callback){
	if(obj == null || typeof(obj) == 'undefined')return;
	if(obj.removeEventListener){
		obj.removeEventListener(type,callback, false);
	}else if(obj.detachEvent){
		obj.detachEvent("on"+type,callback);
	}else{
		delete obj["on"+type];
	}
}
