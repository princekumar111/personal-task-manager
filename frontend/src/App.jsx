import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";


const API = "https://personal-task-manager-backend-4a9s.onrender.com/api/tasks";


function App(){


const [tasks,setTasks]=useState([]);

const [filter,setFilter]=useState("All");

const [search,setSearch]=useState("");

const [form,setForm]=useState({

title:"",
description:"",
dueDate:""

});



const loadTasks=()=>{

axios.get(API)
.then(res=>setTasks(res.data));

};


useEffect(()=>{

loadTasks();

},[]);



const addTask=()=>{


if(!form.title)
return alert("Enter title");


axios.post(API,form)
.then(()=>{

setForm({
title:"",
description:"",
dueDate:""
});

loadTasks();

});

};






const removeTask=(id)=>{

if(confirm("Delete task?")){

axios.delete(`${API}/${id}`)
.then(loadTasks);

}

};




const toggle=(id)=>{

axios.patch(`${API}/${id}/toggle`)
.then(loadTasks);

};



const updateTask=(task)=>{


const title=prompt(
"Update title",
task.title
);


if(title){

axios.put(
`${API}/${task.id}`,
{
...task,
title
}
)
.then(loadTasks)

}


};






// let showTasks=tasks.filter(t=>{


// if(filter==="Active")
// return !t.completed;


// if(filter==="Completed")
// return t.completed;


// return true;


// })
// .filter(t=>

// t.title
// .toLowerCase()
// .includes(
// search.toLowerCase()
// )

// );



let showTasks = tasks
.filter((task)=>{


if(filter==="Active")
return !task.completed;


if(filter==="Completed")
return task.completed;


return true;


})

.filter((task)=>{

return (

task.title
.toLowerCase()
.includes(search.toLowerCase())

||

task.description
.toLowerCase()
.includes(search.toLowerCase())

);

});



return (

<div className="container">


<h1>
Personal Task Manager
</h1>



<div className="form">


<input

placeholder="Title"

value={form.title}

onChange={e=>

setForm({
...form,
title:e.target.value
})

}

/>



<input

placeholder="Description"

value={form.description}

onChange={e=>

setForm({
...form,
description:e.target.value
})

}

/>




<input

type="date"

value={form.dueDate}

onChange={e=>

setForm({
...form,
dueDate:e.target.value
})

}

/>


<button onClick={addTask}>
Add Task
</button>


</div>





<input

className="search"

placeholder="Search"

onChange={
e=>setSearch(e.target.value)
}

/>



<div>

<button onClick={()=>setFilter("All")}>
All
</button>

<button onClick={()=>setFilter("Active")}>
Active
</button>


<button onClick={()=>setFilter("Completed")}>
Completed
</button>


</div>



<h3>

Active:

{
tasks.filter(t=>!t.completed).length
}

&nbsp;

Completed:

{
tasks.filter(t=>t.completed).length
}

</h3>





{

showTasks.length===0

?

<h2>No Tasks Found</h2>

:

showTasks.map(task=>(


<div

className={

"task "+

(

new Date(task.dueDate)<new Date()

&&!task.completed

?

"overdue"

:

""

)

}

key={task.id}

>


<h2>

{task.title}

</h2>


<p>
{task.description}
</p>



<p>

Due:

{task.dueDate}

</p>



<button onClick={()=>toggle(task.id)}>

{

task.completed?

"Incomplete"

:

"Complete"

}

</button>



<button onClick={()=>updateTask(task)}>
Edit
</button>



<button onClick={()=>removeTask(task.id)}>
Delete
</button>



</div>


))

}


</div>

)

}


export default App;