import React, {Component} from 'react';
import classes from './Home.module.css';
import Biography from '../../components/biography/biography';
import Abilites from '../../components/abilities/abilities';
import ScrollAnimation from 'react-animate-on-scroll';
import Introduction from '../../components/introduction/introduction';
import ButtonLink from '../../components/buttonLink/buttonLink';
import Github from '../../components/github/github';
import Modal from '../../components/modal/modal';
import SocialNetwork from '../../components/socialNetwork/socialNetwork';
import Graphs from '../../components/graphs/graphs';
import 'react-typed/dist/animatedCursor.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class extends Component {

    state = {
        abilities:[
            {
                name:'Java',
                description:'I have experience developing desktop applications using JavaFX and web applications using Spring.'
            },
            {
                name:'NodeJS',
                description:"I have 4 years of experience with NodeJS, I've created a lot of APIS Rest and real time apps with Express."
            },
            {
                name:'Python',
                description:"I've used Python mainly with Flask and Django"
            },
            {
                name:'Javascript',
                description:"I have experience with Javascript in fronted with React and Angular."
            },
            {
                name:'C#',
                description:"I've developed desktop applications with C# and mobile applications with the Xamarin technology"
            },
            {
                name:'Databases',
                description:"I've created a lot of databases in DBMS such as MySql, MariaDB, postgreSQL and with NoSQL databases as MongoDB and DynamoDB"
            },
            {
                name:'Cloud computing',
                description:"I have experience with AWS services such as Lambda, EC2, API Management, DynamoDB, S3 and RDS."
            }
        ],
        openModal:false,
        selected:''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll = window.pageYOffset;
      
        this.setState({
          position: winScroll,
        })
      }

    openModalToggle = (ability) => {
        this.setState({
            ...this.state,
            openModal: !this.state.openModal,
            selected: ability
        })
    }

    goToTop = () => {
        scroll.scrollToTop();
    }
    
    render() {

        let button = '';
        if (this.state.position > 500) {
            button= <button onClick={this.goToTop} type="button" className="nes-btn is-success topButton">⌃</button>;
        }

        return (
            <div>

                {button}

              <Modal ability={this.state.selected} visible={this.state.openModal} clickable={this.openModalToggle} />
            

              <div className={classes.screen}>
                    <h1>Insert coin to start</h1>
                    <ButtonLink link="introduction" write="Insert coin!" />
              </div>
              
              <div style={{background:'#900C3E'}} className={classes.screen} name="introduction">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 style={{color:'white'}}>Who am I?</h1>
                        <Introduction />
                </ScrollAnimation>
                <ButtonLink link="biografia" write="Life" />
              </div>

              <div style={{background:'#64B5F6'}} className={classes.screen} name="biografia">
                <ScrollAnimation animateIn="slideInRight">
                    <Biography />
                </ScrollAnimation>
              </div>

              
              <div style={{background:'#A8C5E5'}} className={classes.screen} name="experiencias">
                <ScrollAnimation animateIn="fadeIn">
                    <h1>Abilities</h1>
                    <Abilites abilities={this.state.abilities} clickable={this.openModalToggle} />
                    <ButtonLink link="graph" write="Graphics" />
                </ScrollAnimation>
              </div>

              <div style={{background:'#FF5733'}} className={classes.screen} name="graph">
                <ScrollAnimation animateIn="fadeIn">
                    <Graphs />
                    <ButtonLink link="github" write="Github" />
                </ScrollAnimation>
              </div>

              <div style={{background:'#A8C5E5'}} className={classes.screen} name="github">
                <ScrollAnimation animateIn="slideInLeft">
                    <h1 style={{fontSize:'28px'}}>Github repositories</h1>
                    <Github />
                    <ButtonLink link="social" write="Network" />
                </ScrollAnimation>
              </div>

              <div style={{background:'#FF5733'}} className={classes.screen} name="social">
                <ScrollAnimation animateIn="slideInRight">
                    <h1>Social networks</h1>
                    <SocialNetwork />
                    <ButtonLink link="introduction" write="Game Over" />
                </ScrollAnimation>
              </div>


            </div>            
        )
    }
}