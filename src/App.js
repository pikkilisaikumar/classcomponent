import {useState, useEffect} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const App = () => {
  const [username, setName] = useState('sandeep')

  const [count, setCount] = useState(0)

  const [data, setData] = useState([])

  const [isLoading, Spinner] = useState(true)

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setData(data)
    Spinner(!isLoading)
  }, [count])

  function nameClickButton() {
    setName('Durga')
    setCount(count + 1)
    Spinner(!isLoading)
  }

  return (
    <div>
      <h1>{count}</h1>
      {isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      ) : (
        <div>
          {data.map(each => (
            <p>{each.name}</p>
          ))}
        </div>
      )}
      <button type="button" onClick={nameClickButton}>
        Click
      </button>
    </div>
  )
}

export default App
