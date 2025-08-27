import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import ProductItem from "./ProductItem";
import { MyContext } from "../App";


function Shop() {

    const [data, setData] = useState();
    const [loader, setLoader] = useState(true);
    const { cartReadAll } = useContext(MyContext);


    const pizzaData = async () => {
        let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json');
        let data = await res.json();
        setData(data);
        setLoader(false);
    }

    const addCart = (id) => {
        const data = { id }
        fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            pizzaData();
            cartReadAll();
        })

    }

    useEffect(() => {
        pizzaData();
    }, [])

    return (

        <>
            <Header />

            <Loader loader={loader} />
            {/* Fruits Shop Start*/}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Fresh fruits shop</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input
                                            type="search"
                                            className="form-control p-3"
                                            placeholder="keywords"
                                            aria-describedby="search-icon-1"
                                        />
                                        <span id="search-icon-1" className="input-group-text p-3">
                                            <i className="fa fa-search" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6" />
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Default Sorting:</label>
                                        <select
                                            id="fruits"
                                            name="fruitlist"
                                            className="border-0 form-select-sm bg-light me-3"
                                            form="fruitform"
                                        >
                                            <option value="volvo">Nothing</option>
                                            <option value="saab">Popularity</option>
                                            <option value="opel">Organic</option>
                                            <option value="audi">Fantastic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3 hide_me">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2" />
                                                                Apples
                                                            </a>
                                                            <span>(3)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2" />
                                                                Oranges
                                                            </a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2" />
                                                                Strawbery
                                                            </a>
                                                            <span>(2)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2" />
                                                                Banana
                                                            </a>
                                                            <span>(8)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2" />
                                                                Pumpkin
                                                            </a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="mb-2">Price</h4>
                                                <input
                                                    type="range"
                                                    className="form-range w-100"
                                                    id="rangeInput"
                                                    name="rangeInput"
                                                    min={0}
                                                    max={500}
                                                    defaultValue={0}
                                                    oninput="amount.value=rangeInput.value"
                                                />
                                                <output
                                                    id="amount"
                                                    name="amount"
                                                    min-velue={0}
                                                    max-value={500}
                                                    htmlFor="rangeInput"
                                                >
                                                    0
                                                </output>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Additional</h4>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-1"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-1"> Organic</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-2"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-2"> Fresh</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-3"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-3"> Sales</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-4"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-4"> Discount</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-5"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-5"> Expired</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <h4 className="mb-3">Featured products</h4>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div
                                                    className="rounded me-4"
                                                    style={{ width: 100, height: 100 }}
                                                >
                                                    <img
                                                        src="./assets/images/featur-1.jpg"
                                                        className="img-fluid rounded"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div
                                                    className="rounded me-4"
                                                    style={{ width: 100, height: 100 }}
                                                >
                                                    <img
                                                        src="./assets/images/featur-2.jpg"
                                                        className="img-fluid rounded"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div
                                                    className="rounded me-4"
                                                    style={{ width: 100, height: 100 }}
                                                >
                                                    <img
                                                        src="./assets/images/featur-3.jpg"
                                                        className="img-fluid rounded"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star text-secondary" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center my-4">
                                                <a
                                                    href="#"
                                                    className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                                                >
                                                    Vew More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative">
                                                <img
                                                    src="./assets/images/banner-fruits.jpg"
                                                    className="img-fluid w-100 rounded"
                                                    alt=""
                                                />
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: "50%",
                                                        right: 10,
                                                        transform: "translateY(-50%)"
                                                    }}
                                                >
                                                    <h3 className="text-secondary fw-bold">
                                                        Fresh <br /> Fruits <br /> Banner
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row g-4 justify-content-center">

                                        {data?.map((item, index) => (
                                            <>
                                                <ProductItem name={item.name} idBox={item?.id} text={item.text} price={item.price} addCart={() => addCart(item?.id)} setLoader={setLoader} />
                                            </>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fruits Shop End*/}
            <Footer />
        </>


    );
}

export default Shop;