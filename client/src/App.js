import { useEffect } from "react";
import { useState } from "react";
export default function App() {
  const [data, setData] = useState('');
  const checkApi = async()=>{
    const res = await fetch('https://testreactbe.onrender.com');
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
