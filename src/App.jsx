import Homepage from "./components/homePage/Homepage"
import Navbar from "./components/navBar/Navbar"
import Sidebar from "./components/sideBar/Sidebar"

const App = () => {
  return (
    <div className="relative">
      <Navbar/>
      <Homepage/>
      <Sidebar/>
    </div>
  )
}

export default App
