import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)
  console.log(name);

  // const { push } = useHistory()

  // const handleSearchPokemon = () => {
  //   console.log();
  //   if (name !="") {
  //     push(`/pokemon/${name}`)
  //   }
  // }

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      Home
      <br />
      <div>{count}</div>
      <button onClick={handleClick}>Press me!</button>
      <br />
      <input type="text" onChange={(e)=> setName(e.target.value)} />
      <Link to={`/pokemon/${name}`}>Search Pokemon</Link>
    </div>
  )
}

export default Home
