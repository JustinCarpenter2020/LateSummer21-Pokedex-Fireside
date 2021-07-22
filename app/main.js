import PokemonController from "./Controllers/PokemonController.js";

class App {
  pokemonController = new PokemonController();
}

window["app"] = new App();
