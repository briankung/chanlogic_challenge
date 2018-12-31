import { connect } from 'react-redux'
import { setFilter } from "./redux/actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  };

  updateInput (input) {
    this.setState({ input });
  };

  handleSetFilter(event) {
    this.props.setFilter(this.state.input);
  };

  render () {
    return (
      <nav className="navbar is-fixed-top box is-marginless is-paddingless is-radiusless">
        <div className="container">
          <div className="column is-half is-offset-one-quarter">
            <div className="control has-icons-left has-icons-right">
              <input
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.input}
                className="input is-large"
                type="email"
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
