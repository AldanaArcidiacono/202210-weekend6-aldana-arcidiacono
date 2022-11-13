import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Mate } from "../../types/mate";
import { MateList } from "./mates.list";
import "@testing-library/jest-dom";

describe("Given the MateList component", () => {
    describe("When we render the component", () => {
        test("then it should display the Mate's list", () => {
            const mateMock: Mate[] = [
                {
                    id: 1,
                    title: "Mate imperial",
                    details: "",
                    color: "",
                    price: "",
                    img: "",
                    onSale: false,
                },
            ];
            render(
                <>
                    <Router>
                        <MateList item={mateMock}></MateList>
                    </Router>
                </>
            );
            const element = screen.getByText(/imperial/i);
            expect(element).toBeInTheDocument();
        });
    });
});
