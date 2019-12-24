import React from 'react';
import classes from './graphs.module.css';

export default () => {

    return (
        <div className={classes.container}>
                Javascript<progress className="nes-progress is-primary" value="90" max="100"></progress>
                Python<progress className="nes-progress is-success" value="85" max="100"></progress>
                Java<progress className="nes-progress" value="80" max="100"></progress>
                Databases<progress className="nes-progress is-primary" value="80" max="100"></progress>
                C#<progress className="nes-progress is-warning" value="70" max="100"></progress>
        </div>
    )
}