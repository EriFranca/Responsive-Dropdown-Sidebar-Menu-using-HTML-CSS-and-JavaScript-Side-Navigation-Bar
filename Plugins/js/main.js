// Próximo ID para adicionar um novo livro
let _nextId = 1;
// ID do livro que está sendo editado
let _activeId = 0;

const BOOK_FORM = $("#book-form");
const BOOK_TABLE = $("#bookTable");

function handleBookEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[3]).children("button")[0]).data("id");

    bookForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    bookForm.setSubmitButtonText("Actualizar");
}

function handleBookDeleteClick() {
    $(this).parents("tr").remove();
}

function handleBookSubmission(e) {
    e.preventDefault();

    if (bookForm.hasErrors()) {
        return;
    }

    if (bookForm.getSubmitButtonText() === "Actualizar") {
        bookTable.updateInTable(_activeId);
        bookForm.setSubmitButtonText("Adicionar Livro");
    } else {
        bookTable.addToTable(_activeId);
        _nextId += 1;
    }

    bookForm.clear();
}

BOOK_TABLE.on('click', '.book-edit', handleBookEdit);
BOOK_TABLE.on('click', '.book-delete', handleBookDeleteClick);
BOOK_FORM.on('submit', handleBookSubmission);

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
