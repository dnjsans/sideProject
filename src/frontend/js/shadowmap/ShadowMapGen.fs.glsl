precision mediump float;

uniform vec3 pointLightPosition;			//라이트의 위치.
uniform vec2 shadowClipNearFar;			//셰도 멥 클리핑.

varying vec3 fPos;

void main()
{
	vec3 fromLightToFrag = (fPos - pointLightPosition);	//라이트부터 시작.

	//중요한 셰도우 공식.
	//0-1 crossExpected to farderExpected
	float lightFragDist = (length(fromLightToFrag) - shadowClipNearFar.x)/
			(shadowClipNearFar.y - shadowClipNearFar.x);

	gl_FragColor = vec4(lightFragDist, lightFragDist, lightFragDist, 1.0);
}
