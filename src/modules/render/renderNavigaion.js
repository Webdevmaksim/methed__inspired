import { DATA } from "../const";
import { createElement } from "../utils/createElement";

let flag = false;

let oldGender = '';

export const renderNaviagtion = (gender, category) => {
    const nav = document.querySelector('.navigation');

    
    if(!gender){
        nav.style.display = 'none';
    }else{
        nav.style.display = '';
    }
    
    if (flag && oldGender === gender) {
        
        return;
    }
    if(gender === 'all'){
        gender = oldGender;
    }
    oldGender = gender;
    
    flag = true;

    nav.textContent = '';

    const container = createElement('div', {
        className: 'container'

    },
    
    {
        parent: nav
    });

    const genderList = createElement('ul',{
        className: 'navigation__gender gender'
    },{
        parent: container
    });

    const categoryElems = DATA.navigation[gender].list.map(item => createElement('li', 
        {
            className: 'category__item'
        },{
            append: createElement('a', {
                className: `category__link ${category === item.slug ? 'category__link--active' : ''}`,
                textContent: item.title,
                href: `#/${gender}/${item.slug}`
            },{
                cb(elem){
                    elem.addEventListener('click', () =>{
                        
                        document.
                        querySelector('.category__link--active')
                        ?.classList.remove('category__link--active');

                        elem.classList.add('category__link--active');
                    });
                }
            })
        }) 
    );

    const categoryWrapper = createElement('div', {
        className: 'category-wrapper'
    },{
        parent: container
    });

    createElement('ul', {
        className: 'navigation__category category'
    },{
        parent: categoryWrapper,
        appends: categoryElems
    });

    
    for (const genderName in DATA.navigation) {

        createElement('a',{
            className: `gender__link
                        ${gender === genderName ? 'gender__link--active' : ''}
            `,
            href: `#/${genderName}`,
            textContent: DATA.navigation[genderName].title
        },{
            parent: createElement('li',{
                className: 'gender__item'

            },{
                parent: genderList
            })
        });
    }



};