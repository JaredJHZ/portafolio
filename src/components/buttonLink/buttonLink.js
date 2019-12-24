import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Typed from 'react-typed';

export default (props) =>
    <Link className="nes-btn" style={{color:'white', margin:'30px'}} activeClass="active" to={props.link} spy={true} smooth={true} offset={50} duration={500} >
    <Typed
        strings={[props.write]}
        typeSpeed={35}
        className="nes-text is-primary"
    />
    </Link>