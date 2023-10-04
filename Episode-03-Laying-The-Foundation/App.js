import React from "react";
import ReactDOM from "react-dom/client";


// Tast 1: Nested Header Element using React.createElement

const heading = React.createElement(
    "div",
    {class: "title"},
    [React.createElement("h1",{},"I'm h1 tag"), React.createElement("h2",{},"I'm h2 tag"), React.createElement("h3",{},"I'm h3 tag")]
);


// Above code using JSX

const heading2 = (
    <div className="title">
        <h1>I'm h1 tag!</h1>
        <h2>I'm h2 tag!</h2>
        <h3>I'm h3 tag!</h3>
    </div>
);



// ABove code using Functional Component

const TitleComponent = () => <h1>Welcome to Namste React Series🚀</h1>;

const Heading = () => {
    return(
        <div className="title">
            {TitleComponent()}
            <TitleComponent />
            <TitleComponent></TitleComponent>
            <h1>I'm h1 tag!</h1>
            <h2>I'm h2 tag!</h2>
            <h3>I'm h3 tag!</h3>
        </div>
    )
};



// Task 2: Header Component

const Header = () => {
    return(
        <div className="header">
            <img src={require('./logo.png')} />
            <div class="search">
                <form action="#">
                    <input type="text"
                           placeholder=" Search..."
                           name="search" />
                    <button>
                        <i className="fa fa-search">
                        </i>
                    </button>
                </form>
            </div>
            <i className="fa fa-user"></i>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);

