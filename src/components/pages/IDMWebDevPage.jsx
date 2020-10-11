import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/IDMWebDevPage.css';
import video from '../../media/coverr-nyc-architecture-1572187142524.mp4';

const WebDevPage = () => {
    return(
        <div className="pageBody">
            <video src={video} autoPlay loop muted ></video>
            <div className="gridContainer">
                <div className="gridItem">
                    <a className="gridLink" href="https://github.com/IDMNYU/webDev_C_Fall2020/wiki/Week-01">Week 1</a>
                </div>
                <div className="gridItem" >
                    <Link to='/IDMWeek2' className="gridLink"> Week 2</Link>
                </div>
                <div className="gridItem">
                    <Link to='/IDMWeek3' className="gridLink"> Week 3</Link>
                </div>
                <div className="gridItem">
                    <a href="https://bl2456.github.io/Hayao_Miyazaki/">Week 4/5</a>
                </div>
                <div className="gridItem">
                    <Link to='/IDMWeek6' className="gridLink"> Week 6</Link>
                </div>
            </div>
        </div>
    );
}


export default WebDevPage;