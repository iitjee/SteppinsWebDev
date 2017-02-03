/*
 In the previous lesson we successfully set up routes to different components. While this works okay, it's asking 
 a lot from our users. You have to type the correct route to navigate to the correct component. 
 So not that useful yet, but luckily React Router comes with a component that we can use to handle navigation. 


We'll use LINKS to construct a tiny navigation bar
<link to="..."> ... </link>
*/

//Let's create a new component
(in /Components/Menu.js )
        import { Link } from 'react-router'
        //icons
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
/* NOte: The other thing is you have added a property to each of these links called active class name.
This means that when our link is active, so when it is selected, we're going to use the selected class, so this is going to
draw directly from the css that we've already set up. And you can add these to everything. */

(in app.js add following)
      import { Menu } from './Menu'

//and change the render method in 'App' class as follows
      render() {
        return (
         <div className="app">
         
         <Menu />
         
         {(this.props.location.pathname === "/") ?
           <SkiDayCount total={this.countDays()}
              powder={this.countDays(
                "powder"
               )}
              backcountry={this.countDays(
                "backcountry"
               )}/> :
          (this.props.location.pathname === "/add-day") ?
           <AddDayForm /> :
           <SkiDayList days={this.state.allSkiDays}/>				 
         }
