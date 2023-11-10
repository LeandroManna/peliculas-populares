import Container from "./components/Container"
import { MagicMotion } from 'react-magic-motion'

function App () { // Un componente es una funcion sincronica que retorna un elemento HTML
  // SPA single page application



  return (
    <MagicMotion>
      <h1>Movies</h1>

      <Container />
    </MagicMotion>
  )
}

export default App
