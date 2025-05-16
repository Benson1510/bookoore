import FeaturesSecondary from '../../components/layout/featuresSecondary';
import Checkout from '../../components/checkout/checkout';

export default function CheckoutPage() {
    return (
        <>
        <Checkout />
        <FeaturesSecondary currentPage={"books"} />
        </>
    );
}