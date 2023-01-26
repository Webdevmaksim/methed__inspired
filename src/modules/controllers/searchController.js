import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";
import { router } from "../utils/router";

export const searchController = formSearch =>{
    formSearch.addEventListener('submit',(ev)=>{
        ev.preventDefault();

        router.navigate(`search?value=${formSearch.search.value}`);
    });
};

export const searchPageController = (routerData) =>{

    const params = {
        search: routerData.params.value
    };

    if(routerData.params?.page){
        params.page = routerData.params.page;
    }

    renderNaviagtion('all');
    renderHero(false);
    renderProducts(routerData.params.value, params);
};
