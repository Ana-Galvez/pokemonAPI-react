const PokemonDisplay = () => {

  const respuestaPokemon=true;
  const imagePokemon ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  const nombrePokemon ="Bulbasaur"

  return (
    <div >
      <div className="card w-50 mx-auto">
        <div className="card-header">
          <h1>{respuestaPokemon ? `¡${nombrePokemon.toUpperCase()}!` : "¿Cuál pokemon es?"}</h1>
        </div>
        <div className="card-body">
          <img src={imagePokemon}  className="img-fluid w-50" 
          style={{
            filter: respuestaPokemon ? "none" : "brightness(0%)",
            transition:"filter 0.9s ease-in-out",}}
            alt="imagen del pokemon"></img>
        </div>
      </div>
    </div>
  )
}
export default PokemonDisplay