$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault(); 
        var taskName = $('#input').val();
        
        if (taskName === '') {
            alert('Por favor, insira uma tarefa.');
            return
        }
        
        var taskItem = $('<li></li>').text(taskName);
        taskItem.click(function() {
            $(this).toggleClass('completa');
        });
        
        $('#lista-tarefas').append(taskItem);
        $('#input').val('');
    })
})