import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import animationData from "../assets/images/loader/no_order.json";

import { MyContext } from "../App";

function User() {

    const [orderData, setOrderData] = useState();
    const { userDetail } = useContext(MyContext);

    const getOrderData = async () => {
        const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
        const data = await res.json();

        console.log(data, "----------data---------")
        console.log(userDetail, "----------userDetail---------")

        const data2 = Object.values(data);

        const data3 = data2.filter((item) => item.userDetail == userDetail);

        setOrderData(data3.reverse());

    }

    useEffect(() => {
        getOrderData();
    }, [userDetail])


    return (

        <>
            <Header />

            <div className="container inner_container_box">

                <ul className="user_detail_box">
                    <li><span className="lable">Name </span> Tanuj</li>
                    <li><span className="lable">Email </span> {userDetail}</li>
                </ul>


                {console.log(orderData?.length)}

                {orderData?.length ?

                    <>
                        <div className="table-responsive">
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
                                                    <td>{index+1}</td>
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
                    </>
                    :
                    <>
                        <div className="no_order_box">
                            <Lottie animationData={animationData} loop={true} />
                        </div>
                    </>

                }


            </div>

            <Footer />
        </>

    );
}

export default User;