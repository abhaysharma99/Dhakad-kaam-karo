document.querySelector('#push').onclick = function(){
        if(document.querySelector('#newtask input').value.length == 0){
            alert("please Enter a Task");
        }
        else{
            document.querySelector('#tasks').innerHTML
            += `
              <div class="task">      
              <span id="taskname">
              ${document.querySelector('#newtask input').value}
              </span>
              <button class="delete">
              del
              </button>  
              </div>
            `;
            var current_tasks = document.querySelectorAll('.delete');
            for(var i=0;i<current_tasks.length;i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
            var Tasks = document.querySelectorAll(".task");
            for(var i=0;i<Tasks.length;i++){
                Tasks[i].onclick = function(){
                    this.classList.toggle('completed');
                }
            }
            document.querySelector('#newtask input').value = "";
    }
}
