import { ProxyState } from "../AppState.js"
import NotificationService from "../Services/NotificationService.js"
import { pokemonService } from "../Services/PokemonService.js"

function _drawWild(){
  let template = ''
  ProxyState.wildPokemon.forEach(p => template += `<button class="btn btn-outline-success m-1" onclick="app.pokemonController.setActivePokemon('${p.name}')">${p.name}</button>
  `)
  document.getElementById("wildPokemon").innerHTML = template
}

function _drawActive(){
  document.getElementById("activePokemon").innerHTML = ProxyState.activePokemon.ActiveTemplate
}

export default class PokemonController{
  constructor(){
    ProxyState.on("wildPokemon", _drawWild)
    ProxyState.on("activePokemon", _drawActive)

    this.getWildPokemon()
  }
  async getWildPokemon() {
    try {
      await pokemonService.getWildPokemon()
    } catch (error) {
      console.error(error, "get wildPokemon failed")
    }
  }


  async setActivePokemon(name){
    try {
      await pokemonService.setActivePokemon(name)
    } catch (error) {
      console.error(error, "get activePokemon failed")
    }
  }
} 