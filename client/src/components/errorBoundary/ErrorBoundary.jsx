import React from "react"
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from "./ErrorBoundaryStyles.jsx"

 class ErrorBoundary extends React.Component
 {
     constructor(props)
     {
         super(props)
         this.state = {
             hasErrored : false
         }
     }

     static getDerivedStateFromError(error)
     {
        return { hasErrored : true}
     }

     componentDidCatch(error,info)
     {
        console.log(error,info)
     }

     render()
     {
         return this.state.hasErrored ?
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png"/>
                <ErrorImageText>Oops.. The Page Lost In Space</ErrorImageText>
            </ErrorImageOverlay>
         : this.props.children
      }
 }

 export default ErrorBoundary