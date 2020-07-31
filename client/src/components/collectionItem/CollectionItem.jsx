import React from "react"
import {CollectionItemStyles,CollectionImageStyles,CollectionFooterStyles,AddItemButtonStyles} from "./CollectionItemStyles"

import {connect} from "react-redux"
import {addItem } from "../../redux/cart/cartActions"

const CollectionItem = (props) => {
	return(
		<CollectionItemStyles>
			<CollectionImageStyles className="collectionImage" imageUrl={props.item.imageUrl} />
			<CollectionFooterStyles >
				<span>{props.item.name}</span>
				<span>₹{props.item.price}</span>
			</CollectionFooterStyles>
			<AddItemButtonStyles className="addItemButton" isInverted={true} onClick={() =>  props.addItem(props.item)}>Add To Cart</AddItemButtonStyles>
		</CollectionItemStyles>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {addItem : (item) => dispatch(addItem(item))}
}

export default connect(null,mapDispatchToProps)(CollectionItem)