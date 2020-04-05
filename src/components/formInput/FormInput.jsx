import React from "react"
import "./FormInput.scss"

const FormInput =({label,handleInputChange,...otherProps}) => {
	return(
		<div className="group">
			<input className ="formInput"  onChange={handleInputChange} {...otherProps}/>
			{
				label ? 
					<label className={`${otherProps.value.length ? "shrink" : ""} formInputLabel`}>
					{label}
					</label>
					:
					null
			}
		</div>
	);

}

export default FormInput