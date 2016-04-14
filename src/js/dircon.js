var myModule=angular.module('myModule',[]);
myModule.controller("MoveCtrl",['$scope',function($scope){
	$scope.loadData=function(){
		console.log('加载数据呢');
	};
}]);

myModule.directive("loader",function(){
	return {
		restrict:'AE',
		template:'<div>hah</div>',
		replace:true,
		link:function(scope,element,attr){
			element.bind('mouseenter',function(){
				scope.loadData();
			});
		}
	}
});