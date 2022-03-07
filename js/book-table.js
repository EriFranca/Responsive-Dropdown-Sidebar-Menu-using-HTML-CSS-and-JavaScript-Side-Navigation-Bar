const bookTable = (function($){
    const BOOK_TABLE_BODY = $("#bookTable tbody");

    function bookBuildTableRow(id) {
        const book = {id: id, ...bookForm.getData()};
        const bookTpl = _.template($("#bookTemplate").html());

        return bookTpl(book);
    }

    function addToTable() {
        BOOK_TABLE_BODY.append(bookBuildTableRow(_nextId));
    }

    function _findBookRowById(id) {
        return $("#bookTable button[data-id='" + id + "']").parents("tr")[0];
    }

    function updateInTable(id)
    {
        const row = _findBookRowById(id);
        const $row = $(row);

        // Adiciona a linha modifica na tabela
        $row.after(bookBuildTableRow());

        // Remover a linha antiga
        $row.remove();
    }

    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }

    function pegaData() {
        var data = new Date();
    
        var hora    = data.getHours();          // 0-23
        var min     = data.getMinutes();        // 0-59
        var seg     = data.getSeconds();        // 0-59
        var mseg    = data.getMilliseconds();   // 0-999
        var tz      = data.getTimezoneOffset(); // em minutos
    
        // Formata a data e a hora (note o mês + 1)
        var str_hora = hora + ':' + min + ':' + seg;
        document.getElementById("recebeHora").innerHTML = "Hora da Entrada"+str_hora;
        }
        
})(jQuery);