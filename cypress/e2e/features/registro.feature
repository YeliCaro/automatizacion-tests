# NUEVO ESCENARIO
Feature: Registro
  Scenario Outline: Registro exitoso a la página
    Given Ingreso a la página de registro en Paradise
    When presiono el botón ingresar a Registrar
    When ingreso el nombre "<firstName>"
    When ingreso el apellido "<LastName>"
    When ingreso la dirección "<AddressStreet>"
    When ingreso la ciudad "<AddressCity>"
    When ingreso el estado "<AddressState>"
    When ingreso el código postal "<ZipCode>"
    When ingreso el teléfono "<PhoneNumber>"
    When ingreso el SSN "<SSN>"
    When ingreso el nombre de usuario
    When ingreso la contraseña "<Password>"
    When confirmo la contraseña "<ConfirmPassword>"
    When presiono el botón confirmar a Registrar
    Then muestro el mensaje de bienvenida

  Examples: 
   # Example 1 - Registro exitoso
    | firstName   | LastName| AddressStreet      |     Address   | AddressCity | AddressState | ZipCode | PhoneNumber | SSN       | Password| ConfirmPassword  | 
    | Juan        | Pérez    | Calle Falsa 123   | Springfield    | IL         | NY           | 62704   | 123-45-6789 | juanp     | caro123  |    caro123     | 

# NUEVO ESCENARIO
Scenario Outline: Registro no exitoso a la página
    Given Ingreso a la página de registro en Paradise
    When presiono el botón ingresar a Registrar
    When ingreso el nombre "<firstName>"
    When ingreso el apellido "<LastName>"
    When ingreso la dirección "<AddressStreet>"
    When ingreso la ciudad "<AddressCity>"
    When ingreso el estado "<AddressState>"
    When ingreso el código postal "<ZipCode>"
    When ingreso el teléfono "<PhoneNumber>"
    When ingreso el SSN "<SSN>"
    When ingreso el nombre de usuario
    When ingreso la contraseña "<Password>"
    #When confirmo la contraseña "<ConfirmPassword>"
    When presiono el botón confirmar a Registrar
    Then Se muestra mensaje de error

    Examples:
     # Example 2 - Registro no exitoso
    | firstName   | LastName| AddressStreet      |     Address   | AddressCity | AddressState | ZipCode | PhoneNumber | SSN       | Password| ConfirmPassword  | 
    | Juan        | Pérez    | Calle Falsa 123   | Springfield    | IL         | NY           | 62704   | 123-45-6789 | juanp      | caro123  |    caro123     | 


# NUEVO ESCENARIO
Scenario Outline: Registro con usuario existente a la página
    Given Ingreso a la página de registro en Paradise
    When presiono el botón ingresar a Registrar
    When ingreso el nombre "<firstName>"
    When ingreso el apellido "<LastName>"
    When ingreso la dirección "<AddressStreet>"
    When ingreso la ciudad "<AddressCity>"
    When ingreso el estado "<AddressState>"
    When ingreso el código postal "<ZipCode>"
    When ingreso el teléfono "<PhoneNumber>"
    When ingreso el SSN "<SSN>"
    When ingreso el nombre de usuario existente "<username>"
    When ingreso la contraseña "<Password>"
    When confirmo la contraseña "<ConfirmPassword>"
    When presiono el botón confirmar a Registrar
    Then Se muestra mensaje de error usuario existente

    Examples:
     # Example 3 - Registro usuario existente 
    | firstName   | LastName| AddressStreet      |     Address   | AddressCity | AddressState | ZipCode | PhoneNumber | SSN       |username |Password| ConfirmPassword  | 
    | Juan        | Pérez    | Calle Falsa 123   | Springfield    | IL         | NY           | 62704   | 123-45-6789 | juanp      |Caro123 |caro123  |    caro123     | 