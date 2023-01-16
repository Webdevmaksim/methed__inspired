import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";


export const mainPage = (gender = 'woman') => {
    renderNaviagtion(gender);
    renderHero(gender);
    renderProducts(gender);
};

