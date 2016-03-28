function HttpGetData($scope, $http) {
	//var data={};
	$http.get('../data/books0.json').success(function(data) {
		$scope.books = data;
	});
}

