(function () {
	'use strict';

angular.module('NarrowItDownApp', [])

.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('restaurantURL', 'https://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	console.log('found items');
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			list: '<found',
			onRemove: '&'
		}
	};

	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {

	var list = this;

	list.getMatchedMenuItems = function() {
		list.showEmptyMessage = false;
		list.found = [];

		if (list.searchTerm == "") {
			list.showEmptyMessage = true;
			return;
		}

		var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);


		promise.then (function (response) {
			list.found = MenuSearchService.getItems();
			if (!list.found.length) list.showEmptyMessage = true;
			

		})

	};

	list.removeItem = function (index) {

		list.found = MenuSearchService.removeItem(index);
	};

} 

MenuSearchService.$inject = ['$http', 'restaurantURL'];
function MenuSearchService($http, restaurantURL) {

	var service = this;

	var foundItems = [];

	service.getMatchedMenuItems = function(searchTerm) {

		foundItems = [];

		return $http({
				method: 'GET',
				url : (restaurantURL + '/menu_items.json')

			}).then(function(result) {
				var responseItems = result.data;

				for (var i=0; i <responseItems.menu_items.length; i++){
					var item = responseItems.menu_items[i];
					if (item.description.indexOf(searchTerm) >= 0) {
						foundItems.push(item);
						console.log('item.menu_items.description= ' + item.description);

					}
				}
				return foundItems;
			}, function (result) {
				alert('Error in connection');
			}
		)
	};

	service.getItems = function () {
		return foundItems;
	};

	service.removeItem = function (index) {

		foundItems.splice(index, 1);
		return foundItems;
	};
	


}

})();