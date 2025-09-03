import Lottie from "lottie-react";
import Header from "./Header";
import Footer from "./Footer";
import animationData from "../assets/images/loader/delivery_guy.json";

function OrderSuccess() {

    return (

        <>
            <Header />

            <div className="container delivery_guy_box">

                <div className="row">
                    <div className="col-sm-6">
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                    <div className="col-sm-6 text_box">
                        <h2>Order Successful</h2>
                        <p>Delivery on it's way</p>
                    </div>
                </div>

             
            </div>

            <Footer />


        </>

    );
}

export default OrderSuccess;