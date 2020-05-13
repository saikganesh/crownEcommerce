import React from "react"
import {CustomButtonStyles} from "./CustomButtonStyles"

const CustomButton = ({children,...otherProps}) => {
	return(
		<CustomButtonStyles {...otherProps}>{children}</CustomButtonStyles>
	);
}

export default CustomButton;