import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";


function User() {

    const [orderData, setOrderData] = useState();

    const getOrderData = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
        const data = await res.json();
        const data2 = Object.values(data);
        setOrderData(data2);
    }

    useEffect(() => {
        getOrderData();
    }, [])

    return (

        <>

            {console.log(orderData, "-----orderData------")}

            <Header />

            <div className="container inner_container_box">
                <div class="table-responsive shadow rounded">
                    <table class="table table-bordered table-hover align-middle mb-0">
                        <thead class="table-danger">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Details</th>
                                <th scope="col">items</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
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
                                            <td>
                                                <button class="btn btn-sm btn-success">Approve</button>
                                                <button class="btn btn-sm btn-danger">Cancel</button>
                                            </td>
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