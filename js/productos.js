import searchFilters from "./filtro_busqueda";
let productos = [{
  id: 1,
  marca: "Apple",
  modelo: "Iphone 13 Pro",
  color: "Silver",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp",
  precio: 1399.99
},
{
  id: 2,
  marca: "Apple",
  modelo: "Iphone 13 Pro",
  color: "Gold",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_799292-MLA47779331165_102021-O.webp",
  precio: 1399.99
},
{
id: 3,
marca: "Apple",
modelo: "Iphone 12 Pro",
color: "Silver",
cat: "Celulares",
img: "https://http2.mlstatic.com/D_NQ_NP_941019-MLA43975720782_112020-O.webp",
precio: 999.99
},
{
  id: 4,
  marca: "Apple",
  modelo: "Iphone 12 Pro",
  color: "Green",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp",
  precio: 999.99
},
{
  id: 5,
  marca: "Samsung",
  modelo: "S21+ 5G",
  color: "Phantom Black",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_976371-MLA45566612445_042021-O.webp",
  precio: 849.99
},
{
  id: 6,
  marca: "Samsung",
  modelo: "S21",
  color: "Phantom White",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_748918-MLA44848256931_022021-O.webp",
  precio: 749.99
},
{
  id: 7,
  marca: "Samsung",
  modelo: "Galaxy Z Fold3 5G",
  color: "Phantom Green",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_831253-MLA47891251953_102021-O.webp",
  precio: 1549.99
},
{
  id: 8,
  marca: "Xiaomi",
  modelo: "Mi 11 Ultra",
  color: "Negro",
  cat: "Celulares",
  img: "https://http2.mlstatic.com/D_NQ_NP_751583-MLA46773535610_072021-O.webp",
  precio: 920
},
{
  id: 9,
  marca: "Gigabyte",
  modelo: "Aorus I7 11va 32gb Ssd Rtx3080 16gb 240hz",
  color: "Negro",
  cat: "Notebooks",
  img: "https://http2.mlstatic.com/D_NQ_NP_853223-MLA46752326941_072021-O.webp",
  precio: 1999.99
},
{
  id: 10,
  marca: "Gigabyte",
  modelo: "Aero 17 I7 Rtx 3060p 16gb 1tb M.2",
  color: "Negro",
  cat: "Notebooks",
  img: "https://http2.mlstatic.com/D_NQ_NP_946917-MLA45656496951_042021-O.webp",
  precio: 2099.99
},
{
  id: 11,
  marca: "Asus",
  modelo: "Rog Duo 15.6+14 Uhd I9 Ssd 2tb 32gb Rtx 2080",
  color: "Negro",
  cat: "Notebooks",
  img: "https://http2.mlstatic.com/D_NQ_NP_716951-MLA47492162666_092021-O.webp",
  precio: 3920
},
{
  id: 12,
  marca: "Asus",
  modelo: "Tuf Dash Rtx 3060 I7 11th Gen 16gb 512gb Ssd 144hz Ips",
  color: "Negro",
  cat: "Notebooks",
  img: "https://http2.mlstatic.com/D_NQ_NP_788352-MLA45481349887_042021-O.webp",
  precio: 1399.99
}
]

//Selecciono donde voy a imprimir las cards
const cards = document.getElementById('cards')

//constante para llamar a el footer del carrito
const templateFooter = document.getElementById('template-footer').content

//constante para llamar a el header del carrito
const templateCarrito = document.getElementById('template-carrito').content

//capturo donde se van a mostrar el nombre de los items en el carrito
const items = document.getElementById('items')

//capturo donde se va a poder vaciar el carrito y donde va a decir el total del carrito
const footer = document.getElementById('carrito-footer')

//Creo el carrito vacio donde se van a empujar los items
let carrito = {}

const fragment = document.createDocumentFragment()


//EVENTOS
//evento y localstorage para que no se pierda los items del carrito al refrescar
document.addEventListener('DOMContentLoaded',() =>{
  if(localStorage.getItem('carro')){
    carrito = JSON.parse(localStorage.getItem('carro'))
    pintarCarrito()
  }
})

//creo el evento para que se muestren los items en el carrito
cards.addEventListener('click', e =>{
  addCarrito(e)
})
//evento para boton sumar y disminuir la cantidad de productos en el carrito
items.addEventListener('click', e =>{
  btnSuma(e)
})

//FUNCIONES
//hago un for of para imprimir las tarjetas
function tarjetasHTML(respuesta) {
        let misdatos = respuesta
        for(const modelo of misdatos){
            cards.innerHTML +=`
            <div class="col-lg-3 mb-3 col-md-6">
            <div id="productos" class="card">
            <img src= ${modelo.img} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"> ${modelo.modelo} </h5>
                <p class="card-text card-marca">${modelo.cat}</p>
                <p class="card-text"> ${modelo.color}</p>
                <p class="card-text card-price">Precio: ${modelo.precio}</p>
                <button href="#" id="${modelo.id}" class="btn btn-dark add-cart" style="background-color:black; border-color:#171C3D">Agregar al carrito</a>
                </div>
        </div>`
        }
        estiloCards();
        console.log(misdatos)
    }
    
