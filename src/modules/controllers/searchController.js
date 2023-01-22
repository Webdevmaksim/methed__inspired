import { router } from "../router";

export const searchController = formSearch =>{
    formSearch.addEventListener('submit',(ev)=>{
        ev.preventDefault();

        router.navigate(`search?value=${formSearch.search.value}`);
    });
};