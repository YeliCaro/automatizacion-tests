Feature: Buscar transacciones

Background: 
 Given Ingreso a la pagina paradise
    
Scenario Outline: Buscar transaccón por cuenta 
    When Ingreso credenciales "<username>" y "<password>"
    When presiono el botón login
    Then presiono el link Buscar transacciones
    Then selecciono una cuenta
    Then Busco por rango de fecha "<fechaEntre>" y "<fechaY>"
    Then presiono el boton buscar transacciones por fecha
    Then se muestra el registro en la grilla 

  Examples:
    | fechaEntre       | fechaY        |   username |    password     |
    | 01-01-2024      | 21-10-2024    |      tt      |       tt    |

 # NUEVO ESCENARIO
Scenario Outline: Buscar transaccón por cantidad 
     When Ingreso credenciales "<username>" y "<password>"
     When presiono el botón login
     Then presiono el link Buscar transacciones
     Then Busco por cantidad "<cantidad>"
     Then presiono el boton buscar transacciones por cantidad
     Then se muestra el registro en la grilla

   Examples:
  | cantidad  |   username |    password     |
  | 200       |     tt      |  tt          |