let list = document.querySelector(".ul")
fetch('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos').then(res => res.json()).then((data) => {
    console.log(data)
    main(data)
})


function main(result) {


    result.forEach(CoverPhotos => {
        console.log(CoverPhotos)
        let li = document.createElement("li")
        li.innerHTML = `
<a href="4.html">
<div style="width: 200px; height: 100px; background-color: chartreuse; padding: 10px; text-align: center">
<p> ${CoverPhotos.id}</p>
<p>${CoverPhotos.url}</p>
</div>

</a>


`

        list.appendChild(li)
    })
}