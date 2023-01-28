import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";


export const mainPageController = (gender = 'women') => {
    renderNaviagtion(gender);
    renderHero(gender);
    renderCard(false);
    renderProducts('новинки', {gender});
};

