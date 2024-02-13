'use strict';

//http-server.cmd 를 npm으로 설치하고  .. http-server.cmd라고 입력하면 서버돈다. 
var Demo;

function Init(){
	var canvas = document.getElementById("canvas-element-id");
	var gl = canvas.getContext('webgl');
	
	if(!gl){
		console.log("WebGL not supported falling back on experimental-webgl");
		gl = canvas.getContext('experimental-webgl');
	}
	if(!gl){
		alert("Your browser does not support WebGL");
		return;
	}
	
	Demo = new LightMapScene(gl);
	Demo.Load(function(error){
		if(error){
			alert('Could not load the demo - see console for more detauls');
			console.log(error);
		}else{
			Demo.Begin();
		}
	});
}
