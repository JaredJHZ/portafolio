import React from 'react';
import Typed from 'react-typed';

export default () => {
    return (
        <header style={{textAlign:'center'}}>
        <Typed
            strings={['My name is Jared Josafhat Hernández Zúñiga']}
            typeSpeed={35}
            className="nes-text is-primary"
            
        />


        <br/>

        <Typed
        strings={[
            'Computer Systems Engineer',
            'Web developer',
            'Mobile Developer',]}
            className="nes-text is-success"
            typeSpeed={40}
            backSpeed={50}
            loop />
    </header>
    );
}