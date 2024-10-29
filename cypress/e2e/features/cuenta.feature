Feature: Cuenta
  Scenario Outline: Abrir cuenta exitoso
    Given Ingreso a la pagina paradise
    When Ingreso credenciales "<username>" y "<password>"
    When presiono el botón login
    Then presiono el link Open New Account
    Then selecciono cuenta ahorro 
    Then selecciono monto 
    Then presiono el boton abrir nueva cuenta 
    Then se muetsra un mensaje Account Opened!


  Examples:
    | username | password |
    | gg      | gg   |