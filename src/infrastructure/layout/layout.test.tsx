import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./layout";

describe("Given Layout component", () => {
    describe("When we render the component", () => {
        test("Then it should display Mate de calabaza", () => {
            render(
                <Router>
                    <Layout>
                        <p>Mate de calabaza</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/calabaza/i);
            expect(element).toBeInTheDocument();
        });
    });
});
