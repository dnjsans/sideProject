module.exports = {
	locales:['en', 'ko'],   //사용언어 설정 / 'de' 나 'ja' , 'fr' 등등 추가 가능 
	directory: __dirname + '/locales', // 사용언어에 대한 템플릿폴더 생성위치,  
	defaultLocale: 'en',    //기본 사용언어 설정 
	cookie: 'lang',         //쿠키의 이름 설정, 개발자가 자유롭게 이름 설정가능
	autoReload: true,
	//updateFiles: false,   //없는 param을 있으면 json파일을 변경한다
	//syncFiles: false,		//로케일 정보 동기화 
	objectNotation:true 
};