import AdoptionForm from "./components/AdoptionForm"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="min-h-screen w-full bg-[url(./assets/bg.png)] bg-no-repeat bg-cover flex flex-col">
      <div className="w-full top-0 sticky">
        <Navbar />
      </div>
      <div className="grow flex justify-center items-center">
        <AdoptionForm />
      </div>
    </div>
  )
}

export default App
