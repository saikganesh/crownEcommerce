import shopTypes from "./shopTypes"

export const fetchCollectionsStart = () => ({
    type : shopTypes.fetchCollectionsStart,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type : shopTypes.fetchCollectionsSuccess,
    payload : collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type : shopTypes.fetchCollectionsFailure,
    payload : errorMessage
}) 


