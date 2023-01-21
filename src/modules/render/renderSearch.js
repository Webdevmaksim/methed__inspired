import { searchController } from "../controllers/searchController";
import { createElement } from "../createElement";
//? - 49:50 WTF?????
export const search = createElement('div',{
    className: 'search'
});

export const searchToggle = ()  =>{
    search.classList.toggle('search--show');
};

const container = createElement('div',{
    className: 'container'
},{
    parent: search
});

const form = createElement('form',{
    className: 'search__form'
},{
    parent: container
});

createElement('input',{
    type:'search',
    name: 'search',
    placeholder: 'Найти...',
    className: 'search__input',
},{
    parent: form,
    cb: searchController
});

createElement('button',{
    className: 'search__btn',
    type: 'submit',
    textContent: 'искать'
},{
    parent: form
});