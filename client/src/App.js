import { useEffect } from "react";
import { useState } from "react";
export default function App() {
  const [data, setData] = useState('');
  const checkApi = async()=>{
    const res = await fetch('http://localhost:8000');
    setData(await res.json()) ;
  }

  useEffect(()=>{
    setInterval(()=>{
      checkApi();

    },3000)
  },[])
  return (
    <div>{data}</div>
  )
}
