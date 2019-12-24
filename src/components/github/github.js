import React, { useState, useEffect } from 'react';
import classes from './github.module.css';

export default () => {


    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/jaredjhz/repos' , {
            method:'GET'
        })
        .then(res => res.json())
        .then(response =>  {
            setRepositories(response);
        })
    } , [])

const repos = repositories.filter((value) => {
    return value.size > 150 && value.name !== 'cpp-docs.es-es' && value.name !== 'Docs.es-es' && value.name !== 'docs.es-es-1'
}).map(
    (value) => {
        console.log(value);
        return <li><a  className="nes-text is-primary" target="_blank" href={value.html_url}>{value.name}</a></li>
    }
)

    return (
        <div className={classes.container}>
        <i className="nes-octocat animate"></i>
        <div className="lists">
            <ul className="nes-list">
                {repos}
            </ul>
        </div>
            <p>See entire profile! where you can find {repositories.length} repositories I made with different technologies</p>
            <a target="_blank" href="https://github.com/JaredJHZ" className="nes-text is-warning">Click here</a>
        </div>
    )


}