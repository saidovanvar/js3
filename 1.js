let list = document.querySelector(".list")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Activities').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(item => {
        console.log(item)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="2vazifa.html">

<p> ${item.id}</p>
<p>${item.title}</p>

</a>


`

        list.appendChild(li)
    })
}