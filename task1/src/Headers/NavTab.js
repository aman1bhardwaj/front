import React from "react";
import {Link} from 'react-router-dom';

const NavTab = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">AMAN</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active"  href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/customer">Customers</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavTab;
