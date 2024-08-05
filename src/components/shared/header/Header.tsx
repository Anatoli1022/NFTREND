import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='sticky top-0 z-20 border-b border-[#DDF6F2] border-opacity-25 bg-[#0B3038] px-2 py-4 text-[#DDF6F2]'>
      <nav className='m-auto flex max-w-7xl justify-between'>
        <Link to={"/"}>NFTREND</Link>
        <div>
          <button className='mr-2'>Login</button>
          <Link to={"/"}>Busket</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
