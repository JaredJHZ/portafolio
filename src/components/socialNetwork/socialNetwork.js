import React from 'react';
import classes from './socialNetwork.module.css';

export default () => {

    return (
        <div>
            <h2 style={{textAlign:'center', padding:'10px'}}>You can follow me on my social networks!</h2>
            <section className="icon-list">
                <div className={classes.social}>
                    <a target="_blank" href="https://twitter.com/JosafhatHZ"><i className="nes-icon twitter is-large"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/jared-j-hern%C3%A1ndez-z%C3%BA%C3%B1iga-3247a6160/"><i className="nes-icon linkedin is-large"></i></a>
                </div>
            </section>
        </div>
    )
};