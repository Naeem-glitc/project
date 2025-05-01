import { createSlice } from '@reduxjs/toolkit'
import { validate } from 'uuid'

const initialState = {
  value: 0,
  
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.value += 1
      
     localStorage.setItem("counter", JSON.stringify(state.value))
     
    },
    decrement: (state) => {
      state.value -= 1
    },
    initialvalue: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, initialvalue } = counterSlice.actions

export default counterSlice.reducer