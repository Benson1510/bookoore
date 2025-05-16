import ProgressBar from "../../../assets/images/progressbar.png";

export default function CheckoutProgress() {
    return (
        <article className="row">
            <section className="col-12 d-flex justify-content-center">
                <div className="d-flex progress-bar justify-content-center ">
                    <img src={ProgressBar} alt="Barre de progression" />
                </div>
            </section>
        </article>
    );
};
