import React from 'react'

const CodeContainer = ({data}) => {
    const style={
        backgroundColor:"#A3A3A3",
        width:"inherit",
        height:"auto",
    }
  return (
    <div style={style}>
        {data}
    </div>
  )
}

export default CodeContainer