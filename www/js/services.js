angular.module('starter.services', [])


.factory('Friends', function($firebase, fbURL) {

  return $firebase(new Firebase(fbURL)).$asArray();

  
});