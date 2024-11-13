const userModel = require('../../models/user');


describe('User Model Test', () => {
  it('should be able to return wether the user is an adult or not', () => {
    const user = new userModel({username: 'Nico', age: 20});
    expect(user.isAdult()).toBeTruthy();
    });

    it('should be able to return wether the user is not an adult', () => {
        const user = new userModel({username: 'Alfaro', age: 17});
        expect(user.isAdult()).toBeFalsy();
    });



});
