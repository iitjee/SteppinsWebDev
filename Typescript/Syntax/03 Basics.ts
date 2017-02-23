






Template Strings:
They are damn useful.

Consider: 
<div todo='[[Todo ID]]' class="list-group-item}">
    <i class="[[ add 'hidden' class if todo is NOT completed]] text-success glyphicon glyphicon-ok"></i>
    <span class="name">[[Name]]</span>
</div>
 
 This can be easily constructed using Template Strings
    var container = document.getElementById('container');

    var todo = {
        id: 123,
        name: 'Pick up drycleaning',
        completed: true
    }

    container.innerHTML = `
    <div todo='${todo.id}' class="list-group-item}">
        <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
        <span class="name">${todo.name}</span>
    </div>
    `

