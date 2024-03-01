fetch('books.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    loadData(data);
})

const loadData = (data) => {
    const dataContainer = document.getElementById('dataContainer');
    data.forEach(book => {
        dataContainer.innerHTML += `<div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="${book.bookImg}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${book.bookTitle}</h2>
          <p>${book.bookAuthor}</p>
          <p>${book.bookPrice}</p>
        </div>
      </div>`
    });
}