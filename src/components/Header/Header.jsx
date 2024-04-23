import React from "react";
import { Conatiner, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => {
    state.auth.state;
  });
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "SignUp", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return <>
  <header>
    <Conatiner>
      <nav className="flex">
      <div className="mr-4">

        <Link to="/"><Logo width="70px" />
        </Link>
      </div>
<ul>
  {navItems.map((item)=>item.active ? (
    <li>
      <button onClick={()=>navigate(item.slug)} className="inline-block px-6 py-2 duration-300 hover:bg-blue-200 rounded-full">{item.name}</button>
      
    </li>
  ) : null)}
  {authStatus && (
    <li><LogoutBtn /></li>
  )}
</ul>


      </nav>

    </Conatiner>
  </header>
  </>;
};

export default Header;
