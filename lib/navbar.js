const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="column is-half is-offset-one-quarter">
          <div className="control has-icons-left has-icons-right">
            <input className="input is-large" type="email" placeholder="Search" />
            <span className="icon is-medium is-left">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
