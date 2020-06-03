import * as React from 'react';
import { useEffect } from 'react';
export interface Props {
    name: string
};
const Item = (props:Props) => {
    useEffect(() => {
        console.log('组件已经加载');
    }, []);
    return <div className = "item"> 你好，{props.name}!欢迎使用Typescrit </div>
};

export default Item;