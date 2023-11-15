
function Filter({data,category,setCategory}){
    function categoryHandler(title){
        setCategory(title);
        
    }
    return(
        <div>
            {
                data.map((data)=>{
                    const x=category===data.title?"filter-btn":"filter-btn-2";
                    return( <button  className={x} key={data.id} onClick={()=>categoryHandler(data.title)}>{data.title} </button>);
                })
            }
        </div>
    )
}

export default Filter;