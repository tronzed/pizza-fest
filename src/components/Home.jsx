import Header from "./Header";
import Footer from "./Footer"
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import Lottie from "lottie-react";
import animationData from "../assets/images/loader/pizza_box_order.json";
import { MyContext } from "../App";

function Home() {

  const [data, setData] = useState();
  const [loader, setLoader] = useState(true);
  const [bestsalerData, setBestsalerData] = useState([]);

  const { cartReadAll } = useContext(MyContext);


  const pizzaData = async () => {
    let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/products.json');
    let resdata = await res.json();

    let data = Object.entries(resdata).map(([key,value])=>({
      firebaseID:key,
      ...value
    }));

    setData(data);

    let data2 = data.filter((item) => item.bestSeller === true)
    setBestsalerData(data2)

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

      {console.log(bestsalerData, "------------bestsalerData-----------")}

      <>
        <div className="container-fluid featurs py-5 hide_me">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-car-side fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Free Shipping</h5>
                    <p className="mb-0">Free on order over $300</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-user-shield fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Security Payment</h5>
                    <p className="mb-0">100% security payment</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-exchange-alt fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>30 Day Return</h5>
                    <p className="mb-0">30 day money guarantee</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fa fa-phone-alt fa-3x text-white" />
                  </div>
                  <div className="featurs-content text-center">
                    <h5>24/7 Support</h5>
                    <p className="mb-0">Support every time fast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featurs Section End */}
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite">
          <div className="container">
            <div className="tab-class text-center">
              <h2 className="sec_heading">Delicious Pizza</h2>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        {data?.map((item, index) => (
                          <>
                            <ProductItem imgUrl={item?.img_url} name={item.name} text={item.text} price={item.price} idBox={item?.id} addCart={() => addCart(item?.id)} setLoader={setLoader} />
                          </>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-5.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-2.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-1.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-6.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apple</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-5.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-4.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apricots</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-3.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Banana</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-2.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src="./assets/images/fruite-item-1.jpg"
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: 10, left: 10 }}
                            >
                              Fruits
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit sed do eiusmod te incididunt
                              </p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $4.99 / kg
                                </p>
                                <a
                                  href="#"
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Fruits Shop End*/}
        {/* Featurs Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="row g-4 justify-content-center">

              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-secondary rounded border border-secondary">
                    <img
                      src="./assets/images/img_1.jpg"
                      className="img-fluid rounded-top w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-primary text-center p-4 rounded">
                        <h5 className="text-white">Fresh Pizza</h5>
                        <h3 className="mb-0">20% OFF</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-dark rounded border border-dark">
                    <img
                      src="./assets/images/img_2.jpg"
                      className="img-fluid rounded-top w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-light text-center p-4 rounded">
                        <h5 className="text-primary">Tasty Pizza</h5>
                        <h3 className="mb-0">Free delivery</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-primary rounded border border-primary">
                    <img
                      src="./assets/images/img_3.jpg"
                      className="img-fluid rounded-top w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-secondary text-center p-4 rounded">
                        <h5 className="text-white">Exotic Pizza</h5>
                        <h3 className="mb-0">Discount 30$</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Featurs End */}

        {/* Vesitable Shop End */}
        {/* Banner Section Start*/}
        <div className="container-fluid banner bg-secondary my-5">
          <div className="container py-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="py-4">
                  <h1 className="display-3 text-white">Fresh Exotic Pizzas</h1>
                  <p className="fw-normal display-3 text-dark mb-4">in Our Kitchen</p>
                  <p className="mb-4 text-dark">
                    Our handcrafted pizzas are always made with unique toppings, exciting flavors, and a perfect crust — never boring,
                    never repetitive, and always full of fun twists that you won’t find anywhere else.
                  </p>
                  <a
                    href="#"
                    className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                  >
                    BUY
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">

                  {/* <img
                    src="./assets/images/baner-1.png"
                    className="img-fluid w-100 rounded"
                    alt=""
                  /> */}

                  <div className="pizza_box">
                    <Lottie animationData={animationData} loop={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Section End */}
        {/* Bestsaler Product Start */}
        <div className="container-fluid py-5 ">
          <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
              <h1 className="display-4">Bestseller Products</h1>
              <p>
                Latin words, combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
            <div className="row g-4">



              {
                bestsalerData.map((item, index) => (
                  <>

                    {/* <div className="col-lg-6 col-xl-4">
                      <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <img
                              src={`./assets/images/img_${index+1}.jpg`}
                              className="img-fluid rounded-circle w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-6">
                            <a href="#" className="h5">
                              {item.name}
                            </a>
                            <div className="d-flex my-3">
                              <i className="fas fa-star text-primary" />
                              <i className="fas fa-star text-primary" />
                              <i className="fas fa-star text-primary" />
                              <i className="fas fa-star text-primary" />
                              <i className="fas fa-star" />
                            </div>
                            <h4 className="mb-3">${item.price}</h4>
                            <button
                               onClick={()=>addCart(item.name)}
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                              cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <ProductItem name={item.name} text={item.text} price={item.price} idBox={item?.id} addCart={() => addCart(item?.id)} setLoader={setLoader} />

                  </>
                ))
              }




            </div>
          </div>
        </div>
        {/* Bestsaler Product End */}
        {/* Fact Start */}
        <div className="container-fluid py-5 hide_me">
          <div className="container">
            <div className="bg-light p-5 rounded">
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>satisfied customers</h4>
                    <h1>1963</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>quality of service</h4>
                    <h1>99%</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>quality certificates</h4>
                    <h1>33</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary" />
                    <h4>Available Products</h4>
                    <h1>789</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact Start */}

      </>




      <Footer />
    </>
  );
}

export default Home;