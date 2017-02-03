/*
 In the previous lesson we successfully set up routes to different components. While this works okay, it's asking 
 a lot from our users. You have to type the correct route to navigate to the correct component. 
 So not that useful yet, but luckily React Router comes with a component that we can use to handle navigation. 

*/

//Let's create a new component
(in /Components/Menu.js )
        import { Link } from 'react-router'
        import HomeIcon from 'react-icons/lib/fa/home'
        import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
        import ListDaysIcon from 'react-icons/lib/fa/table'

        export const Menu = () => 
          <nav className="menu">
            <Link to="/" activeClassName="selected">
              <HomeIcon />
            </Link>
            
            <Link to="/add-day" activeClassName="selected">
              <AddDayIcon />
            </Link>
            
            <Link to="/list-days" activeClassName="selected">
              <ListDaysIcon />
            </Link>
          </nav>
