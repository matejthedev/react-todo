import React from 'react'
import { toggleView } from '../redux/view'
import {useDispatch, useSelector} from "react-redux"

const View = () => {
  const {showOnlyActive} = useSelector(state => state.view)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(toggleView())}>{showOnlyActive ? "Show All" : "Only active"}</button>
    </div>
  )
}

export default View