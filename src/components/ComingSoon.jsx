import Lottie from "lottie-react";
import animationData from "../assets/images/loader/coming_02.json";
import { getStoreDetail } from "../commonFunctions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ComingSoon() {


    const [storeDetail, setStoreDetail] = useState([]);

    const navigate = useNavigate();

    function checkSiteOff() {

        if (storeDetail?.comingSoon == false) {
            navigate('/');
        }

    }


    useEffect(() => {

        checkSiteOff();
        getStoreDetail().then(setStoreDetail);

    }, [storeDetail]);

    return (
        <>


            <div className="coming_soon_cover">
                <div className="coming_soon_box">
                    <Lottie animationData={animationData} loop={true} />
                    <h3>We’re making some updates! The site will be back online shortly</h3>
                </div>
            </div>


            {/* <button class="btn border border-secondary rounded-pill px-3 text-primary">Add to cart</button> */}


        </>
    );
}

export default ComingSoon;