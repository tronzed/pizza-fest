function ProductItem({name,text,price,addCart,setLoader}) {
    return (
        <>

            <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                        <img
                            src="./assets/images/pizza.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                        />
                    </div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{name}</h4>
                        <p>{text}</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">${price}</p>
                            <button onClick={() => { addCart(); setLoader(true); }} href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                                <i className="fa fa-shopping-bag me-2 text-primary" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductItem;