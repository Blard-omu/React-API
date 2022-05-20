import React, { useEffect, useState } from 'react'

const Effect2 = () => {
const [data, setData] = useState([])



useEffect(()=>{
    fetch('https://api.coinlore.net/api/tickers/20')
            .then(res=>res.json())
            .then(json=>setData(json.data))

}, [])

  return (
    <div  className='move'>

            <h2>useEffect Basics</h2>
            {data.map((d)=>{

                const {name,symbol,price_usd, id} = d

                return(
                    <div className='text' key={id}>
                        <h1>{name}</h1>
                        <h1>{symbol}</h1>
                        <h1>{price_usd}</h1>

                    </div>
                )
            })   }

    </div>
  )
}

export default Effect2