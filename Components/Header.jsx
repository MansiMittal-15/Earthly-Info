import Moon from "../Assets/photos/moon.png";
import Sun from "../Assets/photos/sun1.png";

const Header = ({ changeMode, mode, bgc, color }) => {
  return (
    <>
      <header className="header" style={{ backgroundColor: bgc, color: color }}>
        <div className="header-cont">
          <h1>Where in the World?</h1>
          <div className="header-content" onClick={changeMode}>
            {mode ? (
              <img src={Sun} alt="Sun" className="sunImage" />
            ) : (
              <img src={Moon} alt="Moon" className="moonImage" />
            )}
            {mode ? <p>Light Mode</p> : <p>Dark Mode</p>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
