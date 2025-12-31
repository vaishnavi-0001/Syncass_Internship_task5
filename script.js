function addBook() {
    const bookName = document.getElementById("bookName").value;
    const bookList = document.getElementById("bookList");

    if (bookName === "") {
        alert("Please enter a book name");
        return;
    }

    const li = document.createElement("li");
    li.textContent = bookName;
    bookList.appendChild(li);

    document.getElementById("bookName").value = "";
}
