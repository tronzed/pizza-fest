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
    const [cartTotal, setCartTotal] = useState([]);
    const [cartNum, setCartNum] = useState();

    const { cartCountAll, setCartCountAll, cartReadAll } = useContext(MyContext);

    const cartTotalCount = () => {
        let box = 0;
        for (let i = 0; i <= cartTotal.length - 1; i++) {
            box += parseInt(cartTotal[i]);
        }
        setCartNum(box)
    }

    const cartRead = async () => {
        let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json');
        let data = await res.json();

        if (data !== null) {
            let data2 = Object?.entries(data)?.map(([key, value]) => ({
                'firebaseID': key,
                ...value,
            }))

            setCartData(data2);
            cartReadAll();
            const productCart = [];
            const CartPriceSumBox = [];

            for (let item of data2) {
                let res = await fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products/${item.id}.json`);
                let data = await res.json();
                productCart.push(data);
                CartPriceSumBox.push(data.price);
            }
            setData(productCart);
            setCartTotal(CartPriceSumBox);
            setLoader(false);

        } else {
            setData([]);
            setLoader(false);
            setCartCountAll([]);
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


    useEffect(() => {
        cartTotalCount();
    }, [cartTotal])

    return (

        <>
            <Header />
            <Loader loader={loader} />
            <>

                <div className="container-fluid py-5 inner_content_box">
                    <div className="container py-5">

                        {data.length ? (<>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Products</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={`./assets/images/img_${item?.id}.jpg`}
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
                                                {/* <td>
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
                                                </td> */}
                                             
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
                                                <p className="mb-0">${cartNum}</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="mb-0 me-4">Shipping</h5>
                                                <div className="">
                                                    <p className="mb-0">Flat rate: $3.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                            <h5 className="mb-0 ps-4 me-4">Total</h5>
                                            <p className="mb-0 pe-4">${cartNum+3}</p>
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


                        </>) : (

                            <>

                                <div className="empty_cart_box">
                                    <h3 className="mt-4">Your cart is currently empty.</h3>
                                    <div className="img_box">
                                        <img className="img-fluid" src="./assets/images/empty_cart.jpg" alt="" />
                                    </div>
                                </div>

                            </>

                        )}


                    </div>
                </div>


            </>

            <Footer />
        </>


    );
}

export default Cart;