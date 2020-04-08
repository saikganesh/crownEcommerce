import {createSelector} from "reselect"

const shopSelector = (state) => state.shop

export const collectionsSelector = createSelector(
    [shopSelector],
    (shop) => shop.collections
)

export const collectionPreviewSelector = createSelector(
    [collectionsSelector],
    (collections) => Object.values(collections)
)

export const collectionSelector = (urlParam) => createSelector(
    [collectionsSelector],
    (collections) => collections[urlParam]
)