const router = require("express").Router();

const fs = require("fs");

const { v4: uuid } = require("uuid");


const file = "./data/tasks.json";


function getTasks() {

    return JSON.parse(
        fs.readFileSync(file)
    );
}


function saveTasks(tasks) {

    fs.writeFileSync(
        file,
        JSON.stringify(tasks, null, 2)
    );
}



// GET ALL TASKS

router.get("/", (req, res) => {

    let tasks = getTasks();

    tasks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.json(tasks);

});




// ADD TASK

router.post("/", (req, res) => {

    const {
        title,
        description,
        dueDate
    } = req.body;



    if (!title)
        return res.status(400)
            .json({
                message: "Title required"
            });


    const tasks = getTasks();


    const task = {

        id: uuid(),

        title,

        description,

        dueDate,

        completed: false,

        createdAt: new Date()

    };


    tasks.push(task);

    saveTasks(tasks);


    res.json(task);

});





// UPDATE TASK


router.put("/:id", (req, res) => {


    let tasks = getTasks();


    tasks = tasks.map(task =>


        task.id === req.params.id ?

        {
            ...task,
            ...req.body
        }

        :
        task


    );


    saveTasks(tasks);


    res.json({
        message: "Updated"
    });


});






// COMPLETE TOGGLE


router.patch("/:id/toggle", (req, res) => {


    let tasks = getTasks();


    tasks = tasks.map(task => {


        if (task.id === req.params.id)

            task.completed = !task.completed;


        return task;

    });


    saveTasks(tasks);


    res.json({
        message: "Status Changed"
    });


});








// DELETE


router.delete("/:id", (req, res) => {


    let tasks = getTasks();


    tasks = tasks.filter(

        task => task.id !== req.params.id

    );


    saveTasks(tasks);


    res.json({
        message: "Deleted"
    });


});


module.exports = router;