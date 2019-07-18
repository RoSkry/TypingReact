import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Button from '../components/Button'
import Input from '../components/Input/Input'

function Uikit() {
    const click = () => {
        console.log('click method');
    }
    return (
        <Wrapper text='Button'>
            <Button color="red" onClick={click} text='red button' />
            <Button color="green" onClick={click} text='green button' />
            <Button color="yellow" link="google.com" text='link' />
            <Input error="true" value="some value" type="text" onChange={click} />
        </Wrapper>
    )
}

export default Uikit;