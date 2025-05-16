import Features from '../../components/layout/features';
import BooksGrid from '../../components/books/books';
import BookOnSales from '../../components/layout/bookonsales';
import Newsletter from '../../components/layout/newsletters';
import BreadCrumb from '../../components/layout/breadcrumb';

function Books() {
    return (
        <>
        <BreadCrumb />
        <BooksGrid />
        <BookOnSales />
        <Features currentPage={"books"}/>
        <Newsletter />
        </>
    );
}
export default Books;
