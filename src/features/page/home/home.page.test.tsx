import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import HomePage from "./home.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <HomePage />
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
