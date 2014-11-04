angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

//ListCtrl
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends;
})

.controller('CreateCtrl', function($scope, $location, Friends) {
  $scope.save = function() {
      Friends.$add($scope.friend).then(function(data) {
          $location.path('/tab/friends');
      });
  };
})

//EditCtrl
.controller('FriendDetailCtrl', function($scope, $location, $stateParams, Friends) {

    var friendId = $stateParams.friendId,
        friendIndex;
 
    $scope.friends = Friends;
    friendIndex = $scope.friends.$indexFor(friendId);
    $scope.friend = $scope.friends[friendIndex];
 
    $scope.destroy = function() {
        $scope.friends.$remove($scope.friend).then(function(data) {
            $location.path('/tab/friends');
        });
    };
 
    $scope.save = function() {
        $scope.friends.$save($scope.friend).then(function(data) {
           $location.path('/tab/friends');
        });
    };

})


.controller('AccountCtrl', function($scope) {
});


