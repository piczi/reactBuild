import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './router';
import { setHTMLSize } from './utils/baseFontSize';
import './public/style/common.less';
setHTMLSize();

window.onresize = () => {
    setHTMLSize();
};

ReactDOM.render(<Router/>, document.getElementById('root'));