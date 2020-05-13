import CollectionOverview from "./CollectionOverview"

import {compose} from "redux"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {isFetchingSelector} from "../../redux/shop/shopSelector"

import withSpinner from "../withSpinner/withSpinner"

const mapStateToProps= createStructuredSelector({
    isLoading : isFetchingSelector
})

const CollectionOverviewContainer =  compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview)

export default CollectionOverviewContainer