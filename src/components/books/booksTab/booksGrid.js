
export default function BooksGrid({ book, toggleFavorite }) {
    return (
        <div className="book-item">
            <div className="book-cover">
                <button
                    className={`favorite-button ${book.isFavorite ? 'active' : ''}`}
                    onClick={() => toggleFavorite(book.id)}
                >
                    <i className={`bi ${book.isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                </button>
            </div>
            <div className="book-info">
                <h5 className="book-title">{book.title}</h5>
                <div className="book-default">
                    <p className="book-author">{book.author}</p>
                    <div className="rating">
                        {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
                    </div>
                </div>
                <div className="book-hover">
                    <p>${book.price}</p>
                    <div className="row mx-1">
                        <button className="btn btn-primary">
                            <i className="bi bi-cart p-1"></i>  Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}