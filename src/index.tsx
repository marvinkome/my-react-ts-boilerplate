import * as React from 'react';
import { render } from 'react-dom';

const App = () => (
    <p>Hello World</p>
);

render(
    <App/>,
    document.getElementById('react-entry'),
);