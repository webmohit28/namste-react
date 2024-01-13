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
- parent constructor  //rendering phase
- parent render       //rendering phase
- child constructor   //rendering phase
- child render         //rendering phase
- child componentDidMount()  //commiit phase  
- parent componentDidMount() //commiit phase  
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# componentDidMount 
- to call api in class based component 
- instead of waiting api response, react make render the component first with dummy data and then fill the api data inside the component

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


 # Hiigher order component 
 - is a function that takes a component as a input and enhace it and return back new component

 # Controlled and Uncontrolled components
 - parent doesnot have control to their children
 - if parent is controlling children and telling what to do

# lifting state up 
- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up

 # Prop drilling 
 - is a common problem in React applications where data is passed down through multiple levels of components. It can make it difficult to maintain and update the application state. To avoid prop drilling, it's recommended to use Context or state management libraries such as Redux or MobX, which allow you to centralize data and make it more accessible throughout the application. 


# Context - when you have to use data in multiple place or globally (an alternative to passing props)
 - createContext
- useContext - useContext is a React Hook that lets you read and subscribe to context from your component
- for class based component
    - <usercontext.Consumer>{(data)=> console.log(data)}</usercontext.Consumer> 
- <usercontext.Provider value={{loggedInuser:newval}}>{(data)=> console.log(data)}</usercontext.Provider> 

# How redux work behind the scene - https://prnt.sc/k6M6iYu6QYkc

- when we click on add button
- it action/dispatch
- then it call reducer function
- it update the redux store

- subcribe to the redux store by using selector (to get data in cart)

 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store - configure the store by using configureStore() from rtk
  - Connect our store to our app by using Provider (with store={} props) from react-redux 
  - Slice (cartSlice) - by using createSlice() from rtk
  - dispatch(action) - useDispatch - dispatch the reducer function
  - Selector -  how to subsribe the store by using selector useSelector()


# Types of testing (devloper)
 - Unit Testing - testing specific small unit of react application (testing one unit in isolation)
 - Integration Testing - testing the integration of components (specific feature)
 - End to End Testing - e2e testing - testing from user land to page and leave the page (whole application)

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
 

 - whenever you are testing UI component inside react - you will have to render component in JSDOM - render(<compName />)