import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../pages/login'; // Asegúrate de la ruta correcta

Given("Ingreso a la pagina paradise", () => {
  cy.visit("/");  // Visita la URL de la página de inicio de sesión
});

When("Ingreso credenciales {string} y {string}", (username, password) => {
  const user = { 
    username: username, 
    password: password 
  };
  loginPage.fillForm(user);  // Usa el método para llenar el formulario
});

When("presiono el botón login", () => {
  loginPage.clickLogin();  // Método que realiza el click en el botón de login
});

Then("muestra mensaje de bienvenida", () => {
  loginPage.clickmensajeAccountsOverview();
});
