import { useEffect } from "react"


const App = () => {
  const [data, setData] = useEffect(null); 
  useEffect(()=> { 
    fetch("http://localhost:8000/").then(res => res.json()).then(json => {
      console.log("Response ", json) ;
setData(json); 
    }
  
  ).catch(err => { 
      console.log("error: ", err) ; 
    })
  } ,  []) ; 
  return (
    <div>
      <h1> Frontned</h1>

<pre> 
  {JSON.stringify(data, null, 2)} 
  </pre>    </div>
  )
}

export default App