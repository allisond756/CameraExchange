import { client } from "@/app/lib/sanity"

import Link from "next/link"
import PopularCameraCarousel from "./PopularCameraCarousel";



//get data
const getData = async ()=> {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
        _id,
            name,
            description,
            images,
            price,
            price_id,
            "slug": slug.current,
            "categories": categories[]-> {
            name }
            }`
    const data = await client.fetch(query);
    return data;
}

const PopularCameras = async () => {
    const cameras = await getData();
    return (
        <section className="py-24">
            <div className="container mx-auto">
                <h2 className="text-center">Popular Cameras</h2>
                <p className="text-center mb-[30px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, nemo?</p>
                <PopularCameraCarousel cameras={cameras} />
                <Link href='/our-cameras'>
                    <button className="btn btn-accent mx-auto">See all cameras</button>
                </Link>
            </div>
        </section>
    )
}

export default PopularCameras