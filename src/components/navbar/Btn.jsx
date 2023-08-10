import React from 'react'

export default function Btn({titelBtn ,onPlay}) {
  return (
    <div>
      <button className ='btn btn-success mt-3' onClick ={() => onPlay()}>{titelBtn}</button>
    </div>
  )
}
