import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./header";

describe("Given Header component", () => {
    describe("When we render the component", () => {
        test("Then it should display Che Mate🧉", () => {
            render(
                <Router>
                    <Header />
                </Router>
            );
            const element = screen.getByText(/Che/i);
            expect(element).toBeInTheDocument();
        });
    });
});
