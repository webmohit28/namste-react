# Namaste React 🚀
https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb24%3D


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


* JSX 
- sanitise the data by {} 


# props 
- when you have dynamically pass some data to a component, you pass as a prop
- passing props to a component is similar to pass argument to a function()

# config driveen UI
- our webiste is driveen by data or config 

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import(when we need to export multiple item from signle file)

export const Component; 
import {Component} from "path";

# why React fast
it do fast way of dom maipulation (ui layer and data layer should sync in fast way)
react make dom operation superfast and efficient by rerender the component
it use reconcilation algoritm or it known as React fiber (React 16)
virtual dom is representation of actual DOM in JS object way
it findout the difference between virtal dom and update the component UI

# Monolith and Micro service architecure

# React Componet (rafce - shortcut to create comp)
- functional Component - is a function that return a piece of jsx
- class based component - is a class which extends react.component and has a render method which return a piece of jsx

# class based component 
- render(){return(<div></div>);}
- props- constructor(props){super(props);}  //this.props.name
- declare variable - this.state = {count: 1}  // call in counstructor
- update variable - this.setstate({count: this.state.count+1})

# mounting cycle / loading cycle / Life cycle method of class based components
- parent constructor
- parent render 
- child constructor
- child render
- child componentDidMount()
- parent componentDidMount()
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# componentDidMount 
- to call api in class based component 

# local state variable - super powerful variable
- whenever state variable changes reeact rerender the componnent

# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect() - used for api call (after render cycle completed, it is called)
- it takes two arguments, one is callback and other is dependency array
- blank dependency array - useEffect(()=>{},[]) - call api at inital level
- no dependency array - useEffect(()=>{}) - call api at everytime whenever component reender
- specific depency array - useEffect(()=>{},[callapi]) - call api at specific variable changes

# Router - react-router-dom
- import createBrowserRouter, Outlet, RouterProvider  
- useParams, Link
- useRouteError

#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing

 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 