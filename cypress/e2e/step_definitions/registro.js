import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import registropage from '../../pages/registro'; 


Given("Ingreso a la página de registro en Paradise", () => {
  cy.visit("/");  // Ajusta la URL de acuerdo con tu aplicación
  
});

When("presiono el botón ingresar a Registrar", () => {
  registropage.clickingresoregistro();  // Método definido en page_registro
  
});

When("ingreso el nombre {string}", (firstName) => {
  registropage.FirstNameField.type(firstName);
});


When("ingreso el apellido {string}", (LastName) => {
  registropage.LastNameField.type(LastName)
});

When("ingreso la dirección {string}", (AddressStreet) => {
  registropage.AddressStreetField.type(AddressStreet)
});

When("ingreso la ciudad {string}", (AddressCity) => {
  registropage.AddressCityField.type(AddressCity)
});

When("ingreso el estado {string}", (AddressState) => {
  registropage.AddressStateField.type(AddressState)
});

When("ingreso el código postal {string}", (ZipCode) => {
  registropage.ZipCodeField.type(ZipCode)
});

When("ingreso el teléfono {string}", (PhoneNumber) => {
  registropage.PhoneNumberField.type(PhoneNumber)
});

When("ingreso el SSN {string}", (SSN) => {
  registropage.SSNField.type(SSN)
});

When("ingreso el nombre de usuario", () => {
  const randomUsername = `user${Math.floor(Math.random() * 100000)}`; // Genera un username aleatorio
  registropage.UsernameField.type(randomUsername);
});

When("ingreso el nombre de usuario existente {string}", (username) => {
  registropage.UsernameField.type(username);
});

When("ingreso la contraseña {string}", (Password) => {
  registropage.PasswordField.type(Password)
});

When("confirmo la contraseña {string}", (ConfirmPassword) => {
  registropage.ConfirmPasswordField.type(ConfirmPassword);
});

When("presiono el botón confirmar a Registrar", () => {
  registropage.clickconfirmarregistro(); // Usamos el método para presionar el botón de registro
});

Then("muestro el mensaje de bienvenida", () => {
  cy.contains("Welcome").should('be.visible'); // Ajusta este selector según el mensaje esperado
});
Then("Se muestra mensaje de error", () => {
  cy.contains("Password confirmation is required.").should('be.visible');  // Verifica que el mensaje de error esté visible
});

Then("Se muestra mensaje de error usuario existente", () => {
  cy.contains("This username already exists.").should('be.visible');  // Verifica que el mensaje de error esté visible
});