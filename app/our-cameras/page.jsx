import { client } from "@/app/lib/sanity";
import CameraCategories from "@/components/CameraCategories";

const getData = async () => {
    const query = `*[_type == 'product'] {
        _id,
          images,
          price,
          price_id,
          name,
          description,
          "slug": slug.current,
          "categories": categories[]-> {name}
      }`;
      const data = await client.fetch(query);
      return data;
}

const OurCameras = async () => {
    const cameras = await getData();
    
    return (
        <div>
            <CameraCategories cameras={cameras} />
        </div>
    )
}

export default OurCameras