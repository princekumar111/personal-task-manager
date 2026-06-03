import { useState } from "react";


function TaskForm({addTask}){


const [task,setTask]=useState({

title:"",
description:"",
dueDate:""

});



const submitHandler=(e)=>{

e.preventDefault();


if(!task.title){

alert("Title is required");
return;

}


addTask(task);


setTask({

title:"",
description:"",
dueDate:""

});


};




return(

<form 
className="task-form"
onSubmit={submitHandler}
>


<input

type="text"

placeholder="Task Title"

value={task.title}

onChange={(e)=>

setTask({

...task,

title:e.target.value

})

}

/>



<input

type="text"

placeholder="Description"

value={task.description}

onChange={(e)=>

setTask({

...task,

description:e.target.value

})

}

/>



<input

type="date"

value={task.dueDate}

onChange={(e)=>

setTask({

...task,

dueDate:e.target.value

})

}

/>


<button type="submit">

Add Task

</button>


</form>


)

}


export default TaskForm;