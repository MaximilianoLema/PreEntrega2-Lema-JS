class Producto {
    constructor(id, tipo, marca, modelo, memoria, info, precio){
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.info = info;
        this.precio = precio;
    }
}

const carrito = [];

//Intereses bancos
const interesesPorBanco = {
    "santander": 15,
    "bbva": 20,
    "galicia": 9,
    "itau": 10,
    "nacion": 2
};

//Funcion para calcular el precio de las cuotas segun la cantidad introducida
function calcularCuotas (precio, cuotas, banco) {
    const interesPorcentaje = interesesPorBanco[banco] || 0;
    const interes = precio * (interesPorcentaje / 100);
    const totalConInteres = precio + interes;
    const valorCuota = totalConInteres / cuotas;
    return valorCuota;
}

const productos = [
    new Producto(1, 'Placa de Video', 'AMD', 'VIDEO RADEON RX 6500 XT 4GB SAPPHIRE PULSE GAMING OC', '4 GB', 'La tarjeta de video Radeon RX 6500 XT Sapphire Pulse Gaming OC cuenta con 4 GB de memoria y un diseño de enfriamiento personalizado con doble ventilador. Ofrece un rendimiento sólido para los juegos más recientes y una experiencia de juego fluida gracias a su tecnología AMD FreeSync. Además, cuenta con varias características de software para personalizar la configuración de la tarjeta y optimizar el rendimiento. En general, esta tarjeta de video está diseñada para mejorar la experiencia de juego para los jugadores que buscan una tarjeta de video de gama media.', 154840 ),
    new Producto(2, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 4090 24GB GIGABYTE AORUS MASTER', '24 GB', 'La tarjeta de video GeForce RTX 4090 de Gigabyte Aorus Master es una de las tarjetas de video más potentes del mercado, con 24 GB de memoria GDDR6X y un diseño personalizado de enfriamiento con ventiladores triples. Ofrece un rendimiento excepcional para los juegos más exigentes y aplicaciones intensivas, como la edición de video y diseño gráfico. Además, cuenta con características avanzadas de software, como RGB Fusion 2.0 y AORUS Engine, para personalizar la configuración de la tarjeta y maximizar el rendimiento. En general, esta tarjeta de video está diseñada para aquellos que buscan la mejor experiencia de juego y rendimiento en aplicaciones intensivas.', 1538730 ),
    new Producto(3, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING WHITE', '16 GB', 'La tarjeta de video GeForce RTX 4080 de ASUS ROG Strix Gaming White OC es una tarjeta de video de alta gama con 16 GB de memoria GDDR6X y un diseño personalizado de enfriamiento con ventiladores triples. Ofrece un rendimiento potente y una experiencia de juego fluida en resoluciones ultraaltas y juegos exigentes. Además, cuenta con características avanzadas de software, como Aura Sync y GPU Tweak II, para personalizar la configuración de la tarjeta y optimizar el rendimiento. En general, esta tarjeta de video está diseñada para aquellos que buscan la mejor experiencia de juego y rendimiento en una tarjeta de video de gama alta con un diseño elegante y llamativo en blanco.', 1132580 ),
    new Producto(4, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING', '16 GB', 'La tarjeta de video GeForce RTX 4080 de ASUS ROG Strix Gaming es una tarjeta de video de alta gama con 16 GB de memoria GDDR6X y un diseño personalizado de enfriamiento con ventiladores triples. Ofrece un rendimiento potente y una experiencia de juego fluida en resoluciones ultraaltas y juegos exigentes. Además, cuenta con características avanzadas de software, como Aura Sync y GPU Tweak II, para personalizar la configuración de la tarjeta y optimizar el rendimiento. En general, esta tarjeta de video está diseñada para aquellos que buscan la mejor experiencia de juego y rendimiento en una tarjeta de video de gama alta.', 1047930 ),
    new Producto(5, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 3060 TI 8GB MSI VENTUS 2X LHR', '8 GB', 'La tarjeta de video GeForce RTX 3060 Ti de MSI Ventus 2X LHR cuenta con 8 GB de memoria y tecnología LHR (limitación de tasa de hash), lo que la hace adecuada para los juegos y la minería de criptomonedas. La tarjeta tiene un diseño de doble ventilador que proporciona un enfriamiento eficiente y un rendimiento potente. En general, esta tarjeta de video está diseñada para mejorar la experiencia de juego y minería de criptomonedas con un buen equilibrio entre precio y rendimiento.', 294730 ),
    new Producto(6, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X LHR', '8 GB', 'La tarjeta de video GeForce RTX 3060 Ti de MSI Gaming X LHR cuenta con 8 GB de memoria y tecnología LHR (limitación de tasa de hash), lo que la hace adecuada para los juegos y la minería de criptomonedas. La tarjeta ofrece un rendimiento potente y un enfriamiento eficiente gracias a su diseño de ventilador doble. En resumen, esta tarjeta de video está diseñada para mejorar la experiencia de juego y minería de criptomonedas.', 311280 ),
    new Producto(7, 'Monitor', 'SAMSUNG', 'MONITOR CURVO 34" SAMSUNG ULTRAWIDE WQHD 100HZ 5MS', '-', 'El monitor curvo Samsung Ultrawide es una pantalla de 34 pulgadas con una resolución WQHD, una frecuencia de actualización de 100Hz y un tiempo de respuesta de 5ms. La pantalla curva de 1500R crea una experiencia de visualización envolvente y cómoda para la vista. Está diseñado para una variedad de usos, desde el entretenimiento hasta el trabajo.', 223149 ),
    new Producto(8, 'Motherboard', 'ASUS', 'MOTHER ASUS X570 ROG CROSSHAIR VIII FORMULA', '-', 'La placa madre ASUS X570 ROG Crosshair VIII Formula es una placa de alta gama diseñada para sistemas de computadora de escritorio de última generación. Es compatible con procesadores AMD Ryzen de tercera generación y cuenta con una amplia gama de características de rendimiento y conectividad. Con un diseño de circuito impreso de alta calidad, esta placa madre ofrece una excelente estabilidad y durabilidad, incluso en condiciones de alta carga de trabajo. Además, cuenta con iluminación RGB y tecnología de refrigeración avanzada para mantener el sistema fresco y personalizado. En general, la placa madre ASUS X570 ROG Crosshair VIII Formula es una excelente opción para aquellos que buscan una placa de alta calidad y rendimiento para construir un sistema de computadora de escritorio de alta gama.', 301050 ),
    new Producto(9, 'Motherboard', 'ASROCK', 'MOTHER ASROCK H470M HVS INTEL 10 GEN SOC 1200', '-', 'La placa madre ASRock H470M HVS Intel 10 Gen SOC 1200 es una placa de gama media diseñada para sistemas de computadora de escritorio. Es compatible con procesadores Intel Core de décima generación y cuenta con características de rendimiento y conectividad adecuadas para aplicaciones de uso diario y juegos ligeros. Con un diseño de circuito impreso de alta calidad, esta placa madre ofrece una buena estabilidad y durabilidad, incluso en condiciones de carga moderada. Además, cuenta con puertos USB 3.2 Gen 1, salida HDMI y soporte para memoria DDR4. En general, la placa madre ASRock H470M HVS Intel 10 Gen SOC 1200 es una buena opción para aquellos que buscan una placa madre de gama media para construir un sistema de computadora de escritorio asequible.', 38520 ),
    new Producto(10, 'Teclado', 'XFX', 'TECLADO GAMER MECANICO SWITCH BLUE XFX YARI GK-01', '-', 'El teclado gamer mecánico XFX Yari GK-01 con switch Blue es una excelente opción para jugadores que buscan un teclado de alta calidad con respuesta táctil y audible. Con una construcción robusta y resistente, este teclado cuenta con un diseño compacto sin teclado numérico para ahorrar espacio en tu escritorio, y ofrece una iluminación LED RGB personalizable para una apariencia impresionante. Los interruptores mecánicos azules brindan una experiencia de escritura satisfactoria y una respuesta táctil clara y audible, lo que los hace ideales para escribir y para juegos que requieren pulsaciones rápidas y precisas. Además, el teclado cuenta con una variedad de teclas programables y controles multimedia para una experiencia de usuario mejorada y una mayor comodidad durante las sesiones de juego largas. En general, el teclado gamer mecánico XFX Yari GK-01 es una excelente opción para jugadores que buscan un teclado de alta calidad y confiable con interruptores mecánicos Blue.', 11510 ),
    new Producto(11, 'Teclado', 'XFX', 'TECLADO GAMER MECANICO SWITCH BLUE XFX YARI GK-01', '-', 'El teclado gamer mecánico XFX Yari GK-01 con switch Blue es una excelente opción para jugadores que buscan un teclado de alta calidad con respuesta táctil y audible. Con una construcción robusta y resistente, este teclado cuenta con un diseño compacto sin teclado numérico para ahorrar espacio en tu escritorio, y ofrece una iluminación LED RGB personalizable para una apariencia impresionante. Los interruptores mecánicos azules brindan una experiencia de escritura satisfactoria y una respuesta táctil clara y audible, lo que los hace ideales para escribir y para juegos que requieren pulsaciones rápidas y precisas. Además, el teclado cuenta con una variedad de teclas programables y controles multimedia para una experiencia de usuario mejorada y una mayor comodidad durante las sesiones de juego largas. En general, el teclado gamer mecánico XFX Yari GK-01 es una excelente opción para jugadores que buscan un teclado de alta calidad y confiable con interruptores mecánicos Blue.', 11510 ),
    new Producto(12, 'Almacenamiento', 'Western Digital', 'HD SSD 2TB WD BLACK SN770 M.2 NVME GEN4 5150 MB/S', '2 TB', 'El SSD WD Black SN770 de 2 TB es una unidad de almacenamiento de alta gama que ofrece velocidades de lectura y escritura excepcionales de hasta 5150 MB/s gracias a su interfaz NVMe Gen4. Es una opción ideal para aquellos que buscan un almacenamiento rápido y confiable para sus sistemas de juego o trabajo intensivo. Además, cuenta con una excelente resistencia y durabilidad gracias a su tecnología de protección térmica y disipador de calor integrado. En general, este SSD es una excelente opción para aquellos que buscan el mejor rendimiento en su almacenamiento de datos.', 182370),
    new Producto(13, 'Microprocesador', 'INTEL', 'MICRO INTEL CORE I7 10700', '2,9 GHz - 8 Nucleos', 'El micro Intel Core i7 10700 es una unidad de procesamiento de alta gama diseñada para sistemas de computadora de escritorio. Cuenta con 8 núcleos y 16 hilos de procesamiento, una frecuencia base de 2,9 GHz y una frecuencia turbo de hasta 4,8 GHz. Es compatible con la tecnología Hyper-Threading, que permite una mayor eficiencia en tareas que requieren un uso intensivo de la CPU. En general, este microprocesador es una excelente opción para aquellos que buscan un rendimiento sólido en aplicaciones de uso diario y en tareas que requieren una alta potencia de procesamiento, como la edición de video y gráficos intensivos.', 152010),
    new Producto(14, 'Gabinete', 'XFX', 'GABINETE XFX YOROI GC-03HE 6 COOLERS RGB', ' - ', 'El gabinete XFX YOROI GC-03HE cuenta con un diseño moderno y elegante con 6 ventiladores RGB para una excelente ventilación y enfriamiento. Es compatible con placas base ATX, Micro ATX y Mini ITX, y tiene múltiples opciones de almacenamiento para discos duros y SSD. También tiene una ventana lateral de vidrio templado para mostrar los componentes internos del equipo y viene con un controlador de ventilador para ajustar la velocidad y el brillo de los ventiladores RGB. En general, este gabinete es una excelente opción para aquellos que buscan un gabinete de alta calidad con un diseño atractivo y un excelente rendimiento de enfriamiento.', 40550),
    new Producto(15, 'Microprocesador', 'AMD', 'MICRO AMD RYZEN 5 5600G', ' 3,9 GHz - 6 Nucleos ', 'El micro AMD Ryzen 5 5600G es una unidad de procesamiento de alto rendimiento diseñada para sistemas de computadora de escritorio. Cuenta con 6 núcleos y 12 hilos de procesamiento, una frecuencia base de 3,9 GHz y una frecuencia turbo de hasta 4,4 GHz. Además, cuenta con la tecnología de gráficos integrados Radeon Graphics que permite una excelente calidad de imagen en aplicaciones de video y juegos livianos. En general, este microprocesador es una excelente opción para aquellos que buscan un rendimiento sólido en aplicaciones de uso diario y juegos ligeros sin la necesidad de una tarjeta gráfica dedicada.', 104230),
    new Producto(16, 'Monitor', 'SAMSUNG', 'MONITOR GAMER 25" SAMSUNG ODYSSEY G4 FHD 240HZ DP HDMI', ' - ', 'El monitor gamer Samsung Odyssey G4 es una pantalla de 25 pulgadas diseñada para ofrecer una experiencia de juego fluida y de alta calidad. Cuenta con una resolución FHD (Full HD) de 1920x1080 píxeles y una frecuencia de actualización de 240Hz, lo que significa que las imágenes se actualizarán hasta 240 veces por segundo, lo que resulta en una acción suave y sin retrasos. Además, tiene puertos HDMI y DP para conectar una variedad de dispositivos, incluyendo computadoras y consolas de videojuegos. En general, el monitor está diseñado para ofrecer una experiencia inmersiva y emocionante para los jugadores de videojuegos.', 125410),
];


function seleccionarBanco() {
    const bancoIngresado = prompt(`Selecciona el banco para el pago:\n${Object.keys(interesesPorBanco).join(", ")}`); //esta linea tambien la busque por internet
    const bancoElegido = bancoIngresado.toLowerCase();
    
    if(interesesPorBanco.hasOwnProperty(bancoElegido)){
        return bancoElegido
    }else{ 
        alert ("Porfavor Ingresa un banco correspondiente.")
        return seleccionarBanco();
    }
    
}

function seleccionarCuotas() {
    let cuotas;
    do{
        cuotas = parseInt(prompt("Porfavor, ingrese la cantidad de cuotas que desea abonar, solo tenemos entre 1, 3, 6 y 12 cuotas"))
        if (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12){
            alert("Recuerda ingresar un numero valido de cuotas: 1 / 3 / 6 / 12")
        }
    } while(isNaN(cuotas) || (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12));
    
    return cuotas;
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert(`Producto agregado al carrito:\n\nID: ${producto.id}\nTipo: ${producto.tipo}\nMarca: ${producto.marca}\nModelo: ${producto.modelo}\nDescripcion: ${producto.info}\nPrecio: $${producto.precio.toLocaleString('es-AR')} ARS`);
}

function quitarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
}

function mostrarCarrito() {
    let listaCarrito = "Productos en el carrito:\n\n";
    let totalCarrito = 0;

    for (const producto of carrito) {
        listaCarrito += `${producto.id} - ${producto.modelo} - Precio: $${producto.precio.toLocaleString('es-AR')} ARS\n`;
        totalCarrito += producto.precio;
    }

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        listaCarrito += `\nTotal del carrito: $${totalCarrito.toLocaleString('es-AR')} ARS`;
        alert(listaCarrito);
    }
}

function mostrarProductosDisponibles() {
    let lista = "Hola que tal! Bienvenido a mi tienda de componentes de computacion.\n \n Esta es la lista de productos que tenemos disponibles: \n \n";
    for (const producto of productos) {
        lista += `${producto.id}  -  ${producto.modelo} \n `;
    }
    alert(lista);
}

function realizarCompra() {
    const banco = seleccionarBanco();
    const cuotas = seleccionarCuotas();

    const valorCuota = calcularCuotas(calcularTotalCarrito(), cuotas, banco);
    alert(`El valor de cada cuota será de: $${valorCuota.toLocaleString('es-AR')} ARS`);

}

function calcularTotalCarrito() {
    let totalCarrito = 0;
    for (const producto of carrito) {
        totalCarrito += producto.precio;
    }
    return totalCarrito;
}

// Función principal
function gestionarCarrito() {
    while (true) {
        mostrarProductosDisponibles();
        const opcion = prompt(`¿Qué deseas hacer?\n1. Agregar producto al carrito\n2. Quitar producto del carrito\n3. Mostrar carrito\n4. Comprar\n5. Salir \n `);

        switch (opcion) {
            case "1":
                const idProducto = parseInt(prompt("Ingresa el ID del producto que deseas agregar al carrito:"));
                const producto = productos.find(prod => prod.id === idProducto);
                if (producto) {
                    agregarAlCarrito(producto);
                    alert("Producto agregado al carrito.");
                } else {
                    alert("No se encontró un producto con ese ID.");
                }
                break;
            case "2":
                const idParaQuitar = parseInt(prompt("Ingresa el ID del producto que deseas quitar del carrito:"));
                quitarDelCarrito(idParaQuitar);
                alert("Producto quitado del carrito.");
                break;
            case "3":
                mostrarCarrito();
                break;
            case "4":
                if (carrito.length === 0) {
                    alert("El carrito está vacío. Agrega productos antes de comprar.");
                } else {
                    mostrarCarrito(); // Mostrar el carrito antes de la compra
                    realizarCompra();
                }
                break;
            case "5":
                alert("Gracias por utilizar el carrito de compras. Hasta la próxima.");
                return;
            default:
                alert("Opción no válida. Por favor, elige una opción válida.");
        }
    }
}

gestionarCarrito();