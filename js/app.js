angular.module('SigmaApp', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        'default': '800',
        'hue-1': '700',
        'hue-2': '900'
      })
      .accentPalette('blue-grey', {
        'default': '800'
      })
      .dark();
  })
  .controller('SigmaController', function($scope) {
    console.log('Sigma initialized.')
  });
