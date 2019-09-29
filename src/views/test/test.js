import React, { useEffect } from 'react';
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

    return <div>我是测试11111</div>;
};


export default Test;
