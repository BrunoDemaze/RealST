let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

function addCarrinho(produto){

carrinho.push(produto)

localStorage.setItem("carrinho", JSON.stringify(carrinho))

updateCartCount()

alert(produto + " adicionado ao carrinho")

}

function updateCartCount(){

let count = document.getElementById("cart-count")

if(count){

count.textContent = carrinho.length

}

}

function carregarCarrinho(){

let lista = document.getElementById("listaCarrinho")

if(!lista) return

lista.innerHTML = ""

carrinho.forEach(item => {

let li = document.createElement("li")

li.textContent = item

lista.appendChild(li)

})

}

function limparCarrinho(){

localStorage.removeItem("carrinho")

location.reload()

}

updateCartCount()

carregarCarrinho()