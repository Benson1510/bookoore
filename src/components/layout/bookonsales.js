import { useEffect, useState } from "react";

export default function BookOnSales() {
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const ImageSlider = [
        {
            url: "https://www.editions-rm.ca/wp-content/uploads/2024/05/C1_Existantes-1371x2059.jpg",
            title: "Terrible Madness",
            description: "THRILL, DRAMA, HORROR",
            note: 4.7,
            price: 45.4,
            oldPrice: 98.4,
            reduction: "30%",
        },
        {
            url: "https://m.media-amazon.com/images/I/71afhCXdpJL._AC_UF1000,1000_QL80_.jpg",
            title: "Battle Drive",
            description: "THRILL, DRAMA, HORROR",
            note: 4.7,
            price: 45.4,
            oldPrice: 98.4,
            reduction: "50%",
        },
        {
            url: "https://products-images.di-static.com/image/patrick-durand-pratique-des-travaux-sur-existant/9782281127270-475x500-1.jpg",
            title: "Take Out Tango",
            description: "SPORTS, DRAMA",
            note: 6.8,
            price: 56.4,
            oldPrice: 98.4,
            reduction: "40%",
        },
        {
            url: "https://m.media-amazon.com/images/I/51mBvjKlOpL._AC_UF1000,1000_QL80_.jpg",
            title: "The Missadventure of..",
            description: "ADVENTURE, SURVIVAL",
            note: 4.7,
            price: 45.4,
            oldPrice: 98.4,
            reduction: "50%",
        },
        {
            url: "https://media.hachette.fr/imgArticle/LGFLIVREDEPOCHE/2022/9782253107538-001-X.jpeg?source=web",
            title: "Seconds [PART 1]",
            description: "THRILL, DRAMA, HORROR",
            note: 6.5,
            price: 45.4,
            oldPrice: 98.4,
            reduction: "50%",
        },
        {
            url: "https://www.hachette.fr/sites/default/files/images/livres/couv/9782036076914-001-T.jpeg",
            title: "The Missadventure of..",
            description: "ADVENTURE, SURVIVAL",
            note: 4.7,
            price: 45.4,
            oldPrice: 98.4,
            reduction: "50%",
        },
        {
            url: "https://images.epagine.fr/890/9782711604890_1_75.jpg",
            title: "Book Title 7",
            description: "FANTASY, DRAMA",
            note: 5.0,
            price: 30.0,
            oldPrice: 60.0,
            reduction: "50%",
        },
        {
            url: "https://www.librest.com/cache/img/livres/860/9782212142860.jpg",
            title: "Book Title 8",
            description: "SCI-FI, MYSTERY",
            note: 4.3,
            price: 20.0,
            oldPrice: 40.0,
            reduction: "50%",
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);

            if (width >= 2900) setItemsPerPage(9);
            else if (width >= 2600) setItemsPerPage(8);
            else if (width >= 2300) setItemsPerPage(7);
            else if (width >= 2000) setItemsPerPage(6);
            else if (width >= 1700) setItemsPerPage(5);
            else if (width >= 1400) setItemsPerPage(4);
            else if (width >= 992) setItemsPerPage(3);
            else if (width >= 768) setItemsPerPage(2);
            else if (width >= 576) setItemsPerPage(1);
            else setItemsPerPage(1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(ImageSlider.length / itemsPerPage);
    const startIndex = page * itemsPerPage;
    const visibleItems = ImageSlider.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container-fluid col-10 pt-1">
            <div className="d-flex p-2 justify-content-between align-items-center mt-4">
                <h2 className="fw-bold mb-0 ">Books on Sale</h2>
                <div className="d-flex gap-2 align-items-center">
                    <button
                        className="btn btn-sm btn-outline-secondary rounded-circle"
                        onClick={() => setPage(prev => Math.max(prev - 1, 0))}
                        disabled={page === 0}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`btn btn-sm rounded-circle ${i === page ? "btn-primary" : "btn-light"}`}
                            id="bookonsales-btn"
                            onClick={() => setPage(i)}
                        ></button>
                    ))}
                    <button
                        className="btn btn-sm btn-outline-secondary rounded-circle"
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))}
                        disabled={page === totalPages - 1}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className="d-flex flex-nowrap justify-content-center">
                {visibleItems.map((book, index) => (
                    <div key={index} className=" justify-content-center flex-column m-2" style={{ flex: `0 0 ${100 / itemsPerPage}%` }}>
                        <div className="d-flexjustify-content-center">
                            <div className="position-relative d-flex justify-content-start">
                                <img src={book.url} alt={book.title} className="fixed-size-img" id="bookonsales-img" />
                                <span className="position-absolute top-0 start-0 d-flex justify-content-center align-items-center rounded-end fw-bold" id="bookonsales-reduction">
                                    {book.reduction}
                                </span>
                            </div>
                        </div>
                        <div className="mt-2" id="bookonsales-details" >
                            <strong className="d-block" id="bookonsales-title">{book.title}</strong>
                            <small className="text" id="bookonsales-description">{book.description}</small>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <div className="d-flex align-items-center gap-1 text-warning" id="bookonsales-note">
                                    <span>★</span>
                                    <span className="fw-bold">{book.note}</span>
                                </div>
                                <div>
                                    <span className="fw-bold text-dark me-2" id="booksales-price">${book.price.toFixed(2)}</span>
                                    <span className="text-muted text-decoration-line-through small" id="bookonsales-price-reduced">${book.oldPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

