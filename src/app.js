import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./components/HeaderComponent";
import Appbody from "./components/Appbody";
import '../index.scss';
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


// const heading = document.createElement('h1');
// heading.innerText = 'Welcome React';
// document.getElementById('root').appendChild(heading);

// const heading = React.createElement('h1', {}, "this is react heading");
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const heading2 = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'children' }, [React.createElement('h1', {}, 'this is react heading1'), React.createElement('h2', {}, 'this is react heading2')]), React.createElement('div', { id: 'children2' }, [React.createElement('h1', {}, 'this is react heading1'), React.createElement('h2', {}, 'this is react heading2')])

// ]);

// const ele = (<h1 className="test">This is react Elemenrt</h1>);   //React Element

// const Ele2 = () => (<h1 className="test">This is react comp2</h1>);   //React Comp

// const ReactEle = () => (<div className="wrapper">
//   <Ele2 />
//   <h2 className="test">This is react Component</h2></div>);  //React Component


// const heading3 = [React.createElement('div', { id: 'parent1' }, 'test1'), React.createElement('div', { id: 'parent2' }, 'test2')]
// root.render(<ReactEle />);

const AppLayout = () => {
  return (
    <div className="app ">
      <HeaderComponent />
      <div className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/', element: <AppLayout />,
    children: [
      { path: '/', element: <Appbody /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurants/:id', element: <RestaurantMenu /> }
    ], errorElement: <Error />
  },

])

root.render(<RouterProvider router={appRouter} />);


