import React from 'react';
import ReactDOM from "react-dom/client";
import Root from './components/Root';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);

// ReactDOM.render(<Root/>, document.getElementById("root"));