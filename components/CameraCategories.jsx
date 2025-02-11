'use client'
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Label } from './ui/label';
import { Slider } from "./ui/slider";
import Camera from "./Camera";

const CameraCategories = ({ cameras }) => {
    const [category, setCategory] = useState('all');
    const [filteredCameras, setFilteredCameras] = useState([]);
    const [price, setPrice] = useState(900);

    useEffect(() => {
        const filtered = cameras.filter((camera) => {
            const categoryMatch = 
                category === 'all'
                    ? cameras
                    : camera.categories.some((categ) => categ.name === category);
            const priceMatch = camera.price <= price;
            return categoryMatch && priceMatch;
        });
        setFilteredCameras(filtered)
    }, [category, price, cameras]);
    
    return (
        <section className="min-h-[1200px] py-10">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {/** sidebar */}
                    <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
                        <RadioGroup default="all" className="flex flex-col gap-6 mb-12" >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value='all' id='all' onClick={() => setCategory('all')} />
                                <label htmlFor='all'>all</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value='digital' id='digital' onClick={() => setCategory('digital')} />
                                <label htmlFor='digital'>digital</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value='film' id='film' onClick={() => setCategory('film')} />
                                <label htmlFor='film'>film</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value='instant' id='instant' onClick={() => setCategory('instant')} />
                                <label htmlFor='instant'>instant</label>
                            </div>
                        </RadioGroup>
                        {/** price slider */}
                        <div className="max-w-56">
                            <div className="text-lg mb-4 font-medium">
                                Max Price: {' '}
                                <span className="text-accent font-semibold ml-2">${price}</span>
                                <span className="ml-2">
                                    {filteredCameras.length > 1 
                                        ? `${filteredCameras.length} items`
                                        : filteredCameras === 0
                                        ? `${filteredCameras.length} items`
                                        : `${filteredCameras.length} item`}
                                </span>
                            </div>
                            <Slider 
                                defaultValue={[900]} 
                                max={2999} 
                                step={10} 
                                onValueChange={(val) => setPrice(val[0])} 
                            />
                        </div>
                    </aside>
                    {/** camera list */}
                    <div className="w-full xl:w-[1050px] ml-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                            {filteredCameras.map((camera) => {
                                return <Camera camera={camera} key={camera.price_id} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CameraCategories