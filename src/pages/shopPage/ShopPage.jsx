import React from "react"
import "./ShopPage.scss"

import CollectionsOverviewContainer from "../../components/collectionOverview/CollectionsOverviewContainer"
import CollectionPageContainer from "../collectionPage/CollectionPageContainer" 

import {Route} from "react-router-dom"

import {connect} from "react-redux"
import {fetchCollectionsStart} from "../../redux/shop/shopActions"

class ShopPage extends React.Component
{

	unSubscribeFromAuth = null

	render()
	{
		return(
			<div className="shopPage">
				<Route exact path={`${this.props.match.path}`} component={CollectionsOverviewContainer}/>
				<Route exact path={`${this.props.match.path}/:collectionId`} component={CollectionPageContainer}/>
			</div>
		);
	}

	componentDidMount()
	{
		this.props.fetchCollectionsStart()
	}

} 

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})


export default  connect(null,mapDispatchToProps)(ShopPage)