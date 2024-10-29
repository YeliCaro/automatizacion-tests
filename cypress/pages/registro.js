class Registropage {
    get IngresoRegisterButton() {
        return cy.get('#loginPanel > :nth-child(3) > a');
    }

    // Selectores de la página de registro
    get FirstNameField() {
        return cy.get('#customer\\.firstName');
    }

    get LastNameField() {
        return cy.get('#customer\\.lastName');
    }

    get AddressStreetField() {
        return cy.get('#customer\\.address\\.street');
    }

    get AddressCityField() {
        return cy.get('#customer\\.address\\.city');
    }

    get AddressStateField() {
        return cy.get('#customer\\.address\\.state');
    }

    get ZipCodeField() {
        return cy.get('#customer\\.address\\.zipCode');
    }

    get PhoneNumberField() {
        return cy.get('#customer\\.phoneNumber');
    }

    get SSNField() {
        return cy.get('#customer\\.ssn');
    }

    get UsernameField() {
        return cy.get('#customer\\.username');
    }

    get PasswordField() {
        return cy.get('#customer\\.password');
    }

    get ConfirmPasswordField() {
        return cy.get('#repeatedPassword');
    }

    get confirmarRegisterButton() {
        return cy.get('[colspan="2"] > .button')
    }

    get WelcomeMessage() {
        return cy.get('h1.title');
    }

    get UsernameErrorMessage() {
        return ccy.get('#repeatedPassword\\.errors');
        
    }

  
    // Métodos para interactuar con la página
    fillForm(user) {
        this.getFirstNameField().type(user.firstName);
        this.getLastNameField().type(user.lastName);
        this.getAddressStreetField().type(user.address.street);
        this.getAddressCityField().type(user.address.city);
        this.getAddressStateField().type(user.address.state);
        this.getZipCodeField().type(user.address.zipCode);
        this.getPhoneNumberField().type(user.phoneNumber);
        this.getSSNField().type(user.ssn);
        this.getUsernameField().type(user.username);
        this.getPasswordField().type(user.password);
        this.getConfirmPasswordField().type(user.password);
    }
clickingresoregistro(){
this.IngresoRegisterButton.click()
}
clickconfirmarregistro(){
    this.confirmarRegisterButton.click()
}

}

export default new Registropage();