import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./Firebase/firebase";

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        //nav in html can specify that it is a navigation bar
        <nav className="header">
            {/*Logo*/}
           <Link to="/">
           <img className="header__logo" src="https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg"/>
           </Link>
            {/*Search box*/}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            {/*3 links*/}

            <div className="header__nav">
                {/*first link*/}

                <Link to={ !user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
    <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/*second link*/}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*third link*/}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/*fourth link*/}

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping Basket Icon */}

                        <ShoppingBasketIcon/>

                        {/* Number of the items in the basket */}

                        <span className="header__optionLineTwo  header__basketCount">{basket?.length}</span>
                        

                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
