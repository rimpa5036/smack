import React, { useState } from 'react'
import styled from 'styled-components'

const Dropwrap = styled.div`
    position: relative;
`
const DropBox = styled.div`
    border: 1px solid #000;
    padding: 10px;
`
const DivWrap = styled.div`
    position: relative;
    cursor: pointer;
`
const Svg = styled.svg`
    position: absolute;
    top: 10px;
    right: 10px;
`
const DropContent = styled.div`
    border: 1px solid #000;
    background-color: pink;
`
const Text = styled.div`
    font-size: 14px;
    color: #000;
    padding: 6px 10px;
`


export default function Dropdown() {

    const [showText, setShowText] = useState(false);

  return (
    <div>
        <Dropwrap>
            <DivWrap onClick={() => setShowText(!showText)}>
                <DropBox>Menu</DropBox>
                <Svg width="12" height="12" viewBox="0 -25 110 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M102.365 1.30035L54.9952 47.5257L7.62546 1.30035C6.77912 0.472792 5.64298 0.00948728 4.4599 0.00948728C3.27682 0.00948728 2.14068 0.472792 1.29434 1.30035C0.884543 1.70231 0.558984 2.18207 0.336731 2.71156C0.114478 3.24105 0 3.80961 0 4.38394C0 4.95828 0.114478 5.52684 0.336731 6.05632C0.558984 6.58581 0.884543 7.06558 1.29434 7.46753L51.6874 56.6532C52.5724 57.5167 53.7593 58 54.9952 58C56.231 58 57.4179 57.5167 58.3029 56.6532L108.696 7.47702C109.109 7.07477 109.437 6.59382 109.661 6.06258C109.885 5.53134 110 4.96056 110 4.38394C110 3.80732 109.885 3.23654 109.661 2.7053C109.437 2.17406 109.109 1.69312 108.696 1.29086C107.85 0.4633 106.713 0 105.53 0C104.347 0 103.211 0.4633 102.365 1.29086V1.30035Z" fill="#606060"></path></Svg>
            </DivWrap>

            { showText && <DropContent>
                <Text>Menu 1</Text>
                <Text>Menu 2</Text>
                <Text>Menu 3</Text>
                <Text>Menu 4</Text>
                <Text>Menu 5</Text>
            </DropContent>}
        </Dropwrap>
    </div>
  )
}
