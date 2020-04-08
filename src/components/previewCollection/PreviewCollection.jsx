import React from "react"
import "./PreviewCollection.scss"
import CollectionItem from "../collectionItem/CollectionItem.jsx"

import {withRouter} from "react-router-dom"

const PreviewCollection = (props) => {
	return(
		<div className="previewCollection" >
			<h1 className="title" onClick = {() => props.history.push(`${props.match.path}/${props.title.toLowerCase()}`)} >{props.title.toUpperCase()}</h1>
			<div className="preview">
				{
					props.items.filter((item,index) => index<4).map((item)=> {
						return <CollectionItem key={item.id} item={item}/>
					}) 
				}
			</div>
		</div>
	);
}

export default withRouter(PreviewCollection)