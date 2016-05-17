angular.module('SigmaApp', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    var darkMap = $mdThemingProvider.extendPalette('grey', {
      '300': '000000',
      '500': '212121',
      '800': '303030',
      'A100': '424242',
      'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.definePalette('dark', darkMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('dark', {
        'default': '300',
        'hue-1': '500',
        'hue-2': '800',
        'hue-3': 'A100'
      })
      .backgroundPalette('dark', {
        'default': '800'
      });
  })
  .controller('SigmaController', ['$scope', 'fileUpload', function($scope, fileUpload) {
    $scope.pages = ["latest", "archives", "submit"]

    $scope.uploadFile = function() {
      var file = $scope.myFile;

      console.log('file is ');
      console.dir(file);

      var uploadUrl = "/fileUpload";
      fileUpload.uploadFileToUrl(file, uploadUrl);
    };
  }])
  .filter('range', function() {
    return function(input, total) {
      total = parseInt(total);

      for (var i = 0; i < total; i++) {
        input.push(i);
      }

      return input;
    };
  })
  .directive('fileModel', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function() {
          scope.$apply(function() {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }])
  .service('fileUpload', ['$http', function($http) {
    this.uploadFileToUrl = function(file, uploadUrl) {
      var fd = new FormData();
      fd.append('file', file);

      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      })

      .success(function() {})

      .error(function() {});
    }
  }]);
