import PaymentSection from './components/paymentsection';
import BuyerInfoForm from './components/buyerinfoform';

export default function CheckoutForm() {
  return (
        <section className="row mt-4">
          <article className="col-lg-6 mb-4">
            <BuyerInfoForm />
          </article>
          <aside className="col-lg-6">
            <PaymentSection />
          </aside>
        </section>
  );
};