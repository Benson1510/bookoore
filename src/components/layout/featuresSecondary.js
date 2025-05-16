import featuresData from '../../data/features.json';

export default function FeaturesSecondary({ currentPage }) {
    const filteredFeatures = featuresData.filter(feature =>
        feature.pages.includes(currentPage)
    );

    return (
        <div className="d-flex align-items-center pb-2">
            <div className="container-fluid container-fluid-secondary mt-3 p-2">
                <div className="row justify-content-center mx-4">
                    {filteredFeatures.map(feature => (
                        <div
                            key={feature.id}
                            className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex align-items-center gap-2 my-3"
                        >
                            <div className="features-icon-secondary">
                                <i className={`bi ${feature.icon}`}></i>
                            </div>
                            <div>
                                <h5>{feature.title}</h5>
                                <p className="custom-text-grey mb-0">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
