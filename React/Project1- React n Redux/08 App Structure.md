- Create our first Pages
- Create a layout that will be used by all our pages
- Configure Routing
- Setup Navigation



We'll create folder structure for Components <br/>
  - src
    - components
      - about
        - AboutPage.js
      - home
        - HomePage.js

We create seperate folders for each page in components dir. Each page will host its
components. (name starts with caps notice)

``` 
(AboutPage.js)
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;

```
```
(HomePage.js)
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron"> //bootstrap class
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
```
