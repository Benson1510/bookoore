export const initialState = {
    books: [],
    allBooks: [],
    openFilters: {},
    selectedCategories: [],
    priceRange: [0, 50],
};

export function bookFiltersReducer(state, action) {
    function applyFilters({ allBooks, selectedCategories, priceRange }, priceFilterActive = false) {
        return allBooks.filter(book => {
            const inCategory =
                selectedCategories.length === 0 || selectedCategories.includes(book.category);

            const inPriceRange = !priceFilterActive || (
                typeof book.price === 'number' &&
                book.price >= priceRange[0] &&
                book.price <= priceRange[1]
            );

            return inCategory && inPriceRange;
        });
    }

    switch (action.type) {
        case "TOGGLE_FAVORITE": {
            const updatedBooks = state.allBooks.map(book =>
                book.id === action.payload
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            );
            return {
                ...state,
                allBooks: updatedBooks,
                books: applyFilters({ ...state, allBooks: updatedBooks }),
            };
        }

        case "SET_BOOKS":

            return {
                ...state,
                allBooks: action.payload,
                books: applyFilters({ ...state, allBooks: action.payload }, false),
            };

        case "TOGGLE_FILTER":
            return {
                ...state,
                openFilters: {
                    ...state.openFilters,
                    [action.payload]: !state.openFilters[action.payload],
                },
            };

        case 'TOGGLE_CATEGORY': {
            const category = action.payload;
            const updatedCategories = state.selectedCategories.includes(category)
                ? state.selectedCategories.filter(cat => cat !== category)
                : [...state.selectedCategories, category];

            return {
                ...state,
                selectedCategories: updatedCategories,
                books: applyFilters({ ...state, selectedCategories: updatedCategories }, state.priceRange.length > 0),
            };
        }

        case "SET_PRICE_RANGE": {
            const updatedPriceRange = action.payload;
            return {
                ...state,
                priceRange: updatedPriceRange,
                books: applyFilters({ ...state, priceRange: updatedPriceRange }, true),
            };
        }

        default:
            return state;
    }
}

