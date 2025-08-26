import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

function Cart() {

    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [loader, setLoader] = useState(true);

    const { cartCountAll, setCartCountAll, cartReadAll } = useContext(MyContext);


    const cartRead = async () => {
        let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json');
        let data = await res.json();

        if (data !== null) {
            console.log('done');
            let data2 = Object?.entries(data)?.map(([key, value]) => ({
                'firebaseId': key,
                ...value,
            }))

            setCartData(data2);
            cartReadAll();
            const productCart = [];

            for (let item of data2) {
                let res = await fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products/${item.id - 1}.json`);
                let data = await res.json();
                productCart.push(data);
            }
            setData(productCart);
            setLoader(false);

        } else {
            setData([]);
            setLoader(false);
            setCartCountAll([]);
            console.log('undone');

        }





    }

    const deleteData = (id) => {

        const cartBox = cartData.find(item => item?.id == id);

        fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/carts/${cartBox?.firebaseId}.json`, {
            method: "DELETE"
        }).then(() => {
            cartRead();
        });

    }

    useEffect(() => {
        cartRead();
    }, [])

    return (

        <>
            <Header />
            <Loader loader={loader} />
            <>

                {/* Cart Page Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data?.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="./assets/images/vegetable-item-3.png"
                                                        className="img-fluid me-5 rounded-circle"
                                                        style={{ width: 80, height: 80 }}
                                                        alt=""
                                                    />
                                                </div>
                                            </th>
                                            <td>
                                                <p className="mb-0 mt-4">{item?.name}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{item?.price}$</p>
                                            </td>
                                            <td>
                                                <div
                                                    className="input-group quantity mt-4"
                                                    style={{ width: 100 }}
                                                >
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                            <i className="fa fa-minus" />
                                                        </button>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm text-center border-0"
                                                        defaultValue={1}
                                                    />
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{item?.id}</p>
                                            </td>
                                            <td>
                                                <button onClick={() => { deleteData(item?.id); setLoader(true) }} className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="fa fa-times text-danger" />
                                                </button>
                                            </td>
                                        </tr>

                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="mt-5">
                            <input
                                type="text"
                                className="border-0 border-bottom rounded me-5 py-3 mb-4"
                                placeholder="Coupon Code"
                            />
                            <button
                                className="btn border-secondary rounded-pill px-4 py-3 text-primary"
                                type="button"
                            >
                                Apply Coupon
                            </button>
                        </div>
                        <div className="row g-4 justify-content-end">
                            <div className="col-8" />
                            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                                <div className="bg-light rounded">
                                    <div className="p-4">
                                        <h1 className="display-6 mb-4">
                                            Cart <span className="fw-normal">Total</span>
                                        </h1>
                                        <div className="d-flex justify-content-between mb-4">
                                            <h5 className="mb-0 me-4">Subtotal:</h5>
                                            <p className="mb-0">$96.00</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 me-4">Shipping</h5>
                                            <div className="">
                                                <p className="mb-0">Flat rate: $3.00</p>
                                            </div>
                                        </div>
                                        <p className="mb-0 text-end">Shipping to Ukraine.</p>
                                    </div>
                                    <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                        <h5 className="mb-0 ps-4 me-4">Total</h5>
                                        <p className="mb-0 pe-4">$99.00</p>
                                    </div>
                                    <Link
                                        className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                                        type="button"
                                        to="/checkout"
                                    >
                                        Proceed Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart Page End */}
            </>

            <Footer />
        </>


    );
}

export default Cart;