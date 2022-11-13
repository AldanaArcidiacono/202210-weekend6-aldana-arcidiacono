import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/app/redux-toolkit/store";
import { useMate } from "../../hooks/usemate";
import { Mate } from "../../types/mate";
import { MateItem } from "./mate.item";
jest.mock("../../hooks/usemate");

describe("Given MateItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const mateMock: Mate = {
                id: 1,
                title: "Mate imperial",
                details: "",
                color: "",
                price: "",
                img: "",
                onSale: false,
            };

            (useMate as jest.Mock).mockReturnValue({
                products: [mateMock],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <MateItem item={mateMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/imperial/i);
            expect(element).toBeInTheDocument();
        });
    });
});
