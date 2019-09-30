import React, { useEffect } from 'react';
import Image from 'public/images/bg.jpg';
import './test.less';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Test = () => {
    useEffect(() => {
        console.log(222);
    },[]);

    return <div>
        <img src={Image}/>
    </div>;
};


export default Test;
