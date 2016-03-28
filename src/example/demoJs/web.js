var bookWeb = angular.module('bookWeb', ['ngRoute', 'bookControllers']);
bookWeb.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'http.html',
		controller: 'HttpGetDataCtrl'
	}).when('/:bookId', {
		templateUrl: 'httpDetail',
		controller: 'BookDetailCtrl'
	}).others({redirectTo:'http://baidu.com'});
}])