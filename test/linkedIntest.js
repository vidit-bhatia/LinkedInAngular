describe('Test LinkedIn Angular Library',function(){

var $linkedIn, httpBackend,$rootscope,$scope,$log,$http;

  beforeEach(module("LinkedInLibrary"));
  beforeEach(inject(function(_$rootScope_,_$log_,_$http_,_$linkedln_) {
      $linkedIn = _$linkedln_;
	  $rootScope = _$rootScope_;
	  $http = _$http_;
	  $log = _$log_;
    }));
	it('should test',function(){
		expect("vidit").toBe("vidit");
	});
	it('should have an setAccessToken function', function () { 
    expect(angular.isFunction($linkedIn.setAccessToken)).toBe(true);
  });
  
  it('should be able to set access token',function(){
	$linkedIn.setAccessToken("Vikas");
	expect($linkedIn.getAccessToken()).toBe("Vikas");
  })
	
})