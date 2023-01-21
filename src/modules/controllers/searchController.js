export const searchController = formSearch =>{
    formSearch.addEventListener('submit',(ev)=>{
        ev.preventDefault();
        console.log(formSearch.search.value);
    })
}