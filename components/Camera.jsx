'use client'
import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingCart } from "react-icons/cg";


const Camera = ({ camera }) => {
    const popularCameraCat = camera.categories.find((camera)=> camera.name === 'popular');
    return (
        <div className="group">
            <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
                <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all 
                duration-300 flex justify-center items-center">
                    {/** badge */}
                    {popularCameraCat && (
                        <div className="absolute rounded-br-full top-0 left-0 bg-accent text-white px-5 py-1 text-md 
                        uppercase font-medium ">
                            Popular
                        </div>
                    )}
                    <Image 
                        src={urlFor(camera.images[0]).url()}
                        width={350}
                        height={147}
                        alt='' 
                    />
                </div>
                {/** btn group */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px]
                opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:bg-opacity-50 transition-all duration-300">
                    <AddToCartBtn 
                        price_id={camera.price_id}
                        name={camera.name}
                        currency='USD'
                        description={camera.description}
                        images={camera.images}
                        price={camera.price}
                        btnStyles='btn-icon btn-accent' 
                        icon={<CgShoppingCart />}
                    />
                    <Link href={`/product/${camera.slug}`}>
                        <button className="btn-primary btn-icon">
                            <CgEye />
                        </button>
                    </Link>
                </div>
            </div>
            <h5 className="text-gray-500 font-semibold mb-2">{camera.categories[0].name} camera</h5>
            <h4 className="mb-1">{camera.name}</h4>
            <h4 className="text-lg font-bold text-price">${camera.price}</h4>
        </div>
    )
}

export default Camera