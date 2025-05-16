import Features from '../../components/layout/features';
import BooksGrid from '../../components/books/books';
import BookOnSales from '../../components/layout/bookonsales';
import Newsletter from '../../components/layout/newsletters';

function Books() {
    return (
        <>
        <BooksGrid />
        <BookOnSales />
        <Features currentPage={"books"}/>
        <Newsletter />
        </>
    );
}
export default Books;
