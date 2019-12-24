import React from 'react';
import classes from './biography.module.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonLink from '../../components/buttonLink/buttonLink';
export default (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.left}>
            <Carousel width="300px" showIndicators={false} showStatus={false} showThumbs={false} showArrows={true}>
                <div className={classes.contenido}>
                    <img alt="jared" src="https://portfolio-jaredhz.s3.amazonaws.com/jared.jpg" />
                </div>
                <div className={classes.contenido}>
                    <img alt="jared2" src="https://portfolio-jaredhz.s3.amazonaws.com/IMG_20180420_092145.jpg" />
                </div>
                <div className={classes.contenido}>
                    <img alt="jared3" src="https://portfolio-jaredhz.s3.us-east-1.amazonaws.com/IMG_20180530_101848.jpg" />
                </div>
            </Carousel>
            </div>
            <div className={classes.right}>
                <div className={classes.contenidoBiografia}>
                    <div>
                            <p style={{background:'#64B5F6'}} className="title">My Tech Life</p>
                            <p>I was born and raised in the lovely Coatzacoalcos bay, my tech life started with videogames in concrete the PSOne, when I was 12 years old my mother gave me and iPod touch 2ng gen
                                , love at first sight , I jailbroken the Ipod and started customize like the nerdy kid I was. Then I created a few themes for a Blackberry 8520, I installed
                                Ubuntu when I was 12 years, and began playing with the desktops enviroments like KDE, XFCE, Unity , Gnome. My initialization in the development area was in High School when I learned
                                the two main programming paradigms the structural and the Object Oriented Programming with C++ and Java in that order.</p>
                            <p>And so I fall in love with this world!</p>
                        </div>
                    </div>
                    <p className={classes.textoAuxiliar}>
                        Born and raisen in Coatzacoalcos, I learned to program in High School with Java and C++
                    </p>
                    <ButtonLink link="experiencias" write="Experience" />
            </div>
        </div>
    )
}