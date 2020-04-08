import React from "react"
import "./ShopPage.scss"
import CollectionOverview from "../../components/collectionOverview/CollectionOverview"
import CollectionPage from "../collectionPage/CollectionPage"
 
import {Route} from "react-router-dom"

const ShopPage = (props) => {
	console.log(props.match)
	return(
		<div className="shopPage">
			<Route exact path={`${props.match.path}`} component={CollectionOverview} />
			<Route exact path={`${props.match.path}/:collectionId`} component={CollectionPage} />
 
		</div>
	);
}

export default  (ShopPage)