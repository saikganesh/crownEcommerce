import React,{lazy,Suspense,useEffect} from "react"
import "./ShopPage.scss"

import Spinner from "../../components/spinner/Spinner"

import {Switch,Route} from "react-router-dom"

import {connect} from "react-redux"
import {fetchCollectionsStart} from "../../redux/shop/shopActions"

const CollectionsOverviewContainer = lazy(() => import("../../components/collectionOverview/CollectionsOverviewContainer"))
const CollectionPageContainer = lazy(() => import("../collectionPage/CollectionPageContainer"))

const ShopPage = ({fetchCollectionsStart,match : {path}}) => {

	useEffect(() => {
		fetchCollectionsStart()
	},[fetchCollectionsStart])

	return (
		<div className="shopPage">
			<Suspense fallback={Spinner}>
				<Switch>
					<Route exact path={`${path}`} component={CollectionsOverviewContainer}/>
					<Route exact path={`${path}/:collectionId`} component={CollectionPageContainer}/>
				</Switch>
			</Suspense>
		</div>
	);

} 

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})


export default connect(null,mapDispatchToProps)(ShopPage)