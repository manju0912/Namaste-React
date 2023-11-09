import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/restaurantListMockData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it ("should render the Body Conponent with search", async () => {
    await act (async () => {
        render (
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    // expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: ""});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target : {value: "chinese"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});