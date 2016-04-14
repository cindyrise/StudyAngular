var bookApp = angular.module('bookApp', ['ngRoute', 'bookControllers']);
bookApp.config(function($routeProvider) {
	$routeProvider.when('/hello', {
		templateUrl: 'tpls/bookList.html',
		controller: 'BookListCtrl'
	}).when('/list', {
		templateUrl: 'tpls/bookDetail.html',
		controller: 'BookDetailCtrl'
	}).otherwise({
		redirectTo: '/hello'
	});
}); //
//http://127.0.0.1:8020/StudyAngular/src/index.html////
//http://127.0.0.1:8020/StudyAngular/src/tpls/bookList.htmlsl//d////