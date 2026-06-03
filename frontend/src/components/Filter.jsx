function Filter({setFilter}){


return(

<div className="filter">


<button

onClick={()=>setFilter("All")}

>

All

</button>




<button

onClick={()=>setFilter("Active")}

>

Active

</button>





<button

onClick={()=>setFilter("Completed")}

>

Completed

</button>



</div>

)


}



export default Filter;