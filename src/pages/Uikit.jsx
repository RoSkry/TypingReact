import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Button from '../components/Button'

function Uikit() {
    const click = () => {
        console.log('click method');
    }
    return (
        <Wrapper text='Button'>
            <Button color="red" onClick={click} text='red button' />
            <Button color="green" onClick={click} text='green button' />
            <Button color="yellow" link="google.com" text='link' />
        </Wrapper>
    )
}

export default Uikit;