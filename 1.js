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
<div style="width: 200px; height: 100px; background-color: chartreuse; padding: 10px; text-align: center">
<p> ${item.id}</p>
<p>${item.title}</p>
</div>

</a>
<div>

`

        list.appendChild(li)
    })
}