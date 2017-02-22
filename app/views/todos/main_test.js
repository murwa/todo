/**
 * Created by mxgel on 2/22/17.
 */
describe('myApp.todo module', function () {
    var makeController;
    beforeEach(module('myApp.todo'));

    beforeEach(inject(function ($controller) {
        makeController = function (ctrl) {
            return $controller(ctrl);
        }
    }));

    it('should have a controller', function () {
        expect(makeController('TodoController')).toBeDefined();
    });
});