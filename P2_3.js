const book = {
    book_title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publish_year: 1997
}

function print_info() {
    console.log(`Book Title : ${book.book_title}`);
    console.log(`Author : ${book.author}`);
    console.log(`Publish Year : ${book.publish_year}`);
}

print_info();