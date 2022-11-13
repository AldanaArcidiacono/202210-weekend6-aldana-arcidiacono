import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../app/redux-toolkit/store";
import { MemoryRouter as Router } from "react-router-dom";
import { MatePage } from "./mate.page";

describe("Given MatePage component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <MatePage></MatePage>
                    </Router>
                </Provider>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Mate/i);
            expect(element).toBeInTheDocument();
        });
    });
});
