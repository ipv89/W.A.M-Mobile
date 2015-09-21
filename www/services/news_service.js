/**
 * Created by mike on 21/09/2015.
 */
angular.module("WAM").factory('news_service', function ($http) {

    //we will store the selected news article here, this is simply a way of storing the object in memory so we can retreve it as
    //required, this will be overritten each time the user selects a new event.

    var selected_article = {};

    return selected_article;




})