var TPL = [
  '<md-select-menu ng-model="choice">',
    '<md-option value="A">ABCDEFGHIJKLMNOPQRSTUIVWXYZ</md-option>',
    '<md-option value="B">B</md-option>',
    '<md-option value="C">C</md-option>',
    '<md-option value="D">D</md-option>',
    '<md-option value="E">E</md-option>',
    // '<md-option value="F">F</md-option>',
    // '<md-option value="G">G</md-option>',
    // '<md-option value="H">H</md-option>',
    // '<md-option value="I">I</md-option>',
    // '<md-option value="J">H</md-option>',
    // '<md-option value="K">K</md-option>',
  '</md-select-menu>'
].join('\n');

angular.module('selectDemoBasic', ['ngMaterial'])

.controller('AppCtrl', function($scope, $mdSelect) {
  $scope.choice = "B";
  $scope.openSelect = function($event) {
    $mdSelect.show({
      template: TPL,
      scope: $scope,
      target: $event.target.classList.contains('md-button') ? $event.target : $event.target.parentNode
    });
  };

  $scope.openNoChoice = function($event) {
    $mdSelect.show({
      template: TPL.replace('ng-model="choice"', 'ng-model="noChoice"'),
      scope: $scope,
      target: document.querySelector('.md-button.no-choice')
    });
  };
});
