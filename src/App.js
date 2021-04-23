import React , {useEffect,useState} from 'react'
import './App.css'
import Header from './Header'
import axios from 'axios'
import CharacterTable from './CharacterTable'
import Search from './Search'

// const hash = '9b46632d15398cdbeddf9ebd99ffd04e'

function App() {

  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(() => {
      const fetch = async () => {
        if(query ==='')
        {
        const result = await axios.get(` https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b86fcab15da26f47d3b09aa54b48da03&hash=${process.env.REACT_APP_HASH}`)

        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setIsLoading(false)
        }
        else
        {
        const result = await axios.get(` https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b86fcab15da26f47d3b09aa54b48da03&hash=${process.env.REACT_APP_HASH}`)

        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setIsLoading(false)
        }
      }
      fetch()
  },[query])

  return (
    <div className="App container">
      <Header />
      <Search search={(que)=>setQuery(que)} />
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;


