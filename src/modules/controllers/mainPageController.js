import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";


export const mainPageController = (gender = 'women') => {
    renderNaviagtion(gender);
    renderHero(gender);
    renderProducts('новинки', {gender});
};

