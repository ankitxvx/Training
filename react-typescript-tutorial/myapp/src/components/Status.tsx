import React from 'react'
type StatusProps= {
    status : 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let messages 
    if(props.status==='loading'){
        messages = 'Loading'
    }else if(props.status ==='success'){
        messages = 'Data fetched sucsssefully'
    }
  return (
    <div>
        <h2> status - {messages}</h2>
    </div>
  )
}
