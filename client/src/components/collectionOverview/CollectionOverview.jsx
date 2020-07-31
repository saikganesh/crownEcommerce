import React from "react"
import "./CollectionOverview.scss"

import PreviewCollection from "../previewCollection/PreviewCollection"

import {connect} from "react-redux"

import {createStructuredSelector} from "reselect"
import {collectionPreviewSelector} from "../../redux/shop/shopSelector"

const CollectionOverview = (props) => {
	console.log(props)
    return(
		<div className="collectionOverview">
			{
				props.collections.map((collection) => {
					return <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
				})
			}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: collectionPreviewSelector
})

export default connect(mapStateToProps)(CollectionOverview)