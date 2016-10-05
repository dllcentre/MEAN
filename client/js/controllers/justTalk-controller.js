//var app= angular.module('dllApp', ['ngResource']);

app.controller('jController',function($scope,$resource) {
var Session=$resource('/api/sessions');

/*$scope.sessions = [
      	{name: "Cloud Computing"},
      	{name: "J2EE"},
      	{name: "IOT"},
      	{name: "MEAN.js"},

]*/
Session.query(function (results){

$scope.sessions = results;

});
	
$scope.sessions = []

$scope.createSession=function(){

	//$scope.sessions.push({name: $scope.sessionName});
	//$scope.sessionName="";

	var session =new Session();
	session.name=$scope.sessionName;
	session.$save(function(result) {

		$scope.sessions.push(result);
		$scope.sessionName="";
	});

	} 



})

