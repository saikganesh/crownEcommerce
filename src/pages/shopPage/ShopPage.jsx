import React,{lazy,Suspense} from "react"
import "./ShopPage.scss"

import Spinner from "../../components/spinner/Spinner"

import {Switch,Route} from "react-router-dom"

import {connect} from "react-redux"
import {fetchCollectionsStart} from "../../redux/shop/shopActions"

const CollectionsOverviewContainer = lazy(() => import("../../components/collectionOverview/CollectionsOverviewContainer"))
const CollectionPageContainer = lazy(() => import("../collectionPage/CollectionPageContainer"))

class ShopPage extends React.Component
{

	unSubscribeFromAuth = null

	render()
	{
		throw new Error("Got crashed")
		return(
			<div className="shopPage">
				<Suspense fallback={Spinner}>
					<Switch>
						<Route exact path={`${this.props.match.path}`} component={CollectionsOverviewContainer}/>
						<Route exact path={`${this.props.match.path}/:collectionId`} component={CollectionPageContainer}/>
					</Switch>
				</Suspense>
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