/*

We just saw various ways of creating components along with the 3 traditional ones.
But you should also make another decision: You want to make a Container COmponent or a Presentation Component?

Container Components:
- Concerned with behaviour, Marshalling data and actions.
- So these components have little or no markup.
- Think of these as back-end for the front-end! ;)
- are primarily concerned with passing data to the child components and hence they are stateful

When working in Redux, Container components are typically created using Redux's `connect` function at the bottom of the file.
Some prefer to create in separate folders from the `Presentation Components Folder`.

In this app, we will separate components on the basis of their feature rather than Container vs Presentation.

Presentation Components:
- They are nearly all mark-up.
- They are dumb! Not in a bad way but they shouldn't really have any logic inside
- Container components pass data and actions down to presentation components

Container components know Redux and have Redux-specific code inside for dispatching actions to the store and connectin
to the store via `connect`. In contrast, Presentation Components know nothing about Redux.
This is a good thing. It makes your presentation components more re-usable and easier to understand.

Presentation Components just rely on props to display UI. They have no dependencies on the rest of the app such as
Redux, Actions or Store. They don't specify how the data is loaded or mutated. They are typically stateless.

In short, try to make sure most of your components are Presentational.

Presentaional = View
Container Comp= Controller View




*/









