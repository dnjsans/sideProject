precision mediump float;

uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

attribute vec3 vPos;
attribute vec3 vNorm;
//attribute vec2 vertTexCoord;	//$$택스쳐  이미지 배열.

varying vec3 fPos;
varying vec3 fNorm;
//varying vec2 fragTexCoord;

void main(){
	fPos = (mWorld * vec4(vPos, 1.0)).xyz;
	fNorm = (mWorld * vec4(vNorm, 0.0)).xyz;

	gl_Position = mProj * mView * mWorld * vec4(vPos, 1.0);
}
