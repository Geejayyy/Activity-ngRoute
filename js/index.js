var app = angular.module("myjj", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "Welcome.html"
    })
    .when("/Profile", {
        templateUrl : "Profile.html"
    })
    .when("/Skill", {
        templateUrl : "Skill.html"
    })
    .when("/About", {
        templateUrl : "About.html"
    });
});
