import React, { useState } from "react";
import Dashboard from "./Main/Index";
import Login from "./Auth/Index";


function Index() {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div>
      {/* <!-- inner page section --> */}
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h3>Admin Panel</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- product section --> */}
      <section className="product_section layout_padding">
        <div className="container">
          {isLogin ? <Dashboard /> : <Login setisLogin={setisLogin} />}
        </div>
      </section>
      {/* <!-- end product section --> */}
   
    </div>
  );
}

export default Index;
