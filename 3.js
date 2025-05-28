let list = document.querySelector(".nav")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(Books => {
        console.log(Books)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="3.html">
<div style="width: 200px; height: 100px; background-color: chartreuse; padding: 10px; text-align: center">
<p> ${Books.id}</p>
<p>${Books.title}</p>
</div>


</a>


`

        list.appendChild(li)
    })
}