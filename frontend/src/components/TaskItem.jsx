function TaskItem({

task,

deleteTask,

toggleTask,

updateTask

}){



const overdue =

task.dueDate &&

new Date(task.dueDate) < new Date()

&&

!task.completed;





const editTask=()=>{


const title=prompt(

"Enter new title",

task.title

);



if(title){


updateTask(

task.id,

{

...task,

title:title

}

);


}


};





return(


<div className={overdue ? "task overdue":"task"}>


<h2>

{
task.completed 
?
<del>{task.title}</del>

:

task.title

}

</h2>



<p>

{task.description}

</p>


<p>

Due Date : {task.dueDate}

</p>



<button

onClick={()=>toggleTask(task.id)}

>


{

task.completed

?

"Mark Active"

:

"Complete"

}


</button>




<button onClick={editTask}>

Edit

</button>



<button

onClick={()=>deleteTask(task.id)}

>

Delete

</button>



</div>


)

}



export default TaskItem;