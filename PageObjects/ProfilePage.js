var profilePage = function () {

    const firstName = $("#firstName");
    const lastName = $("#lastName");

    this.getUserName = async function () {
        let userFirstname = await firstName.getText();
        let userLastname = await lastName.getText();

        return userFirstname + userLastname;
    }
};
module.exports = new profilePage();