import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/shared/loader/Loader";
interface Item {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
const Product = () => {
  const [item, setItem] = useState<Item>();
  const routeParams = useParams();
  const { id } = routeParams;
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      if (id) {
        try {
          setLoading(true);
          const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
          const json = await response.json();
          setItem(json);
        } catch (error) {
          console.error("Error fetching item:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    getData();
  }, [id]);

  return (
    <>
      {(loading && <Loader />) ||
        (item && (
          <div className='text-[#DDF6F2]'>
            <div className='flex justify-between gap-x-12'>
              <div className='max-w-36'>
                <img src={item.thumbnailUrl} alt={item.title} />
                <span className='mt-4 block'>{item.title}</span>
                <span className='mt-4 block'>{item.albumId}</span>
              </div>
              <div>
                <p>
                  Description, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                  blah blabla blabla blabla blabla
                </p>
              </div>
            </div>
            <div className='mt-5 rounded-2xl border border-[#DDF6F2] p-2 text-center'>Ownership History</div>
          </div>
        ))}
    </>
  );
};

export default Product;
