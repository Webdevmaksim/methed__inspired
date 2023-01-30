import { renderCard } from "../render/renderCard";
import { renderCart } from "../render/renderCart";
import { renderHero } from "../render/renderHero";
import { renderNaviagtion } from "../render/renderNavigaion";
import { renderOrder } from "../render/renderOrder";
import { renderProducts } from "../render/renderProduct";

export const addProductCart = (product) => {

    console.log('product: ', product);
    // return JSON.stringify(product);
};

export const cartController = () =>{
    renderNaviagtion({render: false});
    renderHero({render: false});
    renderCard({render: false});
    renderProducts({render: false});
    renderCart({render: true});
    renderOrder({render: true});
};