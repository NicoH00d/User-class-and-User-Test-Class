const TodoController = require('../../controllers/todo_controller');
const TodoModel = require('../../models/todo_model');
const newTask = require('../mockups/todo_mockup.json');
const httpMocks = require('node-mocks-http');

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe("Test create method exists in controller", () => {
    it("should have a create method", () => {
        expect(typeof TodoController.todoCreate).toBe("function");
    });

    it("should call TodoModel.create", () => {
        req.body = newTask;
        TodoController.todoCreate(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTask);
    });

    //test the status code
    it("should return 201 response code", () => {
        req.body = newTask;
        TodoController.todoCreate(req, res, next);
        expect(res.statusCode).toBe(201);
        
    });

});