import {createSelector} from "reselect"

const shopSelector = (state) => state.shop

export const collectionsSelector = createSelector(
    [shopSelector],
    (shop) => shop.collections
)

export const collectionPreviewSelector = createSelector(
    [collectionsSelector],
    (collections) => collections ? Object.values(collections) : []
)

export const collectionSelector = (urlParam) => createSelector(
    [collectionsSelector],
    (collections) => collections ? collections[urlParam] : null
)

export const isFetchingSelector = createSelector(
    [shopSelector],
    (shop) => shop.isFetching
)

export const isCollectionsLoadedSelector = createSelector(
    [shopSelector],
    (shop) => !!shop.collections
)