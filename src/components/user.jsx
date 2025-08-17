import Footer from "./Footer";
import Header from "./Header";


function User() {
    return (

        <>
            <Header />



            <div className="container">
                <div class="table-responsive shadow rounded">
                    <table class="table table-bordered table-hover align-middle mb-0">
                        <thead class="table-danger">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Item</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>Rahul Sharma</td>
                                <td>Margherita Pizza</td>
                                <td>₹500</td>
                                <td>
                                    <button class="btn btn-sm btn-success">Approve</button>
                                    <button class="btn btn-sm btn-danger">Cancel</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#1002</td>
                                <td>Priya Verma</td>
                                <td>Paneer Tikka</td>
                                <td>₹250</td>
                                <td>
                                    <button class="btn btn-sm btn-success">Approve</button>
                                    <button class="btn btn-sm btn-danger">Cancel</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#1003</td>
                                <td>Amit Patel</td>
                                <td>Veg Burger</td>
                                <td>₹450</td>
                                <td>
                                    <button class="btn btn-sm btn-success">Approve</button>
                                    <button class="btn btn-sm btn-danger">Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <Footer />
        </>


    );
}

export default User;