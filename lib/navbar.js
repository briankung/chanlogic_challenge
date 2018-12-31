import { connect } from 'react-redux'
import { setFilter } from "./redux/actions";

class Navbar extends React.Component {
  handleSetFilter = (event) => {
    this.props.setFilter(event.target.value);
  };

  render () {
    return (
      <nav className="navbar is-fixed-top box is-marginless is-paddingless is-radiusless">
        <div className="container">
          <div className="column is-half is-offset-one-quarter">
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={this.handleSetFilter}
                className="input is-large"
                type="text"
                placeholder="Search" />
              <span className="icon is-medium is-left">
                <i className="fas fa-search" />
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  };
};

export default connect(
  null,
  { setFilter }
)(Navbar);
