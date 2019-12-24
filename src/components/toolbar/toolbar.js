import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import classes from './toolbar.module.css';

export default () => <ul className={classes.toolbar}>
    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
        Inicio
    </Link>
    <Link activeClass="active" to="biografia" spy={true} smooth={true} offset={50} duration={500} >
        Biografia
    </Link>
</ul>