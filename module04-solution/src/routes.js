(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    console.log("RoutesConfig");

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'CategoryController as categoryList',
    resolve : {
      categories : ['MenuDataService', function (MenuDataService) {
        var promise = MenuDataService.getAllCategories()
        return promise.then(function(result) {
            return result.data;
          }, function(reason) {
            console.log('Error connecting');
          });
      }

      ]}
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl : 'src/menuapp/templates/main-items.template.html',
    controller : 'ItemController as itemList',
    resolve : {
      items : [ '$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          var promise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          console.log('getItemsForCategory 02', promise);

          return promise.then(function(result) {
                      var itemsResult = result.data.menu_items;
                      console.log('getItemsForCategory 03', itemsResult);
                      var itemList = {
                        items: itemsResult
                      };
                      console.log('getItemsForCategory 04', itemList);


            return result.data.menu_items;
          }, function(reason) {
            console.log('Error connecting');
          })
      }]
    }
  })

  ;
}

})();
