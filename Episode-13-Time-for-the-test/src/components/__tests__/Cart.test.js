import {act} from "react-dom/test-utils";
import {fireEvent, render, screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
});

it("should load Restaurant Menu Components", async () => {
    await act(async () => 
        render(
            <Provider store={appStore}>
                <RestaurantMenu />
            </Provider>
        )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const items = screen.getAllByTestId("foodItems");

    expect (items).length.tobe(20);
})