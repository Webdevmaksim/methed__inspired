import { DATA } from "../const";
import { createElement } from "../createElement";


export const renderNaviagtion = (gender) => {
    const nav = document.querySelector('.navigation');

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
                className: 'category__link',
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


    `
    <div class="container">
    <ul class="navigation__gender gender">

        <li class="gender__item">
            <a href="#" class="gender__link gender__link--active">Женщины</a>
        </li>

        <li class="gender__item">
            <a href="#" class="gender__link">Мужчины</a>
        </li>
    </ul>
    <!-- /.navigation__gender -->
    <div class="category-wrapper">
        <ul class="navigation__category category">
            <li class="category__item">
                <a href="#" class="category__link category__link--active">Бюстгальтеры
                    </a>
            </li>
            <li class="category__item">
                <a href="#" class="category__link">Трусы
                    </a>
            </li>
            <li class="category__item">
                <a href="#" class="category__link">Носки
                    </a>
            </li>
            <li class="category__item">
                <a href="#" class="category__link">Халаты
                    </a>
            </li>
            <li class="category__item">
                <a href="#" class="category__link">Термобелье
                    </a>
            </li>
            <li class="category__item">
                <a href="#" class="category__link">Пижамы
                    
                </a>
            </li>
        </ul>
        <!-- /.navigation__category -->
    </div>
    <!-- /.navigatio__wrapper -->
</div>
<!-- /.container -->
    `;
};