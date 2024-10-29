class LoginPage {
    // Selecciona los elementos del formulario
    get usernameInput() {
      return cy.get(':nth-child(2) > .input');
    }
  
    get passwordInput() {
      return cy.get(':nth-child(4) > .input');
    }
  
    get loginButton() {
      return cy.get(':nth-child(5) > .button'); // Asegúrate de que sea el selector correcto
    }
  
    // Método para llenar el formulario
    fillForm(user) {
      this.usernameInput.type(user.username);  // Asumiendo que 'user' tiene la propiedad 'username'
      this.passwordInput.type(user.password);  // Asumiendo que 'user' tiene la propiedad 'password'
    }
  
    // Método para hacer clic en el botón de login
    clickLogin() {
      this.loginButton.click();
    }

    get mensajeAccountsOverviewClick() {
      return cy.get('#showOverview > .title'); // Asegúrate de que sea el selector correcto
    }
    clickmensajeAccountsOverview() {
      this.mensajeAccountsOverviewClick.click();
    }

  }
  
  export default new LoginPage();
  