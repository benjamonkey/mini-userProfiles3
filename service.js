angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    })then(function(response){
      var parsedResponse = resonse.data.data;
      for (var i = 0; i < parsedResponse.length; i++){
        parsedResponse[i].first_name = 'Ralf';
      }

      deffered.resolve(response)
    })
    return deffered.promise;

  }

});
