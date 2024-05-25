'use client';

import Link from "next/link";
import Nav from "./Nav";
import CartSidebar from "./CartSidebar";

import { CgShoppingCart } from 'react-icons/cg'
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
    const { cartCount, handleCartClick } = useShoppingCart();
    return (
        <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/' className="hover:text-current">
                    <h1 className="text-[26px]">
                        <span className="text-accent">Camera</span>Exchange
                    </h1>
                </Link>
                <div className="flex items-center gap-[26px]">
                    <Nav containerStyles='flex gap-[36px]' />
                    <div onClick={() => handleCartClick()} className="relative cursor-pointer">
                        <CgShoppingCart className="text-[27px]" />
                        <div className="bg-accent w-[17px] h-[17px] absolute -right-1 bottom-3 
                        rounded-full text-wrap text-white flex items-center justify-center text-sm font-medium">
                            {cartCount}
                        </div>
                    </div>
                    <CartSidebar />
                </div>
            </div>
        </header>
    )
}

export default Header