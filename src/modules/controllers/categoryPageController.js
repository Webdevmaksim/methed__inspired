import { DATA } from "../const";
import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";

export const categoryPageController = (routerData) =>{
    const {gender, category} = routerData.data;
    const params = {gender, category};
    
    if(routerData.params?.page){
        params.page = routerData.params.page;
    }

    const {title} = DATA.navigation[gender].list.find(item => item.slug === category);

    renderNaviagtion(gender,category);
    renderHero(false);
    renderProducts(title, params);

};