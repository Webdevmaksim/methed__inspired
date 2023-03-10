import { API_URL, card, DATA } from "../const";
import { addProductCart } from "../controllers/cartController";
import { getFavorite, handlerFavorite } from "../controllers/favoriteController";
import { createElement } from "../utils/createElement";
import { renderCount } from "./renderCount";

export const renderCard = ({data, render}) => {
    card.textContent = '';

    if(!render){
        return;
    }

    const{id,title,description,price, colors, pic, size} = data;


    const container = createElement('div',{
        className: 'container card__container',
    },{
        parent: card
    });

    createElement('img',{
        className: 'card__image',
        src: `${API_URL}/${pic}`,
        alt: `${title}`
    },{
        parent: container
    });

    const form = createElement('form',{
        className: 'card__content',
        id: 'order'
    },{
        parent: container,
        cb(elem){

            elem.addEventListener('submit', (ev)=>{
                ev.preventDefault();

                let required = false;
                
                const formData = new FormData(elem);
                
                const product = Object.fromEntries(formData);

                if(product && product && product){    
                    addProductCart(product);
                    return;
                }

                const p = createElement('p',{
                    className: 'card__allert',
                    textContent: product.size 
                        ? product.color 
                            ? product.count ? 'Что-то пошло не так' 
                            : 'Кол-во не корректное ' 
                            : 'Выберете цвет' 
                            : 'Выберете размер',
                },{
                    parent: form,
                    cb(p){

                        p.style.cssText =`
                            color: tomato;
                            text-align: center;
                            padding-top: 12px;
                            font-weight: 600;
                        `;

                        setTimeout(() => {
                            p.remove();
                        }, 3000);
                    }
                });

                
            });
        }
    });

    form.insertAdjacentHTML('beforeend',`
        <h2 class="card__title">${title}</h2>

        <p class="card__price">руб ${price}</p>
    
        <div class="card__vendor-code">
            <span class="card__subtitle">Артикул</span>
            <span class="card__id">${id}</span>
            <input type="hidden" name="id" value="${id}">
        </div>
    `);

    const cardColor = createElement('div',{
        className: 'card__color',
        innerHTML: `<p class="card__subtitle card__color-title">Цвет</p>`
    },{
        parent: form
    });



    createElement('div',{
        className: 'card__color-list',
    },{
        parent: cardColor,
        cb(colorList){
            colors.forEach((colorId, i) => {
                const color = DATA.colors.find(color=>color.id === colorId).title;

                const label = createElement('label',{
                    className: `card__color-item color color--${color} `
                },{
                    parent: colorList
                });

                createElement('input',{
                    className: 'input-hide color__input',
                    type: 'radio',
                    name: 'color',
                    value:  color,
                    checked: !i,
                    // required: true
                },{
                    parent: label
                });
                
                    createElement('span',{
                        className: 'color--check'
                    },{
                        parent: label
                    });
            });
        }
    });


    const cardSize = createElement('div',{
        className: 'card__size',
        innerHTML: `<p class="card__subtitle card__size-title">Размер</p>`
    },{
        parent: form
    });

    createElement('div',{
        className: 'card__size-list',
    },{
        parent: cardSize,
        cb(sizeList){
            size.forEach((item) => {
                

                const label = createElement('label',{
                    className: `card__size-item size `
                },{
                    parent: sizeList
                });

                createElement('input',{
                    className: 'input-hide size__input',
                    type: 'radio',
                    name: 'size',
                    value:  item,
                    // required: true
                },{
                    parent: label
                });
                
                    createElement('span',{
                        className: 'size--check',
                        textContent: item
                    },{
                        parent: label
                    });
            });
        }
    });

    form.insertAdjacentHTML('beforeend',`
    <div class="card__description">
        <p class="card__subtitle card__description-title">Описание</p>
        <p class="card__description-text">${description}</p>
    </div>
    `);

    const count = renderCount(1, 'card_-count');

    const addCart = createElement('button',{
        className: 'card__add-cart main-button',
        type: 'submit',
        textContent: 'В корзину'
    });


    const favoriteBtn = createElement('button',{
        className: `card__favorite favorite
            ${getFavorite().includes(id) ? 'favorite--active' : ''}`,
        ariaLabel: 'Добавить в избранное',
        type: 'button'
    }, {
        cb(elem){
            {
                elem.dataset.id = id;
                elem.addEventListener('click', handlerFavorite);
            }
        }
    });

    createElement('div',{
        className: 'card__control'
    },{
        parent: form,
        appends: [count, addCart, favoriteBtn]
    });

//                 <button class="card__add-cart main-button" type="submit">В корзину</button>
//                 <button class="card__favorite favorite" aria-label="Добавить в избранное"
//                     type="button" data-id="321654"></button>


};