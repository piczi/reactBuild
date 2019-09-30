import React from 'react';
import Icon from 'public/images/good.png';
import Video from 'public/media/test.mp4';
import 'public/media/icons/iconfont.css';
import './home.less';

const Home = () => {
    return <div id='home'>
        我是首页
        <div className='icon'>
            <img src={Icon}/>
        </div>
        <div className='videoBox'>
            <video controls={true} autoPlay={true} src={Video}/>
        </div>
        <div className='face iconfont iconyintian'/>
    </div>
};

export default Home;
