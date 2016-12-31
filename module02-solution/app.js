(function () {
	'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {

	var toBuyChecker = this;

	toBuyChecker.items = ShoppingListCheckOffService.getToBuyItems();


	toBuyChecker.checkItem = function (indexChecked) {
		ShoppingListCheckOffService.checkItem(indexChecked);
	}

} 

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {

	var alreadyBoughtChecker = this;

	alreadyBoughtChecker.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {

	var service = this;

	var toBuyItems = [];
	var boughtItems = [];

	var item01 = { name : 'cookies', quantity: 7 };
	var item02 = { name : 'ice creams', quantity: 4 };
	var item03 = { name : 'lollipops', quantity: 10 };
	toBuyItems.push(item01);
	toBuyItems.push(item02);
	toBuyItems.push(item03);

	service.checkItem = function (indexChecked) {
		var item = toBuyItems[indexChecked];
		console.log(item.name + " " + item.quantity);
		boughtItems.push(item);
		toBuyItems.splice(indexChecked, 1);
	}

	service.getToBuyItems = function() {
		return toBuyItems;
	}

	service.getBoughtItems = function() {
		return boughtItems;
	}


}

})();