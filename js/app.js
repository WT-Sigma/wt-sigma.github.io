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
  .controller('SigmaController', function($scope) {
    $scope.pages = ["latest", "archives", "submit"]
  })
  .filter('range', function() {
    return function(input, total) {
      total = parseInt(total);

      for (var i=0; i<total; i++) {
        input.push(i);
      }

      return input;
    };
  });
