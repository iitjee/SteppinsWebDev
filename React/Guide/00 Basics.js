Embedding Expressions in JSX:
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

JSX is an Expression Too
After compilation, JSX expressions become regular JavaScript objects.

This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and 
return it from functions:
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


Specifying Attributes with JSX
You may use quotes to specify string literals as attributes:
  const element = <div tabIndex="0"></div>;
You may also use curly braces to embed a JavaScript expression in an attribute:
  const element = <img src={user.avatarUrl}></img>;
Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the 
attribute as a string literal rather than an expression. You should either use quotes (for string values) or curly braces (for 
expressions), but not both in the same attribute.


If a tag is empty, you may close it immediately with />, like XML:
  const element = <img src={user.avatarUrl} />;

Since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
For example, class becomes className in JSX, and tabindex becomes tabIndex.

JSX Prevents Injection Attacks
It is safe to embed user input in JSX:
  const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject 
anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This 
helps prevent XSS (cross-site-scripting) attacks.

JSX Represents Objects:
Babel compiles JSX down to React.createElement() calls.
These two examples are identical:
    const element = (
      <h1 className="greeting">
        Hello, world!
      </h1>
    );
    const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    );
React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

