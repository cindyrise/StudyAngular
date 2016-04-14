var myMDirective = angular.module("myMDirective", []);
//缓存模板
//myMDirective.run(function($templateCache){
//	$templateCache.put("cacheM","<div>ggg</div>");
//});
//myMDirective.directive("hello",function($templateCache){
//	return{
//		restrict:'AE',
//		template:$templateCache.get("cacheM"),
//		replace:true
//	}
//})

//一般写法
//myMDirective.directive("hello", function() {
//	return {
//		restrict: 'EACM',
//		//template: '<div>这是一个指令</div>',
//		templateUrl:'../tpls/hello.html',
//		replace: true////
//	}
//});
//replace/transclude
myMDirective.directive("hello", function() {
	return {
		restrict: 'E',
		//template: '<div>这是一个指令</div>',
		//templateUrl:'../tpls/hello.html',
		//replace: true////
		transclude:true,
		template:'<div>hellow </div><div ng-transclude></div>',
		link:function(){
			alert("zheshi");//
		}
	}
});
