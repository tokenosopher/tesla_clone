//a slice is a small part of the state for redux
//and the state is saved across all of the webpages of the site.

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state =>  state.car.cars

export default carSlice.reducer;