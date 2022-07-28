import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [serachParam, setSearchParam] = useSearchParams();
  return (
    <div>Filter
        <h3>Age is {serachParam.get('age')}</h3>
        <br />
        <h3>City is {serachParam.get('city')}</h3>

        <input type='text' placeholder='set city' onChange={(e) => setSearchParam({city:e.target.value, age:10})}/>
        <br />
        <button onClick={() => setSearchParam({age:50})}>Age change</button>
    </div>
  )
}

export default Filter