let list = document.querySelector(".li")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(Authors => {
        console.log(Authors)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="2.html">
<div style="width: 200px; height: 100px; background-color: chartreuse; padding: 10px; text-align: center">
<p> ${Authors.id}</p>
<p>${Authors.firstName}</p>
</div>
</a>


`

        list.appendChild(li)
    })
}