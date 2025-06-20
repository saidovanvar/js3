import{products} from './1.js'
let box = document.querySelector("#box")
let searchInput = document.querySelector("#searchInput")
let filterBtns = document.querySelectorAll(".filter-btn")
let cart = []
render(products)
searchInput.addEventListener("input", e => {
    let inputValue = e.target.value.toUpperCase();
   let searchResult = products.filter((item)=> {
      return  item.name.toUpperCase().includes(inputValue)})
    render(searchResult)

})

filterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        let category = btn.getAttribute("data-category")
        let filterCategory

            if(category === "all"){
                filterCategory = products
            }else{
               filterCategory = products.filter((item) => {
                    return item.category === category
                })
            }


        render(filterCategory)
    })
})
function render(products = products) {
    box.innerHTML = ''
    products.forEach(product => {
        let div = document.createElement("div")
        div.innerHTML = `
<div class="bg-white border border-gray-200 rounded-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300 ">
    <div class="aspect-square bg-gray-100 overflow-hidden">
    <div class="w-full h-full bg-gray-200 flex items-center justify-center ">
    <img src="${product.image}" alt="prouduct.image">
</div>
</div>
    <div class="p-6 font-bold">
    <h3 class="font-bold text-blue-900"> ${product.name}</h3>
    <p class="font-bold mt-2 text-gray-400 text-[13px]">${product.description}</p>
    <div class="flex justify-between items-center mb-4">
    <span class="font-bold mt-2 text-blue-900">$${product.price}</span>
    <span class=" uppercase tracking-wide ">stock: ${product.stock}</span>
</div>
<button class="btn_add w-full border rounded-xl hover:bg-blue-200 font-bold border-gray-900 text-gray-900 py-2 px-4 text-sm  ">
    add to ctart
</button>
</div>
    
    </div>
    `
        let btn_add = div.querySelector(".btn_add")
        btn_add.addEventListener("click", e => {
            addCart(product.id)
        })

        box.appendChild(div)
    })
}

function addCart(id) {
  let item = products.find(product => product.id === id);
  let exitingItem = cart.find(product => product.id === item.id)

    if (exitingItem) {
        exitingItem.quality += 1
    }else {
        cart.push({...item, quantity: 1})
    }

    updateQuantity()
}

function updateQuantity() {
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector("#cartCount").textContent = count;
    console.log(cart);
}

let cartModel = document.querySelector("#cartModel")
let viewCartBtn = document.querySelector("#viewCartBtn")
let closeCartBtn = document.querySelector("#closeCartBtn")
viewCartBtn.addEventListener("click", e => {
    cartModel.classList.remove("hidden");

    cartModalRender()

})
closeCartBtn.addEventListener("click", e => {
    cartModel.classList.add("hidden");
})


function cartModalRender() {
    let cartItems = document.querySelector("#cartItems");
    let cartTotal = document.querySelector("#cartTotal");
    let total = 0
    cart.forEach((item) => {
        let itemtotal = item.quantity * item.quantity
        total += itemtotal

        let div = document.createElement("div")
        div.innerHTML = `
<div class="flex gap-2 mb-4">
<div>
<img class="w-[150px]" src="${item.image}" alt="img">
<p class="font-bold text-blue-600 mt-2 text-lg">${item.name}</p>
</div>
<div class="items-start font-bold text-gray-400 text-2xl">
<p>${item.description}</p>
   <span class="font-bold mt-2 text-blue-900">$${item.price}</span>
</div>
</div>
        
        `
        cartItems.appendChild(div)
    })
    cartTotal.textContent = total
}
