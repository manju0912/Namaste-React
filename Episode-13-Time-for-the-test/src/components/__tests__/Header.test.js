import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it ("Should render Header Component with login button", () => {
    render (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        
        </BrowserRouter>
        
        
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});


// it ("Should trigger click event of login button", () => {
//     render (
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
        
//         </BrowserRouter>
        
        
//     );

//     const loginButton = screen.getByRole("button", {name: "Login"});

//     fireEvent.click(loginButton);

//     expect(loginButton).toBeInTheDocument();
// });