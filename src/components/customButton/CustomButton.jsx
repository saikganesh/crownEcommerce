import React from "react"
import "./CustomButton.scss"

const CustomButton = ({children,isGoogle,isInverted,...otherProps}) => {
	return(
		<div className="customButton">
			<button className={`${isInverted ? "invertedButton" : isGoogle ? "googleButton" : ""} button`} {...otherProps}>{children}</button>
		</div>
	);
}

export default CustomButton;