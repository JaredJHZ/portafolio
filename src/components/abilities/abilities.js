import React from 'react';
import classes from './abilities.module.css';
export default (props) => {

    let abilitiesList = props.abilities.map(
        (ability) => <li style={{display:'flex',justifyContent:'center'}} key={ability['name']}><button onClick={() => props.clickable(ability)} type="button" className="nes-btn is-success" >{ability['name']}</button> </li>
    )

    return (
        <div className={classes.abilities}>
            <ul className="nes-list" >
                {abilitiesList}
            </ul>
        </div>
    )
}