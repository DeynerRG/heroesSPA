import HeroList from "../components/HeroList"

function Marvel() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-800 m-5">Marvel Comics</h1>
      <hr />
      <HeroList publisher={ 'Marvel Comics' }/>
    </div>
  )
}

export default Marvel