import React from 'react';
import classes from './modal.module.css';

export default (props) => {

    let style = {
        'display':'none'
    };

    let back = null;

    if(props.visible) {
        style = {
            display:'flex',
            position:'absolute',
            'z-index':'500',
            'width':'70%',
            'top':'360vh',
            'fontSize':'1.5vw'
        }

        back = <div onClick={props.clickable} className={classes.back} ></div>
    }

    return (
        <div>
            {back}
            <dialog style={style} className="nes-dialog" id="dialog-default">
                <div>
                    <h4 className="nes-text is-primary">My experience with {props.ability['name']}</h4>
                    <p style={{textAlign:'justify'}}>{props.ability['description']}</p>
                    <menu className="dialog-menu">
                        <button onClick={props.clickable} className="nes-btn">Cerrar</button>
                    </menu>
                </div>
            </dialog>
        </div>
    )
}