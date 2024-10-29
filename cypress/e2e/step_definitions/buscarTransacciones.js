import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../pages/login'; // Asegúrate de la ruta correcta
import buscarTransaccionesPage from '../../pages/buscarTransacciones'; 

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

Then("presiono el link Buscar transacciones",() =>{
   buscarTransaccionesPage.clickbuscartransaccionesLink();
})

Then("selecciono una cuenta", () =>{ 
   buscarTransaccionesPage.selecCuentadropdown('14121');
})

Then("Busco por rango de fecha {string} y {string}", (fechaEntre, fechaY) => {
  const rangoFechas = {
      fechaEntre: fechaEntre,
      fechaY: fechaY
  };
  buscarTransaccionesPage.fillFormFecha(rangoFechas);  // Llamar al método para llenar las fechas
});
    

Then("presiono el boton buscar transacciones por fecha", () => {
    buscarTransaccionesPage.clicktransaccionesfechaButton();

})
Then("se muestra el registro en la grilla",() => {
  buscarTransaccionesPage.clickgrillabuscartransacciones();

})
Then("Busco por cantidad {string}", (cantidad) => {
  buscarTransaccionesPage.fillFormCantidad(cantidad);  // Llamar al método para llenar la cantidad
});

Then("presiono el boton buscar transacciones por cantidad",() => {
buscarTransaccionesPage.clickcantidadButton();
 })
