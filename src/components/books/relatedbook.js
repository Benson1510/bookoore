import React from 'react';

const books = [
    {
        id: 1,
        url: "https://www.editions-rm.ca/wp-content/uploads/2024/05/C1_Existantes-1371x2059.jpg",
        title: 'Terrible Madness',
        genres: 'THRILLER, DRAMA, HORROR',
        rating: 4.7,
        reviews: 244,
        price: 45.4,
        oldPrice: 98.4,
    },
    {
        id: 2,
        url: "https://m.media-amazon.com/images/I/71afhCXdpJL._AC_UF1000,1000_QL80_.jpg",
        title: 'Battle Drive',
        genres: 'THRILLER, DRAMA, HORROR',
        rating: 4.7,
        reviews: 244,
        price: 45.4,
        oldPrice: 98.4,
    },
    {
        id: 3,
        url: "https://products-images.di-static.com/image/patrick-durand-pratique-des-travaux-sur-existant/9782281127270-475x500-1.jpg",
        title: 'Terrible Madness',
        genres: 'THRILLER, DRAMA, HORROR',
        rating: 4.7,
        reviews: 244,
        price: 45.4,
        oldPrice: 98.4,
    },
];

const RelatedBooks = () => {
    return (
        <div className="container-fluid py-2 mt-4">
            <h2 className="text-xl font-semibold mb-4 tags-title-text">Related Books</h2>

            <div className="space-y-4">
                {books.map((book) => (
                    <div key={book.id} className="row col-12">
                        {/* Image à gauche */}
                        <div className="col-md-5 px-0 py-3">
                            <img
                                src={book.url}
                                alt={book.title}
                                className="w-full h-full object-cover"
                                id="related-img"
                            />
                        </div>

                        {/* Détails à droite */}
                        <div className="col-md-7 px-0 py-3">
                            <h3 className="font-semibold text-base" id="bookonsales-title">{book.title}</h3>
                            <p className="text-xs text-purple-600 uppercase tracking-wide mb-1" id="bookonsales-description">
                                {book.genres}
                            </p>
                            <div className="flex items-center text-sm mb-1">
                                <span className="text-orange-500 mr-1" id="bookonsales-note">★</span>
                                <span id="bookonsales-note">{book.rating}</span>
                                <span className="text-muted small mx-1">({book.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-base font-semibold">${book.price}</span>
                                <span className="text-muted text-decoration-line-through small mx-1">${book.oldPrice}</span>
                            </div>
                            <button className="btn-details-reverse btn-primary mx-1">
                                <strong><i className="bi bi-cart text-primary"></i></strong>  Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center col-12 w-100%">
                <list className="row list-unstyled text-center">
                    <button className="btn btn-purple btn-sm ">
                        <i id="view-more" /> View More
                    </button>
                </list>
            </div>
        </div>
    );
};

export default RelatedBooks;


/*
.btn-details-reverse {
    color: $primary;
    width: 200px;
    height: 60px;
    font-size: 1rem;
    font-weight: 700;
    background: $white;
    border: none;
    display: flex;
    align-items: start;
    justify-content: start;

    i {
        margin-right: 5px;
    }
}
*/