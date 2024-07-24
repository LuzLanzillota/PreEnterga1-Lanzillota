let usuarioAdmin = "María Luz Lanzillota"
let usuarioCompra = "María Sol Lanzillota"
let contrasenaAdmin = 1234
let contrasenaCompra = 5678
let precioproducto = 10.500;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = i => i * 0.21;
let descuento = 0.15;
let producto1 = "MAQUILLAJE DE ILUMINADOR MASTER CHROME™ METALLIC"
let producto2 = "BASE DE MAQUILLAJE SUPER STAY ACTIVE WEAR"
let producto3 = "VOLUM EXPRESS®"
let producto4 = "LASH SENSATIONAL SKY HIGH"
let producto5 = "INSTANT AGE REWIND CORRECTOR DE TRATAMIENTO ANTIOJERAS"
function login() {
    for (let i = 0; i < 3; i++) {
        let ingresarUsuario = prompt("Ingrese nombre de usuario");
        let ingresarContrasena = parseFloat(prompt("Ingrese la contraseña"));
        if (ingresarUsuario === usuarioAdmin) {
            if (ingresarContrasena === contrasenaAdmin) {
                console.log("Bienvenida, " + usuarioAdmin);
                conmutador("Admin");
                break;
            } else {
                console.log("Contraseña incorrecta");
            }
        } else if (ingresarUsuario == usuarioCompra) {
            if (ingresarContrasena == contrasenaCompra) {
                console.log("Bienvenida de vuelta, " + usuarioCompra);
                conmutador("Comprador");
                break;
            } else {
                console.log("Contraseña incorrecta");
            }

        } else {
            console.log("Nombre de usuario incorrcto");
        }
        if (i === 2) {
            console.log("Ha alcanzado el máximo número de intentos")
        }
    }
}
function conmutador(tipo_usuario) {

    if (tipo_usuario === "Admin") {
        let opcion = parseInt(prompt("Ingrese una opción: 1. Mostrar Productos, 2. Agregar Stock, 3. Agregar Producto, 4. Eliminar Producto, 5.Salir"));
        switch (opcion) {
            case 1:
                mostarProductos();
                break;
            case 2:
                agregarStock();
                break;
            case 3:
                agregarProducto();
                break;
            case 4:
                eliminarProducto();
                break;
            case 5:
                console.log("Saliendo del programa")
                break;
            default:
                console.log("No es una opcion valida");
                break;
        }
    } else if (tipo_usuario === "Comprador") {
        let opcion = parseInt(prompt("Ingrese una opción: 1. Mostrar Productos, 2.Comprar, 3.Salir"));
        switch (opcion) {
            case 1:
                mostarProductos();
                break;
            case 2:
                precioMasIva();
                break;
            case 3:
                console.log("Saliendo del programa")
                break;
            default:
                console.log("No es una opcion valida");
                break;
        }
    }
}
function mostarProductos() {
    console.log("Mostrando productos:");
    console.log(producto1);
    console.log(producto2);
    console.log(producto3);
    console.log(producto4);
    console.log(producto5);
}
function agregarStock() {
    console.log("Agregando Stock");
}
function agregarProducto() {
    console.log("Agregando Producto");
}
function eliminarProducto() {
    console.log("Eliminando Producto");
}
function precioMasIva() {
    let precioproducto = parseFloat(prompt("Ingrese el precio del producto que desea comprar"));
    let descuentoAplicado = (precioproducto * descuento);
    let nuevoprecio = resta(suma(precioproducto, iva(precioproducto)), descuentoAplicado);
    console.log("El total es $ " + nuevoprecio);
}
login()
