//VARIABLES
//linkeo datos.json que contiene mi array de objetos
const urlJSON = "../js/datos.json"

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
//parseo el json y hago un for of para imprimir las tarjetas
$.getJSON(urlJSON,function (respuesta, estado) {
    if (estado ==="success"){
        let misdatos = respuesta
        for(const dato of misdatos){
            cards.innerHTML +=`
            <div class="col-lg-3 mb-3 col-md-6">
            <div id="prenda" class="card">
            <img src= ${dato.img} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"> ${dato.modelo} </h5>
                <p class="card-text card-marca">${dato.cat} ${dato.modelo}</p>
                <p class="card-text"> ${dato.color}</p>
                <p class="card-text card-price">Precio: ${dato.precio}</p>
                <button href="#" id="${dato.id}" class="btn btn-dark add-cart" style="background-color:black; border-color:#171C3D">Agregar al carrito</a>
                </div>
        </div>`
        }
        estiloCards();
        console.log(misdatos)
    }
    })
  

    
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
      