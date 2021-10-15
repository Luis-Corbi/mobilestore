class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const productos = [];
productos.push(new Producto("Resident Evil Village", "60"));
productos.push(new Producto("Battlefield 2042", "65"));
productos.push(new Producto("Horizon Zero Dawn", "40"));
productos.push(new Producto("Detroit: Become Human", "40"));
productos.push(new Producto("Days Gone", "60"));
productos.push(new Producto("New World", "24"));
productos.push(new Producto("Sea of Thieves", "15"));

for (const producto of productos) {
    producto.sumaIva();
}
console.log(productos);
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaProductos", JSON.stringify(productos));

let productos1 = [
    {
      id: 1,
      marca: "Apple",
      modelo: "Iphone 12 Pro",
      color: "Silver",
      cat: "Celulares",
      img: "https://http2.mlstatic.com/D_NQ_NP_941019-MLA43975720782_112020-O.webp",
      precio: "$USD 999",
    },
    {
      id: 2,
      marca: "Apple",
      modelo: "Iphone 12 Pro",
      color: "Green",
      cat: "Celulares",
      img: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp",
      precio: "$USD 999",
    },
    {
      id: 3,
      marca: "Samsung",
      modelo: "S21+ 5G",
      color: "Phantom Black",
      cat: "Celulares",
      img: "https://http2.mlstatic.com/D_NQ_NP_976371-MLA45566612445_042021-O.webp",
      precio: "$USD 849",
    },
    {
      id: 4,
      marca: "Samsung",
      modelo: "S21",
      color: "Phantom White",
      cat: "Celulares",
      img: "https://http2.mlstatic.com/D_NQ_NP_748918-MLA44848256931_022021-O.webp",
      precio: "$USD 749",
    },
    {
      id: 5,
      marca: "Gigabyte",
      modelo: "Aorus I7 11va 32gb Ssd Rtx3080 16gb 240hz",
      color: "Negro",
      cat: "Notebooks",
      img: "https://http2.mlstatic.com/D_NQ_NP_853223-MLA46752326941_072021-O.webp",
      precio: "$USD 1999",
    },
    {
      id: 6,
      marca: "Gigabyte",
      modelo: "Aero 17 I7 Rtx 3060p 16gb 1tb M.2",
      color: "Negro",
      cat: "Notebooks",
      img: "https://http2.mlstatic.com/D_NQ_NP_946917-MLA45656496951_042021-O.webp",
      precio: "$USD 2099",
    },
    {
      id: 7,
      marca: "Asus",
      modelo: "Rog Duo 15.6+14 Uhd I9 Ssd 2tb 32gb Rtx 2080",
      color: "Negro",
      cat: "Notebooks",
      img: "https://http2.mlstatic.com/D_NQ_NP_716951-MLA47492162666_092021-O.webp",
      precio: "$USD 3920",
    },
    {
      id: 8,
      marca: "Asus",
      modelo: "Tuf Dash Rtx 3060 I7 11th Gen 16gb 512gb Ssd 144hz Ips",
      color: "Negro",
      cat: "Notebooks",
      img: "https://http2.mlstatic.com/D_NQ_NP_788352-MLA45481349887_042021-O.webp",
      precio: "$USD 1399",
    },
  ];

const body = document.body;

let input = document.getElementById(`inputValue`);



// Div donde van las cards
let cardsproductos = document.getElementById("cardsproductos");
cardsproductos.setAttribute(
 `class`,
 `col-lg-10 offset-1 d-flex flex-wrap justify-content-start text-center`
);

let titulo = document.createElement("h1");
titulo.setAttribute(`class`, `text-center mt-10`);
body.prepend(titulo);

function tarjetasHTML(productosAMostrar) {
    for (const modelo of productosAMostrar) {
        cardsproductos.innerHTML += `
                                  <div id="modelo ${modelo.id}" class="card">
                                      <img src= ${modelo.img} class="card-img-top">
                                      <div class="card-body">
                                          <h5 class="card-title"> ${modelo.modelo} </h5>
                                          <p class="card-text">Categoria: ${modelo.cat} <br> Marca: ${modelo.marca} <br> Color: ${modelo.color} <br> Precio: ${modelo.precio}</p>
                                          <a class="btn btn-primary" href="index.html" role="button">Comprar</a>
                                      </div>
                                  </div>`;
}

estiloCards();
}
      
function filtroCat() {
tarjetasHTML();
estiloCards();
}

function estiloCards() {
   let cards = document.getElementsByClassName(`card`);
   for (const card of cards) {
    card.setAttribute(
      `style`,
      `width: 19.5rem; background-color: none; color: white; margin: 2rem`
     );
     }
   }
    
//Funcion para que no siga agregando cards en el elemento padre en cada busqueda
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
}
  
  tarjetasHTML(productos1);
  
  let btnFiltrar = document.getElementById("enviar");
  btnFiltrar.addEventListener("click", filtroCat);
    