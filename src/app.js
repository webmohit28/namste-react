import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./components/HeaderComponent";
import Appbody from "./components/Appbody";
import '../index.scss';
import '../index.css';
//import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import FooterComponent from "./components/FooterComponent";
import ChatComponent from "./components/ChatComponent";
import { themeContext } from "./utills/UserContext";
import ThemeSwitch from "./components/ThemeSwitch";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./components/Cart";


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
  const [isLight, setIsLight] = useState(false);
  const themeupdate = isLight ? 'Dark' : 'Light';

  return (
    <Provider store={appStore}>
      <themeContext.Provider value={themeupdate}>
        <div className={'app ' + themeupdate}>
          <HeaderComponent />
          <div className="main-content ">
            <div className="container">
              <Outlet />
            </div>
          </div>
          <FooterComponent />
          <ChatComponent />
          <ThemeSwitch isLight={isLight} setIsLight={setIsLight} />
        </div>
      </themeContext.Provider>
    </Provider>

  )
}

const About = lazy(() => import('./components/About'));
const appRouter = createBrowserRouter([
  {
    path: '/', element: <AppLayout />,
    children: [
      { path: '/', element: <Appbody /> },
      { path: '/about', element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/restaurants/:resId', element: <RestaurantMenu /> }
    ], errorElement: <Error />
  },

])

root.render(<RouterProvider router={appRouter} />);


