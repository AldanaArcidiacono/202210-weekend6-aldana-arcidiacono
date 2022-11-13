import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/app/redux-toolkit/store";
import { Dessert } from "../../types/dessert";
import { useDessert } from "../../hooks/usedessert";
import { DessertItem } from "./dessert.item";
jest.mock("../../hooks/usedessert");

describe("Given DessertItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const mateMock: Dessert = {
                id: 1,
                title: "Mate imperial",
                details: "",
                brand: "",
                price: "",
                img: "",
                onSale: false,
            };

            (useDessert as jest.Mock).mockReturnValue({
                products: [mateMock],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <DessertItem item={mateMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/imperial/i);
            expect(element).toBeInTheDocument();
        });
    });
});
