import FeaturesSecondary from '../../components/layout/featuresSecondary';
import BookOnSales from '../../components/layout/bookonsales';
import BrandLogo from '../../components/layout/brandlogo';
import BookDetails from '../../components/books/bookdetails';
import Newsletter from '../../components/layout/newsletters';
import BreadCrumb from '../../components/layout/breadcrumb';

export default function BooksDetails() {
    return (
        <>
        <BreadCrumb />
        <BookDetails />
        <FeaturesSecondary currentPage={"books"} />
        <BookOnSales />
        <BrandLogo />
        <Newsletter />
        </>
    );
}
