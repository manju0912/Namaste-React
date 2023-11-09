import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";
import { offerLabel } from "../RestaurantCard";


it ("should render RestaurantCard component with props Data", () => {
    render (
        <RestaurantCard resData={MOCK_DATA} />
    );

    const name = screen.getByText("Chilli'Z Restro");

    expect(name).toBeInTheDocument();
});

it ("should render RestaurantCard component with promoted Label", () => {
    render (
        <offerLabel />
    );

    const label = screen.getByTestId("label");

    expect(label).toBeInTheDocument();
})
