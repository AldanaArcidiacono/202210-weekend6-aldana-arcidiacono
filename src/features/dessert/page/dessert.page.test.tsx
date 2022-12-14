import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../infrastructure/app/redux-toolkit/store";
import DessertPage from "./dessert.page";

describe("Given DessertPage component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <DessertPage></DessertPage>
                    </Router>
                </Provider>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Postres/i);
            expect(element).toBeInTheDocument();
        });
    });
});
