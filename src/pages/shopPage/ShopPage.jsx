import React from "react"
import "./ShopPage.scss"
import shopData from "./shopData.js"
import PreviewCollection from "../../components/previewCollection/PreviewCollection"

class ShopPage extends React.Component 
{

	constructor ()
	{
		super()
		this.state = {
			collections : shopData
		}
	}

	render()
	{
		return(
			<div className="shopPage">
				{
					this.state.collections.map((collection) => {
						return <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
					})
				}
			</div>
		);

	}
}


export default ShopPage