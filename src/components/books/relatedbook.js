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
        <div className="col-span-4 px-4">
            <h2 className="text-xl font-semibold mb-4">Related Books</h2>

            <div className="space-y-4">
                {books.map((book) => (
                    <div key={book.id} className="flex items-start gap-4">
                        {/* Image à gauche */}
                        <div className="w-20 h-28 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                            <img
                                src={book.url}
                                alt={book.title}
                                className="w-full h-full object-cover"
                                id="related-img"
                            />
                        </div>

                        {/* Détails à droite */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-base">{book.title}</h3>
                            <p className="text-xs text-purple-600 uppercase tracking-wide mb-1">
                                {book.genres}
                            </p>
                            <div className="flex items-center text-sm mb-1">
                                <span className="text-orange-500 mr-1">★</span>
                                <span>{book.rating}</span>
                                <span className="text-gray-500 ml-1">({book.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-base font-semibold">${book.price}</span>
                                <span className="text-gray-400 line-through text-sm">${book.oldPrice}</span>
                            </div>
                            <button className="text-sm text-blue-600 hover:underline flex items-center">
                                🛒 Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <list className="list-unstyled px-2 text-center">
                    <button className="btn btn-purple btn-sm ">
                        <i id="view-more" /> View More
                    </button>
                </list>
            </div>
        </div>
    );
};

export default RelatedBooks;
