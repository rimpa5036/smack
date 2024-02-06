import React, { useState } from 'react'
import styled,{keyframes} from 'styled-components'
import close from '../images/slider-close.svg'
import ReactModal from 'react-modal';
import "../EditorPopup/editor.css";

const ScalingAnimation = keyframes`
        0%{
            opacity: 0;
            transform: scale(0);
        }

        100%{
            opacity: 1;
            transform: scale(1);
        }
`
const CloseImg = styled.img`
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 10px;
    &:hover{
        cursor: pointer;
    }
`
const ContentA = styled.div`
    padding-top: 45px;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 45px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
`
const Box = styled.div`
    width: 135px;
    height: 100px;
    background-color: #ededed;
    border-radius: 5px;
`

export default function EditorPopup(props) {

    const[displayField,setDisplayField]=useState(false);
    const [isOpen, setisOpen] = useState(true);

    const handleClose = () => {
      setisOpen(false);
    }

    const handleSubmit = () => {
        setDisplayField(true);
    }
    
    
  return (
    <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
                <CloseImg src={close} onClick={() => handleClose()} />
                <ContentA>
                    <Box className='selected'></Box>
                    <Box className='selected'></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </ContentA>
    </ReactModal>
  )
}
