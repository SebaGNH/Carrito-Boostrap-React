import React from 'react';


const BootWach = () => {
  return (   
    <div className="container">        
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>

            <li>
              <a className="navbar-brand" href="#">Navbar</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-light bg-info justify-content-center">
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="navbar-brand" href="#">Navbar</a>        
      </nav>


    </div>

  );
}
export default BootWach;