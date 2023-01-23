import { renderHero } from "./render/renderHero";
import { renderNaviagtion } from "./render/renderNavigaion";
import { renderProducts } from "./render/renderProduct";


export const mainPage = (gender = 'women') => {
    renderNaviagtion(gender);
    renderHero(gender);
    renderProducts('новинки', {gender});
};

