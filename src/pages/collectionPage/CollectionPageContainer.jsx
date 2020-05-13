import CollectionPage from "./CollectionPage"

import {compose} from "redux"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {isCollectionsLoadedSelector} from "../../redux/shop/shopSelector"

import withSpinner from "../../components/withSpinner/withSpinner"

const mapStateToProps = createStructuredSelector({
    isLoading : state => !isCollectionsLoadedSelector(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage)

export default CollectionPageContainer