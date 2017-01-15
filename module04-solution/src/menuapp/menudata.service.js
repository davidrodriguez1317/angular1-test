(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
	var service = this;

	// Call to server
	service.getAllCategories = function () {

		return $http({
				method: 'GET',
				url : 'https://davids-restaurant.herokuapp.com/categories.json'
			})

	  };

	  service.getItemsForCategory = function (categoryShortName) {

		var urlItems = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName;

	    return $http({
					method: 'GET',
					url : urlItems
				})
	 };
}

})();
