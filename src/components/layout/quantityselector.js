
export default function QuantitySelector({ quantity, increase, decrease }) {
    return (
        <div className="d-flex align-items-center border rounded px-2">
            <button
                className="btn btn-outline-secondary btn-sm border-0"
                onClick={decrease}
                disabled={quantity <= 1}
                id='button-d-i'
            >
                –
            </button>
            <span className="px-2 mx-2 fw-bold">{quantity}</span>
            <button
                className="btn btn-outline-secondary btn-sm border-0"
                onClick={increase}
                id='button-d-i'
            >
                +
            </button>
        </div>
    );
}

