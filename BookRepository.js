const Book = require('./Book');

class BookRepository {
	
	constructor (database) {
		this.database = database;
	};

	getBooks() {
		return this.database.getBooks().then(
			(results) => {
				let books = results.map((book) => {
					return new Book(book);
				});

				return books;
			},

			(err) => {
				console.log(err);
				throw err;
			}
		);
	};

	getBook(id) {
		
	};

	createBook(data) {
		
	};

	updateBook(data){

		let inforBook = new Book(data);

		return this.database.updateBook(inforBook).then(
			(results) => {
				return results;
			},

			(err) => {
				console.log(err);
				throw err;
			}
		)
	};

	deleteBook(id){
		
	};
}

module.exports = BookRepository;
