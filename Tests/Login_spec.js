const loginPage = require("../PageObjects/LoginPage.js");
const profilePage = require("../PageObjects/ProfilePage.js");
const sortFunctions = require("../sortFunctions.js");

describe('Login suite', () => {

    beforeEach(async () => {
        await loginPage.get();
    });

    it('user is able to login', async () => {
        await loginPage.login('user1', 'pass');
        expect(await profilePage.getUserName()).toContain('Ivan Ivanov');
    });

    it('should be able to sort', async () => {
        expect(await sortFunctions.sortEven([1, 2, 3, 4])).toEqual([2, 4]);
    });

});