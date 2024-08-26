import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
const ProductList = async ({ categoryId, limit = 20 }) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit)
    .find();
  console.log(res);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product) => (
        <Link
          key={product._id}
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute z-10 hover:opacity-0 transition all ease-in-out duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My description</div>
          <button className=" w-max rounded-2xl ring-1 ring-secondary text-secondary py-2 px-4 text-xs hover:bg-secondary hover:text-white transition-all ease-in-out duration-100">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
