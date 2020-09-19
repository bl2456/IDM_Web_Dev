import React from 'react';
import image from '../../../../media/hacker.jpg';
import './Week3.css';
import Button from '../../../Button';

const Week3 = () => {
    return (
    <div className="Week3">
        <h1>Response to "As We May Think" (1945) and "Long Live The Web"</h1>
        <div class="note"><em>Links to the articles included in each part!</em></div>
        <hr size="2" noshade/>
        <h2><a href="https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/">As We May Think</a></h2>
        <div class="textbox">
            <p>
                Science in my opinion is the culmination of humankind’s ability to observe, analyze, and utilize their surroundings. 
                While humanity has always been advancing forward in their understanding of the world, many innovations and breakthroughs 
                have come through globalization. Being connected with one another through the phone and the internet is the most important 
                invention humans have produced. This was something that Vannevar Bush managed to foresee in his 1945 article “As We May Think”. 
                He proposes an invention called the “memex” that would serve as a library of collective knowledge stored inside a machine. Not 
                too far from the modern day internet right? He believed that through this creation, talented minds like Leibnitz and Babbage would 
                be able to fulfill their vision by effectively sharing their thoughts to others that can assist them. 
            </p>
        </div>
        <img class="center" src="https://images.idgesg.net/images/article/2018/10/spinning-globe_smart-city_iot_skyscrapers_city-scape_internet_digital-transformation-100777501-large.jpg" alt="Picture of John Berger's Painting and Building Opinion"/>
        
        
        <hr size="2" noshade/>
        <h2><a href="https://www.scientificamerican.com/article/long-live-the-web/">Long Live The Web</a></h2>
        <div class="textbox">
            <p>
                In many ways Bush’s vision did take shape via the web, but so did his worry about malicious use of technology. As Tim Berner-Lee mentions 
                in his “Long Live The Web”,  we now have governments utilizing the web to spread false propaganda and monitor people’s lives. We even had 
                accusations of hackers intervening in the last presidential election. Even if we bring the bar down a notch, there are thousands if not millions 
                of phishing emails sent to people in attempts to steal their personal information. While we definitely should be thankful for this technology we 
                must also recognize the havoc that comes along with it.
            </p>
        </div>
        <img class="center" src={image} alt="Hacker Picture"/>
        <div className='pagelink'>
            <Button buttonStyle='btn-primary' buttonSize='btn-large' path='/IDMWeek2'>See Last Week's Response</Button>
        </div>
    </div>
    );
}

export default Week3;
