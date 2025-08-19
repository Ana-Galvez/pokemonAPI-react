import PokemonDisplay from "./components/PokemonDisplay"
import PokemonForm from "./components/PokemonForm"
import PokemonResultado from "./components/PokemonResultado"

const App = () => {
  return (
    <div className="container mx-auto my-2 text-center">
      <PokemonDisplay/>
      <PokemonForm/>
      <PokemonResultado/>
    </div>
  )
}
export default App