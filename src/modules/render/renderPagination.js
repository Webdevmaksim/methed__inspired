import { createElement } from "../createElement";
import { router } from "../router";

export const renderPagination = (wrapperPagination, page, pages, count) =>{
    
    wrapperPagination.textContent = '';

    const paginationList = createElement('ul',{
        className: 'pagination__list'
    },{
        parent: wrapperPagination
    });

    const isNotStart = page - Math.floor(count / 2) > 1;
    const isEnd = page + Math.floor(count / 2) > pages;

    if(count > pages){
        count = pages;
    }
    
    for( let i = 0; i<count; i++){
        let n = i + 1;

        if(isNotStart){
            if(isEnd){
                n = pages - count + i + 1;
            }else{
                n = page - Math.floor(count / 2) + i;
            }
        }

        createElement('li',{
            className: 'pagination__item'
        },{
            parent: paginationList,
            append: createElement('a',{
                textContent: n,
                href: `${router.getCurrentLocation().url}?page=${n}`,
                className: `pagination__link
                    ${page === n ? 'pagination__link--active' : ''}
                `
            })
        });
    }

    if(pages > count){
        createElement('a',{
            className: `pagination__arrow pagination__arrow--start ${!isNotStart ? 'pagination__arrow--disabled' : ''}`,
            href:`${router.getCurrentLocation().url}?page=${1}`,
            
            // ? - Delete this property lately 
            textContent: 'start',
            ariaLabel: 'To the start'
        },{
            parent: wrapperPagination
        });

        createElement('a',{
            className: `pagination__arrow pagination__arrow--end ${isEnd ? 'pagination__arrow--disabled' : ''}`,
            href:`${router.getCurrentLocation().url}?page=${pages}`,
            
            // ? - Delete this property lately 
            textContent: 'end',
            ariaLabel: 'To the end'
        },{
            parent: wrapperPagination
        });
    }
};