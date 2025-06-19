import{products} from './1.js'
let box = document.querySelector("#box")
let searchInput = document.querySelector("#searchInput")
let filterBtns = document.querySelectorAll(".filter-btn")
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
    <span class="font-bold mt-2 text-blue-900">${product.price}</span>
    <span class=" uppercase tracking-wide ">stock: ${product.stock}</span>
</div>
<button class="w-full border rounded-xl hover:bg-blue-200 font-bold border-gray-900 text-gray-900 py-2 px-4 text-sm  ">
    add to ctart
</button>
</div>
    
    </div>
    `

        box.appendChild(div)
    })
}

