import bar from "../../assets/whiteGraph.png"
import horz from "../../assets/whiteHorizontal.png"
import vert from "../../assets/whiteVertical.png"

const Homepage = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-700 py-4 pl-[35px] sm:pl-[75px] dark:text-white">
      <div className="main-container">
        <h2 className="items-start sm:text-[25px] font-xl mb-2">Dashboard</h2>
        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="flex flex-col gap-4 w-[100%] sm:w-[65%]">
            <img src={bar} alt="bar" />
            <img src={horz} alt="horz" />
          </div>
          <div className="flex sm:flex-col gap-4 w-[45%]  sm:w-[35%]">
            <img className="w-[100%]" src={vert} alt="vert" />
            <img className="w-[100%]" src={vert} alt="vert" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
