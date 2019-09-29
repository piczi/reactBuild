import React from 'react';
import Icon from 'public/images/good.png'
import './home.less';

const Home = () => {
    return <div id='home'>
        我是首页
        <div className='icon'>
            <img src={Icon}/>
        </div>
    </div>
};

export default Home;
