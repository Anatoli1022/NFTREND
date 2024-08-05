import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../shared/loader/Loader";
interface Item {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const Products = () => {
  const [data, setData] = useState<Item[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className='rounded-2xl border border-[#DDF6F2] border-opacity-25 px-8 py-6'>
      <h2 className='border-b border-[#DDF6F2] border-opacity-25 pb-2 text-[#DDF6F2]'>Latest Drops</h2>

      {(loading && <Loader />) || (
        <ul className='mt-5 flex flex-wrap items-center justify-center gap-4'>
          {data &&
            data.map((item: Item) => {
              return (
                <li key={item.id} className='max-w-40 rounded-2xl border border-[#DDF6F2] border-opacity-25 p-2'>
                  <Link to={`product/${item.id}`}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                    <p className='line-clamp-1 text-[#DDF6F2]'>{item.title}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default Products;
