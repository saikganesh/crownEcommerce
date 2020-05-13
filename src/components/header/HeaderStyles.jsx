import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderStyles = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
`

export const LogoLinkStyles = styled(Link)`
    width: 20%;
    height: 70%;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 10px;
    justify-content: flex-start;
`

export const OptionsStyles = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
`

export const OptionLinkStyles = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
`