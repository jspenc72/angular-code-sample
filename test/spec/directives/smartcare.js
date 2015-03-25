'use strict';

describe('Directive: smartCare', function () {

  // load the directive's module
  beforeEach(module('smartcareApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<smart-care></smart-care>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the smartCare directive');
  }));
});
