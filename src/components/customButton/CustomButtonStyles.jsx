import styled,{css} from "styled-components"


const invertedButton = css`
    background-color: white;
    color: black;
    border :1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`
const googleButton = css`
    background-color: #4285f4;
    color : white;
    border:none;

    &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
    }
`
const normalButton = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const selectButtonStyles = (props) => {
    if(props.isInverted)
    {
        return invertedButton
    }
    else if(props.isGoogle)
    {
        return googleButton
    }
    else
    {
        return normalButton
    }
}

export const CustomButtonStyles = styled.button`
    max-width: 200px;
    min-width: 100px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0px 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-content: center; 

    ${selectButtonStyles}

`