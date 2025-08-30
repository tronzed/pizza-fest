import Lottie from "lottie-react";
import animationData from "../assets/images/loader/pizza_loader.json";

function Loader({ loader }) {

    if (!loader) return null;

    return (
        <>
            {loader && (
                <>
                    <div className="loader_box">

                        {/* <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> */}
                        <div className="animate_box">
                            <Lottie animationData={animationData} loop={true} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Loader;