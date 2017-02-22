Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.


The simplest way to define a component is to write a JavaScript function:
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
This function is a valid React component because it accepts a single "props" object argument with data and returns a React element. We call such components "functional" because they are literally JavaScript functions.

You can also use an ES6 class to define a component:
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    
The above two components are equivalent from React's point of view.
Classes have some additional features that we will discuss in the next sections. Until then, we will use functional components
for their conciseness

Rendering a Component #
    function Welcome(props) { //Welcome component definition
      return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    
    
Composing Components #
Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    function App() {
      return ( //Reusing Welcome Component in App Component
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
    
Extracting Components:
Consider the Comment Component: It accepts author (an object), text (a string), and date (a date) as props, and describes a 
comment on a social media website.This component can be tricky to change because of all the nesting, and it is also hard to 
reuse individual parts of it. 

    function Comment(props) {
      return (
        <div className="Comment">
          <div className="UserInfo">
            <img className="Avatar"
              src={props.author.avatarUrl}
              alt={props.author.name}
            />
            <div className="UserInfo-name">
              {props.author.name}
            </div>
          </div>
          <div className="Comment-text">
            {props.text}
          </div>
          <div className="Comment-date">
            {formatDate(props.date)}
          </div>
        </div>
      );
    }

Let's extract a few components from it.

First, we will extract Avatar:

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
The Avatar doesn't need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.

We recommend naming props from the component's own point of view rather than the context in which it is being used.
We can now simplify Comment a tiny bit:

    function Comment(props) {
      return (
        <div className="Comment">
          <div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
              {props.author.name}
            </div>
          </div>
          <div className="Comment-text">
            {props.text}
          </div>
          <div className="Comment-date">
            {formatDate(props.date)}
          </div>
        </div>
      );
    }
Next, we will extract a UserInfo component that renders an Avatar next to user's name:

    function UserInfo(props) {
      return (
        <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
      );
    }
This lets us simplify Comment even further:

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

