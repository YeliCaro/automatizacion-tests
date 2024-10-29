class Cuentapage {
    get crearCuentaLink() {
        return cy.get('a[href="openaccount.htm"]'); // Asegúrate de que sea el selector correcto
      }

      clickcrearCuentaLink() {
        this.crearCuentaLink.click();  // Método para hacer clic en el enlace
      }

      get tipoCuentaDropdown() {
        return cy.get('#type'); // Ajusta el selector según el ID o clase de tu combobox
      }
    
      // Método para seleccionar un valor del combobox
      selecTipoCuentadropdown(tipoCuenta) {
        this.tipoCuentaDropdown.select(tipoCuenta);  // 'valor' es el valor de la opción que quieres seleccionar
      }

      get montoDropdown() {
        return cy.get('#fromAccountId'); // Ajusta el selector según el ID o clase de tu combobox
      }
    
      // Método para seleccionar un valor del combobox
      selecMontodropdown(monto) {
        this.montoDropdown.select(monto);  // 'valor' es el valor de la opción que quieres seleccionar
      }

      get abrirCuentaButton() {
        return cy.get('form > div > .button'); // Asegúrate de que sea el selector correcto
      }
      clickabrirCuenta() {
        this.abrirCuentaButton.click();
      }

    }

    export default new Cuentapage();

    
