precision mediump float;

//struct DirectionalLight
//{
//	vec3 direction;
//	vec3 color;
//};
//struct PointLight{
//{
//	vec3 position;
//	vec4 specularColor;
//	vec4 diffuseColor;
//	float range;
//};

// varying vec2 fragTexCoord;
// uniform sampler2D sampler;		//texture zero to texture size

//uniform vec3 ambientLightIntensity;
//uniform DirectionalLight sun;


uniform vec3 pointLightPosition;
uniform vec4 meshColor;

varying vec3 fPos;
varying vec3 fNorm;



void main(){

	vec3 toLightNormal = normalize(pointLightPosition - fPos);
	float lightIntensity = 0.6 + 0.4 * max(dot(fNorm, toLightNormal),0.0);

	gl_FragColor = vec4(meshColor.rgb * lightIntensity, meshColor.a);



	//vec3 ambientLightIntensity = vec3(0.2, 0.2, 0.5);		//phong 강렬 밤낮
	//vec3 sunlightIntensity = vec3(0.9, 0.9, 0.9);			//phong 태양광 강도 컬러 (저녁 낮)
	//vec3 sunlightDirection = normalize(vec3(1.0,4.0,-1.0));	//phong 방향 z가 -여야 앞에서 비춘다.

//	vec3 surfaceNormal = normalize(fragNormal);		//phong 택스쳐의 노멀.
//	vec3 normSunDir = normalize(sun.direction);		//phong 택스쳐의 노멀.
//
//	vec4 texel = texture2D(sampler, fragTexCoord);			//phong 택스쳐를 곱해야함.
//
//	vec3 lightIntensity = ambientLightIntensity + sun.color * max(dot(fragNormal, normSunDir),0.0);
//
//	gl_FragColor = vec4(texel.rgb * lightIntensity, texel.a);				//phong

}
