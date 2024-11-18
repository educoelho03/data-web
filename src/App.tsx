import React, {useEffect, useState} from 'react'
import axios from 'axios';

import './styles/globalStyles.css'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'

function App() {
  const [data, setData] = useState([])

  async function fetchData(){
      try {
          const response = await axios.get('/api/data')
          setData(response)
      } catch(error){
          console.error("Error fetching Data", error)
      }
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <PageTitle />
    </div>
  )
}

export default App
