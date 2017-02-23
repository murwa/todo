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

    it('should remove todo', function () {
        var controller = makeController('TodoController');
        expect(controller.items.length).toEqual(2);
        controller.chuck(0);
        expect(controller.items.length).toEqual(1);
    });

    it('should add a todo', function () {
        var controller = makeController('TodoController');
        controller.item = {title: 'Test'};
        expect(controller.items.length).toEqual(2);
        controller.save();
        expect(controller.items.length).toEqual(3);
    });
});