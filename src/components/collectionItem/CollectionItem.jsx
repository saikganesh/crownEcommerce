import React from "react"
import "./CollectionItem.scss"
import CustomButton from "../customButton/CustomButton"
import {connect} from "react-redux"
import {addItem } from "../../redux/cart/cartActions"

const CollectionItem = (props) => {
	return(
		<div className ="collectionItem">
			<div className="collectionImage" style={{backgroundImage : `url(${props.item.imageUrl})`}}></div>
			<div className="collectionFooter">
				<span>{props.item.name}</span>
				<span>₹{props.item.price}</span>
			</div>
			<CustomButton isInverted={true} onClick={() =>  props.addItem(props.item)}>Add To Cart</CustomButton>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {addItem : (item) => dispatch(addItem(item))}
}

export default connect(null,mapDispatchToProps)(CollectionItem)