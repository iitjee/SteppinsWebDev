/* Let's add some PS courses  */

 In components -> create course dir
 create ManageCoursePage.js   //this is a top-level container component

(CoursePage.js)
 import React, {PropTypes} from 'react';

  class CoursesPage extends React.Component {

    render() {
      const {courses} = this.props;

      return (
        <div>
          <h1>Courses</h1>
        </div>
      );
    }
  }


  export default CoursesPage;


//Let's add routing in main APP.js to get to this new CoursePage
(in Routes.js)
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);

//Now that we have added the routes, we need to now update our Header.js
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};





