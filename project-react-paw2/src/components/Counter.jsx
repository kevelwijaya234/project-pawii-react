import React, { useState } from 'react'

function counter () {
    const [angka, setAngka] = useState(0)
        
    return (
    <div>
        <h1>{angka}</h1>
        <button className='btn btn-primary'>Testing</button>
    </div>
  )
}

export default Counter