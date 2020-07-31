import shopTypes from "./shopTypes"

let initialState = {
    collections : null,
    isFetching : false,
    errorMessage : ""
}

const shopReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case shopTypes.fetchCollectionsStart :
            console.log('reducer updated')
            return {
                ...state,
                isFetching : true
            }

        case shopTypes.fetchCollectionsSuccess :
            return {
                ...state,
                collections : action.payload,
                isFetching : false
            }
        case shopTypes.fetchCollectionsFailure :
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }
        
        
        default:
            return state
    }
}

export default shopReducer