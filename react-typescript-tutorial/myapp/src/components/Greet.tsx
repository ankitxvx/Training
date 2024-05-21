import React from 'react'
type GreetProps = {
    name : string
    msgCount?: number
    isLoggedin : boolean
}
export const Greet = (props: GreetProps) => {
    const {msgCount = 0} = props
  return (
    <div>
        <h2>
           { props.isLoggedin?`welcome ${props.name}! you have ${props.msgCount} unread messages`:'welcome Guest'}
        </h2>
    </div>
  )
}
