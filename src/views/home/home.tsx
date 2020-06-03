import * as React from 'react';
import { useEffect, useRef } from 'react';
import 'public/media/icons/iconfont.css';
import Item from '../../components/Item/Item'
import './home.less';

const Home = () => {
    const dom1 = useRef(null);
    // const [dom, setDom] = useState(null);
    useEffect(() => {
        console.log(dom1.current);
    }, []);
    useEffect(() => {
        console.log(dom1);
    }, [dom1]);
    return <div className="home">
        <p>我是测试</p>
        <Item name="Jack"/>
    </div>
};
export default Home;
