import Tina from 'tinacms'
import { TinaProvider } from 'tinacms'

const tina = new Tina({
  enabled: true,
  plugins: [],
})

const App = () => (
  <TinaProvider cms={tina}>
    <h1>Bienvenue sur mon site Hugo avec Tina CMS</h1>
  </TinaProvider>
)

export default App
