import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import {useState, useEffect} from "react"

const App = () => {


  const [data, setData] = useState('')
  const [fetchError, setFetchError] = useState('')


    const fetchData = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw Error('Did not recieve expected data')
      const data = await response.json()
      setData(data.joke);
      console.log(data)
      setFetchError(null)
    } catch (err) {
      console.log(err.message)
      setFetchError(err.message)
    }
  }


  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      <Header />
      <Content
        data={data}
        fetchError={fetchError} 
        fetchData={fetchData}  
      />
      <Footer />
    </div>
  )
}

export default App
