var app = angular.module("dinosaurTrain", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./html/home.html"
    })
    .when("/about", {
        templateUrl : "./html/about.html"
    })
    //.when(/flyer", {
    //      templateUrl : "./html/flyer.html"
    //})
    .when("/contact", {
        templateUrl : "./html/contact.html"
    });
    
    
});