import shopData from "./shopData"

let initialState = {
    collections : shopData
}

const shopReducer = (state=initialState,action) => {
    switch(action.type)
    {
        default:
            return state
    }
}

export default shopReducer