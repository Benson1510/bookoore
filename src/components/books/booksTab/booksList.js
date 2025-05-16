export default function BooksList({ book, toggleFavorite }) {
    return (
        <div className="book-item">
            <div className="book-cover" />
            <div className="book-info">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="book-title-text">{book.title}</h5>
                        <div className="book-default">
                            <div className="rating">
                                {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="book-author">{book.author}</span>
                        <div className="d-flex align-items-center">
                            <div className="book-rating mx-1">{book.rating.toFixed(1)}</div>
                            <span className="book-reviews mini-text">{book.reviewsCount} reviews</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <p className="book-description">"{book.description}"</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="book-price">${book.price.toFixed(2)}</span>
                        <span className="discountInfo">{book.discountInfo}</span>
                    </div>

                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center mx-2">
                        <div className="mx-2 d-flex flex-column align-items-start">
                            <span className="book-details">Written by </span>
                            <span className="book-details-info mb-2">{book.writtenBy}</span>
                        </div>
                        <div className="mx-2 d-flex flex-column align-items-start">
                            <span className="book-details">Publisher</span>
                            <span className="book-details-info mb-2">{book.publisher}</span>
                        </div>
                        <div className="mx-2 d-flex flex-column align-items-start">
                            <span className="book-details">Year</span>
                            <span className="book-details-info mb-2">{book.year}</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center ">
                        <button className="btn btn-primary ">
                            <i className="bi bi-cart p-1"></i> Add to Cart
                        </button>
                        <button
                            className={`favorite-button-list ${book.isFavorite ? 'active' : ''}`}
                            onClick={() => toggleFavorite(book.id)}
                        >
                            <i className={`bi ${book.isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
