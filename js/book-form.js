const bookForm = (function($){
    const BOOK_TITLE = $("#book_title");
    const BOOK_AUTHOR = $("#book_author");
    const BOOK_PUBLISHER = $("#book_publisher");
    const AGRUP = $("#agrupamento");
    const STATUS = $("#status");
    const TIME =$("#hora");
    const BOOK_UPDATE_BUTTON = $("#updateButton");

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
        
    
    function clear() {
        setData();
        BOOK_TITLE.focus();
    }

    function hasErrors() {
        return BOOK_TITLE.val() === null || BOOK_TITLE.val() === '';
    }

    function getData() {
        return {
            title: BOOK_TITLE.val(),
            author: BOOK_AUTHOR.val(),
            publisher: BOOK_PUBLISHER.val(),
            agrupamento: AGRUP.val(),
            status: STATUS.val(),
            hora:TIME.val(),
        };
    }

    function setData(title='', author='', publisher='', agrupamento='',status='',hora='') {
        BOOK_TITLE.val(title);
        BOOK_AUTHOR.val(author);
        BOOK_PUBLISHER.val(publisher);
        AGRUP.val(agrupamento);
        STATUS.val(status);
        TIME.val(hora);

    }

    function setSubmitButtonText(str) {
        BOOK_UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return BOOK_UPDATE_BUTTON.text();
        return pegaData;
    }

    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);