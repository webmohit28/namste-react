
// const heading = document.createElement('h1');
// heading.innerText = 'Welcome React';
// document.getElementById('root').appendChild(heading);

const heading = React.createElement('h1', {}, "this is react heading");
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading2 = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'children' }, [React.createElement('h1', {}, 'this is react heading1'), React.createElement('h2', {}, 'this is react heading2')]), React.createElement('div', { id: 'children2' }, [React.createElement('h1', {}, 'this is react heading1'), React.createElement('h2', {}, 'this is react heading2')])

]);


const heading3 = [React.createElement('div', { id: 'parent1' }, 'test1'), React.createElement('div', { id: 'parent2' }, 'test2')]
root.render(heading3);








