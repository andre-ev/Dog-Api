import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
  return(
    <nav>
      <Link to="about" >About</Link>
      <Link to="home" >Home</Link>
      <Link to="form" >Form</Link>
      <SearchBar onSearch={onSearch}/>
    </nav>
 )
};

export default Nav;
