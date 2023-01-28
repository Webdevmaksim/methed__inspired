import { API_URL, DATA } from "../const";
import { getData } from "../getData";
import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";

export const cardController = async(routerData) =>{
    const {id} = routerData.data;

    const data = await getData(`${API_URL}/api/goods/${id}`);

    renderNaviagtion(data.gender, data.category);
    renderHero(false);
    renderCard(data);
    renderProducts('Вам так же может понравится', {count:4, gender: data.gender});

};