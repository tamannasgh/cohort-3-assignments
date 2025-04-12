import MultiStep from "./components/MultiStep"
import One from "./components/One"
import Two from "./components/Two"
import Three from "./components/Three"

function App() {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <MultiStep>
        <One />
        <Two />
        <Three />
      </MultiStep>
    </div>
  )
}

export default App
