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
          $location.path('/friends');
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
            $location.path('/friends');
        });
    };
 
    $scope.save = function() {
        $scope.friends.$save($scope.friend).then(function(data) {
           $location.path('/friends');
        });
    };

})


.controller('UploadCtrl', function ($scope, Friends) {
  $scope.friends = Friends.all;

  $scope.episodeImgData = 'data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9ui F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7';
  
  $scope.save = function() {
    if ($scope.episodeImgData) {
      $scope.friend.photo = $scope.episodeImgData;
    }
    Friends.$save($scope.friend);
  };

  $scope.handleFileSelectAdd = function(evt) {
    var f = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        var filePayload = e.target.result;

        $scope.episodeImgData = e.target.result; 

        document.getElementById('pano').src = $scope.episodeImgData; 
      };
    })(f);
    reader.readAsDataURL(f);
  };
  document.getElementById('file-upload').addEventListener('change', $scope.handleFileSelectAdd, false);

});