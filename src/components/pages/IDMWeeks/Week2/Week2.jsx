import React from 'react';
import image1 from "./waysofseeingpart1.png";
import image2 from "./waysofseeingpart2.png";
import image3_1 from "./waysofseeingpart3-1.png";
import image3_2 from "./waysofseeingpart3-2.png";
import image3_3 from "./waysofseeingpart3-3.png";
import image4 from "./waysofseeingpart4.png";

import './Week2HW.css';

const Week2 = () => {
    return (
    <div className="Week2">
        <h1>Brian Lu: Response to John Berger's Ways of Seeing (1972)</h1>
        <div class="note"><em>Links to the videos included in each part!</em></div>
        <hr size="2" noshade/>
        <h2><a href="https://www.youtube.com/watch?v=0pDE4VX_9Kk">Part 1</a></h2>
        <div class="textbox">
            <p>
                <a href="https://en.wikipedia.org/wiki/John_Berger">John Berger</a> starts of his program 
                by explaining the impact photography has had on our interpretation of paintings from the past. 
                His analysis made a lot of sense, as the ability to recreate these paintings and distribute them 
                has certainly stolen part of the paintings' identities. The paintings/artworks were in sync with the 
                environment, or rather the buildings, in which they were designed for. We lose the context by simply 
                looking at a picture, a reproduction of it, on a newspaper, book, or website. Although this does add 
                value to the original artwork, is the exchange really worth it? Did the painter wish for his 
                work to be worth millions or would he have rather conveyed the paintings meanings toward the 
                viewers as intended than through photographs? I prefer to think the latter. Berger also mentions 
                how paintings can be manipulated through movement and sound, specifically zooming into certain 
                parts of the painting and putting music in the background. Once again modern technology shows 
                its dangerous potential, taking away the <em><strong>"stillness and silence of a painting"</strong></em> 
                and changing its narrative.
            </p>
        </div>
        <img class="center" src={image1} alt="Picture of John Berger's Painting and Building Opinion"/>
        
        
        <hr size="2" noshade/>
        <h2><a href="https://www.youtube.com/watch?v=m1GI8mNU5Sg&t=1069s">Part 2</a></h2>
        <div class="textbox">
            <p>
                The second part of the programme discusses about whether the interpretation of women in 
                classical European art is a celebration of who they are or what men wants them to be. Nudity has 
                always been a popular feature among art throughout history. However, in many European paintings 
                women are always the ones portrayed as naked while the men fully clothed. As John mentions, "the nude 
                implies an awareness of being seen by the spectator". This can only mean that the male painters project 
                the common consensus of their time, that women are <strong>mute</strong> and <strong>submissive</strong>, 
                onto their work. This not only is the opposite of celebrating them for who they are, but also humiliating 
                them by forcing on them a fake identity via their nudity and pose in the artworks. In many ways, society 
                has thankfully evolved past that injustice for the most part and share equal rights with men. However, 
                the lingering effects of said injustice seems impossible to exterminate.
            </p>
        </div>
        <img class="center" src={image2} alt="Programme Part 2 Picture"/>


        <hr size="2" noshade/>
        <h2><a href="https://www.youtube.com/watch?v=Z7wi8jd7aC4">Part 3</a></h2>
        <div class="textbox">
            <p>
                The advent of oil painting gave rise to realism in the 1400s and along with it came the trend of 
                using it to demonstrate wealth and power. Oil paintings often focuses on using expensive objects as principal 
                subjects, such as houses, gold, animals, banquets, and merchandise. Otherwise they are portraits that records the existence 
                an individual with such commanding status. In other words, these paintings serve as an advertisement for 
                the owner's fortune and prestige. In my personal opinion, they are also big ego boosters for those in the 
                upper class. Fortunately the tradition of <em>"oil paintings celebrated private possessions"</em> is broken 
                and has now embraced publicity.
            </p>
        </div>
        <div class="flexbox-container">
            <div class="flexbox-item">
                <img src={image3_1} alt="Owner with Horse Picture"/>
            </div>
            <div class="flexbox-item">
                <img src={image3_2} alt="Owner with House Picture"/>
            </div>
            <div class="flexbox-item">
                <img src={image3_3} alt="Owner Portraits Picture"/>
            </div>
        </div>
        
        <hr size="2" noshade/>
        <h2><a href="https://www.youtube.com/watch?v=5jTUebm73IY">Part 4</a></h2>
        <div class="textbox">
            <p>
                In the final part, Berger explores how modern images has taken in that changed tradition of oil paintings: how 
                they embrace publicity rather than privacy. Nowadays we are surrounded by advertisements of products and riches people 
                can potentially get. This publicity of these images manufacture glamour, or the state of being envied. Personal envy was not 
                a factor back then because status was always determined by birth and considered immutable. People are constantly 
                reminded of what they do not have and what they could possibly achieve and become those within the advertisements. This could 
                serve as a double-edged sword. It could motivate people to work toward their aspirations or remind them of how farfetched their 
                dreams are compared to their current status. As Berger mentions as well: advertisements present not only the product, but the 
                way of life, attitude, and civilization.
            </p>
        </div>
        <img class="center" src={image4} alt="Advertisement of Life Picture"/>
        <hr size="2" noshade></hr>
    </div>
    );
}

export default Week2;