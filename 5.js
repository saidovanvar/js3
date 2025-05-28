let list = document.querySelector(".nob")
fetch('https://fakerestapi.azurewebsites.net/api/v1/Users').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(User => {
        console.log(User)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="5.html">
<div style="width: 200px; height: 100px; background-color: chartreuse; padding: 10px; text-align: center">
<p> ${User.id}</p>
<p>${User.password}</p>
</div>

</a>


`

        list.appendChild(li)
    })
}