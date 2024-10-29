Feature: Login
  Scenario Outline: Ingreso exitoso a la pagina
    Given Ingreso a la pagina paradise
    When Ingreso credenciales "<username>" y "<password>"
    When presiono el botón login
    Then muestra mensaje de bienvenida

  Examples:
    | username | password |
    | gg     | gg  |

