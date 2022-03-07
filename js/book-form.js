const bookForm = (function($){
    const BOOK_TITLE = $("#book_title");
    const BOOK_AUTHOR = $("#book_author");
    const BOOK_PUBLISHER = $("#book_publisher");
    const AGRUP = $("#agrupamento");
    const STATUS = $("#status");
    const TIME =$("#hora");
    const BOOK_UPDATE_BUTTON = $("#updateButton");

    // Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos
    
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
            title: data(getHour),
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