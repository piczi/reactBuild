export const setHTMLSize = (base:number = 100, draft:number = 750) => {
    const winWidth:number = window.innerWidth;
    const sale:number = winWidth / draft < 1 ? winWidth / draft : 1;
    const Html:object = document.querySelector('html');
    Html['style']['fontSize'] = base * sale + 'px';
};