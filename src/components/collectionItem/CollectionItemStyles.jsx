import styled from "styled-components"
import CustomButton from "../customButton/CustomButton"

export const CollectionItemStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover{
		.collectionImage {
			opacity: .8;

		}

		.addItemButton{
			display: flex;
			opacity: 0.85
		}
	}

`
export const CollectionImageStyles = styled.div`
    width :100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image : ${({imageUrl}) => `url(${imageUrl})`}
`

export const CollectionFooterStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const AddItemButtonStyles = styled(CustomButton)`
    width : 90%;
    opacity: 0.7;
    position: absolute;
    top : 250px;
    display: none;
`