const pokeBtn=document.querySelector('#pokeBtn')

pokeBtn.addEventListener('click',getName)

async function getName(){
    try {
        const getPokemanstats = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
        .than(res => res.Object.results)
        .than(Object =>{
            Object.map(pokeStats => {
                getStats(pokeStats)
            })
            return results
        })
    }catch (error) {
        console.error(error)
    }

 }

 const getMainContainer = document.querySelector('#mainContainer')
 const getStats = async (charStats) => {
    try {
        const inSats = await axios.get(charStats.url)
        .than(res =>res.results)
        .than(results => {
            console.log()
            // <div class="card" style="width: 18rem;">
            const card = document.createElement('div')
            card.className = 'card'

            // <img src="..." class="card-img-top" alt="...">
            const frontshiny = data.sprites.front_shiny
            const img = document.createElement('img')
            img.src=frontshiny
            img.className = 'card-img-top'
            card.append(img)

            // <div class="card-body">
           const cardBody = document.createElement('div')
           cardBody.className = 'card-body'
           //    <h5 class="card-title">Card title</h5>
           const h5El = document.createElement('h5')
           h5El.className = 'card-title'
           h5El.textContent = charStats.name
           cardBody.append(h5El)
        //    console.log(charStats.name)
           //p element.card-text

           const pEl = document.createElement('p')
           pEl.className = 'card-text'
        //    console.log(data.types)
           pEl.textContent= data.types.map(type =>{
            console.log(type.type.name)
            return ' '+ type.type.name
           })
           cardBody.append(pEl)

           const pEll = document.createElement('p')
           pEll.className = 'card-text'
        //    console.log(data.ability)
           pEll.textContent= data.ability.map(type =>{
            console.log(type.ability.name)
            return ' '+ type.ability.name
           })
           cardBody.append(pEll)

           const pElll = document.createElement('p')
           pElll.className = 'card-text'
        //    console.log(data.moves)
           pElll.textContent= data.moves.map(type =>{
            console.log(type.moves.name)
            return ' '+ type.moves.name
           })
           cardBody.append(pElll)

           const pEllll = document.createElement('p')
           pEllll.className = 'card-text'
        //    console.log(data.weight)
           pEllll.textContent= data.weight.map(type =>{
            console.log(type.weight.name)
            return ' '+ type.weight.name
           })
           cardBody.append(pEllll)

           card.append(cardBody)



            getMainContainer.append(card)



        })

    }catch (error) {
        console.error('error')
    }
 }

















































































































// async function bar(){
//     let res= await fetch("https://data.covid19india.org/v4/min/data.min.json");
//     let result=await res.json();
//     console.log(result);
//     console.log(`confirmed:${result.TN.total.confirmed}`);
    
// }
// bar();


// var container=document.createElement("div");
// container.setAttribute("class","container");
// var row=document.createElement("div");
// row.setAttribute("class","row");
// row.classList.add("row","m-3");
// container.append(row);

// var res=fetch("https://restcountries.com/v2/all");
// res.then((data)=>data.json()).then((data1)=>foo(data1));


// function foo(data1){
// for(var i=0;i<data1.length;i++){
//    row.innerHTML+=`<div class="col-md-4">
//  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//   <img src="${data1[i].flag}" class="card-img-top" alt="...">
//   <div class="card-body">
//   <h5 class="card-title">${data1[i].name}</h5>
//   <h5 class="card-title">${data1[i].capital}</h5>
//   </div>
// </div>
  
//    </div>`;
// document.body.append(container); 
// }

// }