import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function User() {

    const [orderData, setOrderData] = useState();

    const getOrderData = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
        const data = await res.json();
        const data2 = Object.values(data);
        setOrderData(data2.reverse());
    }

    const navigate = useNavigate();

    const logOutForm = async () => {
        try {
            await signOut(auth);
            navigate("/");

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getOrderData();
    }, [])

    return (

        <>

            <Header />

            <div className="container inner_container_box">
                <button className="btn" onClick={logOutForm}>logOut</button>

                <div className="table-responsive shadow rounded">
                    <table className="table table-bordered table-hover align-middle mb-0">
                        <thead className="table-danger">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Details</th>
                                <th scope="col">items</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData?.map((item, index) => (
                                    <>
                                        <tr>

                                            <td>1</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <b>Address:</b><br /> {item.address}<br /><hr />
                                                <b>Postcode:</b><br /> {item.postcode}<br /><hr />
                                                <b>Mobile:</b><br /> {item.mobile}<br /><hr />
                                                <b>Email:</b><br /> {item.email}
                                            </td>
                                            <td>
                                                {
                                                    item?.cartBox?.map((box, index) => (
                                                        <>
                                                            <p>{box?.name}</p>
                                                        </>
                                                    ))
                                                }
                                            </td>
                                            <td></td>
                                        </tr>

                                    </>
                                ))

                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>

    );
}

export default User;