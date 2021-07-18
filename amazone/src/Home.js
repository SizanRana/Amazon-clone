import React from 'react';
import Product from "./Product.js";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" />

            {/* product id, title, price, rating, image */}

            <div className="home__row">
                <Product id="12321342" price={2000} title="The MacBook Pro 16" rating={5} image="https://static.bhphoto.com/images/images2000x2000/1573663014_1520445.jpg"/>

                <Product id="12321343" price={1000} title="New Apple ipad Pro 12.9-inch" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"/>
            </div>

            <div className="home__row">
                <Product id="12321344" price={999} title="iphone 12 Pro Max 128GB Gold" rating={5} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601620621000"/>

                <Product id="12321345" price={375}     title="Apple AirPds Pro" rating={5} image="https://applestore.com.np/wp-content/uploads/2019/11/MWP22.jpeg"/>

                <Product id="12321346" price={199} title="
Newegg
AMD RYZEN 5 3600 6-Core 3.6 GHz (4.2 GHz Max Boost)" rating={5} image="https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg"/>
            </div>

            <div className="home__row">
                <Product id="12321347:2.46.42" price={1999} title="
Amazon.co.uk
Samsung LC49J890DKUXEN 49 Curved Ultra Wide LED Monitor" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"/>
            </div>
        </div>
    )
}

export default Home
