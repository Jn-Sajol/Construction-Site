const Header = () => {
  return (
    <>
      <header className="bg-slate-400 flex justify-between items-center p-3">
        <div className="flex items-center">
          <span className="text-3xl bg-blend-color-dodge">Zulkar</span>
          <span className="text-2xl border-l ">Construction</span>
        </div>
        <div>
          <form action="">
            <input type="text" />
          </form>
        </div>
        <div className="">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
