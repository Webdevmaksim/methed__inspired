import { products } from "../const";
import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderProducts } from "../render/renderProduct";



// ! - When information gets extracted from local storage it's a JSON - string!!!
export const getFavorite = () => JSON.parse(localStorage.getItem('favorite') || '[]');


const addFavorite = (id) => {
    const favoriteList = getFavorite();
    favoriteList.push(id);
    localStorage.setItem('favorite', JSON.stringify(favoriteList));
};

const removeFavorite = (id) => {
    const favoriteList = getFavorite();
    const index = favoriteList.findIndex(item=> item === id);

    if(index === -1){
        return;
    }

    favoriteList.splice(index, 1);

    localStorage.setItem('favorite', JSON.stringify(favoriteList));
};

export const handlerFavorite = (ev) => {
    
    const target = ev.target;
    
    if(target.matches('.favorite--active')){
        removeFavorite(target.dataset.id);
        target.classList.remove('favorite--active');
        return;
    }

    if(target.matches('.favorite')){
        addFavorite(target.dataset.id);
        target.classList.add('favorite--active');
        return;
    }

};
products.addEventListener('click', handlerFavorite);


export const favoriteController = () =>{
    renderNaviagtion('all');
    renderHero(false);
    renderCard(false);
    renderProducts('Избранное', {list:getFavorite()});
};