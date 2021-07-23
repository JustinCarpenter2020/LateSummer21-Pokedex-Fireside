import { bcwApi, pokeApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";


class PokemonService {
  async setActivePokemon(name) {
   const res = await pokeApi.get('pokemon/' + name)
   console.log(res.data)
   ProxyState.activePokemon = new Pokemon(res.data)
   console.log(ProxyState.activePokemon)


  }
  async getWildPokemon() {
    const res = await pokeApi.get("pokemon?limit=100")
    ProxyState.wildPokemon = res.data.results
    console.log(ProxyState.wildPokemon)
  }

  async postToSandbox(){
    const res = await bcwApi.post('pokemon', ProxyState.activePokemon)
    console.log(new Pokemon(res.data))
  }



}


export const pokemonService = new PokemonService();