---
path: "/blog/2019-07-16-create-a-custom-modal-in-react-with-context-portals-and-hooks"
title: "Create a custom modal in React with context, portals, and hooks"
date: "2019-07-16"
---

Modals are a great way to display information on top of your application, and usually used for notifications, alerts, or standalone dialogs such as register and login forms. Before jumping ahead and building a custom modal I’d suggest searching for any pre-existing solutions to see if they fit your needs (both Reach UI’s Dialog and react-modal are popular community choices). Failing that, let’s dive in and create a bespoke modal component in React.

Let’s start by creating a basic modal that conditionally renders depending on some local state. Clicking a button in the application root should trigger the modal, and clicking the button inside the modal should close it.

Example one: Basic modal implementation
This is only really useful if you need to trigger the modal from within `<App/>`, but what if you wanted the same functionality from a nested component? One option would be to pass the setState action setIsModalOpen as a prop and trigger the modal as a callback whenever a button within the nested component is clicked.

Example two: Triggering the modal via a callback prop
This works for a single level of nesting, but it probably won’t scale very well. We could continue to pass our callback down through the components, but that quickly becomes laborious, difficult to maintain and creates a lot of excess code. Enter React Context.
In short, React’s Context API allows you to store a value in a Provider that can be accessed from anywhere in your application via a Consumer. Whenever a Consumer is declared, React will search up the component tree for the first Provider that matches the consumer’s context, return its value, and then subscribe to any further changes. Let’s wrap the previous example with a Provider, set the setIsModalOpen callback as its value, then utilise the useContext() hook to consume it in a nested component.

Example three: Triggering the modal via React context
Now we have a modal that can be triggered from anywhere in our application, but for the moment can only render static content. In order for the modal to render dynamically it will need refactored to handle children. React’s one-way data flow means that passing data upwards is considered an anti-pattern, so we’ll also need a viable way of passing the data from a nested component back up to the modal on the root.
Enter the coding powerhouse that is Jenna Smith, an incredibly talented frontend developer and former colleague. She proposed React’s Portal as a solution, since they are explicitly designed to pass children to a DOM node that exists outside the hierarchy of the parent component. Creating a portal requires two arguments: any renderable React element (our dynamic content) and a DOM element to inject the content into (the modal’s container).

Example four: Jenna Smith’s solution using React’s createPortal method
As you can see from the sandbox, she created two functional components to provide the modal with dynamic content. The `<ModalProvider />` component contains a DOM element with a ref attached (`<div ref={modalRef}/>`), and a context Provider that wraps the entire application and distributes the ref’s current value to any relevant Consumers within it. The second component is the modal itself. Whenever a `<Modal/>` component is rendered it will attempt to retrieve the modalRef element through useContext(). If a ref exists, instead of the component mounting in its expected position in the DOM tree it will instead create a React Portal and inject the modal’s children into the ref element. 💥

The Modal component can now be used anywhere within the ModalProvider to render dynamic content on top of the application. One small caveat to this approach is the body will continue to scroll on iOS whenever the modal is mounted. I highly recommend checking out Will Po’s article on Body scroll lock for some solutions.

Like the article? Follow me on Twitter
