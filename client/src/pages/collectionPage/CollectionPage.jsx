import React from "react"
import "./CollectionPage.scss"
import CollectionItem from "../../components/collectionItem/CollectionItem"

import {collectionSelector} from "../../redux/shop/shopSelector"
import {connect} from "react-redux"

const CollectionPage = (props) => {
    console.log(props)
    return(
        <div className="collectionPage">
            <h1>{props.collection.title}</h1>
            <div className="collectionItems">
            {
                props.collection.items.map(item => {
                    return <CollectionItem key={item.id} item={item}/>
                })
            }
            </div>
        </div>
    );
}

const mapStateToProps = (state,ownProps) => (
    { collection : collectionSelector(ownProps.match.params.collectionId)(state) }
)

export default connect(mapStateToProps)(CollectionPage)