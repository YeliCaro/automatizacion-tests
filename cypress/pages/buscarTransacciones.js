class BuscarTransaccionesPage{
    get buscartransaccionesLink() {
        return cy.get('#leftPanel > ul > :nth-child(5) > a'); // Asegúrate de que sea el selector correcto
      }

      clickbuscartransaccionesLink() {
        this.buscartransaccionesLink.click();  // Método para hacer clic en el enlace
      }
      get fechaEntreField() {
        return cy.get('#fromDate'); // Asegúrate de que sea el selector correcto
      }
      get fechaYField() {
        return cy.get('#toDate'); // Asegúrate de que sea el selector correcto
      }

      fillFormFecha({ fechaEntre, fechaY }) {
        this.fechaEntreField.clear().type(fechaEntre);  // Limpiar y escribir la fecha "desde"
        this.fechaYField.clear().type(fechaY);          // Limpiar y escribir la fecha "hasta"
    }


      get transaccionesfechaButton() {
        return cy.get('#findByDateRange'); // Asegúrate de que sea el selector correcto
      }

      clicktransaccionesfechaButton() {
        this.transaccionesfechaButton.click();  // Método para hacer clic en el enlace
      }


      get cuentaDropdown() {
        return cy.get('#accountId'); // Ajusta el selector según el ID o clase de tu combobox
      }
      selecCuentadropdown(Cuenta) {
        this.cuentaDropdown.select(Cuenta);  // 'valor' es el valor de la opción que quieres seleccionar
      }
      get grillabuscartransacciones() {
        return cy.get('#transactionBody > :nth-child(1) > :nth-child(4)'); // Asegúrate de que sea el selector correcto
      }

      clickgrillabuscartransacciones() {
        this.grillabuscartransacciones.click();  // Método para hacer clic en el enlace
      }
      get cantidadField() {
        return cy.get('#amount');
    }
    fillFormCantidad(cantidad) {
    this.cantidadField.clear().type(cantidad.toString());  // Limpiar y escribir la cantidad
  
    }

    get cantidadButton() {
      return cy.get('#findByAmount'); // Asegúrate de que sea el selector correcto
    }

    clickcantidadButton() {
      this.cantidadButton.click();  // Método para hacer clic en el enlace
    }

}
export default new BuscarTransaccionesPage();