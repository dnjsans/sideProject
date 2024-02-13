(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.hetaquest = {})));
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var HetaJs = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});for(var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=(function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s);}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}()),get=(function t(e,i,s){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,i,s)}if("value"in n)return n.value;var r=n.get;if(void 0!==r)return r.call(s)}),inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},__datasourceList={},__optionList={},__limitUT=[],i=0;i<256;i++)__limitUT[i]=(i<16?"0":"")+i.toString(16);var DataSource=function(){function t(){classCallCheck(this,t);}return createClass(t,null,[{key:"UUID",value:function(){var t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return __limitUT[255&t]+__limitUT[t>>8&255]+__limitUT[t>>16&255]+__limitUT[t>>24&255]+"-"+__limitUT[255&e]+__limitUT[e>>8&255]+"-"+__limitUT[e>>16&15|64]+__limitUT[e>>24&255]+"-"+__limitUT[63&i|128]+__limitUT[i>>8&255]+"-"+__limitUT[i>>16&255]+__limitUT[i>>24&255]+__limitUT[255&s]+__limitUT[s>>8&255]+__limitUT[s>>16&255]+__limitUT[s>>24&255]}},{key:"Add",value:function(t,e){e.loaded=!1;var i=e.type,s=e.target;if("IMAGE"==i){var n=new Image;n.onload=function(){__datasourceList[t]=n,e.loaded=!0;},n.src=s;}else"OBJECT"==i?(__datasourceList[t]=s,e.loaded=!0):"TEXT"==i?(__datasourceList[t]=s,e.loaded=!0):"MESH"==i?(__datasourceList[t]=s,e.loaded=!0):"SOUND"==i?(__datasourceList[t]=s,e.loaded=!0):"CALLBACK"!=i&&"LINK"!=i||("function"!=typeof s&&console.log("Warning!!! LINK target must be Function"),__datasourceList[t]=s,e.loaded=!0);__optionList[t]=e;}},{key:"Remove",value:function(t){delete __datasourceList[t],delete __optionList[t];}},{key:"Load",value:function(t){return null==__optionList[t]?null:!0===__optionList[t].loaded?__datasourceList[t]:"IMAGE"==__optionList[t].type?"":void 0}},{key:"EncodeImageToBase64",value:function(t){var e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight,e.getContext("2d").drawImage(t,0,0);try{return e.toDataURL("image/png")}catch(t){return console.log(t),""}}}]),t}(),Vec2=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;classCallCheck(this,t),this.x=e,this.y=i;}return createClass(t,[{key:"set",value:function(t,e){return this.x=t,this.y=e,this}},{key:"clone",value:function(){return new this.constructor(this.x,this.y)}},{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this}},{key:"min",value:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}},{key:"max",value:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}},{key:"clamp",value:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}},{key:"angle",value:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t}},{key:"distanceTo",value:function(t){var e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"addScalar",value:function(t){return this.x+=t,this.y+=t,this}},{key:"addVectors",value:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"subScalar",value:function(t){return this.x-=t,this.y-=t,this}},{key:"subVectors",value:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}},{key:"multiply",value:function(t){return this.x*=t.x,this.y*=t.y,this}},{key:"multiplyScalar",value:function(t){return this.x*=t,this.y*=t,this}},{key:"divide",value:function(t){return this.x/=t.x,this.y/=t.y,this}},{key:"divideScalar",value:function(t){return this.multiplyScalar(1/t)}},{key:"lenSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"length",value:function(){return Math.sqrt(this.lenSq())}}]),t}(),EventStore=function(){function t(e){classCallCheck(this,t),this.stage=e,this._eventStoreList={},this._unitsFromEvents={},this.history={mousedown:{x:null,y:null},mouseup:{x:null,y:null},click:{x:null,y:null}};}return createClass(t,[{key:"_addUnitsFromEvents",value:function(t,e){for(var i in t)null==this._unitsFromEvents[i]&&(this._unitsFromEvents[i]=[]),this._unitsFromEvents[i].push(e);}},{key:"_removeUnitsFromEvents",value:function(t,e){var i=this._eventStoreList[t];for(var s in i)if((null==e||e==s)&&null!=this._unitsFromEvents[s])for(var n=0;n<this._unitsFromEvents[s].length;++n)if(this._unitsFromEvents[s][n].id==t){this._unitsFromEvents[s].splice(n,1);break}}},{key:"Add",value:function(t,e,i){null!=i&&(e.parentId=i),this._eventStoreList[t.id]=e,null!=i&&this._addUnitsFromEvents(e,t);}},{key:"Remove",value:function(t){this._removeUnitsFromEvents(t),delete this._eventStoreList[t];}},{key:"AddAttribute",value:function(t,e){var i=this._eventStoreList[t];for(var s in e)i[s]=e[s];this._eventStoreList[t]=i,this._addUnitsFromEvents(i,this.stage.scene.Units[t]);}},{key:"RemoveAttribute",value:function(t,e){var i=this._eventStoreList[t];if(e instanceof Array)for(var s in e)this._removeUnitsFromEvents(t,e[s]),delete i[e[s]];else for(var n in e)this._removeUnitsFromEvents(t,n),delete i[n];this._eventStoreList[t]=i;}},{key:"FindItems",value:function(t,e,i){return void 0===i?this._getCollisionObject(this.stage.scene.getOrderdUnits(),new Vec2(t.x,t.y),e):this._getEventOrientedCollision(new Vec2(t.x,t.y),e,i)}},{key:"FindItemOne",value:function(t,e){var i=this.FindItems(new Vec2(t.x,t.y),1,e);return i.length>0?i[0]:null}},{key:"Trigger",value:function(t,e,i){if(this.setHistory(e,i.position),null!=t)for(var s in this._eventStoreList)if(s==t.id){var n=this._eventStoreList[s],o=n[e];if(void 0===o)return;void 0!==n.parentId&&(t.parentId=n.parentId),void 0!==n._before&&n._before.call(t,this.stage,i),void 0!==o&&o.call(t,this.stage,i),void 0!==n._after&&n._after.call(t,this.stage,i);}}},{key:"getHistory",value:function(t){return this.history[t]}},{key:"setHistory",value:function(t,e){void 0!==this.history[t]&&(this.history[t].x=e.x,this.history[t].y=e.y);}},{key:"_getEventOrientedCollision",value:function(t,e,i){var s=[],n=this._unitsFromEvents[i];return null!=n&&(s=this._getCollisionObject(n,t,e)),s}},{key:"_getCollisionObject",value:function(t,e,i){for(var s=[],n=0,o=0;o<t.length;o++){var r=t[o];if(1!=r.hide&&(!0===r.CollisionCheck(e)&&(s.push(r),n++),null!=i&&i<=n))return s}return s}},{key:"AddEvent",value:function(t,e,i){null!=t&&void 0!==t&&(t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i);}},{key:"RemoveEvent",value:function(t,e,i){null!=t&&void 0!==t&&(t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):delete t["on"+e]);}}]),t}(),FPS=function(){function t(){classCallCheck(this,t),this.activeFPS=!1,this.activeUpdateLoop=!1,this.activeRenderLoop=!1,this.useUpdateLoop=!0,this.useRenderLoop=!0,this.fps=40;}return createClass(t,[{key:"useUpdate",value:function(t){this.useUpdateLoop=t;}},{key:"useRender",value:function(t){this.useRenderLoop=t;}},{key:"Start",value:function(){var t=this;if(this.activeFPS=!0,this.Resume(),this.lastUpdate=Date.now(),this.d=0,!0===this.useUpdateLoop&&(this._Updateloop=setInterval(function(){t._UpdateLoop();},this.fps)),!0===this.useRenderLoop){!function e(){requestAnimationFrame(e),t.activeFPS&&t._RenderLoop();}();}}},{key:"Resume",value:function(){!0===this.useUpdateLoop&&(this.activeUpdateLoop=!0),!0===this.useRenderLoop&&(this.activeRenderLoop=!0);}},{key:"Pause",value:function(){!0===this.useUpdateLoop&&(this.activeUpdateLoop=!1),!0===this.useRenderLoop&&(this.activeRenderLoop=!1);}},{key:"Stop",value:function(){this.activeFPS=!1,!0===this.useUpdateLoop&&clearInterval(this._Updateloop);}},{key:"_UpdateLoop",value:function(){if(this.activeUpdateLoop){var t=Date.now(),e=(t-this.lastUpdate)/this.fps;this.Update(this.d,e),this.lastUpdate=t,this.d+=e;}}},{key:"_RenderLoop",value:function(){this.activeRenderLoop&&this.Render();}},{key:"Update",value:function(){}},{key:"Render",value:function(){}}]),t}(),SocketStoreServer=function(){function t(e,i){var s=this;classCallCheck(this,t),this.stage=e,this.socketStore={},this._socketList={},i.sockets.on("connection",function(t){t.id=Math.random()*Math.pow(10,17),s._socketList[t.id]=t,s._ConnectSocket(t),t.on("disconnect",function(){s._DisConnectSocket(t);});});}return createClass(t,[{key:"_ConnectSocket",value:function(t){var e=this;this.socketStore._connect&&this.socketStore._connect.call(this.stage,t);for(var i in this.socketStore)!function(i){0!=i.indexOf("_")&&t.on(i,function(s){e.socketStore[i].call(e.stage,s,t);});}(i);return!0}},{key:"_DisConnectSocket",value:function(t){delete this._socketList[t.id],this.socketStore._disconnect&&this.socketStore._disconnect.call(this.stage,t);}},{key:"Add",value:function(t){this.socketStore=t;}},{key:"EmitAllSockets",value:function(t,e){for(var i in this._socketList)this._socketList[i].emit(t,e);}},{key:"getSocket",value:function(t){return this._socketList[t]}},{key:"Update",value:function(t,e,i){for(var s in this._socketList){var n=this._socketList[s];t.length>0&&n.emit("_init",t),e.length>0&&n.emit("_update",e),i.length>0&&n.emit("_remove",i);}}}]),t}(),StageServer=function(t){function e(t,i){var s=t.id;classCallCheck(this,e);var n=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.useRender(!1),n.sceneList={},n.id=s,n.SocketStore=new SocketStoreServer(n,i),n.initPack=[],n.updatePack=[],n.removePack=[],n.initLockedList=[],n.updateLockedList=[],n.removeLockedList=[],n.locked=!1,n}return inherits(e,t),createClass(e,[{key:"getSceneItemPacks",value:function(t){var e=this.sceneList[t],i=[];if(e)for(var s in e.Items){var n=e.Items[s];i.push(n.getPack());}return i}},{key:"setInitPack",value:function(t){null!=t&&(!0===this.locked?this.initLockedList.push(t):this.initPack.push(t));}},{key:"setUpdatePack",value:function(t){null!=t&&(!0===this.locked?this.updateLockedList.push(t):this.updatePack.push(t));}},{key:"setRemovePack",value:function(t){null!=t&&(!0===this.locked?this.removeLockedList.push(t):this.removePack.push(t));}},{key:"lockPack",value:function(){this.initLockedList=[],this.updateLockedList=[],this.removeLockedList=[],this.locked=!0;}},{key:"unLockPack",value:function(){this.initPack=[],this.updatePack=[],this.removePack=[];for(var t in this.initLockedList)this.initPack.push(this.initLockedList[t]);for(var e in this.updateLockedList)this.updatePack.push(this.updateLockedList[e]);for(var i in this.removeLockedList)this.removePack.push(this.removeLockedList[i]);this.locked=!1;}},{key:"Update",value:function(t,e){this.lockPack(),this.SocketStore&&this.SocketStore.Update(this.initPack,this.updatePack,this.removePack),this.unLockPack();}}]),e}(FPS),baseVS="attribute vec2 a_position;\r\nattribute vec2 a_texCoord;\r\n\r\nvarying vec2 v_texCoord;\r\nvoid main(){\r\n\tgl_Position = vec4(a_position, 1.0, 1.0);\r\n\tv_texCoord = a_texCoord;\r\n}\r\n",baseFS="precision mediump float;\r\nuniform sampler2D u_image;\r\nvarying vec2 v_texCoord;\r\n\r\nvoid main(){\r\n\tgl_FragColor = texture2D(u_image, v_texCoord);\r\n}\r\n",ShaderLibs={basic:{uniform:[],vs:baseVS,fs:baseFS}},ShaderProgram=function(){function t(e){classCallCheck(this,t),this.gl=e,this.getProgram();}return createClass(t,[{key:"getProgram",value:function(){var t=this.gl,e=this._getShader(ShaderLibs.basic.vs,"VERTEX"),i=this._getShader(ShaderLibs.basic.fs,"FRAGMENT");if(e&&i){if(this.program=t.createProgram(),t.attachShader(this.program,e),t.attachShader(this.program,i),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))return console.log("Error Linking PROGRAM :"+t.getProgramInfoLog(this.program)),null;if(t.validateProgram(this.program),!t.getProgramParameter(this.program,t.VALIDATE_STATUS))return console.log("Error Validating PROGRAM :"+t.getProgramInfoLog(this.program)),null;t.detachShader(this.program,e),t.detachShader(this.program,i),t.deleteShader(e),t.deleteShader(i),t.useProgram(null);}}},{key:"_getShader",value:function(t,e){var i=this.gl,s=i.VERTEX_SHADER;"FRAGMENT"===e&&(s=i.FRAGMENT_SHADER);var n=i.createShader(s);return i.shaderSource(n,t),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)?n:(console.log("Error "+e+" Shader :"+i.getShaderInfoLog(n)),null)}}]),t}(),Vec3=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;classCallCheck(this,t),this.isVec3=!0,this.x=e,this.y=i,this.z=s;}return createClass(t,[{key:"clone",value:function(){return new this.constructor(this.x,this.y,this.z)}},{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}},{key:"clamp",value:function(t,e){return this.x=Math.min(e.x,Math.max(t.x,this.x)),this.y=Math.min(e.y,Math.max(t.y,this.y)),this.z=Math.min(e.z,Math.max(t.z,this.z)),this}},{key:"angleTo",value:function(t){var e=this.x*this.x+this.y*this.y+this.z*this.z,i=t.x*t.x+t.y*t.y+t.z*t.z,s=this.dot(t)/Math.sqrt(e*i);return Math.acos(Math.min(1,Math.max(-1,s)))}},{key:"distanceTo",value:function(t){var e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return Math.sqrt(e*e+i*i+s*s)}},{key:"dot",value:function(t){return t.x*this.x+t.y*this.y+t.z*this.z}},{key:"cross",value:function(t){var e=this.x,i=this.y,s=this.z;return this.x=i*t.z-s*t.y,this.y=s*t.x-e*t.z,this.z=e*t.y-i*t.x,this}},{key:"crossVec",value:function(t,e){var i=t.x,s=t.y,n=t.z;return this.x=s*e.z-n*e.y,this.y=n*e.x-i*e.z,this.z=i*e.y-s*e.x,this}},{key:"set",value:function(t,e,i){return this.x=t,this.y=e,this.z=i,this}},{key:"setScalar",value:function(t){return this.x=t,this.y=t,this.z=t,this}},{key:"setX",value:function(t){return this.x=t,this}},{key:"setY",value:function(t){return this.y=t,this}},{key:"setZ",value:function(t){return this.z=t,this}},{key:"setComponent",value:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}},{key:"getComponent",value:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}},{key:"add",value:function(t,e){return void 0!==e?this.addVectors(t,e):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}},{key:"addScalar",value:function(t){return this.x+=t,this.y+=t,this.z+=t,this}},{key:"addVectors",value:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}},{key:"addScaledVector",value:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}},{key:"sub",value:function(t,e){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}},{key:"subScalar",value:function(t){return this.x-=t,this.y-=t,this.z-=t,this}},{key:"subVectors",value:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}},{key:"multiply",value:function(t,e){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}},{key:"multiplyScalar",value:function(t){return this.x*=t,this.y*=t,this.z*=t,this}},{key:"multiplyVectors",value:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}},{key:"applyMatrix3",value:function(t){var e=this.x,i=this.y,s=this.z,n=t.ele;return this.x=n[0]*e+n[3]*i+n[6]*s,this.y=n[1]*e+n[4]*i+n[7]*s,this.z=n[2]*e+n[5]*i+n[8]*s,this}},{key:"applyMatrix4",value:function(t){var e=this.x,i=this.y,s=this.z,n=t.ele,o=1/(n[3]*e+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*e+n[4]*i+n[8]*s+n[12])*o,this.y=(n[1]*e+n[5]*i+n[9]*s+n[13])*o,this.z=(n[2]*e+n[6]*i+n[10]*s+n[14])*o,this}},{key:"applyQuaternion",value:function(t){var e=this.x,i=this.y,s=this.z,n=t.x,o=t.y,r=t.z,a=t.w,h=a*e+o*s-r*i,c=a*i+r*e-n*s,l=a*s+n*i-o*e,u=-n*e-o*i-r*s;return this.x=h*a+u*-n+c*-r-l*-o,this.y=c*a+u*-o+l*-n-h*-r,this.z=l*a+u*-r+h*-o-c*-n,this}},{key:"transformDirection",value:function(t){var e=this.x,i=this.y,s=this.z,n=t.ele;return this.x=n[0]*e+n[4]*i+n[8]*s,this.y=n[1]*e+n[5]*i+n[9]*s,this.z=n[2]*e+n[6]*i+n[10]*s,this.normalize()}},{key:"divide",value:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}},{key:"divideScalar",value:function(t){return this.multiplyScalar(1/t)}},{key:"min",value:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}},{key:"max",value:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}},{key:"clampScalar",value:function(e,i){return this.clamp(new t(e,e,e),new t(i,i,i))}},{key:"clampLength",value:function(t,e){var i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}},{key:"floor",value:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}},{key:"ceil",value:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}},{key:"round",value:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}},{key:"roundToZero",value:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}},{key:"negate",value:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}},{key:"manhattanLength",value:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}},{key:"normalize",value:function(){return this.divideScalar(this.length()||1)}},{key:"setLength",value:function(t){return this.normalize().multiplyScalar(t)}},{key:"lerp",value:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}},{key:"lerpVectors",value:function(t,e,i){return this.subVectors(e,t).multiplyScalar(i).add(t)}},{key:"projectOnVector",value:function(t){var e=t.dot(this)/t.lengthSq();return this.copy(t).multiplyScalar(e)}},{key:"distanceToSquared",value:function(t){var e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}},{key:"manhattanDistanceTo",value:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}},{key:"setFromSpherical",value:function(t){var e=Math.sin(t.phi)*t.radius;return this.x=e*Math.sin(t.theta),this.y=Math.cos(t.phi)*t.radius,this.z=e*Math.cos(t.theta),this}},{key:"setFromCylindrical",value:function(t){return this.x=t.radius*Math.sin(t.theta),this.y=t.y,this.z=t.radius*Math.cos(t.theta),this}},{key:"setFromMatrixPosition",value:function(t){var e=t.ele;return this.x=e[12],this.y=e[13],this.z=e[14],this}},{key:"setFromMatrixScale",value:function(t){var e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}},{key:"setFromMatrixColumn",value:function(t,e){return this.fromArray(t.ele,4*e)}},{key:"equals",value:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}},{key:"fromArray",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}},{key:"toArray",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}},{key:"fromBufferAttribute",value:function(t,e,i){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}}]),t}(),Mat4=function(){function t(){classCallCheck(this,t),this.isMat4=!0,this.ele=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.lookVecX=new Vec3,this.lookVecY=new Vec3,this.lookVecZ=new Vec3,this.vecApplyBuff=new Vec3,this.extractRotVec=new Vec3;}return createClass(t,[{key:"set",value:function(t,e,i,s,n,o,r,a,h,c,l,u,v,y,f,d){var _=this.ele;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=n,_[5]=o,_[9]=r,_[13]=a,_[2]=h,_[6]=c,_[10]=l,_[14]=u,_[3]=v,_[7]=y,_[11]=f,_[15]=d,this}},{key:"identity",value:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}},{key:"clone",value:function(){return(new t).fromArray(this.ele)}},{key:"copy",value:function(t){var e=this.ele,i=t.ele;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}},{key:"copyPosition",value:function(t){var e=this.ele,i=t.ele;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}},{key:"extractBasis",value:function(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}},{key:"makeBasis",value:function(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}},{key:"extractRotation",value:function(t){var e=this.extractRotVec,i=this.ele,s=t.ele,n=1/e.setFromMatrixColumn(t,0).length(),o=1/e.setFromMatrixColumn(t,1).length(),r=1/e.setFromMatrixColumn(t,2).length();return i[0]=s[0]*n,i[1]=s[1]*n,i[2]=s[2]*n,i[4]=s[4]*o,i[5]=s[5]*o,i[6]=s[6]*o,i[8]=s[8]*r,i[9]=s[9]*r,i[10]=s[10]*r,this}},{key:"makeRotationFromEuler",value:function(t){var e=this.ele,i=t.x,s=t.y,n=t.z,o=Math.cos(i),r=Math.sin(i),a=Math.cos(s),h=Math.sin(s),c=Math.cos(n),l=Math.sin(n);if("XYZ"===t.order){var u=o*c,v=o*l,y=r*c,f=r*l;e[0]=a*c,e[4]=-a*l,e[8]=h,e[1]=v+y*h,e[5]=u-f*h,e[9]=-r*a,e[2]=f-u*h,e[6]=y+v*h,e[10]=o*a;}else if("YXZ"===t.order){var d=a*c,_=a*l,m=h*c,p=h*l;e[0]=d+p*r,e[4]=m*r-_,e[8]=o*h,e[1]=o*l,e[5]=o*c,e[9]=-r,e[2]=_*r-m,e[6]=p+d*r,e[10]=o*a;}else if("ZXY"===t.order){var d=a*c,_=a*l,m=h*c,p=h*l;e[0]=d-p*r,e[4]=-o*l,e[8]=m+_*r,e[1]=_+m*r,e[5]=o*c,e[9]=p-d*r,e[2]=-o*h,e[6]=r,e[10]=o*a;}else if("ZYX"===t.order){var u=o*c,v=o*l,y=r*c,f=r*l;e[0]=a*c,e[4]=y*h-v,e[8]=u*h+f,e[1]=a*l,e[5]=f*h+u,e[9]=v*h-y,e[2]=-h,e[6]=r*a,e[10]=o*a;}else if("YZX"===t.order){var x=o*a,k=o*h,g=r*a,S=r*h;e[0]=a*c,e[4]=S-x*l,e[8]=g*l+k,e[1]=l,e[5]=o*c,e[9]=-r*c,e[2]=-h*c,e[6]=k*l+g,e[10]=x-S*l;}else if("XZY"===t.order){var x=o*a,k=o*h,g=r*a,S=r*h;e[0]=a*c,e[4]=-l,e[8]=h*c,e[1]=x*l+S,e[5]=o*c,e[9]=k*l-g,e[2]=g*l-k,e[6]=r*c,e[10]=S*l+x;}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}},{key:"makeRotationFromQuaternion",value:function(t){var e=this.ele,i=t._x,s=t._y,n=t._z,o=t._w,r=i+i,a=s+s,h=n+n,c=i*r,l=i*a,u=i*h,v=s*a,y=s*h,f=n*h,d=o*r,_=o*a,m=o*h;return e[0]=1-(v+f),e[4]=l-m,e[8]=u+_,e[1]=l+m,e[5]=1-(c+f),e[9]=y-d,e[2]=u-_,e[6]=y+d,e[10]=1-(c+v),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}},{key:"lookAt",value:function(t,e,i){var s=this.ele,n=this.lookVecX,o=this.lookVecY,r=this.lookVecZ;return r.subVectors(t,e),0===r.lengthSq()&&(r.z=1),r.normalize(),n.crossVectors(i,r),0===n.lengthSq()&&(1===Math.abs(i.z)?r.x+=1e-4:r.z+=1e-4,r.normalize(),n.crossVectors(i,r)),n.normalize(),o.crossVectors(r,n),s[0]=n.x,s[4]=o.x,s[8]=r.x,s[1]=n.y,s[5]=o.y,s[9]=r.y,s[2]=n.z,s[6]=o.z,s[10]=r.z,this}},{key:"multiply",value:function(t,e){return null!=e?this.multiplyMatrices(t,e):this.multiplyMatrices(this,t)}},{key:"premultiply",value:function(t){return this.multiplyMatrices(t,this)}},{key:"multiplyMatrices",value:function(t,e){var i=t.ele,s=e.ele,n=this.ele,o=i[0],r=i[4],a=i[8],h=i[12],c=i[1],l=i[5],u=i[9],v=i[13],y=i[2],f=i[6],d=i[10],_=i[14],m=i[3],p=i[7],x=i[11],k=i[15],g=s[0],S=s[4],C=s[8],w=s[12],z=s[1],R=s[5],M=s[9],b=s[13],P=s[2],T=s[6],L=s[10],U=s[14],O=s[3],I=s[7],A=s[11],D=s[15];return n[0]=o*g+r*z+a*P+h*O,n[4]=o*S+r*R+a*T+h*I,n[8]=o*C+r*M+a*L+h*A,n[12]=o*w+r*b+a*U+h*D,n[1]=c*g+l*z+u*P+v*O,n[5]=c*S+l*R+u*T+v*I,n[9]=c*C+l*M+u*L+v*A,n[13]=c*w+l*b+u*U+v*D,n[2]=y*g+f*z+d*P+_*O,n[6]=y*S+f*R+d*T+_*I,n[10]=y*C+f*M+d*L+_*A,n[14]=y*w+f*b+d*U+_*D,n[3]=m*g+p*z+x*P+k*O,n[7]=m*S+p*R+x*T+k*I,n[11]=m*C+p*M+x*L+k*A,n[15]=m*w+p*b+x*U+k*D,this}},{key:"multiplyScalar",value:function(t){var e=this.ele;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}},{key:"applyToBufferAttribute",value:function(t){for(var e=this.vecApplyBuff,i=0,s=t.count;i<s;i++)e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.applyMatrix4(this),t.setXYZ(i,e.x,e.y,e.z);return t}},{key:"determinant",value:function(){var t=this.ele,e=t[0],i=t[4],s=t[8],n=t[12],o=t[1],r=t[5],a=t[9],h=t[13],c=t[2],l=t[6],u=t[10],v=t[14];return t[3]*(+n*a*l-s*h*l-n*r*u+i*h*u+s*r*v-i*a*v)+t[7]*(+e*a*v-e*h*u+n*o*u-s*o*v+s*h*c-n*a*c)+t[11]*(+e*h*l-e*r*v-n*o*l+i*o*v+n*r*c-i*h*c)+t[15]*(-s*r*c-e*a*l+e*r*u+s*o*l-i*o*u+i*a*c)}},{key:"transpose",value:function(){var t,e=this.ele;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}},{key:"setPosition",value:function(t){var e=this.ele;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this}},{key:"getInverse",value:function(t,e){var i=this.ele,s=t.ele,n=s[0],o=s[1],r=s[2],a=s[3],h=s[4],c=s[5],l=s[6],u=s[7],v=s[8],y=s[9],f=s[10],d=s[11],_=s[12],m=s[13],p=s[14],x=s[15],k=y*p*u-m*f*u+m*l*d-c*p*d-y*l*x+c*f*x,g=_*f*u-v*p*u-_*l*d+h*p*d+v*l*x-h*f*x,S=v*m*u-_*y*u+_*c*d-h*m*d-v*c*x+h*y*x,C=_*y*l-v*m*l-_*c*f+h*m*f+v*c*p-h*y*p,w=n*k+o*g+r*S+a*C;if(0===w){var z="Matrix4 .getInverse() can't invert matrix, determinant is 0";if(!0===e)throw new Error(z);return console.warn(z),this.identity()}var R=1/w;return i[0]=k*R,i[1]=(m*f*a-y*p*a-m*r*d+o*p*d+y*r*x-o*f*x)*R,i[2]=(c*p*a-m*l*a+m*r*u-o*p*u-c*r*x+o*l*x)*R,i[3]=(y*l*a-c*f*a-y*r*u+o*f*u+c*r*d-o*l*d)*R,i[4]=g*R,i[5]=(v*p*a-_*f*a+_*r*d-n*p*d-v*r*x+n*f*x)*R,i[6]=(_*l*a-h*p*a-_*r*u+n*p*u+h*r*x-n*l*x)*R,i[7]=(h*f*a-v*l*a+v*r*u-n*f*u-h*r*d+n*l*d)*R,i[8]=S*R,i[9]=(_*y*a-v*m*a-_*o*d+n*m*d+v*o*x-n*y*x)*R,i[10]=(h*m*a-_*c*a+_*o*u-n*m*u-h*o*x+n*c*x)*R,i[11]=(v*c*a-h*y*a-v*o*u+n*y*u+h*o*d-n*c*d)*R,i[12]=C*R,i[13]=(v*m*r-_*y*r+_*o*f-n*m*f-v*o*p+n*y*p)*R,i[14]=(_*c*r-h*m*r-_*o*l+n*m*l+h*o*p-n*c*p)*R,i[15]=(h*y*r-v*c*r+v*o*l-n*y*l-h*o*f+n*c*f)*R,this}},{key:"scale",value:function(t){var e=this.ele,i=t.x,s=t.y,n=t.z;return e[0]*=i,e[4]*=s,e[8]*=n,e[1]*=i,e[5]*=s,e[9]*=n,e[2]*=i,e[6]*=s,e[10]*=n,e[3]*=i,e[7]*=s,e[11]*=n,this}},{key:"getMaxScaleOnAxis",value:function(){var t=this.ele,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}},{key:"makeTranslation",value:function(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}},{key:"makeRotationX",value:function(t){var e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}},{key:"makeRotationY",value:function(t){var e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}},{key:"makeRotationZ",value:function(t){var e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}},{key:"makeRotationAxis",value:function(t,e){var i=Math.cos(e),s=Math.sin(e),n=1-i,o=t.x,r=t.y,a=t.z,h=n*o,c=n*r;return this.set(h*o+i,h*r-s*a,h*a+s*r,0,h*r+s*a,c*r+i,c*a-s*o,0,h*a-s*r,c*a+s*o,n*a*a+i,0,0,0,0,1),this}},{key:"makeScale",value:function(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}},{key:"makeShear",value:function(t,e,i){return this.set(1,e,i,0,t,1,i,0,t,e,1,0,0,0,0,1),this}},{key:"compose",value:function(t,e,i){return this.makeRotationFromQuaternion(e),this.scale(i),this.setPosition(t),this}},{key:"makePerspective",value:function(t,e,i,s,n,o){var r=this.ele,a=2*n/(e-t),h=2*n/(i-s),c=(e+t)/(e-t),l=(i+s)/(i-s),u=-(o+n)/(o-n),v=-2*o*n/(o-n);return r[0]=a,r[4]=0,r[8]=c,r[12]=0,r[1]=0,r[5]=h,r[9]=l,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=v,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}},{key:"makeOrthographic",value:function(t,e,i,s,n,o){var r=this.ele,a=1/(e-t),h=1/(i-s),c=1/(o-n),l=(e+t)*a,u=(i+s)*h,v=(o+n)*c;return r[0]=2*a,r[4]=0,r[8]=0,r[12]=-l,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*c,r[14]=-v,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}},{key:"equals",value:function(t){for(var e=this.ele,i=t.ele,s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}},{key:"fromArray",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=0;i<16;i++)this.ele[i]=t[i+e];return this}},{key:"toArray",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this.ele;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}]),t}(),Quat=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;classCallCheck(this,t),this._x=e,this._y=i,this._z=s,this._w=n,this.UnitVec3=new Vec3,this.EPS=1e-6;}return createClass(t,[{key:"clone",value:function(){return new this.constructor(this._x,this._y,this._z,this._w)}},{key:"set",value:function(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this.onChangeCallback(),this}},{key:"copy",value:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this.onChangeCallback(),this}},{key:"inverse",value:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this}},{key:"dot",value:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}},{key:"slerp",value:function(t,e){if(0===e)return this;if(1===e)return this.copy(t);var i=this._x,s=this._y,n=this._z,o=this._w,r=o*t._w+i*t._x+s*t._y+n*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=s,this._z=n,this;var a=Math.sqrt(1-r*r);if(Math.abs(a)<.001)return this._w=.5*(o+this._w),this._x=.5*(i+this._x),this._y=.5*(s+this._y),this._z=.5*(n+this._z),this;var h=Math.atan2(a,r),c=Math.sin((1-e)*h)/a,l=Math.sin(e*h)/a;return this._w=o*c+this._w*l,this._x=i*c+this._x*l,this._y=s*c+this._y*l,this._z=n*c+this._z*l,this.onChangeCallback(),this}},{key:"setFromEuler",value:function(t,e){var i=t._x,s=t._y,n=t._z,o=t.order,r=Math.cos,a=Math.sin,h=r(i/2),c=r(s/2),l=r(n/2),u=a(i/2),v=a(s/2),y=a(n/2);return"XYZ"===o?(this._x=u*c*l+h*v*y,this._y=h*v*l-u*c*y,this._z=h*c*y+u*v*l,this._w=h*c*l-u*v*y):"YXZ"===o?(this._x=u*c*l+h*v*y,this._y=h*v*l-u*c*y,this._z=h*c*y-u*v*l,this._w=h*c*l+u*v*y):"ZXY"===o?(this._x=u*c*l-h*v*y,this._y=h*v*l+u*c*y,this._z=h*c*y+u*v*l,this._w=h*c*l-u*v*y):"ZYX"===o?(this._x=u*c*l-h*v*y,this._y=h*v*l+u*c*y,this._z=h*c*y-u*v*l,this._w=h*c*l+u*v*y):"YZX"===o?(this._x=u*c*l+h*v*y,this._y=h*v*l+u*c*y,this._z=h*c*y-u*v*l,this._w=h*c*l-u*v*y):"XZY"===o&&(this._x=u*c*l-h*v*y,this._y=h*v*l-u*c*y,this._z=h*c*y+u*v*l,this._w=h*c*l+u*v*y),!1!==e&&this.onChangeCallback(),this}},{key:"setFromAxisAngle",value:function(t,e){var i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this.onChangeCallback(),this}},{key:"setFromRotationMatrix",value:function(t){var e,i=t.elements,s=i[0],n=i[4],o=i[8],r=i[1],a=i[5],h=i[9],c=i[2],l=i[6],u=i[10],v=s+a+u;return v>0?(e=.5/Math.sqrt(v+1),this._w=.25/e,this._x=(l-h)*e,this._y=(o-c)*e,this._z=(r-n)*e):s>a&&s>u?(e=2*Math.sqrt(1+s-a-u),this._w=(l-h)/e,this._x=.25*e,this._y=(n+r)/e,this._z=(o+c)/e):a>u?(e=2*Math.sqrt(1+a-s-u),this._w=(o-c)/e,this._x=(n+r)/e,this._y=.25*e,this._z=(h+l)/e):(e=2*Math.sqrt(1+u-s-a),this._w=(r-n)/e,this._x=(o+c)/e,this._y=(h+l)/e,this._z=.25*e),this.onChangeCallback(),this}},{key:"setFromUnitVectors",value:function(t,e){var i=this.UnitVec3;return this.r=t.dot(e)+1,this.r<this.EPS?(this.r=0,Math.abs(t.x)>Math.abs(t.z)?i.set(-t.y,t.x,0):i.set(0,-t.z,t.y)):i.crossVectors(t,e),this._x=i.x,this._y=i.y,this._z=i.z,this._w=this.r,this.normalize()}},{key:"lengthSq",value:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}},{key:"length",value:function(){return Math.sqrt(this.lengthSq())}},{key:"normalize",value:function(){var t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this.onChangeCallback(),this}},{key:"multiply",value:function(t,e){return void 0!==e?this.multiplyQuaternions(t,e):this.multiplyQuaternions(this,t)}},{key:"premultiply",value:function(t){return this.multiplyQuaternions(t,this)}},{key:"multiplyQuaternions",value:function(t,e){var i=t._x,s=t._y,n=t._z,o=t._w,r=e._x,a=e._y,h=e._z,c=e._w;return this._x=i*c+o*r+s*h-n*a,this._y=s*c+o*a+n*r-i*h,this._z=n*c+o*h+i*a-s*r,this._w=o*c-i*r-s*a-n*h,this.onChangeCallback(),this}},{key:"equals",value:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}},{key:"fromArray",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this.onChangeCallback(),this}},{key:"toArray",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}},{key:"onChange",value:function(t){return this.onChangeCallback=t,this}},{key:"onChangeCallback",value:function(){}}]),t}(),Camera=function(){function t(){classCallCheck(this,t),this.type="Camera",this.isCamera=!0,this.matrixWorldInverse=new Mat4,this.projectionMatrix=new Mat4,this.quat=new Quat;}return createClass(t,[{key:"copy",value:function(e,i){return get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"copy",this).call(this,this,e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this}},{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"getWorldDirection",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Vec3,e=this.quat;return this.getWorldQuaternion(e),t.set(0,0,-1).applyQuaternion(e)}},{key:"updateMatrixWorld",value:function(e){get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateMatrixWorld",this).call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld);}}]),t}(),Scene3D=function(){function t(e){classCallCheck(this,t),this.gl=e;}return createClass(t,[{key:"Remove",value:function(t){}},{key:"Add",value:function(t){t instanceof Camera&&console.log("camera");}},{key:"Start",value:function(){}},{key:"Update",value:function(){}},{key:"Render",value:function(){}},{key:"Stop",value:function(){}},{key:"Resize",value:function(t){}}]),t}(),Stage3D=function(t){function e(t){var i=t.id,s=t.canvas,n=void 0===s?null:s;classCallCheck(this,e);var o=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o._currScene=null,o.id=i,o.ctx=o._WebGLContext(n),o}return inherits(e,t),createClass(e,[{key:"_WebGLContext",value:function(t){this.canvas=t;var e=null;if(null==this.canvas)return console.log("No canvas"),null;for(var i=["webgl","experimental-webgl","webkit-3d","moz-webgl"],s=0;s<i.length;++s){try{e=this.canvas.getContext(i[s]);}catch(t){}if(e)break}return null==e?(console.log("WebGL Initializing Fail"),null):e}},{key:"Start",value:function(){if(null==this._currScene)return void console.log("Scene is Empty!");get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Start",this).call(this),this._currScene.Start();}},{key:"Update",value:function(){this._currScene.Update();}},{key:"Render",value:function(){this._currScene.Render();}},{key:"Stop",value:function(){this._currScene.Stop(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Stop",this).call(this);}},{key:"Resize",value:function(t){this._currScene.Resize(t);}},{key:"scene",get:function(){return this._currScene},set:function(t){this.Pause(),null==t?null!=this._currScene&&this._currScene.Stop():this._currScene=new t(this.ctx),this.Resume();}}]),e}(FPS),SocketStore=function(){function t(e,i){classCallCheck(this,t),this.stage=e,this.socket=i;}return createClass(t,[{key:"Add",value:function(t){var e=this;for(var i in t)!function(i){e.socket.on(i,function(s){t[i].call(e.stage,s,e.socket);});}(i);}},{key:"Trigger",value:function(t,e){this.socket.emit(t,e);}},{key:"Destroy",value:function(){this.socket.close();}}]),t}(),SocketStoreMock=function(){function t(e,i){classCallCheck(this,t),this.stage=e,this.socketStore={},this.id=Math.random()*Math.pow(10,16),this.Add(i),this.stage.initPack=[],this.stage.updatePack=[],this.stage.removePack=[];}return createClass(t,[{key:"Add",value:function(t){for(var e in t)this.socketStore[e]=t[e];}},{key:"Trigger",value:function(t,e){var i=this,s={id:this.id,emit:function(t,e){i.socketStore[t].call(i.stage,e,null);}};this.socketStore[t].call(this.stage,e,s);}},{key:"Destroy",value:function(){}},{key:"ConnectSocket",value:function(){var t=this,e={id:this.id,emit:function(e,i){t.socketStore[e].call(t.stage,i,null);}};this.socketStore._connect&&this.socketStore._connect.call(this.stage,e);}},{key:"EmitAllSockets",value:function(t,e){var i=this,s={id:this.id,emit:function(t,e){i.socketStore[t].call(i.stage,e,null);}};this.socketStore[t].call(this.stage,e,s);}},{key:"Update",value:function(t,e){var i=this,s={id:this.id,emit:function(t,e){i.socketStore[t].call(i.stage,e,null);}},n=this.stage.scene;for(var o in n.Items){var r=n.Items[o].Update(t,e,n);null!=r&&this.stage.updatePack.push(r);}this.stage.initPack.length>0&&this.socketStore._init.call(this.stage,this.stage.initPack,s),this.stage.updatePack.length>0&&this.socketStore._update.call(this.stage,this.stage.updatePack,s),this.stage.removePack.length>0&&this.socketStore._remove.call(this.stage,this.stage.removePack,s),this.stage.initPack=[],this.stage.updatePack=[],this.stage.removePack=[];}}]),t}(),Stage2D=function(t){function e(t,i){var s=t.id,n=t.canvas,o=void 0===n?null:n;classCallCheck(this,e);var r=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r._currScene=null,r.id=s,r.ctx=r._GetContext(o),r.Resize(),r.EventStore=new EventStore(r),void 0!==i&&void 0!==i.io?(r.SocketStore=new SocketStore(r,i),r.useUpdate(!1)):r.SocketStore=new SocketStoreMock(r,i),r}return inherits(e,t),createClass(e,[{key:"_GetContext",value:function(t){this.canvas=t;var e=null;if(null==this.canvas)return console.log("No canvas"),null;try{e=this.canvas.getContext("2d");}catch(t){}return null==e?(console.log("Canvas Initializing Fail"),null):e}},{key:"Start",value:function(){if(null==this._currScene)return void console.log("Scene is Empty!");get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Start",this).call(this),this._currScene.Start();}},{key:"Update",value:function(t,e){null!=this.SocketStore&&this.SocketStore.Update(t,e),this._currScene.Update(t,e);}},{key:"Render",value:function(t,e){this._currScene.Render(t,e);}},{key:"Stop",value:function(){this._currScene.Stop(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Stop",this).call(this);}},{key:"Resize",value:function(t){this.width=this.ctx.canvas.offsetWidth,this.height=this.ctx.canvas.offsetHeight,null!=this._currScene&&this._currScene.Resize(t,{width:this.width,height:this.height});}},{key:"RemoveAll",value:function(){this.scene.RemoveAll();}},{key:"Destroy",value:function(){this.SocketStore&&this.SocketStore.Destroy();}},{key:"scene",get:function(){return this._currScene},set:function(t){null==t?null!=this._currScene&&this._currScene.Stop():(null!=this._currScene&&(this._currScene.Stop(),this._currScene.RemoveAll()),this._currScene=new t(this,{width:this.width,height:this.height}));}}]),e}(FPS),Box2=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Vec2(0,0),i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Vec2(0,0);classCallCheck(this,t),this.min=e,this.max=i;}return createClass(t,[{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"copy",value:function(t){return this.min.copy(t.min),this.max.copy(t.max),this}},{key:"set",value:function(t,e){return this.min.copy(t),this.max.copy(e),this}},{key:"setFromXYWH",value:function(t){this.min.x=t.x,this.min.y=t.y,this.max.x=t.width+t.x,this.max.y=t.height+t.y;}},{key:"setFromPoints",value:function(t){for(var e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}},{key:"isEmpty",value:function(){return this.max.x<this.min.x||this.max.y<this.min.y}},{key:"setCenter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Vec2(0,0),e=this.getCenter(),i=e.subVectors(t,e);this.translate(i);}},{key:"getCenter",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Vec2(0,0)).addVectors(this.min,this.max).multiplyScalar(.5)}},{key:"getSize",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Vec2(0,0)).subVectors(this.max,this.min)}},{key:"setSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Vec2(0,0);return this.max.x=this.min.x+t.x,this.max.y=this.min.y+t.y,this}},{key:"expandByPoint",value:function(t){return this.min.min(t),this.max.max(t),this}},{key:"expandByVector",value:function(t){return this.min.sub(t),this.max.add(t),this}},{key:"expandByScalar",value:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this}},{key:"containsPoint",value:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}},{key:"containsBox",value:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}},{key:"intersectsBox",value:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}},{key:"clampPoint",value:function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Vec2).copy(t).clamp(this.min,this.max)}},{key:"intersect",value:function(t){return this.min.max(t.min),this.max.min(t.max),this}},{key:"union",value:function(t){return this.min.min(t.min),this.max.max(t.max),this}},{key:"translate",value:function(t){return this.min.add(t),this.max.add(t),this}},{key:"reconstruct",value:function(){var t=this.min.x,e=this.min.y,i=this.max.x,s=this.max.y;this.min.x=Math.min(t,i),this.min.y=Math.min(e,s),this.max.x=Math.max(t,i),this.max.y=Math.max(e,s);}},{key:"equals",value:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}]),t}(),Item=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,t),this.id=e.id||"I"+Math.random()*Math.pow(10,18),this.eventStore=void 0,this.hide=!1,this.order=0;}return createClass(t,[{key:"Hide",value:function(){this.hide=!0;}},{key:"Show",value:function(){this.hide=!1;}},{key:"CollisionCheck",value:function(t){}},{key:"Picker",value:function(t){}},{key:"Update",value:function(t){}},{key:"UpdateServer",value:function(t,e){}},{key:"Render",value:function(t,e){}},{key:"RenderBefore",value:function(t,e){}},{key:"RenderAfter",value:function(t,e){}},{key:"Destroy",value:function(t){}}]),t}(),Camera2D=function(){function t(e,i){classCallCheck(this,t),i=i||{},this.id=i.id||Math.random(),this.ctx=e,this.Resize(),this._position=new Vec2(i.x,i.y),this.distance=i.distance||1e3,this._viewport=new Box2,this._viewport.setFromXYWH({x:0,y:0,width:0,height:0}),this._viewport.scale={x:1,y:1},this.flustrum=[100,5e3],this.fieldOfView=Math.tan(Math.PI/4).toFixed(6),this.followId=null,this.eventStore={mousemove:function(t,e){this.OffsetMoveTo(-e.cameraOffset.x,-e.cameraOffset.y);},mousewheel:function(t,e){e.delta>0?this.OffsetZoomTo(-100):this.OffsetZoomTo(100);}},this.UpdateCamera();}return createClass(t,[{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"GetCenter",value:function(){return this._position}},{key:"RenderStart",value:function(){this.ctx.save(),this.ctx.scale(this._viewport.scale.x,this._viewport.scale.y),this.ctx.translate(-this._viewport.min.x,-this._viewport.min.y);}},{key:"RenderEnd",value:function(){this.ctx.restore();}},{key:"UpdateCamera",value:function(){this.setViewportFromSize(this.cvsWidth,this.cvsHeight);}},{key:"setViewportFromSize",value:function(t,e){var i=t/e,s=this.distance*this.fieldOfView,n=s/i;this._viewport.scale.x=t/s,this._viewport.scale.y=e/n,this._viewport.min.x=this._position.x-s/2,this._viewport.min.y=this._position.y-n/2,this._viewport.max.x=this._viewport.min.x+s,this._viewport.max.y=this._viewport.min.y+n;}},{key:"GetScale",value:function(){return{x:this._viewport.scale.x,y:this._viewport.scale.y}}},{key:"SetDistanceFromScale",value:function(t){this.distance=this.cvsWidth/(t*this.fieldOfView),this.UpdateCamera();}},{key:"SetDistanceFromWidth",value:function(t){this.distance=t,this.UpdateCamera();}},{key:"ZoomTo",value:function(t){this.distance=t,this.flustrum[0]>this.distance&&(this.distance=this.flustrum[0]),this.flustrum[1]<this.distance&&(this.distance=this.flustrum[1]),this.UpdateCamera();}},{key:"OffsetZoomTo",value:function(t){this.distance+=t,this.flustrum[0]>this.distance&&(this.distance=this.flustrum[0]),this.flustrum[1]<this.distance&&(this.distance=this.flustrum[1]),this.UpdateCamera();}},{key:"MoveTo",value:function(t,e){this._position.x=t,this._position.y=e,this.UpdateCamera();}},{key:"OffsetMoveTo",value:function(t,e){this._position.x+=t,this._position.y+=e,this.UpdateCamera();}},{key:"ScreenToWorld",value:function(t,e){var i=this.ctx.canvas.getBoundingClientRect(),s={x:t-i.left,y:e-i.top},n={};return n.x=s.x/this._viewport.scale.x+this._viewport.min.x,n.y=s.y/this._viewport.scale.y+this._viewport.min.y,n}},{key:"WorldToScreen",value:function(t,e){var i={};i.x=(t-this._viewport.min.x)*this._viewport.scale.x,i.y=(e-this._viewport.min.y)*this._viewport.scale.y;var s=this.ctx.canvas.getBoundingClientRect();return i={x:i.x+s.left,y:i.y+s.top}}},{key:"follow",value:function(t){this.followId=t;}},{key:"Update",value:function(t){if(t){if(null!=this.followId){var e=t.getItem(this.followId);this.MoveTo(e.x,e.y);}if(null!=t.map){var i=this.x,s=this.y,n=this._viewport.min.x,o=this._viewport.min.y,r=this._viewport.max.x,a=this._viewport.max.y,h=0,c=0,l=this._viewport.getSize();l.x<t.map.w*t.map.scale&&(t.map.x*t.map.scale>n&&(h=t.map.x*t.map.scale-n),(t.map.x+t.map.w)*t.map.scale<r&&(h=(t.map.x+t.map.w)*t.map.scale-r)),l.y<t.map.h*t.map.scale&&(t.map.y*t.map.scale>o&&(c=t.map.y*t.map.scale-o),(t.map.y+t.map.h)*t.map.scale<a&&(c=(t.map.y+t.map.h)*t.map.scale-a)),this.MoveTo(i+h,s+c);}}}},{key:"Resize",value:function(){this.cvsWidth=this.ctx.canvas.offsetWidth,this.cvsHeight=this.ctx.canvas.offsetHeight;}},{key:"x",set:function(t){this._position.x=t;},get:function(){return this._position.x}},{key:"y",set:function(t){this._position.y=t;},get:function(){return this._position.y}}]),t}(),Unit=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,t),this.id=e.id||"U"+Math.random()*Math.pow(10,18),this._position=null,this.originalPosition=null,this.attachs={},this.attachObjects={},this.hide=null!=e.hide&&e.hide,this.originalColor=e.color,this.color=e.color,this.lineColor=e.lineColor||"#000000",this.setLineType(e.lineType),this.lineWidth=e.lineWidth||1,this.opacity=e.opacity||1,this._collisionCheck=void 0===e.collisionCheck||e.collisionCheck,this.order=e.order||0,this.scale=e.scale||[1,1],this.originalScale=e.scale||[1,1],this.offset=[0,0];}return createClass(t,[{key:"Hide",value:function(){this.hide=!0;}},{key:"Show",value:function(){this.hide=!1;}},{key:"setCollisionCheck",value:function(t){this._collisionCheck=void 0===t||t;}},{key:"setColor",value:function(t){this.color=t;}},{key:"setLineType",value:function(t){this.lineType="DASH"==t?[15,5]:"DOT"==t?[5,5]:"SOLID"==t?null:t;}},{key:"changeScale",value:function(t){this.scale=t;}},{key:"setScale",value:function(){var t=this.originalPosition.getSize(),e=this._position.getSize();this.scale[0]=e.x/t.x,this.scale[1]=e.y/t.y;}},{key:"Translate",value:function(t){this._position instanceof Vec2?this._position.add(t):this._position instanceof Box2&&this._position.translate(t),this.executeAttach();}},{key:"Rotate",value:function(){this.executeAttach();}},{key:"Scale",value:function(){this.executeAttach();}},{key:"GetCenter",value:function(){return this._position instanceof Vec2?this._position:this._position instanceof Box2?this._position.getCenter():new Vec2(0,0)}},{key:"CollisionCheck",value:function(e){if(!0!==this._collisionCheck)return!1;var i=e;if(e instanceof t&&(i=e._position),this._position instanceof Vec2){var s=this._position.clone();if(i instanceof Vec2){var n=s.sub(i).lenSq();if(n<1/0&&n<this.radius*this.radius)return!0}else if(i instanceof Box2)return i.containsPoint(this._position)}else if(this._position instanceof Box2){if(i instanceof Vec2)return this._position.containsPoint(i);if(i instanceof Box2)return this._position.intersectsBox(i)}return!1}},{key:"Destroy",value:function(){delete this._position,delete this.originalPosition;}},{key:"Update",value:function(t){}},{key:"Render",value:function(t){t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,null!=this.lineType&&t.setLineDash(this.lineType),this.opacity<1&&(t.globalAlpha=this.opacity);}},{key:"SetOffset",value:function(t,e){this.offset=[t,e];}},{key:"Attach",value:function(t,e){void 0===this.attachs[t.id]?this.attachs[t.id]=[e]:this.attachs[t.id].push(e),this.attachObjects[t.id]=t,this.executeAttach();}},{key:"Detach",value:function(t){delete this.attachs[t.id],delete this.attachObjects[t.id];}},{key:"executeAttach",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in this.attachs)if(t!=i){for(var s=this.attachs[i],n=this.attachObjects[i],o=[],r=0;r<s.length;r++){var a=s[r].call(n,e);null!=a&&(o=a instanceof Array?o.concat(a):o.concat([a]));}null==t&&(t=this.id);for(var h in o)o[h].executeAttach(t,e);}}}]),t}(),Rect=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._position=new Box2,i._position.setFromXYWH(t),i.originalPosition=new Box2,i.originalPosition.setFromXYWH(t),i.round=t.round||0,i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){if(!0===this.hide)return!1;t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t);var i=this._position.min,s=this._position.getSize();this.round>0?(this.drawRoundRect(t,i.x,i.y,s.x,s.y),null!=this.color&&(t.fillStyle=this.color,t.fill())):(null!=this.color&&(t.fillStyle=this.color,t.fillRect(i.x,i.y,s.x,s.y)),t.strokeRect(i.x,i.y,s.x,s.y)),t.scale(this.scale[0],this.scale[1]),t.restore();}},{key:"drawEllipse",value:function(t,e,i,s,n){ox=s/2*.5522848,oy=n/2*.5522848,xe=e+s,ye=i+n,xm=e+s/2,ym=i+n/2,t.beginPath(),t.moveTo(e,ym),t.bezierCurveTo(e,ym-oy,xm-ox,i,xm,i),t.bezierCurveTo(xm+ox,i,xe,ym-oy,xe,ym),t.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye),t.bezierCurveTo(xm-ox,ye,e,ym+oy,e,ym),t.closePath(),t.stroke();}},{key:"drawRoundRect",value:function(t,e,i,s,n){var o=s/2*.5,r=n/2*.5;o<r&&(r=o),o>r&&(o=r);var a=e+s,h=i+n;t.beginPath(),t.moveTo(e,i+r),t.quadraticCurveTo(e,i,e+o,i),t.lineTo(a-o,i),t.quadraticCurveTo(a,i,a,i+r),t.lineTo(a,h-r),t.quadraticCurveTo(a,h,a-o,h),t.lineTo(e+o,h),t.quadraticCurveTo(e,h,e,h-r),t.lineTo(e,i+r),t.closePath(),t.stroke();}},{key:"min",get:function(){return this._position.min}},{key:"max",get:function(){return this._position.max}}]),e}(Unit),Point=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._position=new Vec2(t.x,t.y),i.originalPosition=new Vec2(t.x,t.y),i.radius=t.radius||5,i.pointType=t.pointType||"POINT",i.angle=t.angle||0,i}return inherits(e,t),createClass(e,[{key:"set",value:function(t,e){this._position=new Vec2(t,e);}},{key:"setAngle",value:function(t,e){this.angle=Math.atan2(e.y-t.y,e.x-t.x);}},{key:"setPointType",value:function(t){"POINT"!=t&&"ARROW"!=t&&"RECT"!=t||(this.pointType=t);}},{key:"Update",value:function(){}},{key:"Render",value:function(t){if(!0!==this.hide){t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t),t.beginPath();var i=this._position.x+this.offset[0],s=this._position.y+this.offset[1];if("POINT"==this.pointType)t.arc(i,s,this.radius,0,2*Math.PI,!1);else if("ARROW"==this.pointType){var n=2*this.radius,o=this.angle;t.moveTo(i,s),t.lineTo(i-n*Math.cos(o-Math.PI/6),s-n*Math.sin(o-Math.PI/6)),t.lineTo(i-n*Math.cos(o+Math.PI/6),s-n*Math.sin(o+Math.PI/6)),t.lineTo(i,s);}else if("RECT"==this.pointType){var r=this.radius;null!=this.color&&(t.fillStyle=this.color,t.fillRect(i-r,s-r,2*r,2*r)),t.strokeRect(i-r,s-r,2*r,2*r);}t.stroke(),t.closePath(),null!=this.color&&(t.fillStyle=this.color,t.fill()),t.restore();}}},{key:"x",set:function(t){this._position.x=t;},get:function(){return this._position.x}},{key:"y",set:function(t){this._position.y=t;},get:function(){return this._position.y}}]),e}(Unit),Image$1=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.dataSource=t.dataSource,i.image=DataSource.Load(i.dataSource),""!==i.image&&(null==t.width&&(t.width=i.image.width),null==t.height&&(t.height=i.image.height)),i._position=new Box2,i._position.setFromXYWH(t),i.originalPosition=new Box2,i.originalPosition.setFromXYWH(t),i.isDynamic=null!=t.isDynamic&&t.isDynamic,i}return inherits(e,t),createClass(e,[{key:"resetImage",value:function(t){null!=t&&(this.dataSource=t),this.image=DataSource.Load(this.dataSource),this.originalPosition.setSize({x:this.image.width,y:this.image.height}),this.setScale();}},{key:"Destroy",value:function(){get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Destroy",this).call(this),!0===this.isDynamic&&DataSource.Remove(this.dataSource);}},{key:"Render",value:function(t){if(!0===this.hide)return!1;if(null===this.image)return!1;t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t);var i=this._position.min,s=this._position.getSize();""===this.image&&this.resetImage(),""!==this.image&&t.drawImage(this.image,i.x,i.y,s.x,s.y),t.scale(this.scale[0],this.scale[1]),t.restore();}},{key:"min",get:function(){return this._position.min}},{key:"max",get:function(){return this._position.max}}]),e}(Unit),Scene2D=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};classCallCheck(this,t),this.id=Math.random(),this.stage=e,this.ctx=e.ctx,this.width=i.width||100,this.height=i.height||100,this.camera=null,this.EventStore=e.EventStore,this.Items={},this.Units={},this._orderedItems=[],this._orderedUnits=[],this.renderBefore=!1,this.renderAfter=!1,this.gravity=!1;}return createClass(t,[{key:"getOrderdUnits",value:function(){return this._orderedUnits}},{key:"_World",value:function(t){}},{key:"RemoveAll",value:function(){for(var t in this.Items)this.Remove(t);}},{key:"Remove",value:function(t){var e=this.Items[t];if(null!=e){if(this.stage.setRemovePack&&this.stage.setRemovePack(t),e instanceof Item)for(var i in e){var s=e[i];s instanceof Unit&&(this.Units[s.id].Destroy(this.stage),delete this.Units[s.id],void 0!==s.eventStore&&this.EventStore.Remove(s.id));}else e instanceof Unit&&(this.Units[t].Destroy(this.stage),delete this.Units[t],this.EventStore.Remove(t));this.Items[t].Destroy(),delete this.Items[t];}this.resetOrder();}},{key:"resetOrder",value:function(){this._orderedItems=this._makeOrderedArray(this.Items,!0),this._orderedUnits=this._makeOrderedArray(this.Units);}},{key:"setItemOrder",value:function(t,e){var i=[];"object"==(void 0===e?"undefined":_typeof(e))?i=this.searchItems(e):"string"==typeof e?null!=this.Items[e]&&i.push(this.Items[e]):i=this._orderedItems;for(var s in i)i[s].order=t;}},{key:"Add",value:function(t){if(t instanceof Camera2D)this.camera=t,void 0!==t.eventStore&&this.EventStore.Add(t,t.eventStore);else if(t instanceof Unit)this.Items[t.id]=t,this.Units[t.id]=t,void 0!==t.eventStore&&this.EventStore.Add(t,t.eventStore);else if(t instanceof Item){!0===this.gravity?t.gravity=t.weight:t.gravity=0,this.Items[t.id]=t;for(var e in t){var i=t[e];i instanceof Unit&&(this.Units[i.id]=i,void 0!==i.eventStore&&this.EventStore.Add(i,i.eventStore,t.id));}this.stage.setInitPack&&this.stage.setInitPack(t.getPack());}return this.resetOrder(),t.id}},{key:"searchItems",value:function(t){var e=[];for(var i in this.Items){var s=this.Items[i];for(var n in t)if(s[n]===t[n]){e.push(s);break}}return e}},{key:"searchInstance",value:function(t){var e=[];for(var i in this.Items){var s=this.Items[i];s instanceof t&&e.push(s);}return e}},{key:"getItem",value:function(t){return this.Items[t]}},{key:"removeItem",value:function(t){this.Remove(t);}},{key:"getUnit",value:function(t){return this.Units[t]}},{key:"_makeOrderedArray",value:function(t,e){var i=new Array,s=new Array;for(var n in t){var o=t[n];null==s[Number(o.order)]?s[Number(o.order)]=[o]:s[Number(o.order)].push(o);}for(var r=0;r<s.length;++r){var a=s[r];if(a instanceof Array)for(var h=0;h<a.length;++h){var c=a[h];!0===e?i.push(c):i.unshift(c);}}return i}},{key:"Start",value:function(){}},{key:"Update",value:function(t,e){for(var i in this.Items)this.Items[i].Update(t,e,this);}},{key:"RenderBefore",value:function(){if(!0===this.renderBefore)for(var t in this._orderedItems){var e=this._orderedItems[t];if(1!=e.hide)try{e.RenderBefore(this.ctx,this.camera);}catch(t){}}}},{key:"RenderAfter",value:function(){if(!0===this.renderAfter)for(var t in this._orderedItems){var e=this._orderedItems[t];if(1!=e.hide)try{e.RenderAfter(this.ctx,this.camera);}catch(t){}}}},{key:"Render",value:function(){this.ctx.clearRect(0,0,this.width,this.height),null!=this.camera&&(this.camera.Update(this),this.camera.RenderStart()),this.RenderBefore(this.ctx,this.camera);for(var t in this._orderedItems){var e=this._orderedItems[t];1!=e.hide&&e.Render(this.ctx,this.camera);}this.RenderAfter(this.ctx,this.camera),null!=this.camera&&this.camera.RenderEnd();}},{key:"Stop",value:function(){}},{key:"Resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null!=e.width&&(this.width=e.width),null!=e.height&&(this.height=e.height),null!=this.camera&&this.camera.Resize();}}]),t}(),Path2DParse=function(){function t(){classCallCheck(this,t),this.ARG_LENGTH={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0};}return createClass(t,[{key:"_parseValues",value:function(t){var e=t.match(/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi);return e?e.map(Number):[]}},{key:"Parse",value:function(t){var e=this,i=[],s=String(t).trim();return"M"!==s[0]&&"m"!==s[0]?i:(s.replace(/([astvzqmhlc])([^astvzqmhlc]*)/gi,function(t,s,n){var o=s.toLowerCase(),r=e._parseValues(n),a=s;if("m"===o&&r.length>2&&(i.push([a].concat(r.splice(0,2))),o="l",a="m"===a?"l":"L"),r.length<e.ARG_LENGTH[o])return"";for(i.push([a].concat(r.splice(0,e.ARG_LENGTH[o])));r.length>=e.ARG_LENGTH[o]&&r.length&&e.ARG_LENGTH[o];)i.push([a].concat(r.splice(0,e.ARG_LENGTH[o])));return""}),i)}}]),t}(),Path2D=function(){function t(e){classCallCheck(this,t),this.segments=[];var i=new Path2DParse;this.segments=i.Parse(e);}return createClass(t,[{key:"Render",value:function(t){this.buildPath(t,this.segments);}},{key:"_rotatePoint",value:function(t,e){var i=t.x*Math.cos(e)-t.y*Math.sin(e),s=t.y*Math.cos(e)+t.x*Math.sin(e);t.x=i,t.y=s;}},{key:"_translatePoint",value:function(t,e,i){t.x+=e,t.y+=i;}},{key:"_scalePoint",value:function(t,e){t.x*=e,t.y*=e;}},{key:"moveTo",value:function(t,e){this.segments.push(["M",t,e]);}},{key:"lineTo",value:function(t,e){this.segments.push(["L",t,e]);}},{key:"arc",value:function(t,e,i,s,n,o){this.segments.push(["AC",t,e,i,s,n,!!o]);}},{key:"arcTo",value:function(t,e,i,s,n){this.segments.push(["AT",t,e,i,s,n]);}},{key:"ellipse",value:function(t,e,i,s,n,o,r,a){this.segments.push(["E",t,e,i,s,n,o,r,!!a]);}},{key:"closePath",value:function(){this.segments.push(["Z"]);}},{key:"bezierCurveTo",value:function(t,e,i,s,n,o){this.segments.push(["C",t,e,i,s,n,o]);}},{key:"quadraticCurveTo",value:function(t,e,i,s){this.segments.push(["Q",t,e,i,s]);}},{key:"rect",value:function(t,e,i,s){this.segments.push(["R",t,e,i,s]);}},{key:"buildPath",value:function(t,e){var i=void 0,s=void 0,n=void 0,o=void 0,r=void 0,a=void 0,h=void 0,c=void 0,l=void 0,u=void 0,v=void 0,y=void 0,f=void 0,d=void 0,_=void 0,m=void 0,p=void 0,x=void 0,k=void 0,g=void 0,S=void 0,C=void 0,w=void 0,z=void 0,R=void 0,M=void 0,b={x:0,y:0},P={x:0,y:0};t.beginPath();for(var T=0;T<e.length;++T){var L=e[T];"S"!==(g=L[0])&&"s"!==g&&"C"!==g&&"c"!==g&&(C=null,w=null),"T"!==g&&"t"!==g&&"Q"!==g&&"q"!==g&&(z=null,R=null),"M"==g||"m"==g?("m"===g?(v+=L[1],f+=L[2]):(v=L[1],f=L[2]),"M"!==g&&b||(b={x:v,y:f}),t.moveTo(v,f)):"l"==g?(v+=L[1],f+=L[2],t.lineTo(v,f)):"L"==g?(v=L[1],f=L[2],t.lineTo(v,f)):"h"==g?(v+=L[1],t.lineTo(v,f)):"H"==g?(v=L[1],t.lineTo(v,f)):"v"==g?(f+=L[1],t.lineTo(v,f)):"V"==g?(f=L[1],t.lineTo(v,f)):"A"==g||"a"==g?("a"===g?(v+=L[6],f+=L[7]):(v=L[6],f=L[7]),m=L[1],p=L[2],h=L[3]*Math.PI/180,n=!!L[4],o=!!L[5],r={x:v,y:f},a={x:(P.x-r.x)/2,y:(P.y-r.y)/2},this._rotatePoint(a,-h),(c=a.x*a.x/(m*m)+a.y*a.y/(p*p))>1&&(m*=c=Math.sqrt(c),p*=c),S={x:m*a.y/p,y:-p*a.x/m},l=m*m*p*p,u=m*m*a.y*a.y+p*p*a.x*a.x,o!==n?this._scalePoint(S,Math.sqrt((l-u)/u)||0):this._scalePoint(S,-Math.sqrt((l-u)/u)||0),s=Math.atan2((a.y-S.y)/p,(a.x-S.x)/m),i=Math.atan2(-(a.y+S.y)/p,-(a.x+S.x)/m),this._rotatePoint(S,h),this._translatePoint(S,(r.x+P.x)/2,(r.y+P.y)/2),t.save(),t.translate(S.x,S.y),t.rotate(h),t.scale(m,p),t.arc(0,0,1,s,i,!o),t.restore()):"c"==g?(t.bezierCurveTo(L[1]+v,L[2]+f,L[3]+v,L[4]+f,L[5]+v,L[6]+f),C=L[3]+v,w=L[4]+f,v+=L[5],f+=L[6]):"C"==g?(C=L[3],w=L[4],v=L[5],f=L[6],t.bezierCurveTo(L[1],L[2],C,w,v,f)):"s"==g?(null!==C&&null!==C||(C=v,w=f),t.bezierCurveTo(2*v-C,2*f-w,L[1]+v,L[2]+f,L[3]+v,L[4]+f),C=L[1]+v,w=L[2]+f,v+=L[3],f+=L[4]):"S"==g?(null!==C&&null!==C||(C=v,w=f),t.bezierCurveTo(2*v-C,2*f-w,L[1],L[2],L[3],L[4]),C=L[1],w=L[2],v=L[3],f=L[4]):"q"==g?(z=L[1]+v,R=L[2]+f,v+=L[3],f+=L[4],t.quadraticCurveTo(z,R,v,f)):"Q"==g?(z=L[1],R=L[2],v=L[3],f=L[4],t.quadraticCurveTo(z,R,v,f)):"t"==g?(null!==z&&null!==z||(z=v,R=f),z=2*v-z,R=2*f-R,v+=L[1],f+=L[2],t.quadraticCurveTo(z,R,v,f)):"T"==g?(null!==z&&null!==z||(z=v,R=f),z=2*v-z,R=2*f-R,v=L[1],f=L[2],t.quadraticCurveTo(z,R,v,f)):"z"==g||"Z"==g?(v=b.x,f=b.y,b=void 0,t.closePath()):"AC"==g?(v=L[1],f=L[2],_=L[3],s=L[4],i=L[5],M=L[6],t.arc(v,f,_,s,i,M)):"AT"==g?(y=L[1],d=L[2],v=L[3],f=L[4],_=L[5],t.arcTo(y,d,v,f,_)):"E"==g?(v=L[1],f=L[2],m=L[3],p=L[4],h=L[5],s=L[6],i=L[7],M=L[8],t.save(),t.translate(v,f),t.rotate(h),t.scale(m,p),t.arc(0,0,1,s,i,M),t.restore()):"R"==g?(v=L[1],f=L[2],x=L[3],k=L[4],b={x:v,y:f},t.rect(v,f,x,k)):console.log(g+"is not implemented"),P.x=v,P.y=f;}}}]),t}(),Map=function(){function t(e){var i=e.x,s=void 0===i?0:i,n=e.y,o=void 0===n?0:n,r=e.width,a=void 0===r?0:r,h=e.height,c=void 0===h?0:h,l=e.tileW,u=void 0===l?0:l,v=e.tileH,y=void 0===v?0:v,f=e.scale,d=void 0===f?1:f,_=e.collision,m=void 0===_?[]:_;classCallCheck(this,t),this.x=s,this.y=o,this.scale=d,this.width=a,this.height=c,this.tileW=u,this.tileH=y,this.w=a*u,this.h=c*y,this.collision=m;}return createClass(t,[{key:"collisionCheck",value:function(t){var e=t.x,i=t.y,s=t.dir,n=this.tileW*this.scale,o=this.tileH*this.scale,r=Math.floor(e/n),a=Math.floor(i/o);if(r<this.x||r>=this.width)return 0;if(a<this.y||a>=this.height)return 0;var h=this.collision[r+a*this.width];return h>0?"L"===s||"U"===s?{status:h,x:n-e%n,y:o-i%o}:{status:h,x:e%n,y:i%o}:0}},{key:"Destroy",value:function(){}}]),t}(),MapImage=function(){function t(e,i){classCallCheck(this,t),this.hide=!1,this.pos={x:e.x||0,y:e.y||0},this.size={x:e.w||64,y:e.h||64},this.scale=e.scale,this.dataSource=i.dataSource,this.image=DataSource.Load(this.dataSource);}return createClass(t,[{key:"resetImage",value:function(t){null!=t&&(this.dataSource=t),this.image=DataSource.Load(this.dataSource);}},{key:"Render",value:function(t,e){if(!0===this.hide)return!1;if(null===this.image)return!1;t.save();var i=this.pos,s=this.size;""===this.image&&this.resetImage(),""!==this.image&&t.drawImage(this.image,i.x,i.y,s.x,s.y,i.x*this.scale,i.y*this.scale,s.x*this.scale,s.y*this.scale),t.restore();}},{key:"Destroy",value:function(){!0===this.isDynamic&&DataSource.Remove(this.dataSource);}}]),t}(),Line=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if(null==t.pos||t.pos.length<2)return console.error("[pos] is not valid"),possibleConstructorReturn(i);i._position=[];for(var s=0;s<t.pos.length;s++)t.pos[s]instanceof Vec2?i._position[s]=t.pos[s]:t.pos[s]instanceof Array&&(i._position[s]=new Vec2(t.pos[s][0],t.pos[s][1]));return i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){if(!0!==this.hide){t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t),t.beginPath();for(var i=0;i<this._position.length;i++)0==i?t.moveTo(this._position[0].x,this._position[0].y):t.lineTo(this._position[i].x,this._position[i].y);t.stroke(),t.closePath(),t.restore();}}}]),e}(Unit),BezierLine=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if(null==t.pos||t.pos.length<2)return console.error("[pos] is not valid"),possibleConstructorReturn(i);i._position=[];for(var s=0;s<t.pos.length;s++)t.pos[s]instanceof Vec2?i._position[s]=t.pos[s]:t.pos[s]instanceof Array&&(i._position[s]=new Vec2(t.pos[s][0],t.pos[s][1]));return i.isBezier=t.isBezier||!1,i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){if(!0!==this.hide){t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t),t.beginPath();for(var i=[],s=0;s<this._position.length;s++)0==s?t.moveTo(this._position[0].x,this._position[0].y):(i.push(this._position[s].x),i.push(this._position[s].y));t.bezierCurveTo.apply(t,i),t.stroke(),t.closePath(),t.restore();}}}]),e}(Unit),Svg=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._position=new Box2,i._position.setFromXYWH(t),i.originalPosition=new Box2,i.originalPosition.setFromXYWH(t),null!=t.svg?i.svg=new Path2D(t.svg):console.log("Error : Empty SVG String!!"),i}return inherits(e,t),createClass(e,[{key:"changeSvg",value:function(t){null!=t?this.svg=new Path2D(t):console.log("Error : Empty SVG String!!");}},{key:"Render",value:function(t){!0!==this.hide&&(t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t),t.fillStyle=this.color,t.translate(this._position.min.x,this._position.min.y),t.scale(this.scale[0],this.scale[1]),null!=this.svg&&this.svg.Render(t),t.fill(),t.restore());}},{key:"min",get:function(){return this._position.min}},{key:"max",get:function(){return this._position.max}}]),e}(Unit),Text=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.text=t.text,i.url=t.url,i._position=new Box2,i._position.setFromXYWH(t),i.font=t.font||'normal normal 12px "serif"',null!=t.font&&i.makeFontAttr(t.font),null!=t.fontStyle?i.fontStyle=t.fontStyle:null==i.fontStyle&&(i.fontStyle="normal"),null!=t.fontWeight?i.fontWeight=t.fontWeight:null==i.fontWeight&&(i.fontWeight="normal"),null!=t.fontSize?i.fontSize=t.fontSize:null==i.fontSize&&(i.fontSize=12),null!=t.fontFace?i.fontFace=t.fontFace:null==i.fontFace&&(i.fontFace="serif"),i.makeFont(),i.isChangeLine=null!=t.isChangeLine&&t.isChangeLine,i.isEllipsis=null==t.isEllipsis||t.isEllipsis,i.showBoundBox=null!=t.showBoundBox&&t.showBoundBox,i.boundboxOpacity=t.boundboxOpacity||1,i.bgColor=t.bgColor,i.maxTextWidth=0,i.maxTextHeight=1,i}return inherits(e,t),createClass(e,[{key:"makeFontAttr",value:function(t){if(t.indexOf(" ")>-1){var e=t.substring(0,t.indexOf('"')-1),i=t.substring(t.indexOf('"'),t.length-1).replace('"',""),s=e.split(" ");s.length>2?(this.fontStyle=s[0],this.fontWeight=s[1],this.fontSize=Number(s[2].replace("px","")),this.fontFace=i):console.log('Error : please check Mask of Font.(style weight size "face")');}else this.fontFace=opts.font;}},{key:"makeFont",value:function(){this.font=this.fontStyle+" "+this.fontWeight+" "+this.fontSize+'px "'+this.fontFace+'"';}},{key:"setFontStyle",value:function(t){this.fontStyle=t||"normal",this.makeFont();}},{key:"setFontWeight",value:function(t){this.fontWeight=t||"normal",this.makeFont();}},{key:"setFontSize",value:function(t){this.fontSize=t||12,this.makeFont();}},{key:"setFontFace",value:function(t){this.fontFace=t||"serif",this.makeFont();}},{key:"setText",value:function(t){this.text=t||"";}},{key:"setUrl",value:function(t){this.url=t||"";}},{key:"getMaxWidth",value:function(){return this.maxTextWidth}},{key:"getMaxHeight",value:function(){return this.maxTextHeight}},{key:"setMaxWidth",value:function(t){t.save(),t.font=this.font,t.textBaseline="top";var e=this.text.split("\n");this.maxTextHeight=e.length;for(var i in e){var s=t.measureText(e[i]).width;this.maxTextWidth<s&&(this.maxTextWidth=s);}t.restore();}},{key:"setBoxSizeCenter",value:function(t){var e=this._position.getCenter();if(null!=t&&!1===this.isEllipsis){t.save(),t.font=this.font,t.textBaseline="top";var i=t.measureText(this.text).width;i<20&&(i=20),this._position.max.x=this._position.min.x+i,this._position.setCenter(e),t.restore();}}},{key:"Update",value:function(t){}},{key:"Render",value:function(t){if(!0!==this.hide){if(t.save(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"Render",this).call(this,t),!0===this.showBoundBox){this.boundboxOpacity<1&&(t.globalAlpha=this.boundboxOpacity);var i=this._position.min,s=this._position.getSize();null!=this.bgColor?(t.fillStyle=this.bgColor,t.fillRect(i.x,i.y,s.x,s.y)):(t.fillStyle=this.lineColor,t.strokeRect(i.x,i.y,s.x,s.y));}t.font=this.font,t.textBaseline="top",t.fillStyle=this.color;var n=this._position.getSize();if(!0===this.isChangeLine){this.TextLineBreak(t,this.text,this.fontSize,1.2,this._position.min.x,this._position.min.y,n.x,this._position.max.y);}else!0===this.isEllipsis?t.fillText(this.TextEllipsis(t,this.text,n.x),this._position.min.x,this._position.min.y):t.fillText(this.text,this._position.min.x,this._position.min.y);t.restore();}}},{key:"TextEllipsis",value:function(t,e,i){var s=t.measureText(e).width,n=t.measureText("…").width;if(s<=i||s<=n)return e;for(var o=e.length;s>=i-n&&o-- >0;)e=e.substring(0,o),s=t.measureText(e).width;return e+"…"}},{key:"TextLineBreak",value:function(t,e,i,s,n,o,r,a){for(var h="",c=o,l=i*s,u=0;u<e.length;u++){var v=h+e[u],y=t.measureText(v).width;if(c+l>a)return void t.fillText("...",n+10,a-l);y<r&&"\n"!=e[u]?h=v:(t.fillText(h,n,c),h="\n"!=e[u]?e[u]:"",c+=l);}t.fillText(h,n,c);}},{key:"min",get:function(){return this._position.min}},{key:"max",get:function(){return this._position.max}}]),e}(Unit),Sprite=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,t),this.dataSource=e.dataSource,this.image=DataSource.Load(this.dataSource),this.x=e.x||0,this.y=e.y||0,this.scale=e.scale||1,this.currAnim=e.currAnim,this.currFrame=0,this.anims=e.anim,this.action=this.anims[this.currAnim],this.isDynamic=null!=e.isDynamic&&e.isDynamic;}return createClass(t,[{key:"resetImage",value:function(t){null!=t&&(this.dataSource=t),this.image=DataSource.Load(this.dataSource);}},{key:"ChangeDatasource",value:function(t){this.resetImage(t);}},{key:"_ableToChangeAnim",value:function(){return this.action.next!==this.currAnim}},{key:"ChangeScale",value:function(t){this.scale=t;}},{key:"ChangeAnim",value:function(t,e){this.currAnim!==t&&(e||!1===this._ableToChangeAnim())&&null!=this.anims[t]&&(this.currAnim=t,this.action=this.anims[t],this.currFrame=0,this.currTimmer=0,this.action.dir.length<this.currDir+1&&(this.currDir=0));}},{key:"ChangeDir",value:function(t){null!=this.action&&(this.currDir=this.action.dir[t]);}},{key:"ChangeDirFromAngle",value:function(t){var e=this.action;if(null!=e){var i=Math.round(t/(360/e.dir.length))%e.dir.length;this.currDir=e.dir[i];}}},{key:"getAnim",value:function(t){return this.anims[t]}},{key:"Update",value:function(t,e){}},{key:"Render",value:function(t){if(!0===this.hide)return!1;if(null===this.image)return!1;if(t.save(),""===this.image&&this.resetImage(),""!==this.image){var e=this.action;if(null!=e){this.currTimmer+=e.animSpd,this.currTimmer||(this.currTimmer=0),this.currFrame=Math.floor(this.currTimmer),this.currFrame>=e.frame-1&&(this.currFrame=0,this.currTimmer=0,this.ChangeAnim(e.next,!0));var i=e.startX+this.currFrame*e.sizeX,s=e.startY+this.currDir*e.sizeY,n=.5*e.sizeX,o=.5*e.sizeY;t.drawImage(this.image,i,s,e.sizeX,e.sizeY,this.x-n*this.scale,this.y-o*this.scale,e.sizeX*this.scale,e.sizeY*this.scale);}}t.restore();}},{key:"Destroy",value:function(){!0===this.isDynamic&&DataSource.Remove(this.dataSource);}}]),t}(),Point2D=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._shape=new Point(t),i._shape.eventStore={mousedown:function(t,e){this.setColor("#ff0000");},mouseup:function(t){this.setColor(this.originalColor);},mousemove:function(t,e){this.Translate(e.offset),t.Render();},click:function(t,e){console.log(this.parentId),t.scene.Remove(this.parentId),t.Render();}},i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){this._shape.Render(t);}}]),e}(Item),Rect2D=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._shape=new Rect(t),i._shape.eventStore={mousedown:function(t,e){this.setColor("#ff0000");},mouseup:function(t,e){this.setColor(this.originalColor);},mousemove:function(t,e){this.Translate(e.offset);},click:function(t,e){t.scene.Remove(this.parentId);},_afterCallback:function(t,e){t.Render();}},i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){0==this._shape.hide&&this._shape.Render(t);}}]),e}(Item),TextBox2D=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.controlRect=new Rect(t),i.text=t.text,i}return inherits(e,t),createClass(e,[{key:"Update",value:function(t){}},{key:"Render",value:function(t){t.fillText(this.text,10,10);}}]),e}(Item),EditRect2D=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i._c1=new Point,i._c2=new Point,i._c3=new Point,i._c4=new Point,i._rect=new Rect(t),i._c1.set(i._rect._position.min.x,i._rect._position.min.y),i._c2.set(i._rect._position.max.x,i._rect._position.min.y),i._c3.set(i._rect._position.min.x,i._rect._position.max.y),i._c4.set(i._rect._position.max.x,i._rect._position.max.y),i._rect.Attach(i.id,{min:{x:[i._c1._position,i._c3._position],y:[i._c1._position,i._c2._position]},max:{x:[i._c2._position,i._c4._position],y:[i._c3._position,i._c4._position]}}),i._c1.Attach(i.id,{min:{x:i._rect._position.min,y:i._rect._position.min},_next:[i._rect]}),i._c2.Attach(i.id,{min:{x:i._rect._position.max,y:i._rect._position.min},_next:[i._rect]}),i._c3.Attach(i.id,{min:{x:i._rect._position.min,y:i._rect._position.max},_next:[i._rect]}),i._c4.Attach(i.id,{min:{x:i._rect._position.max,y:i._rect._position.max},_next:[i._rect]}),i._rect.eventStore={mousemove:function(t,e){this.Translate(e.offset);},click:function(t,e){t.scene.Remove(this.parentId);},_after:function(t,e){t.Render();}};var s={mousemove:function(t,e){this.Translate(e.offset),t.Render();}};return i._c1.eventStore=s,i._c2.eventStore=s,i._c3.eventStore=s,i._c4.eventStore=s,i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){this._rect.Render(t),this._c1.Render(t),this._c2.Render(t),this._c3.Render(t),this._c4.Render(t);}}]),e}(Item),BezierLine2D=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i._rect=new Rect(t),i._c1=new Point,i._c2=new Point,i._c3=new Point,i._c4=new Point,i._c1.set(i._rect._position.min.x,i._rect._position.min.y),i._c2.set(i._rect._position.max.x,i._rect._position.min.y),i._c3.set(i._rect._position.min.x,i._rect._position.max.y),i._c4.set(i._rect._position.max.x,i._rect._position.max.y),i._line=new Line({pos:[i._c1._position,i._c2._position,i._c3._position,i._c4._position],isBezier:!0,lineType:"DASH",lineWidth:5}),i._rect.Attach(i.id,{min:{x:[i._line._position[0],i._line._position[2],i._c1._position,i._c3._position],y:[i._line._position[0],i._line._position[1],i._c1._position,i._c2._position]},max:{x:[i._line._position[1],i._line._position[3],i._c2._position,i._c4._position],y:[i._line._position[2],i._line._position[3],i._c3._position,i._c4._position]}}),i._c1.Attach(i.id,{min:{x:[i._rect._position.min,i._line._position[0]],y:[i._rect._position.min,i._line._position[0]]},_next:[i._rect]}),i._c2.Attach(i.id,{min:{x:[i._rect._position.max,i._line._position[1]],y:[i._rect._position.min,i._line._position[1]]},_next:[i._rect]}),i._c3.Attach(i.id,{min:{x:[i._rect._position.min,i._line._position[2]],y:[i._rect._position.max,i._line._position[2]]},_next:[i._rect]}),i._c4.Attach(i.id,{min:{x:[i._rect._position.max,i._line._position[3]],y:[i._rect._position.max,i._line._position[3]]},_next:[i._rect]}),i._rect.eventStore={mousemove:function(t,e){this.Translate(e.offset);},click:function(t,e){t.scene.Remove(this.parentId);},_after:function(t,e){t.Render();}};var s={mousemove:function(t,e){this.Translate(e.offset),t.Render();}};return i._c1.eventStore=s,i._c2.eventStore=s,i._c3.eventStore=s,i._c4.eventStore=s,i}return inherits(e,t),createClass(e,[{key:"Render",value:function(t){this._c1.Render(t),this._c2.Render(t),this._c3.Render(t),this._c4.Render(t),this._line.Render(t);}}]),e}(Item),HUDContainer=function(){function t(e){classCallCheck(this,t),this.ctx=e.getContext("2d"),this.hudList={},this.Resize();}return createClass(t,[{key:"Add",value:function(t,e){this.hudList[t]=e,this.Render(t);}},{key:"Update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.width=this.width,t.height=this.height;for(var e in t){var i=this.hudList[e];i&&(i.Update(t[e]),this.Render(e));}}},{key:"Render",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e.ctx=this.ctx,e.width=this.width,e.height=this.height,null!=t)this.hudList[t].Render(e);else for(var i in this.hudList)this.hudList[i].Render(e);}},{key:"Resize",value:function(){this.width=this.ctx.canvas.offsetWidth,this.height=this.ctx.canvas.offsetHeight,this.Render();}}]),t}(),HUD=function(){function t(){classCallCheck(this,t);}return createClass(t,[{key:"Update",value:function(t){}},{key:"Render",value:function(t){}}]),t}(),MouseControl=function t(e){function i(t,e){var i={x:0,y:0};return i.x=t.x-e.x,i.y=t.y-e.y,i}function s(t){var i={x:t.clientX,y:t.clientY};return null!==e.scene.camera&&(i=e.scene.camera.ScreenToWorld(i.x,i.y)),i}function n(t){return function(e){if(e.touches.length>0&&t(e.touches[0]))return e.preventDefault(),!1}}function o(t){var i=s(t);if(null==(v=f.FindItemOne(i))&&(v=e.scene.camera),null!=v){l=i,u=i;var n={event:t,position:i};f.Trigger(v,"mousedown",n);}t.preventDefault();}function r(t){var e=s(t),n=f.FindItemOne(e);if(null!=n?(null==d&&f.Trigger(n,"mouseover",{event:t,position:e}),null!=d&&d.id!=n.id&&(f.Trigger(d,"mouseout",{event:t,position:e}),f.Trigger(n,"mouseover",{event:t,position:e})),d=n,f.Trigger(n,"mouseovermove",{event:t,position:e})):null!=d&&(f.Trigger(d,"mouseout",{event:t,position:e}),d=null),null!=v){var o=i(e,l),r=i(e,u);u=e;var a={offset:r,cameraOffset:o,event:t,currentObject:n};f.Trigger(v,"mousemove",a);}t.preventDefault();}function a(t){var e=s(t),i={event:t,currentObject:f.FindItemOne(e),position:e};l&&u&&l.x==u.x&&l.y==u.y?f.Trigger(v,"click",i):f.Trigger(v,"mouseup",i),d=null,v=null,t.preventDefault();}function h(t){var i=s(t),n=0;t||(t=window.event),t.wheelDelta?n=t.wheelDelta/120:t.detail&&(n=-t.detail/3),f.Trigger(e.scene.camera,"mousewheel",{event:t,delta:n,position:i}),t.preventDefault();}function c(t){var e=s(t),i=f.FindItemOne(e,"dblclick"),n={event:t,position:e};f.Trigger(i,"dblclick",n),t.preventDefault();}classCallCheck(this,t);var l,u,v,y=e.HUD||e.canvas,f=e.EventStore,d=null;y.onmousedown=o,y.ontouchstart=n(o),y.onmousemove=r,y.ontouchmove=n(r),y.onmouseup=a,y.ontouchup=n(a),y.ondblclick=c,y.onmousewheel=h;},KeyboardControl=function t(e){function i(t){if(null!==e.scene.camera){var i={event:t,keyCode:t.which||t.keyCode};n.Trigger(e.scene.camera,"keydown",i);}}function s(t){if(null!==e.scene.camera){var i={event:t,keyCode:t.which||t.keyCode};n.Trigger(e.scene.camera,"keyup",i);}}classCallCheck(this,t);var n=e.EventStore;document.onkeydown=i,document.onkeyup=s;};exports.DataSource=DataSource,exports.EventStore=EventStore,exports.StageServer=StageServer,exports.ShaderProgram=ShaderProgram,exports.Scene3D=Scene3D,exports.Stage3D=Stage3D,exports.Stage2D=Stage2D,exports.Vec2=Vec2,exports.Box2=Box2,exports.Scene2D=Scene2D,exports.Camera2D=Camera2D,exports.Path2D=Path2D,exports.Item=Item,exports.Map=Map,exports.MapImage=MapImage,exports.Rect=Rect,exports.Point=Point,exports.Line=Line,exports.BezierLine=BezierLine,exports.Svg=Svg,exports.Text=Text,exports.Image=Image$1,exports.Sprite=Sprite,exports.Unit=Unit,exports.Point2D=Point2D,exports.Rect2D=Rect2D,exports.TextBox2D=TextBox2D,exports.EditRect2D=EditRect2D,exports.BezierLine2D=BezierLine2D,exports.HUDContainer=HUDContainer,exports.HUD=HUD,exports.MouseControl=MouseControl,exports.KeyboardControl=KeyboardControl;
	});

	unwrapExports(HetaJs);
	var HetaJs_1 = HetaJs.DataSource;
	var HetaJs_2 = HetaJs.EventStore;
	var HetaJs_3 = HetaJs.StageServer;
	var HetaJs_4 = HetaJs.ShaderProgram;
	var HetaJs_5 = HetaJs.Scene3D;
	var HetaJs_6 = HetaJs.Stage3D;
	var HetaJs_7 = HetaJs.Stage2D;
	var HetaJs_8 = HetaJs.Vec2;
	var HetaJs_9 = HetaJs.Box2;
	var HetaJs_10 = HetaJs.Scene2D;
	var HetaJs_11 = HetaJs.Camera2D;
	var HetaJs_12 = HetaJs.Path2D;
	var HetaJs_13 = HetaJs.Item;
	var HetaJs_14 = HetaJs.Map;
	var HetaJs_15 = HetaJs.MapImage;
	var HetaJs_16 = HetaJs.Rect;
	var HetaJs_17 = HetaJs.Point;
	var HetaJs_18 = HetaJs.Line;
	var HetaJs_19 = HetaJs.BezierLine;
	var HetaJs_20 = HetaJs.Svg;
	var HetaJs_21 = HetaJs.Text;
	var HetaJs_22 = HetaJs.Image;
	var HetaJs_23 = HetaJs.Sprite;
	var HetaJs_24 = HetaJs.Unit;
	var HetaJs_25 = HetaJs.Point2D;
	var HetaJs_26 = HetaJs.Rect2D;
	var HetaJs_27 = HetaJs.TextBox2D;
	var HetaJs_28 = HetaJs.EditRect2D;
	var HetaJs_29 = HetaJs.BezierLine2D;
	var HetaJs_30 = HetaJs.HUDContainer;
	var HetaJs_31 = HetaJs.HUD;
	var HetaJs_32 = HetaJs.MouseControl;
	var HetaJs_33 = HetaJs.KeyboardControl;

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);

	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	/**
	 * Edit Rect Box
	 * 4점 조절 가능한 기본적인 edit box입니다.
	 * 
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 
	 */
	var Actor = function (_Item) {
		inherits(Actor, _Item);

		function Actor(opts, spriteOpt) {
			classCallCheck(this, Actor);

			var _this = possibleConstructorReturn(this, (Actor.__proto__ || Object.getPrototypeOf(Actor)).call(this, opts));

			_this.type = 'Actor'; //필수

			_this.x = opts.x || 0;
			_this.y = opts.y || 0;
			//		this.hp = opts.hp || 50;
			//		this.hpMax = opts.hpMax || 50;

			//		this.mouseAngle = 0;
			//		this.maxSpd = opts.maxSpd || 6;


			//private
			_this._gravitySpd = 0;

			_this.weight = 0; //무게는 중력 속도 비례		//상속
			_this.gravity = 0; //중력사용시  적용됨. (중력적용 scene에서 weight의 값이 복사됨) 


			_this._jumping = true; //점프중이면.


			//속도 보간용도로 사용.
			_this.spdX = 0;
			_this.spdY = 0;

			_this.dir = opts.dir || 0; //0123 은  우상좌하
			_this.anim = opts.anim || 'stop';
			_this.scale = opts.scale || 1;
			//스프라이트

			//=============================== 스프라이트 초기 설정
			spriteOpt.x = _this.x;
			spriteOpt.y = _this.y;
			//		opts.dataSource : this._type,		//Player01   이미지
			spriteOpt.scale = _this.scale;
			spriteOpt.currAnim = opts.anim || 'stop'; //'stop'

			_this._sprite = new HetaJs_23(spriteOpt);

			//		this._sprite = null;	//new Sprite(spriteOpts);				//min, max  디자인이 구성된 객체.

			return _this;
		}

		//	set sprite(opts){
		////		this._type = t;
		//		if(this._sprite == null){
		//			opts.x = this.x;
		//			opts.y = this.y;
		////			opts.dataSource : this._type,		//Player01   이미지
		//			opts.scale = this.scale;
		//			opts.currAnim = this.anim;	//'stop'
		//			
		//			this._sprite = new Sprite(opts);
		//		}else{
		//			this._sprite.resetOpts({dataSource: opts});
		////			this._sprite.resetImage(opts);		//이미지도 바꾼다.
		//		}
		//	}

		//안쓴다.
		//	get sprite(){
		//		return this._sprite;
		//	}

		//	set anim(a){
		//		this._sprite.ChangeAnim(a);
		//	}
		//	get anim(){
		//		return this._sprite.currAnim;
		//	}
		//	


		createClass(Actor, [{
			key: 'getPack',


			//====================== 통신용 ========================
			value: function getPack() {
				return {
					type: this.type, //업데이트 할때는 type을 빼서 용향을 줄여야 한다. 
					id: this.id,
					x: this.x,
					y: this.y,
					//			hp:this.hp,
					//			hpMax:this.hpMax,
					dataSource: this.dataSource, //이미지가 바뀔수 있음. 
					scale: this.scale,
					dir: this.dir,
					anim: this.anim

				};
			}
		}, {
			key: 'setPack',
			value: function setPack(p) {
				//
				var isChanged = false;
				if (p) {
					for (var i in p) {
						if (p[i] !== undefined && this[i] !== p[i]) {
							this[i] = p[i];
							isChanged = true;
						}
					}
				}
				return isChanged;
			}

			/**
	   * 이동로직
	   * spdY = -offsetSpd;
	   * this.dir = 1;	//[우상좌하 = 0123]
	   * this.anim = 'walk';
	   */

		}, {
			key: 'actMove',
			value: function actMove() {
				var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				//	{spdY:-offsetSpd, anim:'walk', dir : 1});
				if (param.spdX != null) this.spdX = param.spdX;
				if (param.spdY != null) this.spdY = param.spdY;
				if (this._jumping === false || this.gravity === 0) {
					//점프중이 아닐때 동작 변경가능 TODO 점프중이 아닐때 만 변경  
					if (param.anim != null) this.anim = param.anim;
				}
				if (param.dir != null) this.dir = param.dir;
			}

			/**
	   * 점프 로직
	   * 점프뛰는 중에는 anim이 바뀌면 안된다. 
	   */

		}, {
			key: 'actJump',
			value: function actJump() {
				var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				//{gravity:g=0, anim:anim,dir:dir}){	//g는 필수
				if (this._jumping === false && this._gravitySpd === 0) {
					if (param.gravity != null) {
						this.spdY -= this.gravity; //살짝 들어줘야지 충돌 체크에 안걸린다.
						this._gravitySpd = param.gravity;
					}
					if (param.anim != null) this.anim = param.anim;
					//			if(param.dir != null) this.dir = param.dir;
					this._jumping = true; //점프중이면.
				}
			}

			/**
	   * 발사!
	   * 점프중일때는 ... jump를 반환
	   */

		}, {
			key: 'actFire',
			value: function actFire(fire, jumpFire) {
				if (this._jumping === true) {
					this.anim = jumpFire;
					this._fireNext = this._sprite.getAnim(jumpFire).next;
				} else {
					this.anim = fire;
					//			this._fireNext = this._sprite.getAnim(fire).next;	//사용하지 않는다.
				}
			}

			//====================== 서버 ========================
			/*
	   * 소캣이 있을때는 서버에서 돌고 client에서는 돌지 않는다. 
	   * 위치 갱신  (네트워크로 날린다.)
	   * 
	   * Mock이 있으면 client에서 이것도 동작한다.
	  */

		}, {
			key: 'Update',
			value: function Update(d, dt, scene) {
				//		this.oldPack = this.getPack();	//TODO 상속 받은거에 있어야 함.

				//-------------------------------------------------------
				//지도가 있으면 영역을 벋어나는지 체크 
				if (scene.map != null) {

					//================= 중력 적용
					if (this.gravity > 0) {
						this._gravitySpd += this.gravity; //무게 만큼 아래로   
						if (this._gravitySpd > 16) this._gravitySpd = 16; //땅속에 밖히는 오류가 있긴한데 괜찮어..
						this.spdY += this._gravitySpd;
						//				this.spdY += this._gravitySpd*dt;
					}

					var x = this.x + this.spdX;
					var y = this.y + this.spdY;

					this.posLeft = { x: x + this._boundL[0] * this.scale, y: y + this._boundL[1] * this.scale, dir: 'L' }; //offset위치를 가늠하기 위해서 L,U 등 구분. 
					this.posUp = { x: x + this._boundU[0] * this.scale, y: y + this._boundU[1] * this.scale, dir: 'U' };
					this.posRight = { x: x + this._boundR[0] * this.scale, y: y + this._boundR[1] * this.scale, dir: 'R' };
					this.posDown = { x: x + this._boundD[0] * this.scale, y: y + this._boundD[1] * this.scale, dir: 'D' };

					//			this.posLeft	= {x : this.x + this.spdX + this._boundL[0] * this.scale, y : this.y + this.spdY + this._boundL[1] * this.scale, dir : 'L'};	//offset위치를 가늠하기 위해서 L,U 등 구분. 
					//			this.posUp	= {x : this.x + this.spdX + this._boundU[0] * this.scale, y : this.y + this.spdY + this._boundU[1] * this.scale, dir : 'U'};
					//			this.posRight= {x : this.x + this.spdX + this._boundR[0] * this.scale, y : this.y + this.spdY + this._boundR[1] * this.scale, dir : 'R'};
					//			this.posDown	= {x : this.x + this.spdX + this._boundD[0] * this.scale, y : this.y + this.spdY + this._boundD[1] * this.scale, dir : 'D'};
					var wallL = scene.map.collisionCheck(this.posLeft); //왼쪽 벽에 닿았나? 0 또는 object.		//return {status: mapStatus, x: (x % tW), y: (y % tH)}	//offset;
					var wallR = scene.map.collisionCheck(this.posRight); //왼쪽 벽에 닿았나? 0 또는 object.
					var wallU = scene.map.collisionCheck(this.posUp); //왼쪽 벽에 닿았나? 0 또는 object.
					var wallD = scene.map.collisionCheck(this.posDown); //왼쪽 벽에 닿았나? 0 또는 숫자.

					//좌우 계산이 먼저 와야 한다. 
					if (wallL) {
						this.spdX += wallL.x; //벽에 닫으면 해당 위치의 offset만큼 이동
						//				this.x = oldPack.x;
						//TODO 밖힘 방지  this.x대신에 this.spdX를 사용하면 됨.
					} else if (wallR) {
						//바닥에 닿으면
						this.spdX -= wallR.x;
						//				this.x = oldPack.x;
					}

					if (wallD) {
						//				this.y = oldPack.y;
						//TODO 밖힘 방지
						this.spdY -= wallD.y;
						//================= 중력
						this._gravitySpd = 0;

						this._jumping = false; //점프중이면.
					} else if (wallU) {
						//바닥에 닿으면  
						//				this.y = oldPack.y;
						this.spdY += wallU.y;
						//================= 중력
						this._gravitySpd = 0;
					}
				}

				this.x += this.spdX;
				this.y += this.spdY;

				//바뀐거 체크 해서 send하기 위함
				var newPack = this.getPack();
				if (this._isEquals(this.oldPack, newPack)) {
					//같은거 비교.
					return null; //바뀐게 없으면
				}

				//TODO jump 공격의  반복 동작 보정.(점프일때만 사용)
				//에니메이션 반복을 피하기 위해서 점프 중일때 다음동작을 설정
				if (this._jumping === true) this.anim = this._fireNext;

				return newPack; //바뀐 packet값을 리턴 
			}

			/*이미지 변경*/
			//	ChangeImage(dsName){
			//		this._sprite.resetImage(dsName);
			//	}


			/**
	   * 같은거 비교
	   */

		}, {
			key: '_isEquals',
			value: function _isEquals(oVo, nVo) {
				if (oVo == null) return true; //값이 없으면 바뀐게 없다.

				for (var i in oVo) {
					if (oVo[i] != nVo[i]) {
						return false; //뭐 1개라도 다르면 false
					}
				}
				return true; //둘이 같음. 
			}

			//파괴자 에니메이션이 다 끝나고 Scene을 통해서 호출된다. (서버 클라이언트 둘다 사용)

		}, {
			key: 'Destroy',
			value: function Destroy(sender) {
				//		delete this._shape;
				if (this._sprite == null) return;

				delete this._sprite;
			}

			//====================== 클라이언트 쪽========================
			//클라이언트만 동작

			//====================== 그리기 ========================
			// 서버에서 절대로 돌지 않는다.

		}, {
			key: 'Render',
			value: function Render(ctx) {

				if (this._sprite == null) return;

				//		console.log(this._p._position.x);
				//		this._shape.Render(ctx);		//점뿌리기
				//같은것은 업데이트 되지 않는다.
				this._sprite.ChangeDir(this.dir); //[우상좌하 = 0123]
				this._sprite.ChangeScale(this.scale); // 1, 0.5
				this._sprite.ChangeAnim(this.anim); //'stop' ,'walk'


				this._sprite.x = this.x; //네트워크 타고 오기 때문에.. 값이 Update에서는 바뀌지 않는다.
				this._sprite.y = this.y;

				//		console.log(this._p._position.x);
				this._sprite.Render(ctx);

				//=============================================		
				//		ctx.fillStyle = '#000000';
				//		let r = 2;
				//		ctx.fillRect(this.x -r, this.y-r, r*2, r*2);
				//		this.posLeft	= {x : this.x + this._boundL[0] * this.scale, y : this.y + this._boundL[1] * this.scale};
				//		this.posUp	= {x : this.x + this._boundU[0] * this.scale, y : this.y + this._boundU[1] * this.scale};
				//		this.posRight= {x : this.x + this._boundR[0] * this.scale, y : this.y + this._boundR[1] * this.scale};
				//		this.posDown	= {x : this.x + this._boundD[0] * this.scale, y : this.y + this._boundD[1] * this.scale};
				//			ctx.fillStyle = 'blue';
				//			ctx.fillRect(this.posLeft.x-r, this.posLeft.y-r, r*2, r*2);
				//			ctx.fillStyle = 'green';
				//			ctx.fillRect(this.posUp.x-r, this.posUp.y-r, r*2, r*2);
				//			ctx.fillStyle = 'red';
				//			ctx.fillRect(this.posRight.x-r, this.posRight.y-r, r*2, r*2);
				//			ctx.fillStyle = 'yellow';
				//			ctx.fillRect(this.posDown.x-r, this.posDown.y-r, r*2, r*2);
			}
		}, {
			key: 'dataSource',
			set: function set$$1(ds) {
				this._sprite.ChangeDatasource(ds);
			},
			get: function get$$1() {
				return this._sprite.dataSource;
			}
		}]);
		return Actor;
	}(HetaJs_13);

	/**
	 * Edit Rect Box
	 * 4점 조절 가능한 기본적인 edit box입니다.
	 * 
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 
	 */
	var Bullet1 = function (_Item) {
		inherits(Bullet1, _Item);

		function Bullet1(opts) {
			classCallCheck(this, Bullet1);

			var _this = possibleConstructorReturn(this, (Bullet1.__proto__ || Object.getPrototypeOf(Bullet1)).call(this, opts));

			_this.type = 'Bullet1';
			_this.x = opts.x || 0;
			_this.y = opts.y || 0;
			//		this.hp = 50;
			//		this.hpMax = 50;

			_this.timer = 0;
			_this.combatType = opts.combatType; //적인지 생성자 인지 구분용 (플레이어 ID) 
			_this.spdX = opts.spdX;
			_this.spdY = opts.spdY;
			//		this.toRemove = false;


			//공간영역	 컬러 등등. 있음. 
			_this._shape = new HetaJs_17(opts); //min, max  디자인이 구성된 객체.


			return _this;
		}

		//====================== 통신용 ========================


		createClass(Bullet1, [{
			key: 'getPack',
			value: function getPack() {
				return {
					type: this.type, //업데이트 할때는 name을 빼서 용향을 줄여야 한다. 
					id: this.id,
					x: this.x,
					y: this.y,
					spdX: this.spdX,
					spdY: this.spdY,
					combatType: this.combatType
					//			hp:this.hp,
					//			hpMax:this.hpMax
				};
			}

			//공통

		}, {
			key: 'setPack',
			value: function setPack(p) {
				//
				var isChanged = false;
				if (p) {
					for (var i in p) {
						if (p[i] !== undefined && this[i] !== p[i]) {
							this[i] = p[i];
							isChanged = true;
						}
					}
				}
				return isChanged;
			}

			/*
	   * TODO 소캣이면 update의 sender에 socket항목이 있음. 
	  */

		}, {
			key: 'Update',
			value: function Update(d, dt, scene) {

				if (this.timer > 50) {
					return 'remove';
				} else {

					this.oldPack = this.getPack(); //필수 (우선 담는다.)


					//		this.timer += dt;
					this.timer++;

					//		
					//		if(this.combatType === 'player'){	//bullet was shot by player
					//			for(var key2 in Enemy.list){
					//				if(this.testCollision(Enemy.list[key2])){
					//					self.toRemove = true;
					//					Enemy.list[key2].hp -= 1;
					//				}				
					//			}
					//		} else if(this.combatType === 'enemy'){
					//			if(self.testCollision(player)){
					//				self.toRemove = true;
					//				player.hp -= 1;
					//			}
					//		}	
					this.x += this.spdX;
					this.y += this.spdY;

					//지도가 있으면 지형과 충돌 체크
					//		if(scene.map != null){
					//			if(this.x < scene.map.x || this.x > scene.map.w){
					//				return 'remove';
					//			}
					//			if(this.y < scene.map.y || this.y > scene.map.h){
					//				return 'remove';
					//			}
					//		}


					//		if(scene.map.isPositionWall(self)){
					////			self.toRemove = true;
					//			return 'remove';
					//		}


					//바뀐거 체크 해서 send하기 위함
					var newPack = this.getPack();
					if (this._isEquals(this.oldPack, newPack)) {
						//같은거 비교.
						return null; //바뀐게 없으면
					}

					return newPack; //바뀐 packet값을 리턴 
				}
			}

			/**
	   * 같은거 비교 (공통)
	   */

		}, {
			key: '_isEquals',
			value: function _isEquals(oVo, nVo) {
				if (oVo == null) return true; //값이 없으면 바뀐게 없다.

				for (var i in oVo) {
					if (oVo[i] != nVo[i]) {
						return false; //뭐 1개라도 다르면 false
					}
				}
				return true; //둘이 같음. 
			}

			//파괴자 에니메이션이 다 끝나고 Scene을 통해서 호출된다. (서버 클라이언트 둘다 사용)

		}, {
			key: 'Destroy',
			value: function Destroy(sender) {
				if (this._shape == null) return;
				this._shape.Destroy();
				delete this._shape;
			}
			//====================== 소켓 ========================


		}, {
			key: 'Render',
			value: function Render(ctx) {
				if (this._shape == null) return;

				this._shape.x = this.x; //네트워크 타고 오기 때문에.. 값이 Update에서는 바뀌지 않는다.
				this._shape.y = this.y;

				this._shape.Render(ctx); //점뿌리기
			}

			//	attach(type){
			//		switch(type){
			//		case: "LEFT"
			//			
			//			break;
			//		}
			//	}

			//	attach("LEFT",point);

		}]);
		return Bullet1;
	}(HetaJs_13);

	/**
	 * Edit Rect Box
	 * 4점 조절 가능한 기본적인 edit box입니다.
	 * 
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 
	 */
	var Player01 = function (_Actor) {
		inherits(Player01, _Actor);

		function Player01(opts) {
			classCallCheck(this, Player01);

			var _this = possibleConstructorReturn(this, (Player01.__proto__ || Object.getPrototypeOf(Player01)).call(this, opts, {
				dataSource: opts.dataSource || 'Player01', //Player01   이미지
				anim: {
					stop: {
						frame: 1, //멈춘동작 1개
						startX: 0,
						startY: 518,
						sizeX: 64,
						sizeY: 64,
						//					pivot : [32, 50],	//발의 위치 (0,0을 이미지 사이즈라고 가정하고 거기부터 계산해서 발의 위치 )
						dir: [3, 0, 1, 2], //앞만 보지만  4개가 있어야 한다.     4방향 [우상좌하 = 0123] 현재 이미지가 위에 부터 상좌하우 로 되어 있음. (이미지의경우 우상좌하 = 3012) 
						animSpd: 0, //에니메이션 스피드
						next: 'stop'
					},
					walk: {
						frame: 9, //걷는동작 9개 
						startX: 0,
						startY: 518,
						sizeX: 64,
						sizeY: 64,
						//					pivot : [32, 50],	//발의 위치
						dir: [3, 0, 1, 2], //4방향 [우상좌하 = 0123] 현재 이미지가 위에 부터 상좌하우 로 되어 있음. (이미지의경우 우상좌하 = 3012) 
						animSpd: 0.2, //느리게 재생됨
						next: "walk"
					},
					jump: {
						frame: 1, //걷는동작 9개 
						startX: 320,
						startY: 0,
						sizeX: 64,
						sizeY: 64,
						//					pivot : [32, 50],	//발의 위치
						dir: [3, 0, 1, 2], //4방향 [우상좌하 = 0123] 현재 이미지가 위에 부터 상좌하우 로 되어 있음. (이미지의경우 우상좌하 = 3012) 
						animSpd: 0.1, //느리게 재생됨
						next: "jump"
					},
					fire: {
						frame: 6,
						startX: 0,
						startY: 768 + 6,
						sizeX: 64,
						sizeY: 64,
						//					pivot : [32, 50],	//발의 위치
						dir: [3, 0, 1, 2], //4방향 [우상좌하 = 0123] 현재 이미지가 위에 부터 상좌하우 로 되어 있음. (이미지의경우 우상좌하 = 3012) 
						animSpd: 0.5, //느리게 재생됨
						next: "stop"
					},
					jump_fire: { //점프중. 공격
						frame: 6,
						startX: 0,
						startY: 768 + 6,
						sizeX: 64,
						sizeY: 64,
						//					pivot : [32, 50],	//발의 위치
						dir: [3, 0, 1, 2], //4방향 [우상좌하 = 0123] 현재 이미지가 위에 부터 상좌하우 로 되어 있음. (이미지의경우 우상좌하 = 3012) 
						animSpd: 0.5, //느리게 재생됨
						next: "jump"
					}
				}
			}));

			_this.type = 'Player01'; //필수

			//다리쪽의 바운드 포인트
			_this._boundL = [-10, 0]; //pivot을 기준으로 x, y 
			_this._boundR = [10, 0]; //pivot을 기준으로 x, y
			_this._boundU = [0, -20]; //pivot을 기준으로 x, y
			_this._boundD = [0, 20]; //pivot을 기준으로 x, y


			//		this.x = opts.x || 0;
			//		this.y = opts.y || 0;
			_this.hp = opts.hp || 50;
			_this.hpMax = opts.hpMax || 50;

			_this.mouseAngle = 0;
			_this.maxSpd = opts.maxSpd || 6;

			//크기 
			//private
			_this.weight = 2; //TODO 무게는 중력 속도 비례 (0이면 중력 영향을 안받는다.)

			//공간영역	 컬러 등등. 있음. 
			//		this._shape = new Point(opts);				//min, max  디자인이 구성된 객체.


			//====================== 서버용 소캣이 없으면 로컬에서도 사용한다. =====================
			//무조건 서버에서만 사용하는것 
			_this.pressingRight = false;
			_this.pressingLeft = false;
			_this.pressingUp = false;
			_this.pressingDown = false;
			_this.pressingAttack = false;

			//		this.dir = 0; //총알 방향.

			//    	name:'mace',
			//		initAnim:'walk',			//info about anim sent to client when init. use when anim is constant (ex: switch off)
			//    	anim:'walk',				//normally null. change for 1 frame when attack etc... changing initAnim will also change anim
			//    	sizeMod : 1,
			//    	oldAnim:'walk',				//client stuff
			//		startX : 0,
			//    	spdBoost : 1,
			//    	timer : 0,
			//    	walk : 0,
			//		alpha: 1,
			//		dead: 0,
			//		this.sprite = ;

			//스프라이트
			//		this._sprite = new Sprite(spriteOpts);				//min, max  디자인이 구성된 객체.


			//고정값
			//		this._shape.eventStore = {	//Point객체 입니다. this=shape
			//				mousedown : function(stage,sender){
			//					//sender.evet;
			//					this.setColor("#ff0000");
			//				},
			//				mouseup : function(e){
			//					this.setColor(this.originalColor);
			//				},
			//				mousemove : function(stage,sender){
			//					this.Translate(sender.offset);
			//					stage.Render();
			//				},
			////				//클릭하면 삭제해버림.
			//				click : function(stage,e){
			//					console.log(this.parentId);
			//					stage.scene.Remove(this.parentId);
			//					
			//					stage.Render();
			//				}
			//		};


			//		this.status = {
			//				selected : false,	//선택된 상태.	= 여러개가 선택된 상태일수가 있다.
			//				hover : false,		//마우스가 올라온 상태
			//				focus : false,		//선택
			//				blur : true,		//선택해제
			//				leave : true,		//선택이 완전히 해제된 상태.
			//				revert : false		//원본데이터로 복구가 필요할때
			//			};


			return _this;
		}

		//====================== 통신용 ========================


		createClass(Player01, [{
			key: 'getPack',
			value: function getPack() {
				var p = get(Player01.prototype.__proto__ || Object.getPrototypeOf(Player01.prototype), 'getPack', this).call(this); //id, type, x,y,scale,anim,dir 

				p.hp = this.hp;
				p.hpMax = this.hpMax;

				return p;
			}

			//====================== 서버 ========================
			/*
	   * 소캣이 있을때는 서버에서 돌고 client에서는 돌지 않는다. 
	   * 위치 갱신  (네트워크로 날린다.)
	   * 
	   * Mock이 있으면 client에서 이것도 동작한다.
	  */

		}, {
			key: 'Update',
			value: function Update(d, dt, scene) {
				this.oldPack = this.getPack(); //필수 (우선 담는다.)


				//속도 private
				this.spdX = 0;
				this.spdY = 0;

				var offsetSpd = this.maxSpd;
				//		let offsetSpd = this.maxSpd * dt;

				if (this.pressingRight) {
					//			spdX = offsetSpd;
					this.actMove({ spdX: offsetSpd, anim: 'walk', dir: 0 });
					//			this.dir = 0;	//[우상좌하 = 0123]
					//			this.anim = 'walk';
				} else if (this.pressingLeft) {
					//			spdX = -offsetSpd;
					this.actMove({ spdX: -offsetSpd, anim: 'walk', dir: 2 });
					//			this.dir = 2;	//[우상좌하 = 0123]
					//			this.anim = 'walk';
				}

				if (this.pressingUp) {
					//걷기 일때
					if (this.gravity > 0) {
						this.actJump({ gravity: -20, anim: 'jump' }); //점프할때는 점프가 유지 되야 하는데.... 
					} else {
						this.actMove({ spdY: -offsetSpd, anim: 'walk', dir: 1 });
					}
					//			this.dir = 1;
				} else if (this.pressingDown) {
					this.actMove({ spdY: offsetSpd, anim: 'walk', dir: 3 });

					//			this.dir = 3;	//[우상좌하 = 0123]
					//			this.anim = 'walk';
				}

				if (this.spdX === 0 && this.spdY === 0) {
					//점추기
					//			this.anim = 'stop';
					this.actMove({ anim: 'stop' });
				}

				//공격
				if (this.pressingAttack) {
					this.pressingAttack = false;
					this.actFire('fire', 'jump_fire');

					//==============================================
					//총알.
					var angle = this.dir * 90;
					//			if(aimOverwrite !== undefined)
					//				angle = aimOverwrite;
					//			else angle = actor.aimAngle;
					var spdX = Math.cos(angle / 180 * Math.PI) * 10;
					var spdY = Math.sin(angle / 180 * Math.PI) * 10;
					var b = new Bullet1({ x: this.x, y: this.y, spdX: spdX, spdY: spdY, combatType: this.id });
					scene.Add(b);
				}

				//모체의 위치
				//		this.x += spdX;
				//		this.y += spdY;
				return get(Player01.prototype.__proto__ || Object.getPrototypeOf(Player01.prototype), 'Update', this).call(this, d, dt, scene); //this.oldPack 필수  ( map여부를 판단해서 중력 및 충돌 계산을 한다.)
			}

			//파괴자 에니메이션이 다 끝나고 Scene을 통해서 호출된다. (서버 클라이언트 둘다 사용)

		}, {
			key: 'Destroy',
			value: function Destroy(sender) {
				//		delete this._shape;
				get(Player01.prototype.__proto__ || Object.getPrototypeOf(Player01.prototype), 'Destroy', this).call(this, sender);
			}

			//====================== 클라이언트 쪽========================
			//클라이언트만 동작

			//====================== 그리기 ========================
			// 서버에서 절대로 돌지 않는다.

		}, {
			key: 'Render',
			value: function Render(ctx) {

				get(Player01.prototype.__proto__ || Object.getPrototypeOf(Player01.prototype), 'Render', this).call(this, ctx);

				//============================================= 테스트 포인트		
				//		ctx.fillStyle = '#000000';
				//		let r = 2;
				//		ctx.fillRect(this.x -r, this.y-r, r*2, r*2);
				//		this.posLeft	= {x : this.x + this._boundL[0] * this.scale, y : this.y + this._boundL[1] * this.scale};
				//		this.posUp	= {x : this.x + this._boundU[0] * this.scale, y : this.y + this._boundU[1] * this.scale};
				//		this.posRight= {x : this.x + this._boundR[0] * this.scale, y : this.y + this._boundR[1] * this.scale};
				//		this.posDown	= {x : this.x + this._boundD[0] * this.scale, y : this.y + this._boundD[1] * this.scale};
				//			ctx.fillStyle = 'blue';
				//			ctx.fillRect(this.posLeft.x-r, this.posLeft.y-r, r*2, r*2);
				//			ctx.fillStyle = 'green';
				//			ctx.fillRect(this.posUp.x-r, this.posUp.y-r, r*2, r*2);
				//			ctx.fillStyle = 'red';
				//			ctx.fillRect(this.posRight.x-r, this.posRight.y-r, r*2, r*2);
				//			ctx.fillStyle = 'yellow';
				//			ctx.fillRect(this.posDown.x-r, this.posDown.y-r, r*2, r*2);
			}
		}]);
		return Player01;
	}(Actor);

	//import PlayerModel01 from '../actors/';


	var SceneVillageMain = function (_Scene2D) {
		inherits(SceneVillageMain, _Scene2D);

		function SceneVillageMain(stage, opts) {
			classCallCheck(this, SceneVillageMain);

			var _this = possibleConstructorReturn(this, (SceneVillageMain.__proto__ || Object.getPrototypeOf(SceneVillageMain)).call(this, stage, opts));

			_this.name = "SceneVillageMain"; //필수

			//		//TODO spot포인트 설정
			//		console.log("Scene Village Main의 spot point설정");


			// TODO 지도 이동 속도 관련 조절 
			//지도는 무조건 tile 이미지도 비례해야 한다. width:width=0, height:height=0, tileW:tileW=0, tileH:tileH=0,
			_this.map = new HetaJs_14({ x: 0, y: 0, width: 100, height: 15, tileW: 16, tileH: 16, scale: 2,
				collision: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 406, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 0, 0, 0, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }); //사이즈 설정. 카메라 설정??  , 


			_this.gravity = true; //지도마다 중력 적용 여부를 결정 (서버 내렸다 올려야함.)

			//		this._block = 406;
			//		this._slow = 206;		//느려짐
			//		this._inclineLeft = 306;
			//		this._inclineRight = 308;
			//		this._inclineLeft2 = 406;
			//		this._inclineRight2 = 408;
			//		this._sliper = 106;		//미끄러짐 

			_this.background1 = new HetaJs_15(_this.map, { dataSource: 'SceneVillageMain' }); //배경1,	'배경이미지 로드, 이동속도 조절'

			//		this.foreground = new MapImage(map, '배경 데이터, 이동속도 조절.');	//배경2,
			//		this.aniDeco = new MapSprite(map, '지도인데 에니메이션 있는 배경 ');

			//		this.collision = new MapCollision(map, '무조건 충돌 계산용.');	//충돌 계산용.
			//		this.spot = new Spots(map, '스팟 위치 설정 지도.. ');	//차후 사용.
			return _this;
		}
		//socket이 있으면 동작하지 않는다.
		//	Update(d, dt){	//없어도 된다. w
		//		super.Update(d, dt);
		//	}

		createClass(SceneVillageMain, [{
			key: 'RenderBefore',
			value: function RenderBefore(ctx, camera) {
				get(SceneVillageMain.prototype.__proto__ || Object.getPrototypeOf(SceneVillageMain.prototype), 'RenderBefore', this).call(this, ctx, camera); //아이탬을 그린다. 현재 없음

				//지도를 그린다. (background) TODO 
				this.background1.Render(ctx, camera);
			}

			/**
	   * 지도를 그릴때도 사용.(foreground) 
	   */

		}, {
			key: 'RenderAfter',
			value: function RenderAfter(ctx, camera) {

				//지도를 그린다. 이곳은 맨위에 그려진다. TODO

				get(SceneVillageMain.prototype.__proto__ || Object.getPrototypeOf(SceneVillageMain.prototype), 'RenderAfter', this).call(this, ctx, camera); //아이템을 그린다. 있으면... 현재 없음
			}
		}, {
			key: 'Destroy',
			value: function Destroy() {
				this.background1.Destroy();
				delete this.background1;
			}
		}]);
		return SceneVillageMain;
	}(HetaJs_10);

	//import PlayerModel01 from '../actors/';


	var SceneVillage1 = function (_Scene2D) {
		inherits(SceneVillage1, _Scene2D);

		function SceneVillage1(stage, opts) {
			classCallCheck(this, SceneVillage1);

			var _this = possibleConstructorReturn(this, (SceneVillage1.__proto__ || Object.getPrototypeOf(SceneVillage1)).call(this, stage, opts));

			_this.name = "SceneVillage1";

			//TODO background 로딩
			console.log("Scene Village의 background로딩");
			//TODO spot포인트 설정
			console.log("Scene Village의 spot point설정");

			//this.ctx

			//		//주인공 넣는다. (부모 컨트롤 사용)
			//		let touchControl = new ParentControl();				//TODO 
			//		this.p1 = new Player(PlayerModel01,touchControl);	//TODO  플레이어의 위치를 자동 설정한다. 
			//		this.add(p1);

			return _this;
		}

		//포함된 Item에 Update실행 


		createClass(SceneVillage1, [{
			key: "Update",
			value: function Update(d, dt) {
				get(SceneVillage1.prototype.__proto__ || Object.getPrototypeOf(SceneVillage1.prototype), "Update", this).call(this, d, dt);
			}

			//	Render(){
			//		
			//	}

		}]);
		return SceneVillage1;
	}(HetaJs_10);

	//import PlayerModel01 from '../actors/';


	var SceneVillage2 = function (_Scene2D) {
		inherits(SceneVillage2, _Scene2D);

		function SceneVillage2(stage, opts) {
			classCallCheck(this, SceneVillage2);

			var _this = possibleConstructorReturn(this, (SceneVillage2.__proto__ || Object.getPrototypeOf(SceneVillage2)).call(this, stage, opts));

			_this.name = "SceneVillage2";

			//TODO background 로딩
			console.log("Scene Village2의 background로딩");
			//TODO spot포인트 설정
			console.log("Scene Village2의 spot point설정");

			//this.ctx

			//		//주인공 넣는다. (부모 컨트롤 사용)
			//		let touchControl = new ParentControl();				//TODO 
			//		this.p1 = new Player(PlayerModel01,touchControl);	//TODO  플레이어의 위치를 자동 설정한다. 
			//		this.add(p1);

			return _this;
		}

		//포함된 Item에 Update실행 
		//	update(d, dt){
		//
		//	}
		//		
		//	
		//	Render(){
		//		
		//	}

		return SceneVillage2;
	}(HetaJs_10);

	/**
	 * Edit Rect Box
	 * 4점 조절 가능한 기본적인 edit box입니다.
	 * 
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 
	 */
	var Knight1 = function (_Item) {
		inherits(Knight1, _Item);

		function Knight1(opts) {
			classCallCheck(this, Knight1);

			var _this = possibleConstructorReturn(this, (Knight1.__proto__ || Object.getPrototypeOf(Knight1)).call(this, opts));

			_this.type = 'Knight1';

			_this.x = 0;
			_this.y = 0;
			_this.hp = 50;
			_this.hpMax = 50;

			//공간영역	 컬러 등등. 있음. 
			_this._shape = new HetaJs_17(opts); //min, max  디자인이 구성된 객체.


			_this.pressingRight = false;
			_this.pressingLeft = false;
			_this.pressingUp = false;
			_this.pressingDown = false;
			_this.pressingAttack = false;

			//고정값
			//		this._shape.eventStore = {	//Point객체 입니다. this=shape
			//				mousedown : function(stage,sender){
			//					//sender.evet;
			//					this.setColor("#ff0000");
			//				},
			//				mouseup : function(e){
			//					this.setColor(this.originalColor);
			//				},
			//				mousemove : function(stage,sender){
			//					this.Translate(sender.offset);
			//					stage.Render();
			//				},
			////				//클릭하면 삭제해버림.
			//				click : function(stage,e){
			//					console.log(this.parentId);
			//					stage.scene.Remove(this.parentId);
			//					
			//					stage.Render();
			//				}
			//		};


			//		this.status = {
			//				selected : false,	//선택된 상태.	= 여러개가 선택된 상태일수가 있다.
			//				hover : false,		//마우스가 올라온 상태
			//				focus : false,		//선택
			//				blur : true,		//선택해제
			//				leave : true,		//선택이 완전히 해제된 상태.
			//				revert : false		//원본데이터로 복구가 필요할때
			//			};

			return _this;
		}

		//====================== 통신용 ========================


		createClass(Knight1, [{
			key: 'getPack',
			value: function getPack() {
				return {
					type: this.type, //업데이트 할때는 name을 빼서 용향을 줄여야 한다. 
					id: this.id,
					x: this.x,
					y: this.y,
					hp: this.hp,
					hpMax: this.hpMax
				};
			}
		}, {
			key: 'setPack',
			value: function setPack(p) {
				if (p) {
					//			if(p.id !== undefined) this.id = p.id;
					if (p.x !== undefined) this.x = p.x;
					if (p.y !== undefined) this.y = p.y;
					if (p.hp !== undefined) this.hp = p.hp;
					//			if(p.hpMax !== undefined) this.hpMax = p.hpMax;
				}
			}
		}, {
			key: 'Init',
			value: function Init(sender) {}
			/*
	   * TODO 소캣이면 update의 sender에 socket항목이 있음. 
	  */

		}, {
			key: 'Update',
			value: function Update(sender, ctx, frame) {} //sender는 socket 또는 control관련 데이터가 들어옴.?
			//TODO 업데이트 되는 항목을 갱신 
			//1> 에니메이션 frame상태,
			//		super.Update();


			//파괴자 에니메이션이 다 끝나고 Scene을 통해서 호출된다.

		}, {
			key: 'Destroy',
			value: function Destroy(sender) {}
			//		delete this._shape;

			//====================== 소켓 ========================


		}, {
			key: 'Render',
			value: function Render(ctx) {
				//		console.log(this._p._position.x);
				this._shape.Render(ctx); //점뿌리기
			}

			//	attach(type){
			//		switch(type){
			//		case: "LEFT"
			//			
			//			break;
			//		}
			//	}

			//	attach("LEFT",point);

		}]);
		return Knight1;
	}(HetaJs_13);

	/**
	 * Edit Rect Box
	 * 4점 조절 가능한 기본적인 edit box입니다.
	 * 
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 테스트용
	 * 
	 */
	var Knight2 = function (_Item) {
		inherits(Knight2, _Item);

		function Knight2(opts) {
			classCallCheck(this, Knight2);

			var _this = possibleConstructorReturn(this, (Knight2.__proto__ || Object.getPrototypeOf(Knight2)).call(this, opts));

			_this.type = 'Knight2';

			_this.x = 0;
			_this.y = 0;
			_this.hp = 50;
			_this.hpMax = 50;

			//공간영역	 컬러 등등. 있음. 
			_this._shape = new HetaJs_17(opts); //min, max  디자인이 구성된 객체.


			_this.pressingRight = false;
			_this.pressingLeft = false;
			_this.pressingUp = false;
			_this.pressingDown = false;
			_this.pressingAttack = false;

			//고정값
			//		this._shape.eventStore = {	//Point객체 입니다. this=shape
			//				mousedown : function(stage,sender){
			//					//sender.evet;
			//					this.setColor("#ff0000");
			//				},
			//				mouseup : function(e){
			//					this.setColor(this.originalColor);
			//				},
			//				mousemove : function(stage,sender){
			//					this.Translate(sender.offset);
			//					stage.Render();
			//				},
			////				//클릭하면 삭제해버림.
			//				click : function(stage,e){
			//					console.log(this.parentId);
			//					stage.scene.Remove(this.parentId);
			//					
			//					stage.Render();
			//				}
			//		};


			//		this.status = {
			//				selected : false,	//선택된 상태.	= 여러개가 선택된 상태일수가 있다.
			//				hover : false,		//마우스가 올라온 상태
			//				focus : false,		//선택
			//				blur : true,		//선택해제
			//				leave : true,		//선택이 완전히 해제된 상태.
			//				revert : false		//원본데이터로 복구가 필요할때
			//			};

			return _this;
		}

		//====================== 통신용 ========================


		createClass(Knight2, [{
			key: 'getPack',
			value: function getPack() {
				return {
					type: this.type, //업데이트 할때는 name을 빼서 용향을 줄여야 한다. 
					id: this.id,
					x: this.x,
					y: this.y,
					hp: this.hp,
					hpMax: this.hpMax
				};
			}
		}, {
			key: 'setPack',
			value: function setPack(p) {
				if (p) {
					//			if(p.id !== undefined) this.id = p.id;
					if (p.x !== undefined) this.x = p.x;
					if (p.y !== undefined) this.y = p.y;
					if (p.hp !== undefined) this.hp = p.hp;
					//			if(p.hpMax !== undefined) this.hpMax = p.hpMax;
				}
			}
		}, {
			key: 'Init',
			value: function Init(sender) {}
			/*
	   * TODO 소캣이면 update의 sender에 socket항목이 있음. 
	  */

		}, {
			key: 'Update',
			value: function Update(sender, ctx, frame) {} //sender는 socket 또는 control관련 데이터가 들어옴.?
			//TODO 업데이트 되는 항목을 갱신 
			//1> 에니메이션 frame상태,
			//		super.Update();


			//파괴자 에니메이션이 다 끝나고 Scene을 통해서 호출된다.

		}, {
			key: 'Destroy',
			value: function Destroy(sender) {}
			//		delete this._shape;

			//====================== 소켓 ========================


		}, {
			key: 'Render',
			value: function Render(ctx) {
				//		console.log(this._p._position.x);
				this._shape.Render(ctx); //점뿌리기
			}

			//	attach(type){
			//		switch(type){
			//		case: "LEFT"
			//			
			//			break;
			//		}
			//	}

			//	attach("LEFT",point);

		}]);
		return Knight2;
	}(HetaJs_13);

	/**
	  			<canvas id="canvas01" width="380" height="170" style="border:1px solid #000;"></canvas>
				<script type="text/javascript" src="/js/socketio/socket.io-1.0.6.js"></script>
	 			<script type="text/javascript" src="/js/hetasocket-client-1.0.js"></script>
				<script type="text/javascript" >
					var SocketManager = {
						init:function(){
							var socket = io();	//io(wsUri);
							this.stage = hetasocket.init(document.getElementById("canvas01"),socket);
							this.stage.Start();
							
						}	
					};
					SocketManager.init();
				</script>
	 */

	var StageMainClient = function (_Stage2D) {
		inherits(StageMainClient, _Stage2D);

		function StageMainClient(cvs, socket) {
			classCallCheck(this, StageMainClient);

			//필수	//ctx가져왔음. 
			var _this = possibleConstructorReturn(this, (StageMainClient.__proto__ || Object.getPrototypeOf(StageMainClient)).call(this, { id: "StageMainClient", canvas: cvs }, socket));

			_this.scene = HetaJs_10; //1회성 scene을 수동으로 설정.

			//scene목록
			_this.sceneList = {
				'SceneVillageMain': SceneVillageMain, //마을 메인 
				'SceneVillage1': SceneVillage1, //마을1
				'SceneVillage2': SceneVillage2 //마을2
			};

			_this.itemEntities = {
				'Player01': Player01,
				'Bullet1': Bullet1,
				'Knight1': Knight1,
				'Knight2': Knight2
			};

			//#################### 카메라 설정 (선택) HUD에서는 사용안함  
			// 나중에 카메라 초기 위치를 설정한다.
			_this.camera = new HetaJs_11(_this.ctx, { x: 0, y: 0, distance: 1000 }); //카메라 초기값 설정
			_this.camera.eventStore = { //this = camera
				mousedown: function mousedown(stage, sender) {

					stage.HUD.Update({ score: 1 }); //HUD에 점수 1씩 업데이트


					stage.SocketStore.Trigger('keyPress', { inputId: 'attack', state: true });

					//					if(sender.event.ctrlKey){	//컨트롤키 누르면
					//						
					//						let rectOption = {x: sender.position.x, y:sender.position.y, width: 1, height:1, collisionCheck: false};
					////						rectOption.color= options.bgColor;			//고정
					//						rectOption.lineColor="#800080";		//고정
					//						rectOption.lineWidth=1;				//고정
					//						//collision객체 생성 
					//						this.collisionBox = new Rect(rectOption);
					//						stage.scene.Add(this.collisionBox);	//TODO id는 필요없음.
					//						
					//						this.ctrl = true;
					//					}
				},

				mousemove: function mousemove(stage, sender) {

					/* TODO 마우스가 우측에 HUD영역에 들어가면 이벤트 우선 권한을 HUD쪽으로 넘긴다.  
	     * 
	     * */

					var x = -250 + sender.event.clientX - 8;
					var y = -250 + sender.event.clientY - 8;
					var angle = Math.atan2(y, x) / Math.PI * 180;

					stage.SocketStore.Trigger('keyPress', { inputId: 'mouseAngle', state: angle });

					//					if(this.ctrl === true){
					//						//collision객체 크기 조정. 
					//						//조절점을 이동한다.
					//						this.collisionBox.max.add(sender.offset);
					//						
					//					}else{
					//						//카메라 이동 
					//						this.OffsetMoveTo(-sender.cameraOffset.x, -sender.cameraOffset.y);
					//					}
				},
				mouseup: function mouseup(stage, sender) {

					stage.SocketStore.Trigger('keyPress', { inputId: 'attack', state: false });

					//					if(this.ctrl === true){
					//						this.collisionBox._position.reconstruct();		//좌표 재구성.
					//						
					//						//collision객체와 다른 객체들을 충돌 체크 해서 선택 상태로 변경.
					//						for ( let i in stage.scene.Items) {
					//							let obj = stage.scene.Items[i];
					//							
					//							if(obj.CollisionCheck(this.collisionBox._position)){
					//								if(obj.isSelected === false){
					//									obj.Toggle();
					//								}else if(obj.isLineSelected === false){
					//									obj.Toggle();
					//								}
					//							}
					//						}
					//						this.ctrl = false;
					//						//TODO collision객체 제거
					//						stage.scene.Remove(this.collisionBox.id);
					//					}
				},
				mousewheel: function mousewheel(stage, sender) {
					//기본값
					//TODO 카메라 리미터를 설정해야함. 
					//확대 축소.
					var scaleMultiplier = 100;
					if (sender.delta > 0) {
						this.OffsetZoomTo(-scaleMultiplier);
					} else {
						this.OffsetZoomTo(scaleMultiplier);
					}
				}
			};

			//받는거 위주로 설정
			_this.SocketStore.Add({ //_int, _update, _remove
				//키보드 입력 receive
				//지도이동 또는 최초 등장
				_changeScene: function _changeScene(data, socket) {
					//this는 stage
					/**
	     * data = {
	     * 		selfId : socketId,
	     * 		sceneName: "SceneVillageMain"
	     * }	//pack정보
	     */

					// 초기 입력 일때만 selfId가 있음. (아직 디버그 용으로 사용) 
					if (data.selfId) {
						this.myItemId = data.selfId; //자기id를 알려준다.(최초 입력일대만 있음)
						console.log('myId : ' + this.myItemId);
					}

					//지도가 바뀌면 카메라까지 초기화  ( 지도가 바뀔때 마다 카메라를 초기화 해준다. ) 
					if (data.sceneName) {
						this.scene = this.sceneList[data.sceneName]; //내부에서 new로 생성한다.
						this.scene.Add(this.camera); //카메라를 넣어준다.
					}

					for (var i = 0; i < data.itemList.length; i++) {
						var pack = data.itemList[i]; //option값
						if (this.itemEntities[pack.type]) {
							//객체가 존재할때	BAD
							var p = new this.itemEntities[pack.type](pack); //Player01, Knight2, Knight2 생성.
							//							console.log('_changeScene makeObject : '+pack.id);
							this.scene.Add(p);
						}
					}

					//카메라를 주인공한테 붙이기 
					this.scene.camera.follow(this.myItemId);
				},
				//내꺼는 아니고 신규로 들어올때 있음.
				_init: function _init(data, socket) {
					//this는 stage
					//					console.log('Init packet');
					//신규로 생성되는것  추가  
					//{ itemList : [{type:'Knight1',id:123,x:0,y:0},{id:1,type:'Knight1',x:0,y:0}]
					for (var i = 0; i < data.length; i++) {
						var pack = data[i]; //option값
						if (this.itemEntities[pack.type]) {
							//객체가 존재할때	BAD
							var p = new this.itemEntities[pack.type](pack); //Player01, Knight2, Knight2 생성.
							//							console.log('init makeObject : '+pack.id);
							this.scene.Add(p);
						}
					}
				},
				_update: function _update(data, socket) {
					//this.는 stage
					//					console.log('Update packet');
					//{ [{id:123,x:0,y:0},{id:1,x:0,y:0}]}

					for (var i = 0; i < data.length; i++) {
						var pack = data[i]; //option값

						var item = this.scene.getItem(pack.id); //item

						item.setPack(pack); //업데이트 친다.			//자동으로 Render에서 그려진다.

						this.onUpdate(pack);
					}
				},
				_remove: function _remove(data, socket) {
					//this=stage		//총알이 사라지거나 객체가 방을 나가면.... (지도이동시에는 자신만 removeItem에 넣는다.)
					//console.log('Remove packet',data);
					//{['12323','234234']
					for (var i = 0; i < data.length; i++) {
						var itemId = data[i]; //option값
						this.scene.Remove(itemId); //item
					}
				},
				ConsoleLog: function ConsoleLog(data) {
					console.log(data);
				}
			});

			return _this;
		}

		//사용자 이미지 변경.


		createClass(StageMainClient, [{
			key: 'changePlayer',
			value: function changePlayer(type, scale) {
				this.SocketStore.Trigger('changePlayerStatus', { type: type, scale: scale });
			}

			//override
			//업데이트 될때마다 호출

		}, {
			key: 'onUpdate',
			value: function onUpdate(pack) {}

			//	클라이언트는 사용하지 않음?
			//	Update(d, dt){
			//		super.Update(d,dt);
			//	}

		}, {
			key: 'Resize',
			value: function Resize(e) {
				get(StageMainClient.prototype.__proto__ || Object.getPrototypeOf(StageMainClient.prototype), 'Resize', this).call(this, e);

				//브라우져가 resize다 되면 attribute가 사라진다. 강제로 현상 유지를 해줘야 한다.
				//		this.canvas.width = this.ctx.canvas.offsetWidth;
				//		this.canvas.height = this.ctx.canvas.offsetHeight;
				//        document.getElementById("canvas01").width = 580;
				//        document.getElementById("canvas01").height = 270;


				//		this.scene.Render();		//화면을 갱신해준다.
			}
		}]);
		return StageMainClient;
	}(HetaJs_7);

	var MouseControl = function MouseControl(stage, HudCvs) {
		classCallCheck(this, MouseControl);


		var canvas = HudCvs || stage.canvas;
		var EventStore = stage.EventStore;
		//		this.mouseIsDown = false;

		var startPosition; //최초 시작 위치
		var lastPosition;
		//		var newPosition;

		//		var controlPoints = [];
		var selectedObject;
		//		var selectedObjectOffset;

		var onCurrObject = null; //현재 위에 있는 옵젝트 - mouseover와 mouseout에서 사용. 


		//		var width = canvas.width;
		//		var height = canvas.height;


		function Sub(v1, v2) {
			var result = { x: 0, y: 0 };
			result.x = v1.x - v2.x;
			result.y = v1.y - v2.y;
			return result;
		}

		// mouse/touch handling
		function mousePositionForEvent(e) {
			var v = { x: e.clientX, y: e.clientY };

			//CAMERA ===============================
			//카메라가 있으면 
			if (stage.scene.camera !== null) {
				//카메라 객체를 함께 사용하기 때문에  카메라 객체가 아닌지 받아서 처리 해야하며..
				v = stage.scene.camera.ScreenToWorld(v.x, v.y); //스크린을 월드 좌표로 변환
			}

			return v;
		}

		//터치 일때 1개만 들어오도록 차후 2개일때 확대 축소로 변경 적용하도록 처리
		function genericTouchHandler(f) {

			return function (e) {

				if (e.touches.length > 0) {
					//손가락 1개이상 클릭 
					if (f(e.touches[0])) {
						//0번째 터치를 가져온다. 1은 두번째 핑거.   (배열에는 event 정보가 들어있다.
						e.preventDefault();
						return false;
					}
				}
			};
		}

		function cvsDown(e) {
			var mPosition = mousePositionForEvent(e);
			selectedObject = EventStore.FindItemOne(mPosition); //position.x, position.y

			//빈곳을 클릭하면 카메라 객체를 선택하게 한다.
			if (selectedObject == null) {
				selectedObject = stage.scene.camera; //카메라 넣기!!
			}

			if (selectedObject != null) {

				//객체의 중앙 
				startPosition = mPosition; //selectedObject.GetCenter();	//여기서 오류...
				lastPosition = mPosition; //마지막위치
				//				selectedObjectOffset = 0;	//Sub(mPosition, lastPosition);		//처음엔 0 입니다. 

				var sender = { event: e, position: mPosition };
				EventStore.Trigger(selectedObject, "mousedown", sender); //obj를 실행시킨다.
			}

			//stage.Render();		//다시 그리기
			e.preventDefault();
		}

		function cvsMove(e) {
			var mPosition = mousePositionForEvent(e);
			var currObject = EventStore.FindItemOne(mPosition); //position.x, position.y

			//마우스 이동중.
			//현재 오브젝트 외에 선택된 오브젝트가 있다면. 즉 다른 옵젝트 위를 지나가면.
			if (currObject != null) {
				//뭔가의 위에 있음.

				//TODO object.id로 비교해서 이전것과 같은것인지 판단해서 over/out을 판단.
				if (onCurrObject == null) {
					//옵젝트 위에 있니?
					EventStore.Trigger(currObject, "mouseover", { event: e, position: mPosition }); //obj를 실행시킨다.
				}

				//다를객체에 올라타면 교체 해준다.
				if (onCurrObject != null && onCurrObject.id != currObject.id) {
					EventStore.Trigger(onCurrObject, "mouseout", { event: e, position: mPosition }); //obj를 실행시킨다.
					EventStore.Trigger(currObject, "mouseover", { event: e, position: mPosition }); //obj를 실행시킨다.
				}
				onCurrObject = currObject;

				EventStore.Trigger(currObject, "mouseovermove", { event: e, position: mPosition });
			} else {
				if (onCurrObject != null) {
					//옵젝트 위에 있었니?
					EventStore.Trigger(onCurrObject, "mouseout", { event: e, position: mPosition }); //obj를 실행시킨다.
					onCurrObject = null;
				}
			}

			if (selectedObject != null) {
				//드래그 중.
				//				var offset = {x:0,y:0};
				//				var cameraOffset = {x:0,y:0};

				//				if(selectedObject instanceof Camera2D){
				//카메라는 start위치랑만 비교해야 한다. 
				//					cameraOffset = Sub(mPosition, startPosition);	//offset
				//				}else{
				//객체는 마지막 위치를 항상 교체 한다. 
				//					offset = Sub(mPosition, lastPosition);	//offset
				//				}
				var cameraOffset = Sub(mPosition, startPosition); //카메라는 start위치랑 비교
				var offset = Sub(mPosition, lastPosition); //offset 일반 객체 offset
				lastPosition = mPosition;

				//TODO 추가해서 구성. 
				var sender = { offset: offset, cameraOffset: cameraOffset, event: e, currentObject: currObject };
				EventStore.Trigger(selectedObject, "mousemove", sender); //obj를 실행시킨다.
			}

			e.preventDefault();
		}

		function cvsUp(e) {

			//console.log("======================================mouseup", e);	//TODO 이벤트 좌표를 보관해 둔다. (변환된좌표로 보관해야함) 
			//현재 위에 있는 옵젝트를 전달.
			var mPosition = mousePositionForEvent(e);
			var currObject = EventStore.FindItemOne(mPosition); //position.x, position.y

			var sender = { event: e, currentObject: currObject, position: mPosition };
			//eventStore를 실행 : 타겟의 위치를 재 조회 하는등의 이벤트를 실행할수 있음.(라인열결 기능)
			//			EventStore.Trigger(selectedObject, "mouseup",sender);

			if (startPosition && lastPosition && startPosition.x == lastPosition.x && startPosition.y == lastPosition.y) {
				//click입니다.
				EventStore.Trigger(selectedObject, "click", sender);
			} else {
				EventStore.Trigger(selectedObject, "mouseup", sender);
			}

			onCurrObject = null; //over/out객체도 초기화한다.
			selectedObject = null;

			e.preventDefault();
		}

		function cvsScroll(e) {
			var wPosition = mousePositionForEvent(e);
			//			var currObject = EventStore.FindItemOne(mPosition);	//position.x, position.y

			var delta = 0;

			/* For IE */
			if (!e) e = window.event;

			if (e.wheelDelta) delta = e.wheelDelta / 120; /* IE/Chrome/Opera */
			else if (e.detail) delta = -e.detail / 3; /* Mozilla case */

			EventStore.Trigger(stage.scene.camera, "mousewheel", { event: e, delta: delta, position: wPosition }); //크기
			//camera.zoomTo(scale);

			e.preventDefault();
		}

		function cvsDblClick(e) {
			var mPosition = mousePositionForEvent(e);
			var currObject = EventStore.FindItemOne(mPosition, "dblclick"); //position.x, position.y

			//			console.log("======================================dblclick", currObject);

			var sender = { event: e, position: mPosition };
			EventStore.Trigger(currObject, "dblclick", sender); //eventStore를 실행

			e.preventDefault();
		}

		//canvas클릭은 드래그 할때도 click이 되는 오동작이 있습니다.
		//		function cvsClick(e){
		//			var mPosition = mousePositionForEvent(e);
		//			var currObject = EventStore.FindItemOne(mPosition, "click");	//position.x, position.y
		//
		//			console.log("======================================click", currObject);
		//			
		//			var sender = {event:e, position: mPosition};
		//			EventStore.Trigger(currObject, "click",sender);	//eventStore를 실행
		//			
		//			e.preventDefault();
		//		} 


		canvas.onmousedown = cvsDown;
		canvas.ontouchstart = genericTouchHandler(cvsDown);

		canvas.onmousemove = cvsMove;
		canvas.ontouchmove = genericTouchHandler(cvsMove);

		canvas.onmouseup = cvsUp;
		canvas.ontouchup = genericTouchHandler(cvsUp);

		//더블 클릭
		canvas.ondblclick = cvsDblClick;
		//		canvas.onclick = cvsClick;

		//		canvas.addEventListener('mousewheel', cvsScroll);
		canvas.onmousewheel = cvsScroll;
	}

	//	start(vtarget){
	//		this.vTarget = vtarget;
	//	}
	//
	//	mousedown(e){
	//		this.mouseIsDown = false;
	//		this.dragOffset = new Vec2(0,0);
	//	    this.dragOffset.x = e.x - this.vTarget.x;
	//	    this.dragOffset.y = e.y - this.vTarget.y;
	//
	//	    this.mouseIsDown = true;
	//	}
	//	mouseup(e){
	//	    if(this.mouseIsDown) this.mouseClick(e);
	//
	//	    this.mouseIsDown = false;
	//	}
	//
	//	mousemove(e){
	//	    if(!this.mouseIsDown) return;
	//
	//	    this.vTarget.x = e.x - this.dragOffset.x;
	//	    this.vTarget.y = e.y - this.dragOffset.y;
	//	    return false;
	//	}
	//	
	//	mouseClick(e){
	//		
	//	}
	//	

	//	AddEvent(obj, type, callback){
	//		if(obj == null || typeof(obj) == 'undefined')return;
	//		if(obj.addEventListener){
	//			obj.addEventListener(type,callback, false);
	//		}else if(obj.attachEvent){
	//			obj.attachEvent("on"+type,callback);
	//		}else{
	//			obj["on"+type] = callback;
	//		}
	//	}
	//	
	//	RemoveEvent(obj, type, callback){
	//		if(obj == null || typeof(obj) == 'undefined')return;
	//		if(obj.removeEventListener){
	//			obj.removeEventListener(type,callback, false);
	//		}else if(obj.detachEvent){
	//			obj.detachEvent("on"+type,callback);
	//		}else{
	//			delete obj["on"+type];
	//		}
	//	}

	;

	/**
	 * 스코어를 변경해준다.
	*/
	var HudScore = function (_HUD) {
		inherits(HudScore, _HUD);

		function HudScore() {
			classCallCheck(this, HudScore);

			var _this = possibleConstructorReturn(this, (HudScore.__proto__ || Object.getPrototypeOf(HudScore)).call(this));

			_this.score = 0;
			return _this;
		}

		/**
	  * 값을 변경하면 이곳의 Render가 호출된다.
	  * @param : 사용자가 넘긴 값
	  * @example : stage.HUD.Update({score:-10});
	  */


		createClass(HudScore, [{
			key: 'Update',
			value: function Update(param) {
				this.score += param;
			}

			/**
	   * 렌더링할때 정보를 넘겨준다.
	   * @info : ctx, width, height 가 넘어옴
	   */

		}, {
			key: 'Render',
			value: function Render(c) {
				c.ctx.font = '30px Arial';
				c.ctx.clearRect(0, 0, c.width, c.height);
				c.ctx.fillStyle = 'black';

				var lw = c.ctx.measureText(this.score).width; //글짜 길이 가져오기 
				c.ctx.fillText(this.score, c.width - (lw + 30), 30); //우측 정렬 (글짜 길이만큼 더 빼준다.)
			}
		}]);
		return HudScore;
	}(HetaJs_31);

	/**
	 * 
	 * hetajs.init("forest01");
	 * @param sceneName : 시작scene
	 */

	function init(cvs, HudCvs, socket) {
		var stage = new StageMainClient(cvs, socket); //프레임관리 에니메이션을 넣어준다.window.requestAnimationFrame

		//#################### HUD가 존재 할때

		stage.HUD = new HetaJs_30(HudCvs);
		stage.HUD.Add('score', new HudScore()); //스코어 표시

		//	stage.HUD.Add(new HudMiniMap());	//미니멥
		//	stage.HUD.Add(new HudChatter());	//체팅


		//#################### 컨트롤러 scene에 장착 합니다. TODO scene에 바뀔때 마다 조작 이벤트가 바껴야 함????
		//TODO Scene에 AddController만들기 
		new MouseControl(stage, HudCvs); //stage를 넘겨서 EventStore에 마우스 이벤트 장착
		//		new WSADControl(this,{
		//			keydown : function(stage, event){	//this는 WSADControl , 
		//				if(event.keyCode === 68)	//d
		//					stage.SocketStore.Trigger('keyPress',{inputId:'right',state:true});
		//				else if(event.keyCode === 83)	//s
		//					stage.SocketStore.Trigger('keyPress',{inputId:'down',state:true});
		//				else if(event.keyCode === 65) //a
		//					stage.SocketStore.Trigger('keyPress',{inputId:'left',state:true});
		//				else if(event.keyCode === 87) // w
		//					stage.SocketStore.Trigger('keyPress',{inputId:'up',state:true});
		//					
		//			},
		//			keyup : function(stage, event){
		//				if(event.keyCode === 68)	//d
		//					stage.SocketStore.Trigger('keyPress',{inputId:'right',state:false});
		//				else if(event.keyCode === 83)	//s
		//					stage.SocketStore.Trigger('keyPress',{inputId:'down',state:false});
		//				else if(event.keyCode === 65) //a
		//					stage.SocketStore.Trigger('keyPress',{inputId:'left',state:false});
		//				else if(event.keyCode === 87) // w
		//					stage.SocketStore.Trigger('keyPress',{inputId:'up',state:false});
		//			}
		//			
		//		});		//마우스 이벤트 장착

		return stage;
	}

	/**
	 * GF framework
	 */

	/*
	 * 예제1> 웹에서 사용
		<script type="text/javascript">
			var scene = new hetajs.corn01(window.requestAnimationFrame);	//프레임관리 에니메이션을 넣어준다.window.requestAnimationFrame
		</script>
	<a href="#" onclick="scene.resume();">resume</a>
	<a href="#" onclick="scene.pause();">pause</a>
	<a href="#" onclick="scene.stop();">stop</a>
	 */

	exports.DataSource = HetaJs_1;
	exports.Player01 = Player01;
	exports.init = init;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
