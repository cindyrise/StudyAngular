var bookControllers = angular.module('bookControllers', []);
bookControllers.controller('BookListCtrl', ['$scope', function($scope) {
	$scope.books = [{
		"name": "Nexus S",
		"author": "Fast just got faster with Nexus S.",
		"bookId": "01"
	}, {
		"name": "Motorola XOOM™ with Wi-Fi",
		"author": "The Next, Next Generation tablet.",
		"bookId": "02"
	}, {
		"name": "MOTOROLA XOOM™",
		"author": "The Next, Next Generation tablet.",
		"bookId": "03"
	}];

}]);
bookControllers.controller('BookDetailCtrl', ['$scope',function($scope) {
	$scope.DetailDes = "奶奶的好绕！！！！";
}])