var title = $("#title");
var description = $("#description");
var todoId = $("#todoId");
var dataList;
function loadData() {
    $.ajax({url: "http://localhost:3090/todo", success: function(result){
        $('#tbody').html('');
        dataList = result;
        for (let i = 0; i < dataList.length; i++) {
            $('#tbody').append('<tr><td>' + dataList[i].title + '</td><td>' + dataList[i].description + '</td><td>' + dataList[i].createdAt + '</td><td colspan="2">' + createRemoveButton(dataList[i].id)) +'</td>';
        }
    }});
}

deleteTodo = (id) => {
    $.ajax({url: 'http://localhost:3090/todo/' + id, type: 'DELETE', success: function(result){
        loadData();
    }});
}

createRemoveButton = (id) => {
    return '<button class="btn btn-info mr-2" data-toggle="modal" data-target="#exampleModal" onclick="openUpdateTodo('+id+')">Update</button><button class="btn btn-danger" onclick="deleteTodo('+ id +')">Remove</button>';
};


function openUpdateTodo(id) {
    const todo = dataList.find(item => item.id = id);
    todoId.val(todo.id)
    title.val(todo.title);
    description.val(todo.description);
}

function openAddNew() {
    todoId.val(null)
    title.val(null);
    description.val(null);
}

saveData = () => {
    if (!todoId.val()) {
        $.ajax({
            url: '/todo',
            type: 'POST',
            contentType : "application/json; charset=utf-8",
            dataType : 'json',
            data: JSON.stringify({
                title: title.val(),
                description: description.val()
            }),
            success: function(result){
                loadData();
                $('#close').click();
            }});
    } else {
        $.ajax({
            url: '/todo',
            type: 'PUT',
            contentType : "application/json; charset=utf-8",
            dataType : 'json',
            data: JSON.stringify({
                id: todoId.val(),
                title: title.val(),
                description: description.val()
            }),
            success: function(result){
                loadData();
                $('#close').click();
            }});
    }
}

loadData();