import {useState} from 'react'

import './index.css'

import {MessageContext, useDetails} from '../../App'

const Home = () => {
  const [username, setName] = useState('sandeep')

  const [count, setCount] = useState(0)

  function nameClickButton() {
    setCount(count + 1)
  }

  function nameClickedone() {
    setCount(count - 1)
  }

  return (
    <div>
      <div>
        <p
          onClick={() => {
            setName('Saikumar')
          }}
        >
          {username}
        </p>
        <h1>{count}</h1>
        <button type="button" onClick={nameClickedone}>
          Minus Clicked
        </button>
        <button type="button" onClick={nameClickButton}>
          Click
        </button>
        <div className="table-container-one">
          <table className="table-styling">
            <tr className="table-styling-one">
              <th className="each-row-cell">Customer ID</th>
              <th className="each-row-cell">Customer Name</th>
              <th className="each-row-cell">Customer Email</th>
              <th className="each-row-cell">Customer Address</th>
            </tr>
            <tr className="table-styling-one">
              <td className="each-row-cell">1</td>
              <td className="each-row-cell">Sai</td>
              <td className="each-row-cell">saikumar@gmail.com</td>
              <td className="each-row-cell">Chilukuru</td>
            </tr>
            <tr className="table-styling-one">
              <td className="each-row-cell">2</td>
              <td className="each-row-cell">Sandeep</td>
              <td className="each-row-cell">sandeep@gmail.com</td>
              <td className="each-row-cell">Madhira</td>
            </tr>
          </table>
        </div>
      </div>
      )
    </div>
  )
}

export default Home
