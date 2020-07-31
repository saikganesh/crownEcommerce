import React from 'react'
import './Directory.scss'
import MenuItem from '../menuItem/MenuItem'

import {createStructuredSelector} from "reselect"
import {directorySectionSelector} from "../../redux/directory/directorySelectors"

import {connect} from "react-redux"

const Directory = (props) => {
	return(
		<div className="directory">
			{
				props.sections.map(({id ,...otherSectionProps}) => {
					return <MenuItem key={id} {...otherSectionProps}/>
				})
			}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	sections : directorySectionSelector
})

export default connect(mapStateToProps)(Directory);
