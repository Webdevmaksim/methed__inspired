import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { womanMainPage } from './modules/mainPage/womanMainPage';
import { manMainPage } from './modules/mainPage/manMainpage';

router.on('*', () => {
    renderHeader();
    renderFooter();
});

router.on('/', () => {
    mainPage();
});

router.on('woman', () => {
    womanMainPage();
});

router.on('man', () => {
    manMainPage();
});

// setTimeout(() => {
//     router.navigate('man');
// }, 3000);

// setTimeout(() => {
//     router.navigate('woman');
// }, 5000);

router.resolve();


