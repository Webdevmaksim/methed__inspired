import { API_URL, DATA } from "../const";
import { createElement } from "../createElement";
import { getData } from "../getData";

export const renderProducts = async (title, params) => {

    const products = document.querySelector('.goods');
    const goods = await getData(`${API_URL}/api/goods`, params);
    
    products.textContent = '';

    const container = createElement('div',{
        className: 'container'
    },{
        parent: products
    });

    const goodtitle = createElement('h2',{
        className: 'goods__title',
        textContent: title
    },{
        parent: container
    });
    
    const listCard = goods.map((product) => {
        const li = createElement('li',{
            className: 'goods__item',
        });

        const article = createElement('article',{
            className: 'product',
            innerHTML: `
            <a href="#/product/${product.id}" class="product__link">
                <img src="${API_URL}/${product.pic}" alt="${product.title}" class="product__image">
                <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>
            <div class="product__row">
                <p class="product__price">руб ${product.price}</p>
                <button class="product__btn-favorite product__btn-favorite--active" aria-label="Добавить в избранное"
                data-id=${product.id}
                ></button>
            </div>
            `
        },{
            parent: li
        });

        const colors = createElement('ul',{
            className: 'product__color-list'
        },{
            parent: article,
            appends: product.colors.map((colorId, i)=>{
                const color = DATA.colors.find(item => item.id == colorId);

                return createElement('li',{
                    className: `color color--${color.title} ${i ? '' : 'color--check'}`
                    
                });
            })
        });

        return li;
    });

    const list = createElement('ul',{
        className: 'goods__list',
    },{
        appends: listCard,
        parent: container
    });
};