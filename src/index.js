import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { createCssColors } from './modules/createCssColors';

//* API
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createElement } from './modules/createElement';
import { categoryPage } from './modules/categoryPage';

const init = async () =>{
    try{
        DATA.navigation = await getData(`${API_URL}/api/categories`);
        DATA.colors = await getData(`${API_URL}/api/colors`);

        createCssColors(DATA.colors);

        router.on('*', () => {
            renderHeader();
            renderFooter();
        });

        router.on('/', () => {
            mainPage();
        });

        router.on('women', () => {
            mainPage('women');
        });

        router.on('men', () => {
            mainPage('men');
        });

        router.on('/:gender/:category', categoryPage);

        router.on('search', (data)=>{
            // console.log(data.params.value);
        });

        // setTimeout(() => {
        //     router.navigate('men');
        // }, 3000);

        // setTimeout(() => {
        //     router.navigate('women');
        // }, 5000);
    }catch(ev){
        console.warn(ev);
        createElement('h2',{
            textContent: 'Что-то пошло не так, попробуйте позже...'
        },{
            parent: document.querySelector('main'),
            cb(h2){
                h2.style.textAlign = 'center';
            }
        });
    }finally{
        router.resolve();
    }
};

init();





