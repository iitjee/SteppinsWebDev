

/*Let's make a top-level component which will be used in every webpage like header for eg.
Let's name this file App.js in components dir*/

(in components/App.js)
// This component handles the App template used on every page.
import React, {PropTypes} from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p> Header here... </p>
        {this.props.children} //passing child props
      </div>
    );
  }
}

App.propTypes = { //type validation
  children: PropTypes.object.isRequired, //adding children as a required PropType on this component
};

export default App;







