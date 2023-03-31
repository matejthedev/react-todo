import React from 'react'

const View = ({toggleView, showOnlyActive}) => {
  return (
    <div>
      <button onClick={toggleView}>{showOnlyActive ? "Show All" : "Only active"}</button>
    </div>
  )
}

export default View