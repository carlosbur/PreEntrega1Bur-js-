function saludar() {
    let nombre = prompt(`Bienvenido a Budo Shop!!! Cuáles es tu nombre??`)
    alert(`Hola ${nombre}, a continuación, te guiaremos por nuestro sitio`)
}

saludar()

let salirMenu = true
do {
    let opcionMenu = prompt(`Indique qué desea hacer:
    1 - Comprar un producto.
    2 - Devolver un producto
    3 - Salir del menú`)

    switch (opcionMenu) {
        case "1":
            let menuProductos = prompt(`Elegí el producto que más te guste.
            Actualmente, tenemos en stock los siguientes:
            1 - Guantines
            2 - Karategi
            3 - Tobillera
            4 - Empeinera`)
            
            let dineroCliente = Number(prompt(`¿Cuánto dinero tenés disponible para gastar?`))

            while (isNaN(dineroCliente)) {
                dineroCliente = Number(prompt(`El monto ingresado no es válido. Ingrese un número utilizando un punto para separar decimales. 
                ¿Cuánto dinero tenés disponible para gastar?`))
            }

            switch (menuProductos) {
                case "1":
                    let precioGuantines = 1000
                    if (dineroCliente > precioGuantines) {
                        alert(`El precio de los guantines es de $ ${precioGuantines}. Te alcanza para comprar los guantines, y además te quedan $ ${dineroCliente - precioGuantines} para seguir comprando en nuestra tienda!!!`)
                    }
                    else if (dineroCliente == precioGuantines) {
                        alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
                    }
                    else {
                        alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioGuantines - dineroCliente} para llegar a los guantines. Volvé pronto y con más dinero!!!`)
                    }
                    break

                case "2":
                    let precioKarategi = 8400
                    if (dineroCliente > precioKarategi) {
                        alert(`Genial! Te alcanza para comprar el karategi, y además te quedan $ ${dineroCliente - precioKarategi} para seguir comprando en nuestra tienda!!!`)
                    }
                    else if (dineroCliente == precioKarategi) {
                        alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
                    }
                    else {
                        alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioKarategi - dineroCliente} para llegar al karategi. Volvé pronto y con más dinero!!!`)
                    }
                    break

                case "3":
                    let precioTobillera = 6000
                    if (dineroCliente > precioTobillera) {
                        alert(`Genial! Te alcanza para comprar la tobillera, y además te quedan $ ${dineroCliente - precioTobillera} para seguir comprando en nuestra tienda!!!`)
                    }
                    else if (dineroCliente == precioTobillera) {
                        alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
                    }
                    else {
                        alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioTobillera - dineroCliente} para llegar a la tobillera. Volvé pronto y con más dinero!!!`)
                    }
                    break

                case "4":
                    let precioEmpeinera = 4200
                    if (dineroCliente > precioEmpeinera) {
                        alert(`Genial! Te alcanza para comprar la empeinera, y además te quedan $ ${dineroCliente - precioEmpeinera} para seguir comprando en nuestra tienda!!!`)
                    }
                    else if (dineroCliente == precioEmpeinera) {
                        alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
                    }
                    else {
                        alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioEmpeinera - dineroCliente} para llegar a la empeinera. Volvé pronto y con más dinero!!!`)
                    }
                    break

                default:
                    alert(`Opción no válida. Vuelva a seleccionar una opción.`)
                    break
            }
            break

        case "2":
            alert(`Atención! Sección en desarrollo. Seleccione otra opción`)
            break

        case "3":
            alert(`Muchas gracias por ingresar a Budo Shop. Vuelva pronto's`)
            salirMenu = false
            break

        default:
            alert(`Opción no válida. Vuelva a seleccionar una opción.`)
            break
    }
} while (salirMenu)