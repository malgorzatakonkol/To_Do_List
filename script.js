document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector("#addTaskButton");
    var removeButton = document.querySelector("#removeFinishedTasksButton");
    var list = document.querySelector("#taskList");
    var result = document.querySelector("#counter");
    var number = 0; //local variable that holds the number of tasks
    result.innerHTML = number;



    //counting function

    function countingTask() {
        var liListLenght = document.querySelectorAll("li").length;
        var liClassTextColorLenght = document.querySelectorAll(".textColor").length;
        number = liListLenght - liClassTextColorLenght;
        result.innerHTML = number;
    }

    //adding elements to the list
    function addTask() {
        var inputText = document.querySelector("#taskInput").value;


        if (inputText.length >= 5 && inputText.length <= 100) {

            var node = document.createElement("LI");
            node.innerHTML = inputText;
            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute("id", "deleteButton");
            node.append(deleteButton);
            var completeButton = document.createElement("button");
            completeButton.innerHTML = "Complete";
            completeButton.setAttribute("id", "completeButton");
            node.append(completeButton);
            list.appendChild(node);
            document.querySelector("#taskInput").value = "";


            //function removes the task
            function deleteTask() {
                this.parentElement.remove();
                console.log(this.parentElement, "test");
                countingTask()
            }

            var deleteButtonLocalisation = document.querySelectorAll("#deleteButton");
            deleteButtonLocalisation[deleteButtonLocalisation.length - 1].addEventListener("click", deleteTask);


            //color changing function
            function changeColor() {
                console.log("test");
                this.parentElement.classList.toggle("textColor");
                countingTask()
            }

            var completeButtonLocalisation = document.querySelectorAll("#completeButton");
            completeButtonLocalisation[completeButtonLocalisation.length - 1].addEventListener("click", changeColor);



            countingTask()


        }
        else {
            alert("Za krótki tekst!");
        }

    }
    addButton.addEventListener("click", addTask);

    //function that removes all completed tasks (in red)
    function removeAllTask() {
        var doneTasks = document.querySelectorAll(".textColor");
        for (var i=0; i<doneTasks.length; i++){
            doneTasks[i].remove();
        }
    }

    removeButton.addEventListener("click",removeAllTask);

});

