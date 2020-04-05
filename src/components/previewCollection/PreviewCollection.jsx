import React from "react"
import "./PreviewCollection.scss"
import CollectionItem from "../collectionItem/CollectionItem.jsx"

const PreviewCollection = (props) => {
	return(
		<div className="previewCollection">
			<h1 className="title">{props.title.toUpperCase()}</h1>
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

export default PreviewCollection