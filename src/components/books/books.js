import { useReducer, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data/books.json';
import { bookFiltersReducer, initialState } from '../../reducers/bookFiltersReducer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import BooksGrid from './booksTab/booksGrid';
import BooksList from './booksTab/booksList';

const { filterData, sampleItems, categories, books: initialBooks } = data;

export default function Books() {
    const [state, dispatch] = useReducer(bookFiltersReducer, initialState);
    const [activeHandle, setActiveHandle] = useState(null);
    const [viewMode, setViewMode] = useState('grid');

    const [currentPage, setCurrentPage] = useState(1);
    const [gridItemsPerPage, setGridItemsPerPage] = useState(4);

    const listItemsPerPage = 4;

    const currentItemsPerPage = viewMode === 'grid'
        ? gridItemsPerPage
        : listItemsPerPage;

    const totalItems = state.books.length;
    const totalPages = Math.ceil(totalItems / currentItemsPerPage);
    const startIdx = (currentPage - 1) * currentItemsPerPage;
    const paginatedBooks = state.books.slice(
        startIdx,
        startIdx + currentItemsPerPage
    );

    useEffect(() => {
        const updateItems = () => {
            const w = window.innerWidth;
            if (w >= 1200) setGridItemsPerPage(12);
            else if (w >= 992) setGridItemsPerPage(12);
            else if (w >= 768) setGridItemsPerPage(3);
            else setGridItemsPerPage(2);
            setCurrentPage(1);
        };
        updateItems();
        window.addEventListener('resize', updateItems);
        return () => window.removeEventListener('resize', updateItems);
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_BOOKS', payload: initialBooks });
    }, []);

    const toggleFavorite = (id) => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
    };
    const toggleFilter = (title) => {
        dispatch({ type: 'TOGGLE_FILTER', payload: title });
    };

    const handleCategoryChange = (category) => {
        dispatch({ type: 'TOGGLE_CATEGORY', payload: category });
    };

    const handlePriceRangeChange = (range) => {
        dispatch({ type: 'SET_PRICE_RANGE', payload: range });
    };

    const onBeforeChange = (_, handle) => {
        setActiveHandle(handle);
    };

    const onAfterChange = () => {
        setTimeout(() => setActiveHandle(null), 1000);
    };

    return (
        <section className="d-flex align-items-center py-2 my-2">
            <div className="container-fluid">
                <div className="row d-flex mx-4 justify-content-between">
                    {/* Colonne des filtres */}
                    <div className="col-md-3">
                        <div className="filter-option">
                            <h2 className="mt-2">Filter Option</h2>
                            <div className="editor-picks">
                                <h5 className="my-2 p-1 text-color-primary">Editor Picks</h5>
                                {filterData.map((filter, index) => (
                                    <ul key={index} className="list-unstyled">
                                        <li>
                                            <button
                                                onClick={() => toggleFilter(filter.title)}
                                                className="btn p-0 border-0 bg-transparent d-flex align-items-center"
                                            >
                                                <i className={`bi ${state.openFilters[filter.title] ? "bi-dash" : "bi-plus"} fs-5 ${state.openFilters[filter.title] ? "current-select" : "text-color-primary"}`} />
                                                <h6 className={`mb-0 ${state.openFilters[filter.title] ? "current-select" : "text-color-primary"}`}>
                                                    {filter.title} ({filter.count})
                                                </h6>
                                            </button>
                                        </li>
                                        {state.openFilters[filter.title] && (
                                            sampleItems.map((item, i) => (
                                                <li key={i} className="px-2">{item}</li>
                                            ))
                                        )}
                                    </ul>
                                ))}
                            </div>
                            <div className="d-flex justify-content-end align-items-center gap-2">
                                <h5 className="mb-0 text-primary">View more</h5>
                                <i className="bi bi-chevron-down fs-5"></i>
                            </div>
                        </div>

                        <div className="filter-option">
                            <div className="choose-publisher d-flex justify-content-between align-items-center gap-2">
                                <h5 className="px-1 text-color-primary">Choose Publisher</h5>
                                <i className="bi bi-chevron-down fs-5"></i>
                            </div>
                        </div>

                        <div className="filter-option">
                            <div className="select-year d-flex justify-content-between align-items-center gap-2">
                                <h5 className="px-1 text-color-primary">Select Year</h5>
                                <i className="bi bi-chevron-down fs-5"></i>
                            </div>
                        </div>

                        <div className="filter-option">
                            <div className="shop-by-category">
                                <div className="d-flex justify-content-between align-items-center gap-2">
                                    <h5 className="px-1 text-color-primary">Shop by Category</h5>
                                    <i className="bi bi-chevron-up fs-5"></i>
                                </div>
                                <div className="full-width-divider" />
                                <div className="row">
                                    {categories.map((category, index) => (
                                        <div key={index} className="col-12 col-lg-6">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`category-${index}`}
                                                    checked={state.selectedCategories.includes(category)}
                                                    onChange={() => handleCategoryChange(category)}
                                                />
                                                <label className="form-check-label" htmlFor={`category-${index}`}>
                                                    {category}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="filter-option">
                            <div className="price-range">
                                <div className="d-flex justify-content-between align-items-center gap-2">
                                    <h5 className="px-1 text-color-primary">Price Range</h5>
                                    <i className="bi bi-chevron-up fs-5"></i>
                                </div>
                                <div className="full-width-divider" />
                                <div className="py-3 px-1">
                                    <Slider
                                        range
                                        min={0}
                                        max={50}
                                        value={state.priceRange}
                                        onChange={handlePriceRangeChange}
                                        onBeforeChange={onBeforeChange}
                                        onAfterChange={onAfterChange}
                                        allowCross={false}
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className={`price-bubble ${activeHandle === 0 ? 'active' : ''}`}>
                                        <div className="price-bubble-arrow"></div>
                                        <span>${state.priceRange[0]}</span>
                                    </div>
                                    <div className={`price-bubble price-bubble-max ${activeHandle === 1 ? 'active' : ''}`}>
                                        <div className="price-bubble-arrow"></div>
                                        <span>${state.priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mx-1'>
                            <button className="btn btn-primary filter-button">
                                Refine Search
                            </button>
                        </div >
                        <div className='row mx-1 my-1'>
                            <button className="btn btn-outline-secondary filter-button">
                                Reset Filter
                            </button>
                        </div>
                    </div>

                    <div className="col-md-9 px-1">
                        <div className="books">
                            <div className="book-header p-2">
                                <h2>Books</h2>
                            </div>
                            <div className="d-flex justify-content-between">
                                <ul className="nav nav-tabs">
                                    <li className="custom-nav-items">
                                        <a className="nav-link active" href="#">Today</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">This Week</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">This Month</a>
                                    </li>
                                </ul>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item-tabs px-1">
                                        <button
                                            type="button"
                                            className={`btn btn-link p-0 ${viewMode === 'list' ? 'active' : ''}`}
                                            onClick={() => setViewMode('list')}
                                        >
                                            <i className="bi bi-list" />
                                        </button>
                                    </li>
                                    <li className="nav-item-tabs px-1">
                                        <button
                                            type="button"
                                            className={`btn btn-link p-0 ${viewMode === 'grid' ? 'active' : ''}`}
                                            onClick={() => setViewMode('grid')}
                                        >
                                            <i className="bi bi-grid" />
                                        </button>
                                    </li>
                                    <li className="nav-item-tabs px-1">
                                        <a href="">
                                            <i className="bi bi-layout-three-columns" />
                                        </a>
                                    </li>
                                    <li className="nav-item px-3 justify-content-end">
                                        <svg width="134" height="34" viewBox="0 0 134 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.2932 20.2932L8.00016 22.5861V7.00015C8.00016 6.73494 7.89481 6.48058 7.70727 6.29305C7.51973 6.10551 7.26538 6.00015 7.00016 6.00015C6.73495 6.00015 6.48059 6.10551 6.29306 6.29305C6.10552 6.48058 6.00016 6.73494 6.00016 7.00015V22.5861L3.70716 20.2932C3.51856 20.111 3.26596 20.0102 3.00376 20.0125C2.74156 20.0148 2.49075 20.1199 2.30534 20.3053C2.11994 20.4907 2.01477 20.7416 2.01249 21.0038C2.01021 21.2659 2.111 21.5186 2.29316 21.7072L6.29316 25.7072C6.48086 25.8943 6.73513 25.9995 7.00021 25.9995C7.2653 25.9995 7.51956 25.8943 7.70726 25.7072L11.7073 21.7072C11.8901 21.5187 11.9914 21.2658 11.9894 21.0033C11.9874 20.7407 11.8822 20.4894 11.6965 20.3038C11.5109 20.1181 11.2596 20.0129 10.997 20.0109C10.7345 20.0089 10.4816 20.1103 10.2932 20.2932Z" fill="#AAAAAA" />
                                            <path d="M11.0002 10.0003H21.0002C21.2655 10.0003 21.5198 9.89494 21.7074 9.70741C21.8949 9.51987 22.0002 9.26552 22.0002 9.0003C22.0002 8.73509 21.8949 8.48073 21.7074 8.2932C21.5198 8.10566 21.2655 8.00031 21.0002 8.00031H11.0002C10.735 8.00031 10.4807 8.10566 10.2931 8.2932C10.1056 8.48073 10.0002 8.73509 10.0002 9.0003C10.0002 9.26552 10.1056 9.51987 10.2931 9.70741C10.4807 9.89494 10.735 10.0003 11.0002 10.0003Z" fill="#AAAAAA" />
                                            <path d="M21.0002 12.0002H11.0002C10.735 12.0002 10.4807 12.1055 10.2931 12.293C10.1056 12.4806 10.0002 12.7349 10.0002 13.0002C10.0002 13.2654 10.1056 13.5197 10.2931 13.7073C10.4807 13.8948 10.735 14.0001 11.0002 14.0001H21.0002C21.2655 14.0001 21.5198 13.8948 21.7074 13.7073C21.8949 13.5197 22.0002 13.2654 22.0002 13.0002C22.0002 12.7349 21.8949 12.4806 21.7074 12.293C21.5198 12.1055 21.2655 12.0002 21.0002 12.0002Z" fill="#AAAAAA" />
                                            <path d="M18.0002 16H11.0002C10.735 16 10.4807 16.1054 10.2931 16.2929C10.1056 16.4804 10.0002 16.7348 10.0002 17C10.0002 17.2652 10.1056 17.5196 10.2931 17.7071C10.4807 17.8947 10.735 18 11.0002 18H18.0002C18.2655 18 18.5198 17.8947 18.7074 17.7071C18.8949 17.5196 19.0002 17.2652 19.0002 17C19.0002 16.7348 18.8949 16.4804 18.7074 16.2929C18.5198 16.1054 18.2655 16 18.0002 16Z" fill="#AAAAAA" />
                                            <path d="M51.142 11.76V24H47.056L43.996 13.92H43.816V24H41.332V11.76H45.526L48.478 21.84H48.658V11.76H51.142ZM57.019 24.216C55.615 24.216 54.601 23.862 53.977 23.154C53.353 22.446 53.041 21.3 53.041 19.716C53.041 18.06 53.365 16.824 54.013 16.008C54.673 15.192 55.693 14.784 57.073 14.784C58.345 14.784 59.305 15.126 59.953 15.81C60.613 16.482 60.943 17.496 60.943 18.852L60.763 20.526H55.471C55.495 20.946 55.567 21.27 55.687 21.498C55.819 21.714 56.023 21.87 56.299 21.966C56.587 22.05 56.983 22.092 57.487 22.092C57.883 22.092 58.357 22.08 58.909 22.056C59.461 22.032 59.863 22.008 60.115 21.984L60.619 21.93L60.655 23.712C59.299 24.048 58.087 24.216 57.019 24.216ZM58.567 18.69C58.567 17.97 58.453 17.472 58.225 17.196C58.009 16.908 57.619 16.764 57.055 16.764C56.479 16.764 56.071 16.914 55.831 17.214C55.591 17.502 55.465 17.994 55.453 18.69H58.567ZM61.9828 15H64.3588L65.4568 21.948H65.8888L67.2568 15.18H69.7408L71.1088 21.948H71.5408L72.6388 15H75.0148L73.3048 24H69.5248L68.4988 18.492L67.4728 24H63.6928L61.9828 15ZM80.0991 24.216C78.6951 24.216 77.6811 23.862 77.0571 23.154C76.4331 22.446 76.1211 21.3 76.1211 19.716C76.1211 18.06 76.4451 16.824 77.0931 16.008C77.7531 15.192 78.7731 14.784 80.1531 14.784C81.4251 14.784 82.3851 15.126 83.0331 15.81C83.6931 16.482 84.0231 17.496 84.0231 18.852L83.8431 20.526H78.5511C78.5751 20.946 78.6471 21.27 78.7671 21.498C78.8991 21.714 79.1031 21.87 79.3791 21.966C79.6671 22.05 80.0631 22.092 80.5671 22.092C80.9631 22.092 81.4371 22.08 81.9891 22.056C82.5411 22.032 82.9431 22.008 83.1951 21.984L83.6991 21.93L83.7351 23.712C82.3791 24.048 81.1671 24.216 80.0991 24.216ZM81.6471 18.69C81.6471 17.97 81.5331 17.472 81.3051 17.196C81.0891 16.908 80.6991 16.764 80.1351 16.764C79.5591 16.764 79.1511 16.914 78.9111 17.214C78.6711 17.502 78.5451 17.994 78.5331 18.69H81.6471ZM88.8969 24.216C88.1049 24.216 87.1389 24.108 85.9989 23.892L85.4229 23.784L85.4949 21.768C86.9469 21.96 88.0029 22.056 88.6629 22.056C89.1069 22.056 89.4549 22.008 89.7069 21.912C89.9709 21.816 90.1029 21.636 90.1029 21.372C90.1029 21.132 89.9769 20.958 89.7249 20.85C89.4849 20.742 89.0769 20.64 88.5009 20.544C88.2849 20.52 88.1349 20.496 88.0509 20.472C87.4509 20.364 86.9589 20.232 86.5749 20.076C86.1909 19.908 85.8789 19.65 85.6389 19.302C85.3989 18.942 85.2789 18.444 85.2789 17.808C85.2789 16.788 85.5909 16.032 86.2149 15.54C86.8389 15.048 87.6969 14.802 88.7889 14.802C89.4369 14.802 90.3909 14.916 91.6509 15.144L92.2449 15.252L92.2089 17.25C90.7569 17.058 89.6829 16.962 88.9869 16.962C88.5789 16.962 88.2549 17.004 88.0149 17.088C87.7869 17.172 87.6729 17.334 87.6729 17.574C87.6729 17.826 87.7929 18.006 88.0329 18.114C88.2729 18.21 88.6629 18.306 89.2029 18.402L89.8329 18.51C90.7929 18.702 91.4769 18.99 91.8849 19.374C92.2929 19.746 92.4969 20.352 92.4969 21.192C92.4969 22.224 92.2029 22.986 91.6149 23.478C91.0269 23.97 90.1209 24.216 88.8969 24.216ZM97.2971 24.216C96.6011 24.216 96.0611 24.108 95.6771 23.892C95.2931 23.676 95.0171 23.322 94.8491 22.83C94.6811 22.338 94.5971 21.66 94.5971 20.796V17.052H93.5351V15H94.5971V12.498H97.0091V15H99.2231V17.052H97.0091V20.742C97.0091 21.21 97.0511 21.552 97.1351 21.768C97.2191 21.972 97.4291 22.068 97.7651 22.056L99.1331 22.02L99.2411 23.946C98.7611 24.054 98.3831 24.126 98.1071 24.162C97.8431 24.198 97.5731 24.216 97.2971 24.216Z" fill="#11142D" />
                                            <path d="M125.57 20.1771L119.57 14.8438C119.438 14.727 119.357 14.5624 119.346 14.3862C119.335 14.2099 119.394 14.0364 119.51 13.9038C119.627 13.7713 119.792 13.6906 119.968 13.6793C120.144 13.6681 120.318 13.7272 120.45 13.8438L126.01 18.7837L131.57 13.8438C131.704 13.736 131.874 13.684 132.046 13.6987C132.217 13.7134 132.376 13.7936 132.489 13.9225C132.603 14.0515 132.662 14.2193 132.655 14.3909C132.647 14.5625 132.574 14.7248 132.45 14.8438L126.45 20.1771C126.329 20.284 126.172 20.3429 126.01 20.3429C125.848 20.3429 125.692 20.284 125.57 20.1771Z" fill="#6C5DD3" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            {viewMode === 'grid' ? (
                                <div className="book-grid">
                                    {paginatedBooks.map(book => (
                                        <BooksGrid
                                            key={book.id}
                                            book={book}
                                            toggleFavorite={toggleFavorite}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="book-list">
                                    {paginatedBooks.map(book => (
                                        <BooksList
                                            key={book.id}
                                            book={book}
                                            toggleFavorite={toggleFavorite}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="row pagination mt-3">
                                <div className=" d-flex align-items-center ">
                                    <span className="col-6 custom-text px-1">
                                        Showing {paginatedBooks.length} of {totalItems} books
                                    </span>
                                    <div className="col-6 d-flex justify-content-end">
                                        <button
                                            className="btn btn-outline-primary d-flex mx-2"
                                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                                            disabled={currentPage === 1}
                                        >
                                            <i className="bi bi-chevron-left"></i> Previous
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                                            <button
                                                key={num}
                                                className={`btn btn-outline-primary ${currentPage === num ? 'active' : ''}`}
                                                onClick={() => setCurrentPage(num)}
                                            >
                                                {num}
                                            </button>
                                        ))}

                                        <button
                                            className="btn d-flex btn-outline-primary mx-2"
                                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                        >
                                            Next <i className="bi bi-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
