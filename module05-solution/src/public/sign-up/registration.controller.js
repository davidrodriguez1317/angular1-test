(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signUpCtrl = this;

  signUpCtrl.user = {};
  signUpCtrl.completed = false;

  signUpCtrl.checkFavDish = function() {

  	  	var promise = SignUpService.getCategories(signUpCtrl.user.favDish);
  	  	signUpCtrl.user.favDishName = ""

  	  	promise.then(function(response) {
  	  		if (response.name != "") {
  	  			signUpCtrl.user.favDishName = response.name;
  	  		}
  	  		else {
  	  			signUpCtrl.user.favDishName = "";
  	  		} 

  	  	})


  }

  signUpCtrl.submit = function () {
  	signUpCtrl.completed = true;
  	SignUpService.setUser(signUpCtrl.user);
  };
}

})();
