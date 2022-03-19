console.log("prb ruta")

 
document.addEventListener('DOMContentLoaded',()=>{
    const random = getNumeroAleatorio(2,151)
    fetchApi(random)
    
    })

const getNumeroAleatorio=(min,max)=>{

return Math.floor(Math.random()* (max-min))+min;

}


 

const fetchApi = async(id)=>{

    try{

const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
const json=await res.json()
pintarCard(json)
    }catch(error){
 
        console.log(error)

    }


}

const pintarCard = (pokemon) =>{
    console.log(pokemon)
    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone= template.cloneNode(true)
    const fragment = document.createDocumentFragment()
    clone.querySelector('.card-body-img').setAttribute('src',pokemon.sprites.other.dream_world.front_default)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.name}<br><br> <span>${pokemon.stats[0].base_stat} hp</span>`
    clone.querySelector('.card-body-text').innerHTML = `Experiencia: ${pokemon.base_experience}`
    clone.querySelectorAll('.card-footer-social h3')[1].textContent= pokemon.stats[1].base_stat+'K'
    clone.querySelectorAll('.card-footer-social h3')[0].textContent= pokemon.stats[0].base_stat+'K'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent= pokemon.stats[2].base_stat+'K'

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}

fetchApi();