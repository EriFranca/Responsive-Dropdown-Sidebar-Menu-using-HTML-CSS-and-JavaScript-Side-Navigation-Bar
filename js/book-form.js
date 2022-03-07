const bookForm = (function($){
    const BOOK_TITLE = $("#book_title");
    const BOOK_AUTHOR = $("#book_author");
    const BOOK_PUBLISHER = $("#book_publisher");
    const AGRUP = $("#agrupamento");
    const STATUS = $("#status");
    const TIME =$("#hora");
    const BOOK_UPDATE_BUTTON = $("#updateButton");

    $("#botao-entrar").click(function(){
        $('#datetime').html(getDataHora());
       return false;
     });
     
     
     function getDataHora() {
       // variáveis
       var data = new Date();
       var hora = data.getHours();
       var minutos = data.getMinutes();
       var segundos = data.getSeconds(); 
       var mes = data.getMonth()+1;
       var dia = data.getDate();
       
       // zero à esquerda se necessário
       dia = dia < 10 ? '0' + dia :  dia;
       mes = mes < 10 ? '0' + mes: mes;
       hora =  hora < 10 ? '0' + hora: hora;
       minutos = minutos < 10 ? '0' + minutos : minutos;
       segundos = segundos  < 10 ? '0' + segundos : segundos;
       
       
       // monta resultado
       var resultado = dia + "/" + mes + "/" + data.getFullYear() + " " + hora + ':' + minutos + ':' + segundos;
       
       
       return resultado;
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