/**
 * Created by mxgel on 2/22/17.
 */
angular.module('myApp.todo', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/todos', {
            templateUrl: 'views/todos/main.html',
            controller: 'TodoController as ctrl'
        });
    }])
    .controller('TodoController', function () {
        // ToDO items
        this.items = [
            {
                completed: false,
                title: "This is the first todo item",
                descr: "This todo has no description"
            },
            {
                completed: true,
                title: "This is the second todo item",
                descr: "This todo has no description"
            }
        ]

        // Remove a todo item on the list
        this.chuck = function (index) {
            return this.items.splice(index, 1);
        }


        // Add a todo item
        this.save = function () {
            this.items.push(this.item);
            return this.item = {};
        }
    })