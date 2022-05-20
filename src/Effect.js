import React, { useEffect, useState } from 'react'

const Effect = () => {
// const [value, setValue] = useState(0)
const [data, setData] = useState([])



useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))

    // console.log('value changed' + value);
}, [])

  return (
    <div  className='move'>

            <h2>useEffect Basics</h2>
            {data.map((d)=>{

                const {title, id, description,image, category, price} = d

                return(
                    <div className='text' key={id}>
                        <h1>{title}</h1>
                        <h1>{description}</h1>
                        <h1>{category}</h1>
                        <h1>{price}</h1>
                        <img src={image} alt="" srcset="" />
                    </div>
                )
            })   }

    </div>
  )
}

export default Effect