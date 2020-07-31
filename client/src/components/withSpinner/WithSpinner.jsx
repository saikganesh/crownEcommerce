import React from "react"
import "./WithSpinner.scss"

const WithSpinner = Component => ({isLoading,...otherProps}) => {
    return isLoading ? 
        (
            <div className="spinner">
                <div className="spinnerLoader"></div>
            </div>
        ) : 
    
        <Component {...otherProps}/>

}

export default WithSpinner