import MultiStep from "./components/MultiStep"
import One from "./components/One"
import Two from "./components/Two"
import Three from "./components/Three"

function App() {

  return (
    <MultiStep>
      <One />
      <Two />
      <Three />
    </MultiStep>
  )
}

export default App
