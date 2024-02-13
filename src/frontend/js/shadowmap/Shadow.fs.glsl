precision mediump float;

uniform vec3 pointLightPosition;
uniform vec4 meshColor;

uniform samplerCube lightShadowMap;
uniform vec2 shadowClipNearFar;

varying vec3 fPos;
varying vec3 fNorm;

void main()
{
	vec3 toLightNormal = normalize(pointLightPosition - fPos);

	//gen과 동일하다.  거리에 따라서 0-1값이 나온다. 공식.
	float fromLightToFrag =
	(length(fPos - pointLightPosition)- shadowClipNearFar.x)
	/
	(shadowClipNearFar.y - shadowClipNearFar.x);


	//두번째 인지로 빛의 방향을 받는다. rgb중에 1개만 받으면 된다. 상관없음.
	//float shadowMapValue = textureCube(lightShadowMap, toLightNormal).r;
	//라이트 노멀을 리벌스 해야 제대로 나온다.
	float shadowMapValue = textureCube(lightShadowMap, -toLightNormal).r;

	float lightIntensity = 0.6;
	if((shadowMapValue +0.003) > fromLightToFrag){	//fromLightToFrag보다 샤도멥이 크면 빛에 노출된것.
//	if((shadowMapValue) > fromLightToFrag){	//fromLightToFrag보다 샤도멥이 크면 빛에 노출된것.
		lightIntensity += 0.4 * max(dot(fNorm, toLightNormal), 0.0);
	}

	gl_FragColor = vec4(meshColor.rgb * lightIntensity, meshColor.a);
}
