import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Button from '../components/Button'
import Input from '../components/Input/Input'

function Uikit() {

   const handleChange=(e)=> {
        this.setState({value: e.target.value});
      }
    const click = () => {
        console.log('click method');
    }
    return (
        <Wrapper text='Button'>
            <Button color="red" onClick={click} text='red button' />
            <Button color="green" onClick={click} text='green button' />
            <Button color="yellow" link="google.com" text='link' />
            <Input error="false" value="some value" type={props.type} onChange={props.onChange}/>
        </Wrapper>
    )
}

export default Uikit;