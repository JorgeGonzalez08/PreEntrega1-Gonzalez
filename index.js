/*================== Funcion Pedido =================*/
let pedido = (tamaño, precio) => {
    /*======= Pizza =======*/
    let tamañoPizza = tamaño;
    let precioPizza = precio;
    let ingrediente = "";
    let cantidadPizza = 0;

    /*======= Refresco =======*/
    let precioRefresco = 20;
    let cantidadRefresco = 0;

    /*======= SubTotal y Total =======*/
    let totalPizza = 0;
    let totalRefresco = 0;
    let total = 0;

    /*======= Paso 1 =======*/
    ingrediente = ingredientes();

    /*======= Paso 2 =======*/
    cantidadPizza = pizzas();

    /*======= Paso 3 =======*/
    cantidadRefresco = refrescos();

    /*======= Paso 4 =======*/
    totalRefresco = subTotalRefresco(precioRefresco, cantidadRefresco);

    /*======= Paso 5 =======*/
    totalPizza = subTotalPizza(precioPizza, cantidadPizza);

    /*======= Paso 6 =======*/
    total = totalPedido(totalPizza, totalRefresco);

    /*======= Paso 7 =======*/
    ticket(ingrediente, tamañoPizza, precioPizza, cantidadPizza, precioRefresco, cantidadRefresco, totalRefresco, totalPizza, total);
}

/*======= Paso 1 - Funcion para seleccionar el ingrediente de la pizza =======*/
let ingredientes = () => {
    let ingrediente = "";
    let ingresarIngrediente = 0;
    do {
        ingresarIngrediente = parseInt(prompt(
            "\n                             PIZZA 'CODER'              \n" +
            "                                     Menu\n" +
            "                               1. Peperoni               \n" +
            "                               2. Hawaiana                \n" +
            "                               3. Carnes frias               \n" +
            "                               4. Vegetariana             \n" +
            "                     Favor de ingresar un numero        \n"));

        /*======= Condicinal IF para validar el dato que ingresa el usuario =======*/
        if (ingresarIngrediente === 1) {
            ingrediente = "Peperoni"
            return ingrediente;
        }
        else if (ingresarIngrediente === 2) {
            ingrediente = "Hawaiana"
            return ingrediente;
        }
        else if (ingresarIngrediente === 3) {
            ingrediente = "Carnes frias"
            return ingrediente;

        } else if (ingresarIngrediente === 4) {
            ingrediente = "Vegetariana"
            return ingrediente;
        }
        else {
            alert("No se aceptan letras ni numeros menores a 1 o numeros mayores a 4 \nFavor de ingresar un numero del menu");
        }
    } while (ingresarIngrediente < 1 || ingresarIngrediente > 4 || ingresarIngrediente != Number);
}

/*================== Paso 2 - Funcion para pedir la cantidad de pizzas =================*/
let pizzas = () => {
    let cantidadPizza = 0;
    do {
        cantidadPizza = parseInt(prompt("Cuantas pizzas deseas pedir?"));

        /*======= Condicinal IF para validar el dato que ingresa el usuario =======*/
        if (cantidadPizza > 0) {
            return cantidadPizza;
        }
        else {
            alert("No se aceptan letras ni numeros negativos \nFavor de ingresar un numero valido");
        }
    } while (cantidadPizza < 1 || cantidadPizza != Number);
}

/*================== Paso 3 - Funcion para pedir la cantidad de refrescos =================*/
let refrescos = () => {
    let pregunta = 0;
    do {

        let cantidadRefresco = 0;

        pregunta = parseInt(prompt("Deseas agregar refresco a tu order?\n" +
            "       1. SI" +
            "       2. NO\n" +
            "Favor de ingresar un numero\n" +
            "El precio por refresco es de $20"));

        /*======= Condicinal IF para validar el dato que ingresa el usuario =======*/
        if (pregunta === 1) {
            do {
                cantidadRefresco = parseInt(prompt("Cuantos refrescos deseas pedir?"));

                /*======= Condicinal IF para validar el dato que ingresa el usuario =======*/
                if (cantidadRefresco > 0) {
                    return cantidadRefresco;
                }
                else {
                    alert("No se aceptan letras ni numeros negativos \nFavor de ingresar un numero valido");
                }
            } while (cantidadRefresco < 1 || cantidadRefresco != Number);

        } else if (pregunta === 2) {
            return cantidadRefresco = 0;
        } else {
            alert("No se aceptan letras ni numeros menores a 1 o numeros mayores a 2 \nFavor de ingresar un numero del menu");
        }
    } while (pregunta < 1 || pregunta > 2 || pregunta != Number);
}

/*================== Pasos 4-5-6 Funciones para retornar el sub total de pizzas, refrescos y retonar el total del pedido =================*/
let subTotalPizza = (precio, cantidad) => precio * cantidad
let subTotalRefresco = (precio, cantidad) => precio * cantidad
let totalPedido = (pizza, refresco) => pizza + refresco

/*================== Paso 7 - Funcion para imprimir ticket =================*/
let ticket = (ingrediente, tamañoPizza, precioPizza, cantidadPizza, precioRefresco, cantidadRefresco, totalRefresco, totalPizza, total) => {

    /*======= Impresion de TICKET =======*/
    alert(
        "                                         PIZZA 'CODER'              \n" +
        "************************************************************************\n" +
        "            Descripcion                           Precio       Cantidad     SubTotal \n" +
        "************************************************************************\n" +
        "   Pizza " + tamañoPizza + " de " + ingrediente + "              $" + precioPizza + "          " + cantidadPizza + "                $" + totalPizza + "\n" +
        "************************************************************************\n" +
        "               Refresco                              $" + precioRefresco + "             " + cantidadRefresco + "               $" + totalRefresco + "\n" +
        "************************************************************************\n" +
        "                                                                           TOTAL         $" + total + "\n" +
        "                                                                   ****************************\n" +
        "                                   GRACIAS POR TU COMPRA              ");
}

/*================== Inicio del programa =================*/
let opciones = 0;
do {
    opciones = parseInt(prompt(
        "\n                             PIZZA 'CODER'              \n" +
        "                        Tamaño          Precio\n" +
        "                        1. Grande ....... $150                \n" +
        "                        2. Mediana .... $100                \n" +
        "                        3. Chica ........... $50                \n" +
        "                 Favor de ingresar un numero        "));

    let tamaño = "";
    let precioPizza = 0;

    /*======= Menu =======*/
    switch (opciones) {
        case 1:
            tamaño = "Grande";
            precioPizza = 150;
            pedido(tamaño, precioPizza);
            break;
        case 2:
            tamaño = "Mediana";
            precioPizza = 100;
            pedido(tamaño, precioPizza);
            break;
        case 3:
            tamaño = "Chica";
            precioPizza = 50;
            pedido(tamaño, precioPizza);
            break;
        default:
            alert("No se aceptan letras ni numeros menores a 1 o numeros mayores a 3 \nFavor de reiniciar");
            break;
    }
} while (opciones < 1 || opciones > 3);