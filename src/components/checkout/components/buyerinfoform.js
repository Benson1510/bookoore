import { useState } from 'react';

export default function BuyerInfoForm() {
    const [buyerInfo, setBuyerInfo] = useState({
        firstName: 'Richard',
        lastName: 'Khan',
        email: 'richardkhan@mail.com',
        phone: '8512519825236',
        address: 'Corner Grove St, Franklin Avenue',
        state: 'England',
        postcode: '1241255',
        city: 'London',
        note: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo(prev => ({ ...prev, [name]: value }));
    }
    return (
        <article className="buyer-info card p-4">
            <header>
                <h2 className="buyer-info__title mb-3">Buyer Info</h2>
            </header>

            <form className="buyer-info__form">
                <fieldset className="row mb-3">
                    <section className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="firstName" className="form-label">FIRST NAME</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={buyerInfo.firstName}
                            onChange={handleChange}
                        />
                    </section>

                    <section className="col-md-6">
                        <label htmlFor="lastName" className="form-label">LAST NAME</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={buyerInfo.lastName}
                            onChange={handleChange}
                        />
                    </section>
                </fieldset>

                <fieldset className="row mb-3">
                    <section className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={buyerInfo.email}
                            onChange={handleChange}
                        />
                    </section>

                    <section className="col-md-6">
                        <label htmlFor="phone" className="form-label">MOBILE PHONE NUMBER</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={buyerInfo.phone}
                            onChange={handleChange}
                        />
                    </section>
                </fieldset>

                <fieldset className="row mb-3">
                    <section className="col-12">
                        <label htmlFor="address" className="form-label">ADDRESS</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={buyerInfo.address}
                            onChange={handleChange}
                        />
                    </section>
                </fieldset>

                <fieldset className="row mb-3">
                    <section className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="state" className="form-label">STATE</label>
                        <span className="select-wrapper position-relative">
                            <select
                                className="form-select"
                                id="state"
                                name="state"
                                value={buyerInfo.state}
                                onChange={handleChange}
                            >
                                <option value="England">England</option>
                                <option value="Scotland">Scotland</option>
                                <option value="Wales">Wales</option>
                                <option value="Northern Ireland">Northern Ireland</option>
                            </select>
                            <i className="bi bi-chevron-down select-icon position-absolute end-0 top-50 translate-middle-y me-3"></i>
                        </span>
                    </section>

                    <section className="col-md-6">
                        <label htmlFor="postcode" className="form-label">POSTCODE/ZIP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="postcode"
                            name="postcode"
                            value={buyerInfo.postcode}
                            onChange={handleChange}
                        />
                    </section>
                </fieldset>

                <fieldset className="row mb-3">
                    <section className="col-12">
                        <label htmlFor="city" className="form-label">TOWN/CITY</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={buyerInfo.city}
                            onChange={handleChange}
                        />
                    </section>
                </fieldset>

                <fieldset className="row">
                    <section className="col-12">
                        <label htmlFor="note" className="form-label">NOTE</label>
                        <textarea
                            className="form-control"
                            id="note"
                            name="note"
                            value={buyerInfo.note}
                            onChange={handleChange}
                            rows={4}
                        ></textarea>
                    </section>
                </fieldset>
            </form>
        </article>
    );
}