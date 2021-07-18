import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Unlock It The Master Key to Wealth, Success, and Signigicance by Dan Lok"
            id={22345}
            price={30.99}
            image="https://image.slidesharecdn.com/b07xyl6zk6-unlockitbydanlok-191118073945/95/2019-unlock-it-pdf-the-master-key-to-wealth-success-and-significance-by-dan-lok-forbesbooks-1-638.jpg?cb=1574062956"
            rating={5}
          />
          <Product
            title="M1 MacBook Pro 13 with 8-core CPU and 8-Core GPU 512GB Storage"
            id={99875}
            price={1299}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603406905000"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Air Jorda 12 Retro"
            id={66357}
            price={255}
            image="https://cdn.runrepeat.com/i/jordan/27357/air-jordan-12-retro-blue-33b0-600.jpg"
            rating={4}
          />
          <Product
            title="DELL XPS 15"
            id={66354}
            price={1149.99}
            image="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_7590/general/111-xps-product-imagery-notebook-xps-15-7590-campaign.jpg?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=855&qlt=95,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=855,402"
            rating={4}
          />
          <Product
            title="
            Apple
            AirPods Pro"
            id={26487}
            price={249}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Acer ED323QUR Abidpx 31.5 Inches WQHD (2560 x 1440) Curved 1800R VA Gaming Monitor with AMD Radeon FREESYNC Technology - 4ms; 144Hz Refresh Rate; Display Port, HDMI Port & DVI Port, Black"
            id={82635}
            price={471.47}
            image="https://images-na.ssl-images-amazon.com/images/I/71HV4K%2B0QpL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