//funcion para darle estilo a las cards
    function estiloCards() {
        let cards = document.getElementsByClassName('card');
        for (const card of cards) {
          card.setAttribute(
            `style`,
            `width: 19.5rem; text-align: center; background-color: black; color: white; margin: 4.8rem`
           
          ) 
        }
      }


      //Creo una constante que utilizar el event listener anterior creado para ver si lo que presiono es true
      const addCarrito = e => {
        //console.log(e.target);
        //console.log(e.target.classList.contains('btn-dark'));

        if(e.target.classList.contains('btn-dark')){
          setCarrito(e.target.parentElement)
          
        }
        e.stopPropagation()
      }

      //creo una funcion para imprimir cada propiedad en el carrito
      const setCarrito = objeto => {
        //console.log(objeto);
        const producto = {
          id: objeto.querySelector(`button`).id,
          title: objeto.querySelector("p.card-marca").textContent,
          precio: objeto.querySelector("p.card-price").textContent,
          cantidad: 1
        }
        if(carrito.hasOwnProperty(producto.id)) {
          producto.cantidad = carrito[producto.id].cantidad + 1
        }
        carrito[producto.id] = {...producto}
        pintarCarrito()
      }

      //creo una funcion para imprimir el carrito
      const pintarCarrito = () => {
        removeAllChildNodes(items)
        Object.values(carrito).forEach(producto => {
            
            templateCarrito.querySelectorAll('td')[0].textContent = producto.title
            templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
            templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
            
            //btn
            templateCarrito.querySelector('.btn-info').dataset.id = producto.id
            templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    
            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.append(fragment)
        
        imprimirFooter()
        //seteo el localstorage con los items en el carrito
        localStorage.setItem('carro', JSON.stringify(carrito))
    }

    //funcion para que no se agregue otra vez el mismo array
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }

    //funcion para imprimir el footer del carrito, sumar y restarle cantidad y tambien vaciarlo
    const imprimirFooter=() => {
      footer.innerHTML = ''
      if(Object.keys(carrito).length===0){
        footer.innerHTML = `
        <th scope="row" colspan="5" style="text-align:center;">Carrito vacío</th>
        `
        return
      }
      const nCantidad = Object.values(carrito).reduce((acc,{cantidad})=> acc + cantidad, 0)
      const nPrecio= Object.values(carrito).reduce((acc, {cantidad, precio}) =>  acc + cantidad * precio ,0)
      //console.log(nPrecio);

      templateFooter.querySelectorAll('td')[0].textContent = nCantidad
      templateFooter.querySelector('span').textContent = nPrecio
      
      const clone = templateFooter.cloneNode(true)
      fragment.appendChild(clone)
      footer.appendChild(fragment)
      
      const Vaciar = document.getElementById('vaciar-carrito')
      
      Vaciar.addEventListener('click', ()=> {
        carrito = {}
        pintarCarrito()
      })
    }

      //funcion para sumar y restar en el carrito
      const btnSuma = e =>{
        console.log(e.target);
        //aumentar cantidad
        if(e.target.classList.contains('btn-info')){
          carrito[e.target.dataset.id]
          console.log(carrito[e.target.dataset.id]);
          const product = carrito[e.target.dataset.id]
          product.cantidad++
          carrito[e.target.dataset.id] = {...product}
          pintarCarrito()
        }
        //disminuir cantidad
        if(e.target.classList.contains('btn-menos')){
          
          const product = carrito[e.target.dataset.id]
          product.cantidad--
          if(product.cantidad === 0 ){
            delete carrito[e.target.dataset.id]
          }
          pintarCarrito()

        }
        e.stopPropagation
      }
      
let input = document.getElementById(`inputValue`);
let enviar = document.getElementById("enviar");
enviar.addEventListener("click", filtroCat);
      
function filtroCat() {
removeAllChildNodes(cards);
let modelosFiltrados;
        
//si el usuario no ingresa nada en el input se muestran todos los resultados
if (input.value === "") {
  modelosFiltrados = productos;
  } else {
//filtrar productos con validaciones
modelosFiltrados = productos.filter(
  (modelo) => modelo.cat.toLowerCase().includes() === input.value.toLowerCase()
);
console.log(modelosFiltrados);
}
tarjetasHTML(modelosFiltrados);
estiloCards();
}

//Funcion para que no siga agregando cards en el elemento padre en cada busqueda
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
}
  
tarjetasHTML(productos);
  
let btnFiltrar = document.getElementById("enviar");
btnFiltrar.addEventListener("click", filtroCat);
searchFilters();