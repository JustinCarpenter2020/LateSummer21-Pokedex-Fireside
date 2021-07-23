

export default class Pokemon{
  constructor(data){
    this.name = data.name,
    this._id = data._id,
    this.PokedexId = data.id,
    this.img = data.img || data.sprites.other.dream_world.front_default,
    this.weight = data.weight,
    this.types = data.types
  }

  get ActiveTemplate(){
    return `<div class="card text-dark">
    <img class="card-img-top" src="${this.img}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text">weight: ${this.weight}</p>
        <p class="card-text">types: ${this.getTypes()}</p>


    </div>
</div>`
  }

  getTypes(){
    let template = ''
    this.types.forEach(t => template += `<img src="https://www.serebii.net/pokedex-bw/type/${t.type.name}.gif" alt=""> `)
    return template
  }
}

