import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../pages/login'; // Asegúrate de la ruta correcta
import cuentapage from '../../pages/cuenta'; 

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

Then("presiono el link Open New Account",() =>{
   cuentapage.clickcrearCuentaLink();
})

Then("selecciono cuenta ahorro", ()=>{
   cuentapage.selecTipoCuentadropdown('SAVINGS');
})

Then("selecciono monto", ()=>{
cuentapage.selecMontodropdown('13677');

})
Then("presiono el boton abrir nueva cuenta",()=>{
    cuentapage.clickabrirCuenta();
})
Then("se muetsra un mensaje Account Opened!", () => {
    cy.contains("Account Opened!").should('be.visible');  // Verifica que el mensaje de error esté visible
  });
