import HeroList from "../components/HeroList"


function Dc() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-800 m-5">DC Comics</h1>
      
      <HeroList publisher={'DC Comics'}/>
    </div>
  )
}

export default Dc