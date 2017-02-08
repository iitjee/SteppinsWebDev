//By now you can run by $npm start -s

//Let's keep all the common components in a folder called 'common'

(make Header.js)
    import React, {PropTypes} from 'react';
    import { Link, IndexLink } from 'react-router';

    const Header = () => {
      return (
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink> //if this link is active based on the route(/) go ahead and and apply active class for me(basically for styling the achor)
          {" | "} //in between links we're just putting a | . Just a text. no operator nothing
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
      );
    };
    
    export default Header;

/*  Now let's put this in App.js  */
// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header'; //notice

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/> //notice
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;

  




