(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.hetaeditor = {})));
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
	 * opts : {pos : [[50,0],[0, 0],[],Vec2] , color, lineType, opacity, isBezier}
	 * 
	 *   앞에 3개는 
	 */
	var BezierLine2 = function (_Unit) {
		inherits(BezierLine2, _Unit);

		function BezierLine2(opts) {
			classCallCheck(this, BezierLine2);

			//TODO 라인 필수값 체크 
			var _this = possibleConstructorReturn(this, (BezierLine2.__proto__ || Object.getPrototypeOf(BezierLine2)).call(this, opts));

			if (opts.pos == null || opts.pos.length < 2) {
				console.error("[pos] is not valid");
				return possibleConstructorReturn(_this);
			}

			//라인을 배열로 관리한다.
			_this._position = []; //시작과 끝.
			for (var i = 0; i < opts.pos.length; i++) {
				if (opts.pos[i] instanceof HetaJs_8) {
					_this._position[i] = opts.pos[i];
				} else if (opts.pos[i] instanceof Array) {
					_this._position[i] = new HetaJs_8(opts.pos[i][0], opts.pos[i][1]);
				}
			}

			_this.isBezier = opts.isBezier || false;
			return _this;
		}
		/**
	  * center를 전달.
	  */
		//	GetCenter(){
		//		return this._position.getCenter();
		//	}

		createClass(BezierLine2, [{
			key: "Render",
			value: function Render(ctx, sPoint, ePoint, sAddition, eAddition) {

				if (this.hide === true) return; //숨은거면 그리지 않는다.

				ctx.save();
				get(BezierLine2.prototype.__proto__ || Object.getPrototypeOf(BezierLine2.prototype), "Render", this).call(this, ctx);

				//무조건 8개 입니다.  앞에 2개는 re

				ctx.beginPath();

				if (sPoint != null && ePoint != null) {
					//center로 선을 연결
					ctx.moveTo(sPoint.x, sPoint.y);
					if (sAddition.length > 0) {
						ctx.lineTo(sAddition[0].x, sAddition[0].y);
						ctx.quadraticCurveTo(sAddition[1].x, sAddition[1].y, this._position[0].x, this._position[0].y);
					} else {
						ctx.lineTo(this._position[0].x, this._position[0].y);
					}
					ctx.bezierCurveTo(this._position[1].x, this._position[1].y, this._position[2].x, this._position[2].y, this._position[3].x, this._position[3].y); //베지어
					if (eAddition.length > 0) {
						ctx.quadraticCurveTo(eAddition[1].x, eAddition[1].y, eAddition[0].x, eAddition[0].y);
						ctx.lineTo(ePoint.x, ePoint.y);
					} else {
						ctx.lineTo(ePoint.x, ePoint.y);
					}
					//			ctx.quadraticCurveTo(this._position[3].x, this._position[3].y,ePoint.x, ePoint.y);
				} else {
					ctx.moveTo(this._position[0].x, this._position[0].y);
					ctx.bezierCurveTo(this._position[1].x, this._position[1].y, this._position[2].x, this._position[2].y, this._position[3].x, this._position[3].y); //베지어
				}

				//		if(this._position.length == 4) {


				//		}else if(this._position.length == 8) {
				//			
				//			ctx.moveTo(this._position[0].x, this._position[0].y);
				////			ctx.quadraticCurveTo(this._position[1].x, this._position[1].y,this._position[2].x, this._position[2].y);
				////			ctx.lineTo(this._position[1].x, this._position[1].y);	//,this._position[2].x, this._position[2].y);
				//			ctx.lineTo(this._position[2].x, this._position[2].y);
				//			ctx.bezierCurveTo(this._position[3].x, this._position[3].y,
				//					this._position[4].x, this._position[4].y,
				//					this._position[5].x, this._position[5].y);	//베지어
				////			ctx.moveTo(this._position[5].x, this._position[5].y);
				////			ctx.quadraticCurveTo(this._position[6].x, this._position[6].y,this._position[7].x, this._position[7].y);
				//			ctx.lineTo(this._position[7].x, this._position[7].y);	//,this._position[7].x, this._position[7].y);
				//		}
				//		
				ctx.stroke(); //선.
				ctx.closePath();
				ctx.restore();
			}
			/**
	   * TODO 이미지 충돌 검사로 해야함.
	   *   
	   * @param Vec2, Point, Rect
	   * @result true, false 
	   */
			//	CollisionCheck(obj){	//point, 또는 Rect

			//		if(this._collisionCheck !== true) return false;

			//		return false;
			//	}

		}]);
		return BezierLine2;
	}(HetaJs_24);

	/**
		bezier라인 Item  : 라인 관련 unit 모음
		
		@DataSource : LineEditPopupLink (수정버튼 클릭동작)  외부에서 정의 
	 */
	var BezierLine2D = function (_Item) {
		inherits(BezierLine2D, _Item);

		function BezierLine2D(opts, stage) {
			classCallCheck(this, BezierLine2D);

			var _this = possibleConstructorReturn(this, (BezierLine2D.__proto__ || Object.getPrototypeOf(BezierLine2D)).call(this, opts));

			_this.stage = stage;

			_this.mode = opts.mode;
			_this.order = 2; //숫자가 작을수록 랜더링이 나중에 된다


			var iconSize = 16;

			//TODO 필수 값 체크
			//{x:evt.offsetX, y:evt.offsetY, width:40, height:20}
			var options = {
				x: opts.x, //필수							//this._boundbox.x
				y: opts.y, //필수 							//this._boundbox.y
				width: opts.width || 150, //크기 
				height: opts.height || 50, //높이
				//			color:(opts.color||"#8395a3"),		//기본 컬러 (푸르스름) 포인트와 기본 라인 색을 변경.
				text: opts.text || '', //중앙 Text글짜 (TODO 아직없음)
				textColor: opts.textColor || "#000000", //중앙 Text글짜색 (TODO 아직없음)
				font: opts.font || 'normal normal 14px "serif"', //중앙 Text글짜색 (TODO 아직없음)
				//			url:(opts.url||''),						//중앙 Text링크 (TODO 아직없음)
				lineColor: opts.lineColor || "#8395a3", //라인의 색
				lineType: opts.lineType || "SOLID",
				lineWidth: opts.lineWidth || "1.5"
			};

			// 선택여부에 따라서 라인의 굵기를 달리한다. 
			_this.isLineSelected = false;

			_this.itemType = 'LINE';

			//Line은 기본으로 2개의 연결점이 있음.
			_this.attachers = {
				source: null,
				target: null
			};

			//컨트롤 포인트를 text로 변경 
			//타원 태두리 디자인 
			var textOpt = { x: opts.x, y: opts.y, width: 16, height: 16, lineColor: "#aaaaaa", order: 5 };
			textOpt.color = options.textColor;
			textOpt.text = options.text;
			textOpt.font = options.font;
			textOpt.showBoundBox = true; //박스 보이기 
			textOpt.isEllipsis = false; //ellipsis 제거
			//		textOpt.isChangeLine = true;	//라인 바꿀수 있도록처리			//$$$추가
			textOpt.boundboxOpacity = 0.5;
			_this._center = new HetaJs_21(textOpt);

			//중앙 조절점. TODO text로 변경하자
			//		this._center = new Point({pointType: "RECT", opacity : 0.1, color: options.color, radius : 8, text:options.text});
			//======================================
			//반전버튼 
			_this.swapImage = new HetaJs_22({ x: _this._center.max.x, y: _this._center.min.y, width: iconSize, height: iconSize, dataSource: "LayerSwapButton" });
			_this.swapImage.Hide();
			_this.swapImage.eventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				click: function click(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					stage.scene.getItem(this.parentId).SwapLine();
				}
			};

			//======================================
			//수정버튼 
			_this.editImage = new HetaJs_22({ x: _this._center.max.x, y: _this._center.min.y, width: iconSize, height: iconSize, dataSource: "LayerEditButton" });
			_this.editImage.Hide();
			_this.editImage.eventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				click: function click(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._center.min.x, item._center.max.y); //x, y
					var size = item._center._position.getSize();
					sender.position.width = size.x; //박스 크기 
					sender.position.height = size.y;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("LineEditPopupLink");
					if (typeof cb == "function") {
						cb(item, stage, sender); //라인 id
					}
				}
				//				,_after:function(stage,sender){
				//					stage.Render("DEV");
				//				}
			};
			//======================================
			//닫기버튼 
			_this.closeImage = new HetaJs_22({ x: _this._center.max.x, y: _this._center.min.y, width: iconSize, height: iconSize, dataSource: "LayerDelButton" });
			_this.closeImage.Hide();
			_this.closeImage.eventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				click: function click(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.


					try {
						var cb = HetaJs_1.Load("CanvasBlur");
						if (typeof cb == "function") {
							options = cb("", this, {});
						}
					} catch (e) {}

					// Disconnect를 먼저 해야 한다. 아니면 sourceAttacher와 targetAttacher를 멤버 변수로 두지 않는다.
					stage.scene.Remove(this.parentId); //삭제 하기 
					//					stage.Render("DEV");
				}
				//				,_after:function(stage,sender){
				//					stage.Render("DEV");
				//				}
			};

			//이동할때 선택 영역에 얼쩡 거림을 방지.
			//		opts.collisionCheck = false;

			//opts.color = "#8395a3";	//기본 컬러 (푸르스름) 포인트와 기본 라인 색을 변경. 


			//공간영역
			_this._boundbox = new HetaJs_16({ x: options.x, y: options.y, width: options.width, height: options.height, collisionCheck: false }); //min, max  디자인이 구성된 객체.

			//LayerSwapButton

			//===============================================
			//모서리에 point를 생성해준다.  Z
			_this._cs = new HetaJs_17({ collisionCheck: false, opacity: 0.7, color: options.lineColor, radius: 3 }); //좌상 안보여줌
			_this._ce = new HetaJs_17({ collisionCheck: false, pointType: "ARROW", color: options.lineColor, radius: 4 }); //우하

			_this._cs.set(_this._boundbox._position.min.x, _this._boundbox._position.min.y);
			_this._ce.set(_this._boundbox._position.max.x, _this._boundbox._position.max.y);

			//========================================
			//라인 초기위치
			_this._line = new BezierLine2({ pos: [[_this._cs.x, _this._cs.y], [_this._boundbox._position.max.x, _this._boundbox._position.min.y], [_this._boundbox._position.min.x, _this._boundbox._position.max.y], [_this._ce.x, _this._ce.y]],
				lineType: options.lineType, //DOT, DASH, SOLID
				lineColor: options.lineColor,
				opacity: 0.7,
				lineWidth: options.lineWidth, collisionCheck: false });

			//this._line.setLineType(opts[style]);

			//attach
			_this._cs.Attach(_this, //this는 item입니다.
			function (param) {
				this._boundbox._position.min.set(this._cs._position.x, this._cs._position.y);

				this._line._position[0].set(this._cs._position.x, this._cs._position.y);
				//				this._line._position[1].set(this._cs._position.x,this._cs._position.y);

				return this._boundbox; //점을 움직이면 라인 바운드가 변경된다. 
			});

			_this._ce.Attach(_this, //this는 item입니다.  
			function (param) {
				this._boundbox._position.max.set(this._ce._position.x, this._ce._position.y); //박스도 같이 움직임

				//				this._line._position[4].set(this._ce._position.x,this._ce._position.y);
				this._line._position[3].set(this._ce._position.x, this._ce._position.y);

				return this._boundbox; //점을 움직이면 라인 바운드가 변경된다. 
			});
			var es4Point = { //Point객체 입니다. this=unit
				mousemove: function mousemove(stage, sender) {
					this.Translate(sender.offset);
					//					stage.Render("DEV");
				}
			};

			_this._cs.eventStore = es4Point;
			_this._ce.eventStore = es4Point;

			//attach 자체가 Attach를 발생하지 않음. 
			_this._boundbox.Attach(_this, //this는 item입니다.
			function (param) {

				this._cs.set(this._boundbox._position.min.x, this._boundbox._position.min.y);
				//화살표 각도 설정 
				this._ce.set(this._boundbox._position.max.x, this._boundbox._position.max.y);

				var gap = 4;
				//화살표를 객체 쪽으로 조금씩 이동시킨다. 
				if (param.sourceDirection == "left") {
					this._cs.SetOffset(gap, 0);
				} else if (param.sourceDirection == "right") {
					this._cs.SetOffset(-gap, 0);
				} else if (param.sourceDirection == "top") {
					this._cs.SetOffset(0, gap);
				} else if (param.sourceDirection == "bottom") {
					this._cs.SetOffset(0, -gap);
				}

				if (param.targetDirection == "left") {
					this._ce.SetOffset(gap, 0);
				} else if (param.targetDirection == "right") {
					this._ce.SetOffset(-gap, 0);
				} else if (param.targetDirection == "top") {
					this._ce.SetOffset(0, gap);
				} else if (param.targetDirection == "bottom") {
					this._ce.SetOffset(0, -gap);
				}

				//this는 Item입니다.
				this._line._position[0].set(this._boundbox._position.min.x, this._boundbox._position.min.y);
				//TODO 아래 주석을 풀면 중간 곡선그림이 이동시 그려진다. 
				//				this._line._position[1].set(this._boundbox._position.max.x, this._boundbox._position.min.y);
				//				this._line._position[2].set(this._boundbox._position.min.x, this._boundbox._position.max.y);
				this._line._position[3].set(this._boundbox._position.max.x, this._boundbox._position.max.y);

				//=============================== curbe 로직 =================================
				if (param.sourcePoint == null) return null; //처음엔 target이 존재 하지 않는다. 무용지물.

				var isCurved01 = this.changeWeightPoint(param.sourceDirection, param.sourcePoint, param.targetPoint, this._line._position[1]);
				var isCurved02 = this.changeWeightPoint(param.targetDirection, param.targetPoint, param.sourcePoint, this._line._position[2]);

				//======================================
				//곡선그리기1 ( 컨트롤 포인트 이동 ) 
				//				this.smoothWeight(param.sourceDirection, param.sourcePoint, param.targetPoint, this._line._position[1]);
				//				this.smoothWeight(param.sourceDirection, param.sourcePoint, param.targetPoint, this._line._position[2]);

				//곡선그리기 2 ( quad추가 방식  )
				this.sourceAdditions = []; //추가 점.  꺽일때만 생성 된다. 
				this.targetAdditions = []; //추가 점.  꺽일때만 생성 된다.
				this.smoothWeight2(param.sourceDirection, param.sourcePoint, param.targetPoint, this._line._position[0], this._line._position[1], this.sourceAdditions);
				this.smoothWeight2(param.targetDirection, param.targetPoint, param.sourcePoint, this._line._position[3], this._line._position[2], this.targetAdditions);
				//======================================


				//========================== 라인 중간점 설정.. 이곳에 text가 온다. 
				var center = this._boundbox.GetCenter();
				//				this._center._position;

				// 둘중에 1개만 꺽이면 ㄱ자 구간 
				//				if(this._line._position[1].x == this._line._position[2].x && this._line._position[1].y == this._line._position[2].y){	//둘이 같으면 
				//ㄱ자 구간 일때는 중간점과 controlPoint의 평균 값으로 계산한다.
				if (isCurved01 === isCurved02) {
					this._center._position.setCenter(center);
				} else {

					//this._center.min이거든 뭐든 상관없음
					var tempVec2 = new HetaJs_8(0, 0);
					var firstVo = tempVec2.addVectors(this._line._position[1], center).multiplyScalar(0.5);
					var lastVo = tempVec2.addVectors(this._line._position[2], firstVo).multiplyScalar(0.5);
					this._center._position.setCenter(lastVo);
				}

				return this._center; //cp 버튼에 대한 attach chain으로 이미지 버튼들의 위치를 설정한다.  
			});

			//		this._boundbox.eventStore = {	//Point객체 입니다. this=unit
			//				mousemove : function(stage,sender){
			//					this.Translate(sender.offset);			//이동하기
			//				}
			//		};

			_this._center.Attach(_this, function (param) {
				//this=item
				//이미지들을 우측 상단에 배치
				var baseX = this._center._position.getCenter().x - iconSize / 2;
				this.swapImage._position.min.set(baseX - iconSize, this._center.min.y - iconSize);
				this.swapImage._position.setSize({ x: iconSize, y: iconSize });
				this.editImage._position.min.set(baseX, this._center.min.y - iconSize);
				this.editImage._position.setSize({ x: iconSize, y: iconSize });
				this.closeImage._position.min.set(baseX + iconSize, this._center.min.y - iconSize);
				this.closeImage._position.setSize({ x: iconSize, y: iconSize });
			});
			//		this._center.Attach(this, function(param){	//this=item
			//			//이미지들을 우측 상단에 배치
			//			let iconSize = 20;
			//			let r = this._center.radius;
			//			let baseX = this._center.x - r - 4;
			//			this.swapImage._position.min.set(baseX - iconSize ,this._center.y - r - iconSize);
			//			this.swapImage._position.setSize({x:iconSize, y:iconSize});
			//			this.editImage._position.min.set(baseX ,this._center.y - r - iconSize);
			//			this.editImage._position.setSize({x:iconSize, y:iconSize});
			//			this.closeImage._position.min.set(baseX + iconSize ,this._center.y - r - iconSize);
			//			this.closeImage._position.setSize({x:iconSize, y:iconSize});
			//		});

			_this._center.eventStore = { //this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				click: function click(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.


					//=====================클릭하면 맨앞에 보여준다.
					//				stage.scene.setAllItemOrder(5);
					//				stage.scene.setItemOrder(this.parentId, 10);	
					//				stage.scene.resetOrder();
					//=====================클릭하면 맨앞에 보여준다.


					var item = stage.scene.getItem(this.parentId);
					if (sender.event.ctrlKey) {
						//컨트롤키 누르면
						item.Toggle(); //에디트 상태 토글
					} else {

						//기존 선택이 해제 되면서 선택.
						var pArr = stage.getSelectedAllObjects();
						//자신을 선택했다면 toggle한다.
						if (pArr.length == 1 && pArr[0].isLineSelected !== undefined && pArr[0]._center.id == this.id) {
							//length가 1이고 자신이면 toggle만 한다.
							item.Toggle(); //에디트 상태 토글
						} else {
							for (var i in pArr) {
								var obj = pArr[i];
								if (obj.isSelected === true) {
									obj.Toggle();
								} else if (obj.isLineSelected === true) {
									obj.Toggle();
								}
							}
							item.Toggle(); //에디트 상태 토글
						}
					}
				},
				dblclick: function dblclick(stage, sender) {
					//this=unit
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._center.min.x, item._center.max.y); //x, y
					var size = item._center._position.getSize();
					sender.position.width = size.x; //박스 크기 
					sender.position.height = size.y;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("LineEditPopupLink");
					if (typeof cb == "function") {
						cb(item, stage, sender); //라인 id
					}

					//선택이 해제 되어 있으면 선택
					if (item.isLineSelected === false) {
						item.Toggle();
					}
				}
			};

			_this.needToUpdate = true; //박스 사이즈를 최초 1회 변경 (로딩됬을때를 대비) 


			return _this;
		} //init

		/**
	  * 수정 모드 변환 토글 
	  */


		createClass(BezierLine2D, [{
			key: 'Toggle',
			value: function Toggle() {
				if (this.isLineSelected === false) {

					if (this.mode == "EDIT") {
						//수정모드 일때만 보인다.
						this.swapImage.Show();
						this.closeImage.Show();
						this.editImage.Show();
						this._line.opacity = 1;
					}
					this.isLineSelected = true;
				} else {
					this.swapImage.Hide();
					this.closeImage.Hide();
					this.editImage.Hide();
					this._line.opacity = 0.5;
					this.isLineSelected = false;
				}
			}

			/**
	   * 라인의 선종류와 선두깨가 바뀐다.
	   */

		}, {
			key: 'ChangeLineStyle',
			value: function ChangeLineStyle(opts) {
				for (var style in opts) {
					if (style == "lineType") {
						this._line.setLineType(opts[style]);
					} else {
						this._line[style] = opts[style];
					}
				}
			}

			/**
	   * 라인 색을 바꿉니다.
	   */

		}, {
			key: 'ChangeColor',
			value: function ChangeColor(color) {
				this._line.lineColor = color;
				this._cs.color = color;
				this._ce.color = color;
			}

			//	/**
			//	 * 배경 색을 바꿉니다.
			//	 */
			//	ChangeBgColor(color){
			//		this.rectOption.setColor(color);
			//	}

			/**
	   * 택스트 색을 바꾼다.
	   */

		}, {
			key: 'ChangeTextColor',
			value: function ChangeTextColor(color) {
				this._center.setColor(color);
			}

			/**
	   * 택스트를 바꾼다.
	   */

		}, {
			key: 'ChangeText',
			value: function ChangeText(text) {
				this._center.setText(text);
				this.needToUpdate = true;
			}

			/**
	   * 택스트 font를 바꾼다.
	   */

		}, {
			key: 'ChangeFont',
			value: function ChangeFont(font) {
				this._center.setFont(font);
				this._center.makeFontAttr(font);
				this.needToUpdate = true;
			}
			/**
	   * 택스트 사이즈를 바꾼다.
	   */

		}, {
			key: 'ChangeFontSize',
			value: function ChangeFontSize(size) {
				this._center.setFontSize(size);
				this.needToUpdate = true;
			}

			/** 
	   * 택스트 폰트를 바꾼다.
	   * normal italic oblique inherit 
	   */

		}, {
			key: 'ChangeFontStyle',
			value: function ChangeFontStyle(style) {
				this._center.setFontStyle(style);
				this.needToUpdate = true;
			}

			/** 
	   * 택스트 두깨를 바꾼다.
	   * normal bold bolder lighter auto inherit 
	   */

		}, {
			key: 'ChangeFontWeight',
			value: function ChangeFontWeight(weight) {
				this._center.setFontWeight(weight);
				this.needToUpdate = true;
			}
			/** 
	   * 택스트 font-face를  바꾼다.
	   * 글꼴 
	   */

		}, {
			key: 'ChangeFontFace',
			value: function ChangeFontFace(face) {
				this._center.setFontFace(face);
			}

			/**
	   * 라인 방향 바꾸기
	   */

		}, {
			key: 'SwapLine',
			value: function SwapLine() {
				//좌표만 변경. 
				//		let x = this._cs.x;
				//		let y = this._cs.y;
				//		this._cs.x = this._ce.x;
				//		this._cs.y = this._ce.y;
				//		this._ce.x = x;
				//		this._ce.y = y;

				//라인배열을 역순 정렬.
				this._line._position = this._line._position.reverse();

				//어태쳐 교체 (끊었다가 다시 연결)
				var sa = this.attachers.source;
				var ta = this.attachers.target;

				this.Disconnect(); //TODO 이과정에서 말림현상 발생. 제대로 끊어지지 않는듯	초기 위치 이동이 잘 안됨. 또는 전파가 안됨.
				//alert(1);
				this.Connect(ta, sa);
				//alert("end");
			}

			/**
	   * Attach 연결 정보를 항상 가지고 있어야 한다.
	   */

		}, {
			key: 'Connect',
			value: function Connect(sourceAttacher, targetAttacher) {
				this.attachers.source = sourceAttacher;
				this.attachers.target = targetAttacher;

				//alert(2);
				//시작 어테쳐 - (어테쳐가 이동하면 라인이 같이 이동하도록.) 
				this.attachers.source.Attach(this, //this 는 BezierLine2D입니다.
				function (param) {
					var s = this.attachers.source;
					var t = this.attachers.target;
					this._cs.set(s.x, s.y);

					//console.log("S",this.id, s.x, s.y);

					//파라메터 넘기기
					param.sourcePoint = [s.x, s.y];
					param.targetPoint = [t.x, t.y];
					param.sourceDirection = s.direction;
					param.targetDirection = t.direction;

					//연결해야만 포인트가 따라 움직인다.
					//_cs를 붙였음 _cs의 Attach가 실행될것임
					//즉 boundbox가 움직이면 Attach가 이동 그리고 cs가 이동할것
					return this._cs;
				});
				//alert(3);
				//끝에 있는 어테쳐 - (어테쳐가 이동하면 라인이 같이 이동하도록.)  
				this.attachers.target.Attach(this, //this 는 BezierLine2D입니다.
				function (param) {
					var s = this.attachers.source;
					var t = this.attachers.target;
					this._ce.set(t.x, t.y);

					//console.log("T",this.id, t.x, t.y);

					//파라메터 넘기기
					param.sourcePoint = [s.x, s.y];
					param.targetPoint = [t.x, t.y];
					param.sourceDirection = s.direction;
					param.targetDirection = t.direction;

					return this._ce; //포인트를 이동시킨다.
				});
				//alert(4);
				//연결시 뒤쪽 화살표 방향 결정.
				this.setArrowDirection(sourceAttacher.direction, this._cs);
				//연결시 앞쪽 화살표 방향 결정.
				this.setArrowDirection(targetAttacher.direction, this._ce);

				//연결 관계를 설정한다. Add 이후에 호출해야 합니다. 
				//차후에 연결된 라인들을 저장하거나 관련 라인을 지우기 위함.
				//		sourceAttacher.connectLine({target: targetAttacher, line:attachLine});
				//		targetAttacher.connectLine({target: sourceAttacher, line:attachLine});			
			}
		}, {
			key: 'Disconnect',
			value: function Disconnect() {

				if (this.attachers.source != null) this.attachers.source.Detach(this); //어테쳐 삭제.
				if (this.attachers.target != null) this.attachers.target.Detach(this); //어테쳐 삭제.

				this.attachers.source = null;
				this.attachers.target = null;
			}

			/**
	   * 내부 함수.
	   * 화살표 방향을 강제로설정한다. 
	   */

		}, {
			key: 'setArrowDirection',
			value: function setArrowDirection(direction, point) {
				//방향을 결정.
				var half = Math.PI / 2;
				if (direction == "left") {
					point.angle = 0;
				} else if (direction == "top") {
					point.angle = half;
				} else if (direction == "right") {
					point.angle = half * 2;
				} else if (direction == "bottom") {
					point.angle = half * 3;
				}
			}

			/**
	   * 라인의 굴곡 조정을 위해서 컨트롤 포인트(lineVec)를 움직인다. 
	   */

		}, {
			key: 'changeWeightPoint',
			value: function changeWeightPoint(dir, sPoint, tPoint, lineVec) {
				var isCurved = false;
				if (dir == "left") {
					//상대가 ←
					if (sPoint[0] < tPoint[0]) {
						//같은 방향.
						//y만 영향 S
						lineVec.x = sPoint[0];
						lineVec.y = tPoint[1];
					} else {
						// x만 영향 .
						lineVec.x = tPoint[0];
						lineVec.y = sPoint[1];

						isCurved = true;
					}
				} else if (dir == "top") {
					//상대가 ↑
					if (sPoint[1] < tPoint[1]) {
						//y만 영향
						lineVec.x = tPoint[0];
						lineVec.y = sPoint[1];

						isCurved = true;
					} else {
						// x만 영향 .
						lineVec.x = sPoint[0];
						lineVec.y = tPoint[1];
					}
				} else if (dir == "right") {
					//상대가 →
					if (sPoint[0] > tPoint[0]) {
						//right target일때 일로 들어온다.
						//y만 영향
						lineVec.x = sPoint[0];
						lineVec.y = tPoint[1];
					} else {
						//right source일때 일로 들어온다.
						// x만 영향 .
						lineVec.x = tPoint[0]; //targetX
						lineVec.y = sPoint[1]; //sourceY

						isCurved = true;
					}
				} else if (dir == "bottom") {
					//상대가 ↓
					if (sPoint[1] > tPoint[1]) {
						//y만 영향
						lineVec.x = tPoint[0];
						lineVec.y = sPoint[1];

						isCurved = true;
					} else {
						// x만 영향 .
						lineVec.x = sPoint[0];
						lineVec.y = tPoint[1];
					}
				}

				return isCurved;
			}

			//꺽인 선일경우는 controlpoint를 멀리 옮겨서 부드럽게 만든다. 

		}, {
			key: 'smoothWeight',
			value: function smoothWeight(dir, sPoint, tPoint, lineVec) {
				var size = this._boundbox._position.getSize();
				//		let sizeX = Math.abs(size.x);	//10%
				//		let sizeY = Math.abs(size.y);	//10%
				var forceWeight = Math.abs(size.x * 0.5); //10%
				var forceHeight = Math.abs(size.y * 0.5); //10%

				var limit = 20;

				if (forceWeight < limit) forceWeight = limit;
				if (forceHeight < limit) forceHeight = limit;
				//		let forceWeight = 50;
				//		let forceHeight = 50;


				if (dir == "left") {
					//상대가 ←
					if (sPoint[0] < tPoint[0]) {
						//꺽일때 
						lineVec.x -= forceWeight; //힘만큼  

						if (sPoint[1] < tPoint[1]) {
							//s가 아래 있으면 
							lineVec.y -= forceHeight; //힘만큼 아래로 내려간다. 
						} else {
							lineVec.y += forceHeight; //힘만큼 아래로 내려간다. 
						}
						//			}else if(sizeX < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.x -= forceWeight;	//힘만큼
						//				if(sPoint[1] < tPoint[1]){ //s가 아래 있으면 
						//					lineVec.y += forceHeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.y -= forceHeight;	//힘만큼 아래로 내려간다. 
						//				}
					}
				} else if (dir == "right") {
					//상대가 →
					if (sPoint[0] > tPoint[0]) {
						//right target일때 일로 들어온다.
						lineVec.x += forceWeight; //힘만큼 아래로 내려간다. 

						if (sPoint[1] < tPoint[1]) {
							//s가 아래 있으면 
							lineVec.y -= forceHeight; //힘만큼 아래로 내려간다. 
						} else {
							lineVec.y += forceHeight; //힘만큼 아래로 내려간다. 
						}
						//			}else if(sizeX < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.x += forceWeight;	//힘만큼
						//				if(sPoint[1] < tPoint[1]){ //s가 아래 있으면 
						//					lineVec.y += forceHeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.y -= forceHeight;	//힘만큼 아래로 내려간다. 
						//				}
					}
				} else if (dir == "top") {
					//상대가 ↑
					if (sPoint[1] < tPoint[1]) {
						//꺽일때만 볼록하게 보여준다.

						lineVec.y -= forceHeight;

						if (sPoint[0] < tPoint[0]) {
							lineVec.x -= forceWeight; //힘만큼 위로 올라간다. 
						} else {
							lineVec.x += forceWeight; //힘만큼 아래로 내려간다. 
						}

						//			}else if(sizeY < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.y -= forceHeight;
						//				if(sPoint[0] < tPoint[0]){
						//					lineVec.x += forceWeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.x -= forceWeight;	//힘만큼 위로 올라간다. 
						//				}
					}
				} else if (dir == "bottom") {
					//상대가 ↓
					if (sPoint[1] > tPoint[1]) {
						// 꺽일때만 볼록하게 보여준다.
						lineVec.y += forceHeight; //아래로 불룩 
						if (sPoint[0] < tPoint[0]) {
							//좀더 자연스럽게... 
							lineVec.x -= forceWeight; //힘만큼 위로 올라간다. 
						} else {
							lineVec.x += forceWeight; //힘만큼 아래로 내려간다. 
						}
						//			}else if(sizeY < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.y -= forceHeight;
						//				if(sPoint[0] < tPoint[0]){
						//					lineVec.x += forceWeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.x -= forceWeight;	//힘만큼 위로 올라간다. 
						//				}
					}
				}
			}

			/**
	   * 라인의 굴곡 조정을 위해서 컨트롤 포인트(lineVec)를 움직인다.
	   * lineVec와 additionPoint를 수정해서 부드럽게 한다. 
	   */

		}, {
			key: 'smoothWeight2',
			value: function smoothWeight2(dir, sPoint, tPoint, lineVec, lineVec2, additionPoints) {
				var size = this._boundbox._position.getSize();
				//		let sizeX = Math.abs(size.x);	//10%
				//		let sizeY = Math.abs(size.y);	//10%
				var forceWeight = Math.abs(size.x * 0.1); //6분에1
				var forceHeight = Math.abs(size.y * 0.1); //6분에1

				var limit = 10;

				if (forceWeight > limit) forceWeight = limit;
				if (forceHeight > limit) forceHeight = limit;

				if (dir == "left") {
					//상대가 ←
					if (sPoint[0] < tPoint[0]) {
						//꺽일때 
						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //원본 저장 111111 

						lineVec.x -= forceWeight; //힘만큼

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //x이동 만큼 222222

						if (sPoint[1] < tPoint[1]) {
							//s가 아래 있으면 
							lineVec.y += forceHeight; //힘만큼 아래로 내려간다.
							//					lineVec2.y += forceHeight;	//힘만큼 아래로 내려간다.
						} else {
							lineVec.y -= forceHeight; //힘만큼 아래로 내려간다.
							//					lineVec2.y -= forceHeight;	//힘만큼 아래로 내려간다.
						}
					} else {
						lineVec.x -= forceWeight; //힘만큼

						//			}else if(sizeX < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.x -= forceWeight;	//힘만큼
						//				if(sPoint[1] < tPoint[1]){ //s가 아래 있으면 
						//					lineVec.y += forceHeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.y -= forceHeight;	//힘만큼 아래로 내려간다. 
						//				}
					}
				} else if (dir == "right") {
					//상대가 →
					if (sPoint[0] > tPoint[0]) {
						//right target일때 일로 들어온다.

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //원본 저장 111111 

						lineVec.x += forceWeight; //힘만큼  

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //x이동 만큼 222222

						if (sPoint[1] < tPoint[1]) {
							//s가 아래 있으면 
							lineVec.y += forceHeight; //힘만큼 아래로 내려간다.
							//					lineVec2.y += forceHeight;	//힘만큼 아래로 내려간다.
						} else {
							lineVec.y -= forceHeight; //힘만큼 아래로 내려간다.
							//					lineVec2.y -= forceHeight;	//힘만큼 아래로 내려간다.
						}
					} else {
						lineVec.x += forceWeight; //힘만큼
						//			}else if(sizeX < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.x += forceWeight;	//힘만큼
						//				if(sPoint[1] < tPoint[1]){ //s가 아래 있으면 
						//					lineVec.y += forceHeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.y -= forceHeight;	//힘만큼 아래로 내려간다. 
						//				}
					}
				} else if (dir == "top") {
					//상대가 ↑
					if (sPoint[1] < tPoint[1]) {
						//꺽일때만 볼록하게 보여준다.

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //원본 저장 111111 

						lineVec.y -= forceHeight;

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //x이동 만큼 222222


						if (sPoint[0] < tPoint[0]) {
							lineVec.x += forceWeight; //힘만큼 아래로 내려간다. 
						} else {
							lineVec.x -= forceWeight; //힘만큼 위로 올라간다. 
						}
					} else {
						lineVec.y -= forceHeight;
						//			}else if(sizeY < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.y -= forceHeight;
						//				if(sPoint[0] < tPoint[0]){
						//					lineVec.x += forceWeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.x -= forceWeight;	//힘만큼 위로 올라간다. 
						//				}
					}
				} else if (dir == "bottom") {
					//상대가 ↓
					if (sPoint[1] > tPoint[1]) {
						// 꺽일때만 볼록하게 보여준다.

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //원본 저장 111111 

						lineVec.y += forceHeight; //아래로 불룩

						additionPoints.push({ x: lineVec.x, y: lineVec.y }); //x이동 만큼 222222


						if (sPoint[0] < tPoint[0]) {
							//좀더 자연스럽게... 
							lineVec.x += forceWeight; //힘만큼 아래로 내려간다. 
						} else {
							lineVec.x -= forceWeight; //힘만큼 위로 올라간다. 
						}
					} else {
						lineVec.y += forceHeight;
						//			}else if(sizeY < limit){	//안꺽일때 대신 사이즈가 작을때
						//				lineVec.y -= forceHeight;
						//				if(sPoint[0] < tPoint[0]){
						//					lineVec.x += forceWeight;	//힘만큼 아래로 내려간다. 
						//				}else{
						//					lineVec.x -= forceWeight;	//힘만큼 위로 올라간다. 
						//				}
					}
				}
			}
		}, {
			key: 'Destroy',
			value: function Destroy() {
				//연결된 Attacher를 Detach한다.
				this.Disconnect(); //삭제하기 전에 Disconnect를 해야지만 연결된 Attacher를 내부 객체로 인식하지 않는다. (object로 바꿔서 이제 상관없음)

				delete this._boundbox;
				delete this._line;
				delete this._cs;
				delete this._ce;

				delete this._center;

				delete this.swapImage;
				delete this.closeImage;
				delete this.editImage;
			}
		}, {
			key: 'Update',
			value: function Update(ctx) {}
		}, {
			key: 'Render',
			value: function Render(ctx, camera) {

				if (this.needToUpdate === true) {
					//			this.setBoxSize(ctx);
					this._center.setBoxSizeCenter(ctx); // text 태두리 사이즈 조정	setBoxSize
					//			this._center.setMaxWidth(ctx);		// 최대로 긴 글자를 기준으로 태두리 사이즈 변경 .	//$$$

					this.needToUpdate = false; //1회만 업데이트 하기 위해서 .
				}

				/*
	    * 카메라 객체를 통해서 Culling한다.
	    * 충돌 체크할 객체를 넣어준다. BOX2, VEC2 만  
	    */
				//		if(camera != null){
				//			if(camera.Culling(this._boundbox._position)) return;	
				//		}

				if (this.attachers.target != null) {
					//			let stage = DataSource.Load("StageMain");
					var sourceObjet = this.stage.scene.getItem(this.attachers.source.parentId);
					var targetObjet = this.stage.scene.getItem(this.attachers.target.parentId);
					var sourceCenter = sourceObjet._boundbox.GetCenter();
					var targetCenter = targetObjet._boundbox.GetCenter();

					this._line.Render(ctx, sourceCenter, targetCenter, this.sourceAdditions, this.targetAdditions);
				} else {

					this._line.Render(ctx);
				}
				//		param.sourceSize = sourceObjet._boundbox._position.getSize();
				//		param.targetSize = targetObjet._boundbox._position.getSize();


				//		this._boundbox.Render(ctx);		//점뿌리기


				//		this._cs.Render(ctx);
				this._ce.Render(ctx);

				//		this._center.Render(ctx);
			}

			/**
	   * tooltip을 HUD로 그려준다. 
	   */

		}, {
			key: 'RenderAfter',
			value: function RenderAfter(ctx, camera) {
				this.swapImage.Render(ctx); //이미지 버튼 그리기
				this.editImage.Render(ctx); //이미지 버튼 그리기
				this.closeImage.Render(ctx); //이미지 버튼 그리기

				this._center.Render(ctx);
			}

			/**
	   * 현재 options와 멥핑될 내용을 추려서 가져온다.
	   * 저장할때 사용한다.  
	   */

		}, {
			key: 'getSaveData',
			value: function getSaveData() {

				//console.log("linetype ",this._line.lineType);

				//		console.log(this.attachers.target.parentId);

				//TODO 필수 값 체크
				//{x:evt.offsetX, y:evt.offsetY, width:40, height:20}
				return { id: this.id,
					source: { id: this.attachers.source.parentId, direction: this.attachers.source.direction },
					target: { id: this.attachers.target.parentId, direction: this.attachers.target.direction },
					lineColor: this._line.lineColor,
					lineType: this._line.lineType,
					lineWidth: this._line.lineWidth,
					text: this._center.text,
					textColor: this._center.color,
					font: this._center.font
					//			url:this._center.url
				};
			}

			/**
	   * Item의 충돌 체크
	   */

		}, {
			key: 'CollisionCheck',
			value: function CollisionCheck(obj) {
				//Rect또는 point입니다.
				return this._center.CollisionCheck(obj); //포함되어 있으면 true 
			}
		}]);
		return BezierLine2D;
	}(HetaJs_13);

	/**
	 * Rectangle
	 * 
	 *  * 
	 * @param 
	 */
	var Attacher = function (_Point) {
		inherits(Attacher, _Point);

		function Attacher() {
			var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			classCallCheck(this, Attacher);

			//		this._position = new Vec2(opts.x, opts.y);	//시작점
			//		this.originalPosition = new Vec2(opts.x, opts.y); 	//scale값을구하기 위함.
			var _this = possibleConstructorReturn(this, (Attacher.__proto__ || Object.getPrototypeOf(Attacher)).call(this, opts));

			_this.radius = opts.radius || 10; //반지름
			_this.color = null;
			_this.lineColor = '#000000';
			_this.direction = opts.direction || 'left'; //left, right, top , bottom
			_this.opacity = 0.0;

			_this.attachedLines = {}; //관계를 보관 하기 위함.
			_this.attachedTarget = {};
			return _this;
		}

		/**
	  * 차후에 연결된 라인들을 저장하거나 관련 라인을 지우기 위함.
	  * @param : sid (unit id)
	  * @param attachLine lineObject 
	  */
		//	connectLine({target: target, line:attachLine}){
		//		if(target == null) return;
		//		this.attachedLines[attachLine.id] = attachLine;
		//		this.attachedTarget[attachLine.id] = target; 
		//		
		//	}

		/**
	  * 라인목록을 제거 하고 eventStore에서 해당 라인을 제거 한다.???
	  */
		//	disconnectLine(lineId){
		//		delete this.attachedLines[lineId];		//라인 객체 끊어 버리기 
		//		delete this.attachedTarget[lineId];		//타겟도 지우기
		//	}

		createClass(Attacher, [{
			key: 'Destroy',
			value: function Destroy(stage) {
				get(Attacher.prototype.__proto__ || Object.getPrototypeOf(Attacher.prototype), 'Destroy', this).call(this, stage);

				//		console.log("Attacher삭제 하기. 라인을 지울때는 호출되면 안된다. ");
				for (var id in this.attachs) {
					//배열이 들어 있음.	attach를 처리할 function 배열이 들어 있음. 
					var itemObj = this.attachObjects[id];
					if (itemObj instanceof BezierLine2D) {
						//라인만 연결을 끊어 버린다.

						//Line에 연결된 Attach 2개를  Detach한다. 
						itemObj.Disconnect(); //라인에서 반대쪽에 연결된 Attacher목록을 제거 한다.
						stage.scene.Remove(itemObj.id); //라인 제거.
					}
				}

				//		if(this.attachs[itemObj.id] != null){
				//			this.attachs[itemObj.id].push(fn);
				//		}else{
				//			this.attachs[itemObj.id] = [fn];		//최초에 배열로 넣는다. 
				//		}
				//		
				//		//옵젝트는 반복해서 들어가도 상관없음.
				//		this.attachObjects[itemObj.id] = itemObj;


				/*		for(var lineId in this.attachedLines){
	   			let attachLine = this.attachedLines[lineId];		//라인객체 가져오기
	   			
	   			this.attachedTarget[lineId].disconnectLine(lineId);	//타겟쪽의 line객체를 지운다.
	   
	   			
	   			this.Detach(attachLine);						//라인과 자신을 Detach한다. 무조건 해준다.
	   			this.attachedTarget[lineId].Detach(attachLine);	//라인과 타겟을 Detach한다.
	   			
	   			
	   			stage.scene.Remove(attachLine.id);		//라인 제거.
	   		}*/
			}
		}]);
		return Attacher;
	}(HetaJs_17);

	//import { Point, Svg, Rect, Text, Image, DataSource } from 'hetajs';

	/**
	 * 공통 Attacher 관리자 (workflow 최상위) 
	 * 
	 * 1. boundbox를 관리
	 * 2. Attacher 4개를 관리
	 * 3. DataSource.Load("lineOptionsCallback"); 에 라인 디자인 적용 .
	 * 4. Toggle을 무조건 override한다.
	 */
	var AttacherCommon = function (_Item) {
		inherits(AttacherCommon, _Item);

		function AttacherCommon(opts) {
			classCallCheck(this, AttacherCommon);

			var _this = possibleConstructorReturn(this, (AttacherCommon.__proto__ || Object.getPrototypeOf(AttacherCommon)).call(this, opts));

			var options = {
				//boundbox position
				x: opts.x, y: opts.y,
				width: opts.width || 100, //너비 
				height: opts.height || 100, //높이
				//boundbox design
				color: opts.boundboxColor || "#ebebeb",
				lineColor: opts.boundboxLineColor || "#aaaaaa",
				lineType: opts.boundboxLineType || [3, 3],
				lineWidth: opts.boundboxLineWidth || 2
			};

			//=========================== Scene에서 해당값으로 select된 item을 가져온다.
			_this.isSelected = false;
			_this.itemType = 'OBJECT';
			//======================================
			//bound 박스 디자인 
			_this._boundbox = new HetaJs_16(options); //min, max  디자인이 구성된 객체.
			_this._boundbox.opacity = 0; //처음엔 안보임


			//======================================
			// 라인 뽑아내는 영역.  
			var center = _this._boundbox.GetCenter();
			_this._leftAttacher = new Attacher({ x: _this._boundbox._position.min.x, y: center.y, direction: "left", pointType: "RECT", order: 5 }); //좌
			_this._topAttacher = new Attacher({ x: center.x, y: _this._boundbox._position.min.y, direction: "top", pointType: "RECT", order: 5 }); //상
			_this._rightAttacher = new Attacher({ x: _this._boundbox._position.max.x, y: center.y, direction: "right", pointType: "RECT", order: 5 }); //우
			_this._bottomAttacher = new Attacher({ x: center.x, y: _this._boundbox._position.max.y, direction: "bottom", pointType: "RECT", order: 5 }); //하


			//attach 박스에 여러개 호출 가능
			_this._boundbox.Attach(_this, //this는 item입니다.
			function (param) {
				//this는 Item입니다.
				var center = this._boundbox.GetCenter();
				/** ===========================================================
	    * 공통 Attacher 연결
	    */
				this._leftAttacher.set(this._boundbox._position.min.x, center.y); //좌
				this._topAttacher.set(center.x, this._boundbox._position.min.y); //상
				this._rightAttacher.set(this._boundbox._position.max.x, center.y); //우
				this._bottomAttacher.set(center.x, this._boundbox._position.max.y); //하


				//아래의 어테치는 Line이 연결될때 생성이 된다.
				return [this._leftAttacher, this._topAttacher, this._rightAttacher, this._bottomAttacher]; //Attach Chain 
			});

			//이벤트 
			_this._boundbox.eventStore = { //Point객체 입니다. this=unit(this._boundbox입니다.
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'move' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'move'; //커서가 move로 바뀜.

					//마우스 오버될때 타입이 메뉴일경우 메뉴 OLD/NEW를 보여준다. 
					var cb = HetaJs_1.Load("boundboxMouseOverCallback");
					if (cb != null) {
						cb(this.parentId, stage, sender);
					}
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					//마우스 오버될때 타입이 메뉴일경우 메뉴 OLD/NEW를 숨긴다. 
					var cb = HetaJs_1.Load("boundboxMouseOutCallback");
					if (cb != null) {
						cb(this.parentId, stage, sender);
					}
				},
				mousemove: function mousemove(stage, sender) {

					this.Translate(sender.offset); //이동하기	_Item에 있음. 	//this=unit


					//현재 이동하려는 객체가 selected가 아니면 자기만 이동한다.
					var pItem = stage.scene.getItem(this.parentId);
					if (pItem.isSelected === true) {
						//선택된 객체를 함께 이동 시킨다.(item._boundbox만)
						var pArr = stage.getSelectedObjects();
						for (var i in pArr) {
							var item = pArr[i];
							if (item._boundbox.id == this.id) continue;
							item._boundbox.Translate(sender.offset);
						}
					}
				},
				mouseup: function mouseup(stage, sender) {
					//=============== 최근 위치를 저장
					var pos = this._position.min;
					var size = this._position.getSize();
					stage.latestPoint = { x: pos.x + size.x + 15, y: pos.y };
				},
				mouseovermove: function mouseovermove(stage, sender) {
					//마우스 오버될때 타입이 메뉴일경우 메뉴 OLD/NEW를 숨긴다. 
					var cb = HetaJs_1.Load("boundboxMouseMoveCallback");
					if (cb != null) {
						cb(this.parentId, stage, sender);
					}
				},
				//					mousedown : function(stage,sender){	//라인이 앞으로 나오는 오류있음.
				//						//=====================클릭하면 맨앞에 보여준다.
				//						stage.scene.setItemOrder(5, {itemType:'OBJECT'});	//item만 가져와서. 오더를 5로 변경. 
				//						stage.scene.setItemOrder(10, this.parentId);	
				//						stage.scene.resetOrder();
				//						//=====================클릭하면 맨앞에 보여준다.
				//					},
				click: function click(stage, sender) {
					var item = stage.scene.getItem(this.parentId);

					if (sender.event.ctrlKey) {
						//컨트롤키 누르면
						item.Toggle(); //에디트 상태 토글
					} else {

						//기존 선택이 해제 되면서 선택.
						var pArr = stage.getSelectedAllObjects();
						//자신을 선택했다면 toggle한다.
						if (pArr.length == 1 && pArr[0].isSelected !== undefined && pArr[0]._boundbox.id == this.id) {
							//length가 1이고 자신이면 toggle만 한다.
							item.Toggle(); //에디트 상태 토글
						} else {
							for (var i in pArr) {
								var obj = pArr[i];
								if (obj.isSelected === true) {
									obj.Toggle();
								} else if (obj.isLineSelected === true) {
									obj.Toggle();
								}
							}
							item.Toggle(); //에디트 상태 토글
						}
					}

					//						stage.canvas.style.cursor = 'default';		//커서가 move로 바뀜.
					//						stage.scene.Remove(this.parentId);		//삭제 하기 
				}
			};

			var attacherEventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
					this.opacity = 0.5; //투명도 올려.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
					this.opacity = 0.0;
				},
				mousedown: function mousedown(stage, sender) {

					var options = {};
					var cb = HetaJs_1.Load("lineOptionsCallback");
					if (typeof cb == "function") {
						options = cb(this.id, stage, options);
					}
					options.x = sender.position.x;
					options.y = sender.position.y;
					options.width = 1;
					options.height = 1;

					this.attachLine = new BezierLine2D(options, stage);
					this.attachLine._center.Hide(); //선택포인트 숨기기
					stage.scene.Add(this.attachLine); //TODO id는 필요없음.
				},
				mousemove: function mousemove(stage, sender) {

					//마우스가 canvas를 벋어나서 버튼을 놓으면 이상동작합니다. 버튼이 눌렸을때만 화살표가 이동하도록 처리 . 버튼이 떼어진 상태로 cavnas로 진입하면 라인을 삭제한다. 
					if (sender.event.buttons == 1) {
						//방향을 설정한다.
						this.attachLine._ce.setAngle(this.attachLine._boundbox._position.min, this.attachLine._boundbox._position.max);
						//이동한다.
						this.attachLine._ce.Translate(sender.offset);
					} else {
						if (this.attachLine != null) {
							if (this.attachLine.id != null) {
								stage.scene.Remove(this.attachLine.id);
								stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
								delete this.attachLine;
							}
						}
					}
				},
				mouseup: function mouseup(stage, sender) {
					//this=unit
					if (sender.currentObject != null) {
						if (sender.currentObject instanceof Attacher) {

							//링크 할때 옵션이 없으면 화면상의 기본값을 읽어 들인다.
							var _options = {};
							var cb = HetaJs_1.Load("lineOptionsCallback");
							if (typeof cb == "function") {
								_options = cb(this.id, stage, _options);
							}

							//사작 점 , 도착점
							stage.scene.getItem(this.parentId)._lineConnecting(stage, this, sender.currentObject, _options);
						} else {
							console.log("currentObject is not a Attacher");
						}
					} else {
						console.log("currentObject is null");
					}

					//기존것은 사라지게.
					stage.scene.Remove(this.attachLine.id);
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
					delete this.attachLine;
				},
				click: function click(stage, sender) {
					if (this.attachLine.id != null) {
						stage.scene.Remove(this.attachLine.id);
						stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
						delete this.attachLine;
					}
				}
			};

			if (opts.mode == "EDIT") {
				//수정모드 일때만 보인다.
				_this._leftAttacher.eventStore = attacherEventStore;
				_this._topAttacher.eventStore = attacherEventStore;
				_this._rightAttacher.eventStore = attacherEventStore;
				_this._bottomAttacher.eventStore = attacherEventStore;
			}

			return _this;
		}

		/**
	  * 라인을 연결합니다.
	  */


		createClass(AttacherCommon, [{
			key: '_lineConnecting',
			value: function _lineConnecting(stage, sourceAttacher, targetAttacher, options) {

				//자신의 포인트에 다시 연결 하면 안됨.
				if (sourceAttacher.id == targetAttacher.id) return;

				//자신의 다른점에도 연결하면 안됨.
				if (sourceAttacher.parentId && sourceAttacher.parentId === targetAttacher.parentId) return;

				//다른 객체간의 연결도 완전히 중복되게 연결하면 안됨
				var lines = stage.getAllLineObjects();
				for (var i in lines) {
					if (lines[i].attachers.source != null) {
						//객체가 처음엔 null입니다. 
						if (sourceAttacher.id === lines[i].attachers.source.id) {
							if (targetAttacher.id === lines[i].attachers.target.id) {
								return;
							}
						} else if (sourceAttacher.id === lines[i].attachers.target.id) {
							if (targetAttacher.id === lines[i].attachers.source.id) {
								return;
							}
						}
					}
				}

				options.mode = this.mode;
				options.x = sourceAttacher.x;
				options.y = sourceAttacher.y;
				options.width = targetAttacher.x - sourceAttacher.x;
				options.height = targetAttacher.y - sourceAttacher.y;
				//라인생성. 초기 값을 설정해 준다.
				var attachLine = new BezierLine2D(options, stage);
				stage.scene.Add(attachLine); //scene에 등록.

				//라인을 Attacher에 연결
				attachLine.Connect(sourceAttacher, targetAttacher);
			}
		}, {
			key: 'Destroy',
			value: function Destroy() {
				get(AttacherCommon.prototype.__proto__ || Object.getPrototypeOf(AttacherCommon.prototype), 'Destroy', this).call(this); //Destroy를 전부 호출함. this를 넘겨줌. 

				//Scene의 Remove에서 자동으로 처리 된다. (어테쳐는 라인도 제거 해야하고 target에서 해당 라인링크를 제거 해야 한다.)
				//			this._leftAttacher.Destroy(this.scene);
				//			this._topAttacher.Destroy(this.scene);
				//			this._rightAttacher.Destroy(this.scene);
				//			this._bottomAttacher.Destroy(this.scene);
				delete this._leftAttacher;
				delete this._topAttacher;
				delete this._rightAttacher;
				delete this._bottomAttacher;
			}

			//		Update(){
			//			//TODO 업데이트 설정하세요. fps가 아니면 쓸일이 없을듯. 
			//			super.Update();
			//		}


		}, {
			key: 'Render',
			value: function Render(ctx, camera) {
				get(AttacherCommon.prototype.__proto__ || Object.getPrototypeOf(AttacherCommon.prototype), 'Render', this).call(this, ctx);

				this._boundbox.Render(ctx); //상위에서 이미 그려준다.

				this._leftAttacher.Render(ctx);
				this._topAttacher.Render(ctx);
				this._rightAttacher.Render(ctx);
				this._bottomAttacher.Render(ctx);
			}

			/**
	   * 선택 및 선택 해제.
	   * @override 해서 사용해야함 
	   */

		}, {
			key: 'Toggle',
			value: function Toggle() {}
			//			if(this.isSelected === false){
			//				this._boundbox.opacity = 1;	//보여준다.
			////				TODO 보여주기
			//				this.isSelected = true;
			//			}else{
			//				this._boundbox.opacity = 0; 
			////				TODO 숨기기 
			//				this.isSelected = false;
			//			}


			/**
	   * 현재 options와 멥핑될 내용을 추려서 가져온다.
	   * @override해서 사용한다. 
	   */

		}, {
			key: 'GetSaveData',
			value: function GetSaveData() {

				var pos = this._boundbox._position.min;
				var size = this._boundbox._position.getSize();

				return { id: this.id,
					x: pos.x,
					y: pos.y,
					width: size.x,
					height: size.y
				};
			}
		}]);
		return AttacherCommon;
	}(HetaJs_13);

	/**
	 * Edit Rect Box
	 * 4점 조절 가능한 기본적인 edit box입니다.
	 */
	var EditCommon2D = function (_AttacherCommon) {
		inherits(EditCommon2D, _AttacherCommon);

		function EditCommon2D(opts) {
			classCallCheck(this, EditCommon2D);

			//x,y,w,h


			var _this = possibleConstructorReturn(this, (EditCommon2D.__proto__ || Object.getPrototypeOf(EditCommon2D)).call(this, opts));

			_this.order = 5; //라인보다 위에 보여야 한다.

			//======================================
			//조절점.
			_this._cp = new HetaJs_17({ pointType: "RECT", color: "#000000" }); //우하	//{x:this._boundbox._position.max.x, y: this._boundbox._position.max.y}
			_this._cp.Hide();

			var iconSize = 16;

			//======================================
			//닫기버튼 
			_this.closeImage = new HetaJs_22({ x: opts.x, y: opts.y, width: iconSize, height: iconSize, dataSource: "LayerDelButton", order: 6 }); //우하	//{x:this._boundbox._position.max.x, y: this._boundbox._position.max.y}
			_this.closeImage.Hide();

			//======================================
			//수정버튼 
			_this.editImage = new HetaJs_22({ x: opts.x, y: opts.y, width: iconSize, height: iconSize, dataSource: "LayerEditButton", order: 6 });
			_this.editImage.Hide();

			//attach
			_this._boundbox.Attach(_this, //this는 item입니다.
			function (param) {

				//좌측 하단의 모서리를 배치
				this._cp._position.set(this._boundbox._position.max.x, this._boundbox._position.max.y);

				//이미지들을 우측 상단에 배치
				this.closeImage._position.min.set(this._boundbox._position.max.x - iconSize, this._boundbox._position.min.y - iconSize);
				this.closeImage._position.setSize({ x: iconSize, y: iconSize });
				this.editImage._position.min.set(this._boundbox._position.max.x - iconSize * 2, this._boundbox._position.min.y - iconSize);
				this.editImage._position.setSize({ x: iconSize, y: iconSize });
			});

			//attach
			_this._cp.Attach(_this, //this는 item입니다.
			function () {
				var w = 40; //리미트 사이즈 
				var h = 20; //리미트 사이즈


				var bx = this._boundbox._position.min.x + w;
				var by = this._boundbox._position.min.y + h;
				if (bx > this._cp._position.x) {
					this._cp._position.x = bx;
					//					return this._boundbox;	//배열가능
				}
				if (by > this._cp._position.y) {
					this._cp._position.y = by;
					//					return this._boundbox;	//배열가능
				}

				this._boundbox._position.max.set(this._cp._position.x, this._cp._position.y);

				return this._boundbox; //배열가능
			});

			//Event
			_this._cp.eventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'nw-resize' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'nw-resize'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				mousemove: function mousemove(stage, sender) {
					this.Translate(sender.offset);
					//					stage.Render("DEV");
				}
			};

			_this.closeImage.eventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				click: function click(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
					//====================== blur되면 다른 팝업도 닫아야 한다.
					try {

						var cb = HetaJs_1.Load("CanvasBlur");
						if (typeof cb == "function") {
							options = cb("", this, {});
						}
					} catch (e) {}

					try {
						var rcb = HetaJs_1.Load("RemoveItemCallback");
						var item = stage.scene.getItem(this.parentId);
						if (typeof rcb == "function") {
							rcb(item, stage, sender);
						}
					} catch (e) {}

					stage.scene.Remove(this.parentId); //삭제 하기
				}

			};

			_this.editImage.eventStore = { //Point객체 입니다. this=unit
				_before: function _before(stage, sender) {
					stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
				},
				mouseover: function mouseover(stage, sender) {
					stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
				},
				mouseout: function mouseout(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
				},
				click: function click(stage, sender) {
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._boundbox.min.x, item._boundbox.min.y); //x, y
					sender.position.width = 100;
					sender.position.height = 100;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("EditPopupLink");
					if (typeof cb == "function") {
						cb(this.parentId, stage, sender);
					}
				}
			};

			return _this;
		}

		//scene에서 자동으로 되기 때문에 불필요. unit이 아닌 객체만 등록해서 지운다. 


		createClass(EditCommon2D, [{
			key: 'Destroy',
			value: function Destroy() {
				get(EditCommon2D.prototype.__proto__ || Object.getPrototypeOf(EditCommon2D.prototype), 'Destroy', this).call(this);

				delete this._cp;
				delete this.closeImage;
				delete this.editImage;
			}
			//	Update(){
			//		//TODO 업데이트 설정하세요. 
			//		super.Update();
			//	}

		}, {
			key: 'Render',
			value: function Render(ctx) {
				get(EditCommon2D.prototype.__proto__ || Object.getPrototypeOf(EditCommon2D.prototype), 'Render', this).call(this, ctx);

				this._cp.Render(ctx); //hide면 가려진다.

			}
		}, {
			key: 'RenderAfter',
			value: function RenderAfter(ctx, camera) {
				this.closeImage.Render(ctx); //이미지 버튼 그리기
				this.editImage.Render(ctx); //이미지 버튼 그리기
			}

			/**
	   * 선택해제 할때 호출하면 됨.
	   * super에서 호출됨.
	   * @override한것.
	   */

		}, {
			key: 'Toggle',
			value: function Toggle() {}

			//		if(this.isSelected === false){
			//			this._boundbox.opacity = 1;	//보여준다.
			//			this._cp.Show();
			//			this.closeImage.Show();
			//			this.editImage.Show();
			//			this.isSelected = true;
			//		}else{
			//			this._boundbox.opacity = 0; 
			//			this._cp.Hide();
			//			this.closeImage.Hide();
			//			this.editImage.Hide();
			//			this.isSelected = false;
			//		}


			/**
	   * Item의 충돌 체크
	   */

		}, {
			key: 'CollisionCheck',
			value: function CollisionCheck(obj) {
				//Rect또는 point입니다.
				return this._boundbox.CollisionCheck(obj); //포함되어 있으면 true 
				//		if(obj instanceof Vec2 ){
				//			return this._boundbox.containsPoint(obj);	//포함되어 있으면 true 
				//			
				//		}else if( obj instanceof Box2){	//box2
				//			return this._boundbox.containsBox(obj);		//안에 있으면 true
				//		}
			}
		}]);
		return EditCommon2D;
	}(AttacherCommon);

	/**
	 * 기본형의 workflow
	 * 
	 * 1. EditPopupLink를 정해서 edit버튼을 누르면 동작하는 함수를 외부에서 정의 
	 * 
	 */
	var WorkflowChart = function (_EditCommon2D) {
		inherits(WorkflowChart, _EditCommon2D);

		function WorkflowChart(opts) {
			classCallCheck(this, WorkflowChart);

			var _this = possibleConstructorReturn(this, (WorkflowChart.__proto__ || Object.getPrototypeOf(WorkflowChart)).call(this, opts));

			_this.mode = opts.mode;
			//			this.defaultOpen = "N";

			//order 설정.
			if (opts.order != null) _this.order = opts.order;

			if (_this.mode == "EDIT") {
				//수정모드 일때만 보인다.
				//=================================================
				//수정 버튼에 클릭 액션을 준다.
				_this.editImage.eventStore.click = function (stage, sender) {
					//this=unit
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._boundbox.min.x, item._boundbox.min.y); //x, y
					var size = item._boundbox._position.getSize();
					sender.position.width = size.x; //박스 크기 
					sender.position.height = size.y;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("EditPopupLink");
					if (typeof cb == "function") {
						cb(item, stage, sender);
					}
				};

				_this._boundbox.eventStore.dblclick = function (stage, sender) {
					//this=unit
					stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._boundbox.min.x, item._boundbox.min.y); //x, y
					var size = item._boundbox._position.getSize();
					sender.position.width = size.x; //박스 크기 
					sender.position.height = size.y;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("EditPopupLink");
					if (typeof cb == "function") {
						cb(item, stage, sender);
					}

					//선택이 해제 되어 있으면 선택
					if (item.isSelected === false) {
						item.Toggle();
					}
				};

				//				this._boundbox.eventStore.mouseover = function(stage,sender){
				//					stage.canvas.style.cursor = 'move';		//커서가 move로 바뀜.
				//					this.textToolTip.Show();
				//마우스 오버될때 타입이 메뉴일경우 메뉴 OLD/NEW를 보여준다. 
				//					let cb = DataSource.Load("boundboxMouseOverCallback");
				//					if(cb != null){
				//						cb(this.parentId, stage, sender);
				//					}
				//				};
				//				this._boundbox.eventStore.mouseout = function(stage,sender){
				//					stage.canvas.style.cursor = 'default';		//커서가 move로 바뀜.
				//					this.textToolTip.Hide();
				//마우스 오버될때 타입이 메뉴일경우 메뉴 OLD/NEW를 숨긴다. 
				//					let cb = DataSource.Load("boundboxMouseOutCallback");
				//					if(cb != null){
				//						cb(this.parentId, stage, sender);
				//					}
				//				};

			}

			var options = {
				x: opts.x, y: opts.y, //_rect								this._rect.x, y
				width: opts.width || 150, //크기  _rect							this._rect.width
				height: opts.height || 50, //높이 _rect							this._rect.height
				color: opts.color || "#999999", //아이콘 색						this.icon.color 
				dataSource: opts.dataSource || "SVG_DIRECT", //아이콘 모양 dataSource	this.icon.dataSource		
				bgColor: opts.bgColor || "#ffffff", //배경							this._rect.color
				text: opts.text || '...', //글짜						this.text.text
				font: opts.font || 'normal normal 14px "Noto Sans KR"', //글짜 사이즈					this.font
				textColor: opts.textColor || "#444444", //글자색.						this.text.color
				url: opts.url || '' //		this.text.url
			};

			//타원 태두리 디자인  고정
			var rectOption = { x: options.x, y: options.y, width: options.width, height: options.height, collisionCheck: false };
			rectOption.color = options.bgColor; //고정
			rectOption.lineColor = "#808080"; //고정
			rectOption.lineWidth = 2; //고정
			rectOption.round = 15; //고정
			_this._rect = new HetaJs_16(rectOption); //min, max  디자인이 구성된 객체.


			//======================================
			//아이콘
			var iconOption = { x: options.x, y: options.y, width: 126, height: 126, color: options.color, collisionCheck: false };
			iconOption.svg = HetaJs_1.Load(options.dataSource); //SVG
			_this.icon = new HetaJs_20(iconOption);
			_this.icon.dataSource = options.dataSource; //데이터 저장용.
			_this.dataSource = options.dataSource; //구분용. 


			var clickFn = HetaJs_1.Load("ClickPopupLink"); //fn


			//택스트 디자인
			var textOpt = { x: options.x, y: options.y, width: 10, height: 10, lineColor: "#aaaaaa", collisionCheck: false, order: 6 };
			textOpt.color = options.textColor;
			textOpt.font = options.font;
			textOpt.text = options.text; //"테스트 글자수 자르기 입니다. 특수문자 테스트 1234891729384236195*&$%^#$!@@#$^ㅓㄸㄲ쑈똠ㅌㄴㅋㅊ휴";

			textOpt.url = options.url; //링크

			//================================
			if (_this.mode == "EDIT") {
				//수정모드 면서 
				textOpt.collisionCheck = false; //수정모드일때는 무조건 체크 없음.
			} else {
				if (clickFn != null) textOpt.collisionCheck = true; //링크가 있으면 충돌체크 허용.
			}
			//나중에 viewer만 따로 setCollision을 해줘야 한다.
			//================================
			_this.text = new HetaJs_21(textOpt);

			if (clickFn != null) {
				_this.text.eventStore = { //Point객체 입니다. this=unit
					_before: function _before(stage, sender) {
						stage.canvas.style.cursor = sender.currentObject ? 'pointer' : 'default'; //커서가 move로 바뀜.
					},
					mouseover: function mouseover(stage, sender) {
						stage.canvas.style.cursor = 'pointer'; //커서가 move로 바뀜.
					},
					mouseout: function mouseout(stage, sender) {
						stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.
					},
					click: function click(stage, sender) {
						stage.canvas.style.cursor = 'default'; //커서가 move로 바뀜.

						var cb = HetaJs_1.Load("ClickPopupLink");
						var item = stage.scene.getItem(this.parentId);
						if (typeof cb == "function") {
							cb(item, stage, sender);
						}
					}
				};
			}

			//============================================================
			// 
			//============================================================
			var optToolTip = { x: opts.x, y: opts.y, width: 16, height: 16 };
			optToolTip.color = '#ffffff';
			optToolTip.text = '';
			optToolTip.font = options.font || 'normal normal 12px "Noto Sans KR"';
			optToolTip.showBoundBox = true; //박스 보이기 
			optToolTip.isEllipsis = false; //ellipsis 제거
			optToolTip.boundboxOpacity = 0.7;
			//			optToolTip.opacity = 0.8;
			optToolTip.lineColor = "#aaaaaa";
			optToolTip.bgColor = "#888888";
			optToolTip.isChangeLine = true;
			_this.textToolTip = new HetaJs_21(optToolTip);
			_this.textToolTip.eventStore = { //Point객체 입니다. this=unit
				dblclick: function dblclick(stage, sender) {
					var cb = HetaJs_1.Load("DoubleClickMenuPath");
					if (typeof cb == "function") {
						cb(this.text, stage, sender);
					}
				}
			};
			_this.textToolTip.Hide();

			//attach 박스에 뭔가를 붙이는것
			_this._boundbox.Attach(_this, //this는 item입니다.
			function (param) {
				//this는 Item입니다.
				var center = this._boundbox.GetCenter();

				/** ===========================================================
	    * 태두리 (태두리 안쪽으로 6씩 들어가도록 축소)
	    */
				this._rect.min.set(this._boundbox.min.x + 6, this._boundbox.min.y + 6);
				this._rect.max.set(this._boundbox.max.x - 6, this._boundbox.max.y - 6);
				this._rect.setScale(); //Scale을 갱신 시켜주는 함수. original scale과 changeScale의 값의 비율로 계산된다.

				/** ===========================================================
	    * 아이콘은 좌측 끝에 배치
	    * AttachOnlyLocation
	    */
				var gap = 12;
				this.icon._position.min.set(this._boundbox.min.x + gap, this._boundbox.min.y + gap);
				var iconSize = this._boundbox.max.y - this._boundbox.min.y - gap * 2;
				this.icon._position.setSize({ x: iconSize, y: iconSize });
				this.icon.setScale();

				/** ===========================================================
	    * Text연결
	    * 가로: 아이콘 우측  , 세로 중앙에서 5만큼 위에 
	    */
				var rate = 0.5;
				if (this.text.fontFace == 'Noto Sans KR' || this.text.fontFace == '맑은 고딕') rate = 0.8; //noto sans, 맑은 고딕의 글짜 위치를 잡아준다.  

				this.text.min.set(this._boundbox.min.x + iconSize + gap + 5, center.y - this.text.fontSize * rate);
				this.text.max.set(this._boundbox.max.x - 5, center.y + this.text.fontSize * rate);

				/** ===========================================================
	    * ToolTip연결
	    * 가로: 아이콘 우측  , 세로 중앙에서 5만큼 위에 
	    */
				//					console.log(this.textToolTip.getMaxWidth());
				this.textToolTip.min.set(this._boundbox.min.x + 10, this._boundbox.max.y);

				var h = this.textToolTip.fontSize * 1.3 * this.textToolTip.getMaxHeight();
				this.textToolTip.max.set(this._boundbox.min.x + this.textToolTip.getMaxWidth() + 10 + 10, this._boundbox.max.y + h);
			});

			//			this.needToUpdate = true;	//박스 사이즈를 최초 1회 변경 (로딩됬을때를 대비)		
			return _this;
		}

		createClass(WorkflowChart, [{
			key: 'ChangeTooltip',
			value: function ChangeTooltip(text) {
				this.textToolTip.text = text;
				if (this.textToolTip.text == '') {
					this.textToolTip.Hide();
				} else {
					this.textToolTip.Show();
				}
				this.needToUpdate = true;
			}
		}, {
			key: 'ChangeIcon',
			value: function ChangeIcon(dataSourceName) {
				var svg = HetaJs_1.Load(dataSourceName); //SVG
				this.icon.changeSvg(svg);
				this.dataSource = dataSourceName; //구분용.
			}

			/**
	   * 아이콘 색을 바꿉니다.
	   */

		}, {
			key: 'ChangeColor',
			value: function ChangeColor(color) {
				this.icon.setColor(color);
			}

			/**
	   * 배경 색을 바꿉니다.
	   */

		}, {
			key: 'ChangeBgColor',
			value: function ChangeBgColor(color) {
				this._rect.setColor(color);
			}

			/**
	   * 택스트 색을 바꾼다.
	   */

		}, {
			key: 'ChangeTextColor',
			value: function ChangeTextColor(color) {
				this.text.setColor(color);
			}

			/**
	   * 택스트를 바꾼다.
	   */

		}, {
			key: 'ChangeText',
			value: function ChangeText(text) {
				this.text.setText(text);
			}

			/**
	   * 택스트 font를 바꾼다.
	   */

		}, {
			key: 'ChangeFont',
			value: function ChangeFont(font) {
				this.text.setFont(font);
				this.text.makeFontAttr(font);
				this.needToUpdate = true;
			}
			/**
	   * 택스트 사이즈를 바꾼다.
	   */

		}, {
			key: 'ChangeFontSize',
			value: function ChangeFontSize(size, locationRate) {
				this.text.setFontSize(size);
				this.needToUpdate = true;
			}

			/** 
	   * 택스트 폰트를 바꾼다.
	   * normal italic oblique inherit 
	   */

		}, {
			key: 'ChangeFontStyle',
			value: function ChangeFontStyle(style) {
				this.text.setFontStyle(style);
				this.needToUpdate = true;
			}

			/** 
	   * 택스트 두깨를 바꾼다.
	   * normal bold bolder lighter auto inherit 
	   */

		}, {
			key: 'ChangeFontWeight',
			value: function ChangeFontWeight(weight) {
				this.text.setFontWeight(weight);
				this.needToUpdate = true;
			}
			/** 
	   * 택스트 font-face를  바꾼다.
	   * 글꼴 
	   */

		}, {
			key: 'ChangeFontFace',
			value: function ChangeFontFace(face) {
				//console.log(face);
				this.text.setFontFace(face);
				this.needToUpdate = true;
			}

			/**
	   * url을 바꾼다.
	   */

		}, {
			key: 'ChangeUrl',
			value: function ChangeUrl(url) {
				this.text.setUrl(url);
			}

			/**
	   * 택스트를 바꾼다.
	   */

		}, {
			key: 'ChangeTextCollision',
			value: function ChangeTextCollision(isCheck) {
				this.text.setCollisionCheck(isCheck);
			}
		}, {
			key: 'Destroy',
			value: function Destroy() {
				get(WorkflowChart.prototype.__proto__ || Object.getPrototypeOf(WorkflowChart.prototype), 'Destroy', this).call(this); //Destroy를 전부 호출함. this를 넘겨줌.

				delete this.text;
				delete this.icon;
				delete this._rect;
			}
		}, {
			key: 'Update',
			value: function Update(ctx) {
				//업데이트 설정하세요. fps가 아니면 쓸일이 없을듯. 
				//			super.Update();


			}
		}, {
			key: 'Render',
			value: function Render(ctx, camera) {

				if (this.needToUpdate === true) {
					//				this.setBoxSize(ctx);

					if (this.textToolTip != null) {
						this.textToolTip.setMaxWidth(ctx); // text 태두리 사이즈 조정	setBoxSize
					}

					this._boundbox.executeAttach(); //강제 attach한다.

					this.needToUpdate = false; //1회만 업데이트 하기 위해서 .
				}

				/*
	    * 카메라 객체를 통해서 Culling한다.
	    * 충돌 체크할 객체를 넣어준다. BOX2, VEC2 만  
	    */
				//			if(camera != null){
				//				if(camera.Culling(this._boundbox._position))	return;
				//			}

				get(WorkflowChart.prototype.__proto__ || Object.getPrototypeOf(WorkflowChart.prototype), 'Render', this).call(this, ctx);

				this._rect.Render(ctx);
				this.icon.Render(ctx);
				this.text.Render(ctx);
			}

			/**
	   * tooltip을 HUD로 그려준다. 
	   */

		}, {
			key: 'RenderAfter',
			value: function RenderAfter(ctx, camera) {
				get(WorkflowChart.prototype.__proto__ || Object.getPrototypeOf(WorkflowChart.prototype), 'RenderAfter', this).call(this, ctx, camera);
				//툴팁 그리기
				if (this.textToolTip != null && this.textToolTip.text != '') {
					this.textToolTip.Render(ctx);
				}
			}

			/**
	   * 선택해제 할때 호출하면 됨.
	   * super에서 호출됨.
	   * @override한것.
	   */

		}, {
			key: 'Toggle',
			value: function Toggle() {

				if (this.isSelected === false) {
					this._boundbox.opacity = 1; //보여준다.
					this._cp.Show();
					if (this.mode == "EDIT") {
						//수정모드 일때만 보인다.
						this.closeImage.Show();
						this.editImage.Show();
					}
					this.isSelected = true;
				} else {
					this._boundbox.opacity = 0;
					this._cp.Hide();
					this.closeImage.Hide();
					this.editImage.Hide();
					this.isSelected = false;
				}
			}

			/**
	   * 현재 options와 멥핑될 내용을 추려서 가져온다.
	   * 저장할때 사용한다.  
	   */

		}, {
			key: 'getSaveData',
			value: function getSaveData() {
				var idXYWH = this.GetSaveData(); // id, x, y, width, height

				idXYWH.color = this.icon.color;
				idXYWH.dataSource = this.icon.dataSource; //MENU
				idXYWH.bgColor = this._rect.color; //배경색 
				idXYWH.text = this.text.text; //입력한 text
				idXYWH.font = this.text.font;
				idXYWH.textColor = this.text.color;
				idXYWH.url = this.text.url;
				idXYWH.order = this.order;
				//			idXYWH.defaultOpen	= this.defaultOpen;		//기본 열기 여부. 
				return idXYWH;
			}
		}]);
		return WorkflowChart;
	}(EditCommon2D);

	/**
	 * 
	 */
	var ImageBox = function (_EditCommon2D) {
		inherits(ImageBox, _EditCommon2D);

		function ImageBox(opts) {
			classCallCheck(this, ImageBox);

			var _this = possibleConstructorReturn(this, (ImageBox.__proto__ || Object.getPrototypeOf(ImageBox)).call(this, opts));

			_this.mode = opts.mode;

			//order 설정.
			if (opts.order != null) _this.order = opts.order;

			var options = {
				x: opts.x, y: opts.y, //_image								this._image.x, y
				width: opts.width || 200, //크기  _image						this._image.width 필수
				height: opts.height || 200, //높이 _image							this._image.height 필수
				url: opts.url || '' //		this._image.url
			};

			//이미지로 변경
			// isDynamic : false 제거시에 dataSource도 지운다. 
			HetaJs_1.Add(_this.id, { type: "IMAGE", target: options.url }); //생성 하자마자 아래에서 호출된다. 
			_this._image = new HetaJs_22({ x: options.x, y: options.y, width: options.width, height: options.height, dataSource: _this.id, collisionCheck: false, isDynamic: true });

			//attach 박스에 뭔가를 붙이는것
			_this._boundbox.Attach(_this, //this는 item입니다.
			function (param) {
				/** ===========================================================
	    * 이미지 
	    */
				this._image.min.set(this._boundbox.min.x + 3, this._boundbox.min.y + 3);
				this._image.max.set(this._boundbox.max.x - 3, this._boundbox.max.y - 3);
				this._image.setScale(); //Scale을 갱신 시켜주는 함수. original scale과 changeScale의 값의 비율로 계산된다.
			});

			return _this;
		}

		//		ChangeIcon(dataSourceName){
		//			let svg = DataSource.Load(dataSourceName);		//SVG
		//			this.icon.changeSvg(svg);
		//		}


		//사실은 Scene에서 Remove할때 호출되긴 한다.


		createClass(ImageBox, [{
			key: 'Destroy',
			value: function Destroy() {
				get(ImageBox.prototype.__proto__ || Object.getPrototypeOf(ImageBox.prototype), 'Destroy', this).call(this); //Destroy를 전부 호출함. this를 넘겨줌. 

				delete this._image;
			}

			//		Update(){
			//			//TODO 업데이트 설정하세요. fps가 아니면 쓸일이 없을듯. 
			//			super.Update();
			//		}


		}, {
			key: 'Render',
			value: function Render(ctx, camera) {
				get(ImageBox.prototype.__proto__ || Object.getPrototypeOf(ImageBox.prototype), 'Render', this).call(this, ctx);

				this._image.Render(ctx);
			}

			/**
	   * 선택해제 할때 호출하면 됨.
	   * super에서 호출됨.
	   * @override한것.
	   */

		}, {
			key: 'Toggle',
			value: function Toggle() {

				if (this.isSelected === false) {
					this._boundbox.opacity = 1; //보여준다.
					this._cp.Show();
					if (this.mode == "EDIT") {
						//수정모드 일때만 보인다.
						this.closeImage.Show();
					}
					this.isSelected = true;
				} else {
					this._boundbox.opacity = 0;
					this._cp.Hide();
					this.closeImage.Hide();
					this.isSelected = false;
				}
			}

			/**
	   * 현재 options와 멥핑될 내용을 추려서 가져온다.
	   * 저장할때 사용한다.  
	   */

		}, {
			key: 'getSaveData',
			value: function getSaveData() {
				var idXYWH = this.GetSaveData(); // id, x, y, width, height

				var base64 = HetaJs_1.EncodeImageToBase64(this._image.image); //이미지를 base64로 변환
				idXYWH.url = base64;
				idXYWH.dataSource = "IMAGE";
				idXYWH.order = this.order;
				return idXYWH;
			}
		}]);
		return ImageBox;
	}(EditCommon2D);

	/**
	 * Text 플로우 
	 * 
	 * 1. Toggle에서 수정모드의 버튼을 조정해야 한다.
	 * 2. 수정 모드에서 사용할 dataSourdce 이벤트를 넘겨준다. 
	 */
	var TextBox = function (_EditCommon2D) {
		inherits(TextBox, _EditCommon2D);

		function TextBox(opts) {
			classCallCheck(this, TextBox);

			var _this = possibleConstructorReturn(this, (TextBox.__proto__ || Object.getPrototypeOf(TextBox)).call(this, opts));

			_this.mode = opts.mode; //EDIT , VIEW

			//order 설정.
			if (opts.order != null) _this.order = opts.order;

			var options = {
				x: opts.x, y: opts.y, //_image								this._image.x, y
				width: opts.width || 200, //크기  _image						this._image.width 필수
				height: opts.height || 200, //높이 _image							this._image.height 필수
				//				color:(opts.color||"#999999"),		//아이콘 색						this.icon.color 
				//				dataSource: (opts.dataSource || "EMPTY"),	//아이콘 모양 dataSource	this.icon.dataSource		
				bgColor: opts.bgColor || "#ffffff", //배경							this._rect.color
				text: opts.text || '', //글짜						this._text.text
				font: opts.font || 'normal normal 14px "serif"', //글짜 사이즈						this._text.fontSize
				textColor: opts.textColor || "#444444" //글자색.						this._text.color
			};

			if (_this.mode == "EDIT") {
				//dblclick -> click
				_this._boundbox.eventStore.click = function (stage, sender) {
					//this=unit

					stage.canvas.style.cursor = 'default'; //커서가 기본으로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._boundbox.min.x, item._boundbox.min.y); //x, y
					var size = item._boundbox._position.getSize();
					sender.position.width = size.x; //박스 크기 
					sender.position.height = size.y;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("TextEditPopupLink");
					if (typeof cb == "function") {
						cb(item, stage, sender);
					}

					//선택이 해제 되어 있으면 선택
					if (item.isSelected === false) {
						item.Toggle();
					}
				};

				//=================================================
				//수정 버튼에 클릭 액션을 준다.
				_this.editImage.eventStore.click = function (stage, sender) {
					//this=unit
					stage.canvas.style.cursor = 'default'; //커서가 기본으로 바뀜.

					//========= sender에 좌표 넣기
					var item = stage.scene.getItem(this.parentId);
					sender.position = stage.scene.camera.WorldToScreen(item._boundbox.min.x, item._boundbox.min.y); //x, y
					var size = item._boundbox._position.getSize();
					sender.position.width = size.x; //박스 크기 
					sender.position.height = size.y;
					//========= sender에 좌표 넣기

					var cb = HetaJs_1.Load("TextEditPopupLink");
					if (typeof cb == "function") {
						cb(item, stage, sender);
					}
				};
			}

			//======================================
			//태두리 디자인  고정
			var rectOption = { x: options.x, y: options.y, width: options.width, height: options.height, collisionCheck: false };
			rectOption.color = options.bgColor; //고정
			rectOption.lineColor = "#bbbbbb"; //고정
			rectOption.lineWidth = 1; //고정
			_this._rect = new HetaJs_16(rectOption); //min, max  디자인이 구성된 객체.

			//======================================
			//택스트 디자인
			var textOpt = { x: options.x, y: options.y, width: 10, height: 10, lineColor: "#aaaaaa", collisionCheck: false }; //lineColor태두리 라인
			textOpt.color = options.textColor;
			textOpt.font = options.font;
			textOpt.text = options.text; //"테스트 글자수 자르기 입니다. 특수문자 테스트 1234891729384236195*&$%^#$!@@#$^ㅓㄸㄲ쑈똠ㅌㄴㅋㅊ휴";
			//			textOpt.url = options.url;		//링크
			textOpt.isChangeLine = true; //줄바꿈으로 표시하기
			_this._text = new HetaJs_21(textOpt);

			//attach 박스에 뭔가를 붙이는것
			_this._boundbox.Attach(_this, //this는 item입니다.
			function (param) {

				/** ===========================================================
	    * 태두리 (태두리 안쪽으로 6씩 들어가도록 축소)
	    */
				this._rect.min.set(this._boundbox.min.x + 3, this._boundbox.min.y + 3);
				this._rect.max.set(this._boundbox.max.x - 3, this._boundbox.max.y - 3);
				this._rect.setScale(); //Scale을 갱신 시켜주는 함수. original scale과 changeScale의 값의 비율로 계산된다.

				/** ===========================================================
	    * Text연결
	    * 가로: 아이콘 우측  , 세로 중앙에서 5만큼 위에 
	    */
				this._text.min.set(this._rect.min.x + 3, this._rect.min.y + 3);
				this._text.max.set(this._rect.max.x - 3, this._rect.max.y - 3);
			});

			return _this;
		}

		/**
	  * 배경 색을 바꿉니다.
	  */


		createClass(TextBox, [{
			key: 'ChangeBgColor',
			value: function ChangeBgColor(color) {
				this._rect.setColor(color);
			}

			/**
	   * 택스트 색을 바꾼다.
	   */

		}, {
			key: 'ChangeTextColor',
			value: function ChangeTextColor(color) {
				this._text.setColor(color);
			}

			/**
	   * 택스트를 바꾼다.
	   */

		}, {
			key: 'ChangeText',
			value: function ChangeText(text) {
				this._text.setText(text);
			}

			/**
	   * 택스트 font를 바꾼다.
	   */

		}, {
			key: 'ChangeFont',
			value: function ChangeFont(font) {
				this._text.setFont(font);
				this._text.makeFontAttr(font);
			}

			/**
	   * 택스트 사이즈를 바꾼다.
	   */

		}, {
			key: 'ChangeFontSize',
			value: function ChangeFontSize(size) {
				this._text.setFontSize(size);
			}

			/** 
	   * 택스트 폰트를 바꾼다.
	   * normal italic oblique inherit 
	   */

		}, {
			key: 'ChangeFontStyle',
			value: function ChangeFontStyle(style) {
				this._text.setFontStyle(style);
			}

			/** 
	   * 택스트 두깨를 바꾼다.
	   * normal bold bolder lighter auto inherit 
	   */

		}, {
			key: 'ChangeFontWeight',
			value: function ChangeFontWeight(weight) {
				this._text.setFontWeight(weight);
			}
			/** 
	   * 택스트 font-face를  바꾼다.
	   * 글꼴 
	   */

		}, {
			key: 'ChangeFontFace',
			value: function ChangeFontFace(face) {
				this._text.setFontFace(face);
			}
		}, {
			key: 'Destroy',
			value: function Destroy() {
				get(TextBox.prototype.__proto__ || Object.getPrototypeOf(TextBox.prototype), 'Destroy', this).call(this); //Destroy를 전부 호출함. this를 넘겨줌. 
				delete this._text;
				delete this._rect;
			}

			//		Update(){
			//			//TODO 업데이트 설정하세요. fps가 아니면 쓸일이 없을듯. 
			//			super.Update();
			//		}


		}, {
			key: 'Render',
			value: function Render(ctx, camera) {

				get(TextBox.prototype.__proto__ || Object.getPrototypeOf(TextBox.prototype), 'Render', this).call(this, ctx);

				this._rect.Render(ctx);
				this._text.Render(ctx);
			}

			/**
	   * 선택해제 할때 호출하면 됨.
	   * super에서 호출됨.
	   * @override한것.
	   */

		}, {
			key: 'Toggle',
			value: function Toggle() {

				if (this.isSelected === false) {
					this._boundbox.opacity = 1; //보여준다.
					this._cp.Show();
					if (this.mode == "EDIT") {
						//수정모드 일때만 보인다.
						this.closeImage.Show();
						this.editImage.Show();
					}
					this.isSelected = true;
				} else {
					this._boundbox.opacity = 0;
					this._cp.Hide();
					this.closeImage.Hide();
					this.editImage.Hide();
					this.isSelected = false;
				}
			}

			/**
	   * 현재 options와 멥핑될 내용을 추려서 가져온다.
	   * 저장할때 사용한다.  
	   */

		}, {
			key: 'getSaveData',
			value: function getSaveData() {
				var idXYWH = this.GetSaveData(); // id, x, y, width, height

				idXYWH.dataSource = "TEXT";
				idXYWH.text = this._text.text;
				idXYWH.font = this._text.font;
				idXYWH.textColor = this._text.color;
				idXYWH.bgColor = this._rect.color;
				idXYWH.order = this.order;
				return idXYWH;
			}
		}]);
		return TextBox;
	}(EditCommon2D);

	/**
	 * stage 
	 * @param {canvas = obj, id:""}
	 * 
	 * var stage = new StageMain(cvs);
	 * stage.Start();
	 * stage.Resume();
	 * stage.Pause();
	 * stage.Stop();
	 * 
	 * stage.scene //필수
	 * 
	 * 
	 * override
	 * Update,
	 * Resize,
	 * Render,
	 */

	var StageMain = function (_Stage2D) {
		inherits(StageMain, _Stage2D);

		function StageMain(cvs) {
			classCallCheck(this, StageMain);

			//필수	//ctx가져왔음. 
			//		this.scene = SceneMain; 					//scene이 할당되면 기존의 scene을 Stop하고 신규로 할당한다.
			var _this = possibleConstructorReturn(this, (StageMain.__proto__ || Object.getPrototypeOf(StageMain)).call(this, { id: "StageMain", canvas: cvs }));

			_this.scene = HetaJs_10; //1회성 scene을 수동으로 설정.
			//		this.width = stage.canvas.width;
			//		this.height = stage.canvas.height;

			//맨위에 뿌려지는 HUD render 활성화
			_this._currScene.renderAfter = true;

			//		let p1 = new Point2D({x:10, y:10});	//TODO TextBox 객체 생성  Control Rect가 감싸진 형태.
			//		this.scene.Add(p1);	//TODO id는 필요없음.

			//마우스 스크롤 가능 여부. 
			_this.scrollable = true;

			//#################### 카메라 설정 (필수)  
			// 나중에 카메라 초기 위치를 설정한다.
			var camera = new HetaJs_11(_this.ctx, { x: 0, y: 0, distance: 1000 }); //카메라 초기값 설정
			camera.eventStore = { //this = camera
				mousedown: function mousedown(stage, sender) {
					if (sender.event.ctrlKey) {
						//컨트롤키 누르면

						var rectOption = { x: sender.position.x, y: sender.position.y, width: 1, height: 1, collisionCheck: false };
						//						rectOption.color= options.bgColor;			//고정
						rectOption.lineColor = "#800080"; //고정
						rectOption.lineWidth = 1; //고정
						//collision객체 생성 
						this.collisionBox = new HetaJs_16(rectOption);
						stage.scene.Add(this.collisionBox); //TODO id는 필요없음.

						this.ctrl = true;
					}
				},
				mousemove: function mousemove(stage, sender) {
					if (this.ctrl === true) {
						//collision객체 크기 조정. 
						//조절점을 이동한다.
						//						if(this.collisionBox != null){
						this.collisionBox.max.add(sender.offset);
						//						}
					} else {
						//카메라 이동 
						this.OffsetMoveTo(-sender.cameraOffset.x, -sender.cameraOffset.y);
					}
				},
				mouseup: function mouseup(stage, sender) {
					if (this.ctrl === true) {
						this.collisionBox._position.reconstruct(); //좌표 재구성.

						//collision객체와 다른 객체들을 충돌 체크 해서 선택 상태로 변경.
						for (var i in stage.scene.Items) {
							var obj = stage.scene.Items[i];

							if (obj.CollisionCheck(this.collisionBox._position)) {
								if (obj.isSelected === false) {
									obj.Toggle();
								} else if (obj.isLineSelected === false) {
									obj.Toggle();
								}
							}
						}
						this.ctrl = false;
						//TODO collision객체 제거
						stage.scene.Remove(this.collisionBox.id);
					}
				},
				mousewheel: function mousewheel(stage, sender) {
					//기본값
					//마우스 위치를 중심으로 이동한다.
					//					let wCenter = this.GetCenter();
					//					let wPoint = sender.position;
					//					let scale = {x:this._viewport.scale.x, y: this._viewport.scale.y};

					if (stage.scrollable === false) return;

					//TODO 카메라 리미터를 설정해야함. 
					//확대 축소.
					var scaleMultiplier = 100;
					if (sender.delta > 0) {
						this.OffsetZoomTo(-scaleMultiplier);

						//						this.OffsetMoveTo(-(wPoint.x-wCenter.x) * scale.x, -(wPoint.y-wCenter.y) * scale.y);
						//						this.OffsetMoveTo((wPoint.x-wCenter.x) * this._viewport.scale.x, (wPoint.y-wCenter.y) * this._viewport.scale.y);
					} else {
						this.OffsetZoomTo(scaleMultiplier);

						//						this.OffsetMoveTo((wPoint.x-wCenter.x) / scale.x, (wPoint.y-wCenter.y) / scale.y);
						//						this.OffsetMoveTo((wPoint.x-wCenter.x) * this._viewport.scale.x, (wPoint.y-wCenter.y) * this._viewport.scale.y);
					}
				},
				click: function click(stage, sender) {
					//click이벤트를 추가 한다.
					if (this.ctrl === true) {
						this.ctrl = false;
						stage.scene.Remove(this.collisionBox.id);
					}

					stage.blur(); //모든 item이 blur되도록 한다. 
				}
				//				keydown : function(stage, sender){
				//					//빈공간에서 컨트롤 키를 누르면 
				//					if(sender.event.ctrlKey){
				//						console.log("ctrlkey down");
				//						this.ctrl = true;
				//					}
				//				},
				//				keyup : function(stage, sender){
				//					console.log("keyup code :",sender.keyCode);		//17
				//					if(sender.event.ctrlKey){
				//						
				//						//TODO collision객체 제거.
				//						this.ctrl = false;
				//					}
				//				}
			};
			_this.scene.Add(camera);

			//resize이벤트를 기본으로 설정한다.
			//		this.EventStore.AddEvent(this.canvas, 'resize', (e)=>this.Resize(e));


			//		this.mode = "EDIT";	//VIEW, EDIT, READONLY 사용자가 정합니다.

			//에디트 박스. 
			/*
	  this.textarea = null;
	  this.canvas.addEventListener('dblclick', (e)=> {
	  	
	  	
	  //			this.InsertLine(evt);
	  	this.InsertSvg(e.clientX , e.clientY);
	  //			this.InsertEditableRect(evt);
	  	//this.InsertRect(evt);
	  	//this.InsertPoint(evt);
	  			return;
	  			
	  	//=====================================================
	      if (!this.textarea) {
	      	this.textarea = document.createElement('textarea');
	  //		    	this.textarea.addEventListener('mousedown', this.mouseDownOnTextarea);
	          document.body.appendChild(this.textarea);
	      }
	  		    var x = evt.clientX;
	      var y = evt.clientY;
	      
	      this.textarea.value = "x: " + x + " y: " + y;
	      this.textarea.style.top = y +'px';
	      this.textarea.style.left = x + 'px';
	      this.textarea.style.position = 'absolute';
	  }, false);*/

			return _this;
		}

		/**
	  * svg추가 TODO 예제 입니다.
	  */
		//	InsertLine(evt){
		//		let r1 = new BezierLine2D({x:evt.offsetX, y:evt.offsetY, width:137.217, height:38.139});	//TextBox 객체 생성  Control Rect가 감싸진 형태.
		//		this.scene.Add(r1);	//id는 필요없음.
		////		this.Render();
		//	}


		/**
	  * svg추가
	  */
		//	InsertSvg(x, y){
		//		var v = this.scene.camera.ScreenToWorld(x, y);	//스크린을 월드 좌표로 변환
		//		let r1 = new WorkflowChart({x:v.x, y:v.y, width:137.217, height:38.139});	//TODO TextBox 객체 생성  Control Rect가 감싸진 형태.
		//		this.scene.Add(r1);	//TODO id는 필요없음.
		//	}

		/**
	  * editable 사각형 추가 
	  */
		//	InsertEditableRect(evt){
		//		let r1 = new EditRect2D({x:evt.offsetX, y:evt.offsetY, width:137.217, height:38.139});	//TODO TextBox 객체 생성  Control Rect가 감싸진 형태.
		//		this.scene.Add(r1);	//TODO id는 필요없음.
		//	}


		/**
	  * 사각형 추가
	  * 
	  */
		//	InsertRect(evt){
		//		let r1 = new Rect2D({x:evt.offsetX, y:evt.offsetY, width:40, height:20});	//TODO TextBox 객체 생성  Control Rect가 감싸진 형태.
		//		this.scene.Add(r1);	//TODO id는 필요없음.
		//	}


		/**
	  * 점을 추가합니다.
	  */
		//	InsertPoint(evt){
		//		//========================== 점추가. ====================
		//		let p1 = new Point2D({x:evt.offsetX, y:evt.offsetY});	//TODO TextBox 객체 생성  Control Rect가 감싸진 형태.
		//		let id = this.scene.Add(p1);	//TODO id는 필요없음.
		//	}


		//	mouseDownOnTextarea(e) {
		//	    var x = this.textarea.offsetLeft - e.clientX,
		//        y = this.textarea.offsetTop - e.clientY;
		//	    let that = this;
		//	    function drag(e) {
		//	        that.textarea.style.left = e.clientX + x + 'px';
		//	        that.textarea.style.top = e.clientY + y + 'px';
		//	    }
		//	    function stopDrag() {
		//	        document.removeEventListener('mousemove', drag);
		//	        document.removeEventListener('mouseup', stopDrag);
		//	    }
		//	    document.addEventListener('mousemove', drag);
		//	    document.addEventListener('mouseup', stopDrag);
		//	}


		/**
	  * text 충돌체크 여부 설정. 박스만.. WorkflowChart 만.
	  */


		createClass(StageMain, [{
			key: 'changeCollision',
			value: function changeCollision(isCheck) {
				var itemArr = this.scene.searchInstance(WorkflowChart);
				for (var i in itemArr) {
					var item = itemArr[i];

					item.ChangeTextCollision(isCheck);
				}
			}

			/**
	   * TODO 안써요.안써요.안써요.안써요.안써요.안써요.
	   * 객체의 속성을 변경해 줍니다.
	   * this.stage.changeObjectValue(p||[], {text: txt});				//option값을 변경.
	   */

		}, {
			key: 'changeObjectValue',
			value: function changeObjectValue(targets, options) {
				var itemArr = this.scene.searchItems({ isSelected: true });
				for (var i in itemArr) {
					var item = itemArr[i];
				}

				//this.scene.getObject(objectId);
				//		for(var i in targets){
				//			targets[i]
				//		}
			}

			/**
	   * 조회 조건으로 item을 가져온다.
	   * @return Array<Item>
	   */

		}, {
			key: 'searchObjectItem',
			value: function searchObjectItem(opt) {
				return this.scene.searchItems(opt); //isSelected : true   datasource : "SVG_MENU"
			}

			/**
	   * 현재 카메라의 좌측 어딘가를 시작 
	   * 입력 history가 있으면  마지막 입력된 위치의 우측으로 150 이동된 지점
	   * this.latestPoint 는 addObj할때 설정된다.
	   */

		}, {
			key: 'getLatestPosition',
			value: function getLatestPosition() {
				//		let minX = this.scene.camera._viewport.min.x;
				//		let minY = this.scene.camera._viewport.min.y;
				//		let maxX = this.scene.camera._viewport.max.x;
				//		let maxY = this.scene.camera._viewport.max.y;
				//		let mouseup = this.EventStore.getHistory("mouseup");

				if (this.latestPoint == null) {
					//camera의 FOV가 1이라서 distance가 화면의 길이 입니다.
					return { x: this.scene.camera._viewport.min.x + 10, y: this.scene.camera._viewport.min.y + 10 };
				} else {

					//카메라를 벋어나면 약간 아래로 내리고 좌측으로 붙인다.
					if (!this.scene.camera._viewport.containsPoint(this.latestPoint)) {
						this.latestPoint.x = this.scene.camera._viewport.min.x + 10;
						this.latestPoint.y = this.latestPoint.y + 50;
					}

					var point = { x: this.latestPoint.x, y: this.latestPoint.y };
					return point;
				}
			}

			/**
	   * Center좌표를 가져온다.  
	   * TODO 약간씩 우측으로 이동 시키는게 좋겠다. 
	   */

		}, {
			key: 'getCenterPosition',
			value: function getCenterPosition() {
				return { x: this.scene.camera._position.x, y: this.scene.camera._position.y };
			}

			/**
	   * 객체를 입력
	   * this.stage.addObject("TEXT",{ x : latest.x, y : latest.y, text: text} );
	  	//this.stage.addObject("IMAGE",{x: latest.x, y:latest.y,width: 50, height: 60, image:'/dkfd/dfdf.gif', url:'', text:''});
	  	this.stage.addObject("SVG_01",{x: latest.x, y:latest.y,width: 50, height: 60, text:"", url:"", });
	   */

		}, {
			key: 'addObject',
			value: function addObject(type, opts) {
				var id = null;
				//mode = "EDIT / VIEW" 뷰모드 일때는 수정 동작의 일부가 빠진다.
				var options = { mode: this.mode, id: opts.id, x: opts.x, y: opts.y, width: opts.width, height: opts.height, order: opts.order };
				if (type == "TEXT") {

					//택스트 박스 사이즈
					options.width = opts.width || 160;
					options.height = opts.height || 160;
					options.text = opts.text || ''; //필수값


					var cb = HetaJs_1.Load("textOptionsCallback");
					if (typeof cb == "function") {
						options = cb(opts.id, this, options);
					}
					//			
					if (opts.bgColor != null) options.bgColor = opts.bgColor; //배경색 컬러
					if (opts.textColor != null) options.textColor = opts.textColor; //글짜색 컬러
					if (opts.font != null) options.font = opts.font; //글짜 크기	14
					//			if(opts.fontStyle != null) options.fontStyle = opts.fontStyle;		//글골	serif

					var tb = new TextBox(options); //TODO TextBox 객체 생성  Control Rect가 감싸진 형태. 
					id = this.scene.Add(tb);
				} else if (type == "IMAGE") {

					//이미지 박스 사이즈
					options.width = opts.width || 100;
					options.height = opts.height || 100;

					//최소 사이즈를 30x30으로 잡는다.
					if (options.width < 30) options.width = 30;
					if (options.height < 30) options.height = 30;

					options.url = opts.url; //필수값 

					var _tb = new ImageBox(options);
					id = this.scene.Add(_tb);
				} else {

					//박스 사이즈
					options.width = opts.width || 160;
					options.height = opts.height || 45;
					options.dataSource = type; //필수값

					var _cb = HetaJs_1.Load("itemOptionsCallback");
					if (typeof _cb == "function") {
						options = _cb(opts.id, this, options);
					}

					if (opts.font != null) options.font = opts.font || 'normal normal 12px "serif"'; //icon컬러

					options.text = opts.text || '...';
					options.url = opts.url;

					if (opts.color != null) options.color = opts.color; //icon컬러
					if (opts.bgColor != null) options.bgColor = opts.bgColor; //배경색 컬러
					if (opts.textColor != null) options.textColor = opts.textColor; //글짜색 컬러

					//######################## 글짜 크기에 맞게 사이즈 설정.
					if (opts.width == null) {
						//최초 입력 값이 없을때만.
						this.ctx.save();
						this.ctx.font = options.font;
						var w = this.ctx.measureText(options.text).width;
						options.width = w + 70;
						this.ctx.restore();
					}

					var r1 = new WorkflowChart(options); //TODO TextBox 객체 생성  Control Rect가 감싸진 형태.
					id = this.scene.Add(r1); //TODO id는 필요없음.
				}

				this.latestPoint = { x: options.x + options.width + 15, y: opts.y };

				//		this.Render();
				return id;
			}

			/**
	   * 객체를 수정 (이전에 linkObj를 저장해놔야 한다.)
	   * this.stage.modifyObject("itemid","SVG_MENU",{ text: text, url: url} );
	   */

		}, {
			key: 'modifyObject',
			value: function modifyObject(itemId, type, opts) {
				var item = this.scene.getItem(itemId);
				if (item != null) {
					this.setIcon(item, type);
					this.setText(item, opts.text);
					this.setUrl(item, opts.url);
				}
			}

			/**
	   * 객체를 제거 - 붙어 있는 라인도 제거 
	   * @param unit Object || [unit Object]
	   */

		}, {
			key: 'removeObject',
			value: function removeObject(id) {
				this.scene.Remove(id);
			}

			/**
	   * 선택된 라인과 객체를 모두 가져온다.  
	   * @return [items]
	   */

		}, {
			key: 'getSelectedAllObjects',
			value: function getSelectedAllObjects() {
				//WorkflowChart객체에만 isSelected가 있습니다.
				var itemArr = this.scene.searchItems({ isSelected: true, isLineSelected: true }); //선택된것만 가져온다.
				return itemArr;
			}

			/**
	   * 선택된 Line(item)객체를 가져온다. 
	   * @return [items]
	   */

		}, {
			key: 'getSelectedLineObjects',
			value: function getSelectedLineObjects() {
				//WorkflowChart객체에만 isSelected가 있습니다.
				var itemArr = this.scene.searchItems({ isLineSelected: true }); //선택된것만 가져온다.
				return itemArr;
			}

			/**
	   * 모든 Line(item)객체를 가져온다. 
	   * @return [items]
	   */

		}, {
			key: 'getAllLineObjects',
			value: function getAllLineObjects() {
				return this.scene.searchInstance(BezierLine2D);

				//		let result = [];
				//		//==========모든 item을 조회 해서
				//		for ( let i in this.Items) {
				//			let item = this.Items[i];	//item
				//			if(item instanceof BezierLine2D){
				//				result.push(item);
				//			}
				//		}
				//		return result;
			}

			/**
	   * 선택된 item객체를 가져온다. 
	   * @return [items]
	   */

		}, {
			key: 'getSelectedObjects',
			value: function getSelectedObjects() {
				//WorkflowChart객체에만 isSelected가 있습니다.
				var itemArr = this.scene.searchItems({ isSelected: true }); //선택된것만 가져온다.
				return itemArr;
			}

			/**
	   * 모든 Workflow(item)객체를 가져온다. 
	   * @return [items]
	   */

		}, {
			key: 'getAllItemObjects',
			value: function getAllItemObjects() {

				return this.scene.searchInstance(EditCommon2D);
				//		let result = [];
				//		//==========모든 item을 조회 해서
				//		for ( let i in this.Items) {
				//			let item = this.Items[i];	//item
				//			if(item instanceof EditCommon2D){
				//				result.push(item);
				//			}
				//		}
				//		return result;
			}

			/**
	   * 정렬하기
	   * LEFT, TOP, RIGHT, BOTTOM, CENTER_H, CENTER_V
	   */

		}, {
			key: 'alignObjects',
			value: function alignObjects(itemArr, dir) {

				var min = { x: null, y: null };
				var max = { x: null, y: null };
				var center = { x: null, y: null };

				//최소값 , 최대값 찾기 
				for (var i = 0; i < itemArr.length; i++) {
					//Workflow는 아래와 같이 boundbox기준으로 정렬을 계산한다.
					//빈값일땐 처음값을 넣기
					if (min.x == null) min.x = itemArr[i]._boundbox.min.x;
					if (min.y == null) min.y = itemArr[i]._boundbox.min.y;
					if (max.x == null) max.x = itemArr[i]._boundbox.max.x;
					if (max.y == null) max.y = itemArr[i]._boundbox.max.y;
					//최소 / 최대값 구하기
					if (min.x > itemArr[i]._boundbox.min.x) min.x = itemArr[i]._boundbox.min.x;
					if (min.y > itemArr[i]._boundbox.min.y) min.y = itemArr[i]._boundbox.min.y;
					if (max.x < itemArr[i]._boundbox.max.x) max.x = itemArr[i]._boundbox.max.x;
					if (max.y < itemArr[i]._boundbox.max.y) max.y = itemArr[i]._boundbox.max.y;
				}

				//공간 중심 설정
				center.x = min.x + (max.x - min.x) / 2;
				center.y = min.y + (max.y - min.y) / 2;

				//나머지 값을 변경
				for (var i = 0; i < itemArr.length; i++) {
					var box = itemArr[i]._boundbox;
					var offset = { x: 0, y: 0 };
					if (dir == "LEFT") {
						//min.x만 통일한다.
						offset.x = min.x - box.min.x;
					} else if (dir == "RIGHT") {
						//max.x만 통일한다.
						offset.x = max.x - box.max.x;
					} else if (dir == "TOP") {
						offset.y = min.y - box.min.y;
					} else if (dir == "BOTTOM") {
						offset.y = max.y - box.max.y;
					} else if (dir == "CENTER_H") {
						//가로 중심
						offset.x = center.x - box.GetCenter().x;
					} else if (dir == "CENTER_V") {
						//세로 중심
						offset.y = center.y - box.GetCenter().y;
					}

					box.Translate(offset);
				}
			}

			/**
	   * 기본 열기 여부를 변경한다. 
	   */
			//	setDefaultOpen(itemId, YN){
			//		try{	
			//			let itemObj = this.scene.getItem(itemId);
			//			if(itemObj != null){
			//				itemObj.ChangeDefaultOpen(YN);
			//			}
			//		}catch(e){}
			//	}

			/**
	   * tooltip을 넣어준다.
	   */

		}, {
			key: 'setTooltip',
			value: function setTooltip(itemObj, str) {
				try {
					if (typeof itemObj == 'string') {
						itemObj = this.scene.getItem(itemObj);
					}
					itemObj.ChangeTooltip(str);
				} catch (e) {}
			}

			/**
	   * 컬러를 변경합니다.	//옵젝트는 아이콘을 변경, 라인은 선색을 변경
	   */

		}, {
			key: 'setIcon',
			value: function setIcon(itemObj, dataSource) {
				try {
					itemObj.ChangeIcon(dataSource);
				} catch (e) {}
			}
			/**
	   * 컬러를 변경합니다.	//옵젝트는 아이콘을 변경, 라인은 선색을 변경
	   */

		}, {
			key: 'setColor',
			value: function setColor(itemObj, color) {
				try {
					itemObj.ChangeColor(color);
				} catch (e) {}
			}
			/**
	   * 컬러를 변경합니다.	//옵젝트는 배경 변경, 라인은 변경없음
	   */

		}, {
			key: 'setBgColor',
			value: function setBgColor(itemObj, color) {
				try {
					itemObj.ChangeBgColor(color);
				} catch (e) {}
			}
			/**
	   * 컬러를 변경합니다.	//옵젝트는 text 변경, 라인도 text 변경
	   */

		}, {
			key: 'setTextColor',
			value: function setTextColor(itemObj, color) {
				try {
					itemObj.ChangeTextColor(color);
				} catch (e) {}
			}
			/**
	   * text를 변경합니다.
	   */

		}, {
			key: 'setText',
			value: function setText(itemObj, text) {
				try {
					itemObj.ChangeText(text);
				} catch (e) {}
			}
			/**
	   * text를 변경합니다.
	   */

		}, {
			key: 'setUrl',
			value: function setUrl(itemObj, url) {
				try {
					itemObj.ChangeUrl(url);
				} catch (e) {}
			}

			/**
	   * 택스트 사이즈를 바꾼다.
	   */

		}, {
			key: 'setFont',
			value: function setFont(itemObj, font) {
				try {
					itemObj.ChangeFont(font);
				} catch (e) {}
			}
			/**
	   * 택스트 사이즈를 바꾼다.
	   */

		}, {
			key: 'setFontSize',
			value: function setFontSize(itemObj, size) {
				try {
					itemObj.ChangeFontSize(size);
				} catch (e) {}
			}

			/** 
	   * 택스트 폰트를 바꾼다.
	   * normal italic oblique inherit 
	   */

		}, {
			key: 'setFontStyle',
			value: function setFontStyle(itemObj, style) {
				try {
					itemObj.ChangeFontStyle(style);
				} catch (e) {}
			}

			/** 
	   * 택스트 두깨를 바꾼다.
	   * normal bold bolder lighter auto inherit 
	   */

		}, {
			key: 'setFontWeight',
			value: function setFontWeight(itemObj, weight) {
				try {
					itemObj.ChangeFontWeight(weight);
				} catch (e) {}
			}
			/** 
	   * 택스트 font-face를  바꾼다.
	   * 글꼴 
	   */

		}, {
			key: 'setFontFace',
			value: function setFontFace(itemObj, face) {
				try {
					itemObj.ChangeFontFace(face);
				} catch (e) {}
			}

			/**
	   * 아이템과 라인을 선택해제한다.
	   */

		}, {
			key: 'blur',
			value: function blur() {
				//모든 선택된 객체를 가져와서  Item
				var objList = this.getSelectedAllObjects();
				for (var i in objList) {
					objList[i].Toggle();
				}

				//====================== blur되면 다른 팝업도 닫아야 한다.
				try {
					var cb = HetaJs_1.Load("CanvasBlur");
					if (typeof cb == "function") {
						options = cb("", this, {});
					}
				} catch (e) {}
			}

			/**
	   * Item내부의 Unit의 스타일을 수정한다.
	  	this.stage.changeStyle(p||[], {lineType: "DASH"});
	  	this.stage.changeStyle(lineArr, {lineWidth: 1.5});
	   */

		}, {
			key: 'changeLineStyle',
			value: function changeLineStyle(lineObj, opts) {
				lineObj.ChangeLineStyle(opts); //라인에 스타일을 적용. 
			}

			/**
	   * 선택 객체 삭제하기 
	   */

		}, {
			key: 'removeObjects',
			value: function removeObjects(objArr) {
				for (var i in objArr) {
					this.scene.Remove(objArr[i].id);
				}
			}

			/**
	   * 선택 객체 삭제하기  //아직 안씀.
	   */

		}, {
			key: 'removeAll',
			value: function removeAll() {
				this.latestPoint = null; // 객체 표시 위치도 초기화 
				this.RemoveAll();
			}
		}, {
			key: 'zoomIn',
			value: function zoomIn(s) {
				this.scene.camera.OffsetZoomTo(-s);
			}
		}, {
			key: 'zoomOut',
			value: function zoomOut(s) {
				this.scene.camera.OffsetZoomTo(s);
			}
		}, {
			key: 'zoomToFit',
			value: function zoomToFit() {
				var ox = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
				var oy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				var w = arguments[2];
				// dx는 x축의 여분 공간 , dy 는 y축 여분 공강 (moveto되는 값이다 )


				//너비를 먼저 줄인다.
				if (w == null) {
					w = this.canvas.width;
				}

				var size = this.getItemBoundSize();

				var h = this.canvas.height;

				//내부 width
				var width = size.x;
				var height = width / (w / h);
				//scale이 문제
				var scaleX = w / width;
				var scaleY = h / height;

				var scale = scaleX < scaleY ? scaleX : scaleY;

				this.scene.camera.SetDistanceFromScale(scale); //scale값으로 카메라 거리를 측정한다.X만.
				//		}


				var center = this.getCenterOfAllItems();

				//			var half = flowchart.getItemBoundSize().x / 2 ;	//모든 객체의 box 사이즈. 즉, 크기 ... x, y  
				//			return {x:(-flowchart.canvas.width/2)
				//			
				//			
				//			//화면상에서 더하기
				var c = this.scene.camera.WorldToScreen(center.x, center.y);
				ox = c.x - ox;
				oy = c.y - oy;
				//			
				//			//화면 픽셀값을 받아서 이동 시킨다.
				var wOffset = this.scene.camera.ScreenToWorld(ox, oy);

				this.scene.camera.MoveTo(wOffset.x, wOffset.y);
			}

			/**
	   * 모든 객체의 중심점을 가져온다. 
	   */

		}, {
			key: 'getCenterOfAllItems',
			value: function getCenterOfAllItems() {
				var itemArr = this.scene.searchInstance(EditCommon2D);

				var min = { x: null, y: null };
				var max = { x: null, y: null };
				var center = { x: null, y: null };

				//최소값 , 최대값 찾기 
				for (var i = 0; i < itemArr.length; i++) {
					//Workflow는 아래와 같이 boundbox기준으로 정렬을 계산한다.
					//빈값일땐 처음값을 넣기
					if (min.x == null) min.x = itemArr[i]._boundbox.min.x;
					if (min.y == null) min.y = itemArr[i]._boundbox.min.y;
					if (max.x == null) max.x = itemArr[i]._boundbox.max.x;
					if (max.y == null) max.y = itemArr[i]._boundbox.max.y;
					//최소 / 최대값 구하기
					if (min.x > itemArr[i]._boundbox.min.x) min.x = itemArr[i]._boundbox.min.x;
					if (min.y > itemArr[i]._boundbox.min.y) min.y = itemArr[i]._boundbox.min.y;
					if (max.x < itemArr[i]._boundbox.max.x) max.x = itemArr[i]._boundbox.max.x;
					if (max.y < itemArr[i]._boundbox.max.y) max.y = itemArr[i]._boundbox.max.y;
				}

				//공간 중심 설정
				center.x = min.x + (max.x - min.x) / 2;
				center.y = min.y + (max.y - min.y) / 2;
				return center;
			}

			/**
	   * 전체 Item들의 boundbox의 크기를 가져온다.
	   */

		}, {
			key: 'getItemBoundSize',
			value: function getItemBoundSize() {
				var itemArr = this.scene.searchInstance(EditCommon2D);

				var min = { x: null, y: null };
				var max = { x: null, y: null };
				var result = { x: null, y: null };

				//최소값 , 최대값 찾기 
				for (var i = 0; i < itemArr.length; i++) {
					//Workflow는 아래와 같이 boundbox기준으로 정렬을 계산한다.
					//빈값일땐 처음값을 넣기
					if (min.x == null) min.x = itemArr[i]._boundbox.min.x;
					if (min.y == null) min.y = itemArr[i]._boundbox.min.y;
					if (max.x == null) max.x = itemArr[i]._boundbox.max.x;
					if (max.y == null) max.y = itemArr[i]._boundbox.max.y;
					//최소 / 최대값 구하기
					if (min.x > itemArr[i]._boundbox.min.x) min.x = itemArr[i]._boundbox.min.x;
					if (min.y > itemArr[i]._boundbox.min.y) min.y = itemArr[i]._boundbox.min.y;
					if (max.x < itemArr[i]._boundbox.max.x) max.x = itemArr[i]._boundbox.max.x;
					if (max.y < itemArr[i]._boundbox.max.y) max.y = itemArr[i]._boundbox.max.y;
				}

				result.x = max.x - min.x;
				result.y = max.y - min.y;

				return result;
			}

			/**
	   * json으로 불러오기 
	   * @param {objects : [], links : [], camera : {} }
	   * 
	   * 
	  			//id까지 입력해서 객체를 삽입한다.
	  //				return {id : this.id,
	  //					x:pos.x, 
	  //					y:pos.y,
	  //					width:size.x,
	  //					height:size.y,
	  //					color:this.icon.color, 
	  //					dataSource:this.icon.dataSource,		
	  //					bgColor:this._rect.color,
	  //					text:this.text.text,
	  //					font:this.text.font,
	  //					textColor:this.text.color,
	  //					url:this.text.url
	  //				};
	  			
	  //				링크 {id : this.id,
	  //					source : {id:this.attachers.source.parentId , direction: this.attachers.source.direction}, 
	  //					targetId : {id:this.attachers.target.parentId , direction: this.attachers.target.direction},
	  //					lineColor : this._line.lineColor,
	  //					text:this._center.text,
	  //					textColor:this._center.color,
	  //					font:this._center.font,
	  ////					url:this._center.url,						//중앙 Text링크 (TODO 아직없음)
	  //				};
	  			
	   */

		}, {
			key: 'loadJson',
			value: function loadJson(json, cb) {
				if (json != null && json.objects != null && json.objects.length > 0) {

					//=================== 객체 넣기 
					for (var i in json.objects) {
						var obj = json.objects[i];

						if (obj.x == null || obj.y == null) {
							//					if(this.latestPoint == null ) this.latestPoint = {x:0, y:0};		//초기 값을 중앙으로 설정 
							var latestPoint = this.getLatestPosition();
							obj.x = latestPoint.x;
							obj.y = latestPoint.y;
						}

						this.addObject(obj.dataSource, obj); //객체 추가.		
					}

					//================== 연결선 넣기
					if (json.links != null && json.links.length > 0) {
						for (var _i in json.links) {
							var link = json.links[_i];

							//console.log(link.source.id);
							//console.log(link.target.id);

							//라인 연결
							var sourceItem = this.scene.getItem(link.source.id);
							var targetItem = this.scene.getItem(link.target.id);
							//console.log(sourceItem);
							//console.log(targetItem);


							if (sourceItem != null && targetItem != null) {

								//console.log(link.source.direction);
								//console.log(link.target.direction);

								// attacher = workflowchartobj._bottomAttacher
								var sourceAttacher = sourceItem["_" + link.source.direction + "Attacher"];
								var targetAttacher = targetItem["_" + link.target.direction + "Attacher"];

								sourceAttacher.parentId = sourceItem.id;
								targetAttacher.parentId = targetItem.id;
								//console.log(sourceAttacher);
								//console.log(targetAttacher);
								if (sourceAttacher != null && targetAttacher != null) {
									sourceItem._lineConnecting(this, sourceAttacher, targetAttacher, link); //라인 연결
								}
							}
						}
					}

					//================== 카메라 설정
					if (json.camera != null && json.camera.distance != null) {
						if (isNaN(json.camera.x)) json.camera.x = 0;
						if (isNaN(json.camera.y)) json.camera.y = 0;
						this.scene.camera.MoveTo(json.camera.x, json.camera.y);
						this.scene.camera.ZoomTo(json.camera.distance); // 그냥 거리를 강제로 설정 width에 따라 크기가 변한다.
					}

					if (cb != null) cb(this, json);
				} else {
					console.log("Fail to Load : There are empty Data");
				}
			}

			/**
	   * 스케일을 강제로 넣어서 비율을 최초 입력과 동일하게 유지한다. 
	   * scale로 distance를 결정짓게 한다. 
	   */

		}, {
			key: 'SetScaleX',
			value: function SetScaleX(scaleX) {
				//		if(json.camera.scaleX != null)
				this.scene.camera.SetDistanceFromScale(scaleX); //비율을 유지하면서 거리를 설정해준다.
			}

			/**
	   * 데이터 저장용 객체 생성. 카메라 포함
	   * @return {objects : [], links : [], camera : {} }
	   * 
	   *  
	  			//id까지 입력해서 객체를 삽입한다.
	  //				return {id : this.id,
	  //					x:pos.x, 
	  //					y:pos.y,
	  //					width:size.x,
	  //					height:size.y,
	  //					color:this.icon.color, 
	  //					dataSource:this.icon.dataSource,		
	  //					bgColor:this._rect.color,
	  //					text:this.text.text,
	  //					font:this.text.font,
	  //					textColor:this.text.color,
	  //					url:this.text.url
	  //				};
	  			
	  //				링크 {id : this.id,
	  //					source : {id:this.attachers.source.parentId , direction: this.attachers.source.direction}, 
	  //					targetId : {id:this.attachers.target.parentId , direction: this.attachers.target.direction},
	  //					lineColor : this._line.lineColor,
	  //					text:this._center.text,
	  //					textColor:this._center.color,
	  //					font:this._center.font,	
	  ////					url:this._center.url,						//중앙 Text링크 (TODO 아직없음)
	  //				};
	  			
	   */

		}, {
			key: 'getAllData',
			value: function getAllData() {
				var objects = [];
				var links = [];

				//객체 목록 정리
				var objList = this.getAllItemObjects();

				for (var i in objList) {
					objects.push(objList[i].getSaveData());
				}

				//연결 목록 정리
				var lineList = this.getAllLineObjects();
				for (var _i2 in lineList) {
					links.push(lineList[_i2].getSaveData());
				}

				var center = this.getCenterOfAllItems();
				return {
					objects: objects,
					links: links,
					camera: { x: center.x, y: center.y, distance: this.scene.camera.distance, scaleX: this.scene.camera.GetScale().x
						//camera : {x : this.scene.camera.x , y: 	this.scene.camera.y , distance : this.scene.camera.distance, scaleX:this.scene.camera.GetScale() }
					} };
			}

			/**
	   * 이미지 캡쳐 (아직 안쓴다.)
	   */

		}, {
			key: 'chaptureImage',
			value: function chaptureImage() {
				return null;
			}

			/*	
	  							this.stage.alignObjects(pArr,direction);	//left정렬 
	  						this.stage.setColor(pArr, color);	//p는 array
	  						//this.stage.setObjectScale(p, autoSize);	// [ width , height ]
	  						this.stage.changeLineStyle(p, {width: w});
	  						this.stage.changeLineStyle(p||[], {type: "DASH"});
	  		this.stage.changeObjectValue(p||[], {text: txt});				//option값을 변경.
	  		this.stage.blur();									//선택한 stage 객체를 blur한다.
	  		this.stage.getLatestPosition();	//최근 액션이 일어 났던 위치. 없으면 화면에서 center를 가져온다. x,y
	  		this.stage.getSelectedObjects();
	  		this.stage.removeObjects(pArr);
	  		
	  		
	  		
	  						this.stage.removeObject();
	  		this.stage.setGroup(pArr, true);	//그룹으로 확대 축소 이동이 된다.
	  		
	  		//------------------------
	  		//p.translate();
	  		//p.rotate();
	  		//p.scale();
	  		
	  		//p.controls();
	  		//object list 
	  */

			//	Update(){
			//		super.Update();	//필수


			//		this.gl.viewport(0,0,this.canvas.width, this.canvas.height);
			//		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			//		
			//		this.gl.enable(this.gl.BLEND);
			//		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
			//		this.gl.flush();
			//network체크 
			//	}

		}, {
			key: 'Stop',
			value: function Stop() {
				get(StageMain.prototype.__proto__ || Object.getPrototypeOf(StageMain.prototype), 'Stop', this).call(this); //대기상태로 들어간다.
				//Overraid
				//		this.EventStore.RemoveEvent(window, 'resize',(e)=>this.Resize(e));		//3번 cb 
			}
		}, {
			key: 'Resize',
			value: function Resize(e) {
				get(StageMain.prototype.__proto__ || Object.getPrototypeOf(StageMain.prototype), 'Resize', this).call(this, e);

				//		try{ 	this.Render();	}catch(e){}	//화면을 갱신해준다.		//초기 호출시 this는 null 입니다. try해줌 
			}
		}]);
		return StageMain;
	}(HetaJs_7);

	var MouseControl = function MouseControl(stage) {
		classCallCheck(this, MouseControl);


		var canvas = stage.canvas;
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

	//import {Stage} from 'hetajs';
	/**
	 * 
	 * hetajs.init("forest01");
	 * @param sceneName : 시작scene
	 */

	function init(cvs) {

		var stage = new StageMain(cvs);

		//#################### 컨트롤러 scene에 장착 합니다. TODO scene에 바뀔때 마다 조작 이벤트가 바껴야 함????
		new MouseControl(stage); //마우스 이벤트 장착

		return stage; //프레임관리 에니메이션을 넣어준다.window.requestAnimationFrame
	}

	/**
	 * Workflow framework
	 */
	 //es6 테스트 상속

	exports.DataSource = HetaJs_1;
	exports.init = init;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
