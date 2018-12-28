const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-menu">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-half">
              <div className="control has-icons-left has-icons-right">
                <input className="input is-large" type="email" placeholder="Search" />
                <span className="icon is-medium is-left">
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
