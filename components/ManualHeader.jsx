import React from 'react'
import {useMoralis} from 'react-moralis'

function ManualHeader() {
  const {enableWeb3, account} = useMoralis()


  return (
    <div>
      <button onClick={async () => {await enableWeb3()}}>Connect</button>
      
    </div>
    
  )
}

export default ManualHeader