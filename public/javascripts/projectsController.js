(function(){
    var app = angular.module("portfolioApp", []);
    app.controller("ProjectController", ["$scope", "$document", "$http", ($scope, $document, $http) => {
        $scope.frontEndProjects = [];
        $scope.fullStackProjects = [];
        $http({
            method: "GET",
            url :"api/data/projects"
            }).then(function successCallback(response) {
                console.log("Successfully retrieved data");
                //console.log(JSON.stringify(response.data[0].projects["front-end"]));
                //response.data[0].projects.forEach((data) => $scope.projects.push(data));
                response.data[0].projects["front-end"].forEach((data) => $scope.frontEndProjects.push(data));
                response.data[0].projects["full-stack"].forEach((data) =>  $scope.fullStackProjects.push(data));
            }, function errorCallback (err){
                console.log(err);
            });
    }]);
})();