const cardBody= document.getElementById("cards")
const dropdown= document.getElementById("dropdown")
const input=document.getElementById("inp")
axios.get('https://restcountries.com/v3.1/all').then(res=>{
    console.log(res.data);
    let innerHtml=""
    for(let i=0;i<res.data.length;i++)
    {
        const{flags,name,population,region,capital}= res.data[i]
        innerHtml+=`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${flags.png}" alt="Card image cap">
        <div class="card-body">
        <p class="card-text">
        <span>${name.common}</span> <br>
          </p>
          <p class="card-text">
              <span>Population: ${population}</span> <br>
              <span>Region: ${region}</span> <br>
              <span>Capital: ${capital}</span>
          </p>
        </div>
      </div>
        `
    }
    cardBody.innerHTML=innerHtml;
    let innerHtml1=""
    for(let i=0;i<res.data.length;i++)
    {
        const{region}= res.data[i]
        innerHtml1+=`
        <a class="dropdown-item" href="#"> ${region}</a>
        `
    }
    dropdown.innerHTML=innerHtml1;
}
)
input.addEventListener("keyup", ()=>{
    axios.get('https://restcountries.com/v3.1/all').then(res=>{
    console.log(res.data);
    let innerHtml=""
    for(let i=0;i<res.data.length;i++)
    {
       
    }
}
)
})

