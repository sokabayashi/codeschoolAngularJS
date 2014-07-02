/**
 * Created by saipuck on 7/2/14.
 */

( function() {
  // Define a module
  var app = angular.module( 'store', [] );

  // on this module, add a controller
  app.controller( 'StoreController', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'yada yada yada',
    canPurchase: true,
    soldOut: false
  }
})();