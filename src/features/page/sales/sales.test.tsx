import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import SalesPage from "./sales";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <SalesPage />
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Oferta/i);
            expect(element).toBeInTheDocument();
        });
    });
});
