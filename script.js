document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector("#addTaskButton");
    var removeButton = document.querySelector("#removeFinishedTasksButton");
    var list = document.querySelector("#taskList");
    var result = document.querySelector("#counter");
    var number = 0; //zmienna, która przetrzymuje ilośc zadań
    result.innerHTML = number; //wartośc początkowa w div'ie



    //funkcja zliczająca

    function countingTask() {
        var liListLenght = document.querySelectorAll("li").length;
        var liClassTextColorLenght = document.querySelectorAll(".textColor").length;
        number = liListLenght - liClassTextColorLenght;
        result.innerHTML = number;
    }

    //dodanie elementów do listy
    function addTask() {
        var inputText = document.querySelector("#taskInput").value; //text z inputa


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
            document.querySelector("#taskInput").value = ""; //zerowanie textu z inputa


            //funkcja usuwająca zadanie
            function deleteTask() {
                this.parentElement.remove();
                console.log(this.parentElement, "test");
                countingTask() //funkcja zlicza za każdym razem gdy zmeni sie cos w liscie
            }

            var deleteButtonLocalisation = document.querySelectorAll("#deleteButton");
            deleteButtonLocalisation[deleteButtonLocalisation.length - 1].addEventListener("click", deleteTask);


            //funkcja zmieniająca kolor
            function changeColor() {
                console.log("test");
                this.parentElement.classList.toggle("textColor");
                countingTask()  //funkcja zlicza za każdym razem gdy zmeni sie cos w liscie
            }

            var completeButtonLocalisation = document.querySelectorAll("#completeButton");
            completeButtonLocalisation[completeButtonLocalisation.length - 1].addEventListener("click", changeColor);



            countingTask()  //funkcja zlicza za każdym razem gdy zmeni sie cos w liscie


        }
        else {
            alert("Za krótki tekst!");
        }

    }
    addButton.addEventListener("click", addTask);

    //funkcja usuwająca wszystkie zakończone zadania (na czerwono)
    function removeAllTask() {
        var doneTasks = document.querySelectorAll(".textColor");
        for (var i=0; i<doneTasks.length; i++){
            doneTasks[i].remove();
        }
    }

    removeButton.addEventListener("click",removeAllTask);

});

