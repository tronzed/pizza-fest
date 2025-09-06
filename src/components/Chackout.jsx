import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";


function Chackout() {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [postcode, setPostcode] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [cartBox, setCartBox] = useState();

    const navigate = useNavigate();


    const { cartCountAll, setCartCountAll, cartReadAll } = useContext(MyContext);


    function deleteCart() {
        fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json', {
            method: "DELETE"
        }).then(() => {
            cartReadAll();
        })
    }


    const addOrder = async (e) => {
        e.preventDefault();
        const data = { name, address, postcode, mobile, email, cartBox }
        await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            deleteCart();
            navigate('/order-success');
        });
    }


    const checkCart = async () => {

        let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json');
        let data = await res.json();
        let data2 = Object.values(data);

        const productCart = [];

        for (let item of data2) {
            let res = await fetch(`https://pizza-fest-61924-default-rtdb.firebaseio.com/products/${item.id - 1}.json`);
            let data = await res.json();
            productCart.push(data);
        }

        setCartBox(productCart);

    }


    useEffect(() => {
        checkCart();
    }, [])

    return (

        <>
            <Header />

            <>
                {/* Checkout Page Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <h1 className="mb-4">Billing details</h1>
                        <form action="#" onSubmit={addOrder}>
                            <div className="row g-5">
                                <div className="col-md-12 col-lg-6 col-xl-7">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">
                                            Name<sup>*</sup>
                                        </label>
                                        <input type="text" required className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">
                                            Address <sup>*</sup>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={address} onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">
                                            Postcode<sup>*</sup>
                                        </label>
                                        <input type="text" className="form-control" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">
                                            Mobile<sup>*</sup>
                                        </label>
                                        <input type="tel" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">
                                            Email Address<sup>*</sup>
                                        </label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 col-xl-5">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {

                                                    cartBox?.map((item, index) => (
                                                        <>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="d-flex align-items-center mt-2">
                                                                        <img
                                                                            src={`./assets/images/img_${index+1}.jpg`}
                                                                            className="img-fluid rounded-circle"
                                                                            style={{ width: 90, height: 90 }}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </th>
                                                                <td className="py-5">{item?.name}</td>
                                                                <td className="py-5">${item?.price}</td>
                                                            </tr>
                                                        </>
                                                    ))

                                                }



                                                <tr>
                                                    <th scope="row"></th>
                                                    <td className="py-5" />
                                                    <td className="py-5" />
                                                    <td className="py-5">
                                                        <p className="mb-0 text-dark py-3">Subtotal</p>
                                                    </td>
                                                    <td className="py-5">
                                                        <div className="py-3 border-bottom border-top">
                                                            <p className="mb-0 text-dark">$414.00</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                        <div className="col-12">
                                            <div className="form-check text-start my-3">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input bg-primary border-0"
                                                    id="Delivery-1"
                                                    name="Delivery"
                                                    defaultValue="Delivery"
                                                />
                                                <label className="form-check-label" htmlFor="Delivery-1">
                                                    Cash On Delivery
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                        <div className="col-12">
                                            <div className="form-check text-start my-3">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input bg-primary border-0"
                                                    id="Paypal-1"
                                                    name="Paypal"
                                                    defaultValue="Paypal"
                                                />
                                                <label className="form-check-label" htmlFor="Paypal-1">
                                                    Paypal
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                        <button
                                            type="submit"
                                            className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Checkout Page End */}
            </>


            <Footer />
        </>

    );
}

export default Chackout;