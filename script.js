const inputBox = document.getElementById('inputBox');
const taskList = document.getElementById('taskList');
const emptyAlert = document.getElementById('emptyAlert')

function addTask() {
    if (inputBox.value === ''){
        emptyAlert.innerHTML = 'Please enter a task!'
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        taskList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        emptyAlert.innerHTML = ''
    }

    inputBox.value = ''
}

taskList.addEventListener('click', function(e){
    if (e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
    }
});