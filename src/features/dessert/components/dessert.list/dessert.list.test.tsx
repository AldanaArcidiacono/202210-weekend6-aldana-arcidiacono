import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { Dessert } from "../../types/dessert";
import { DessertList } from "./dessert.list";

describe("Given the DessertList component", () => {
    describe("When we render the component", () => {
        test("then it should display the Dessert's list", () => {
            const dessertMock: Dessert[] = [
                {
                    id: 1,
                    title: "Alfajor de maicena",
                    details: "",
                    brand: "",
                    price: "",
                    img: "",
                    onSale: false,
                },
            ];
            render(
                <>
                    <Router>
                        <DessertList item={dessertMock}></DessertList>
                    </Router>
                </>
            );
            const element = screen.getByText(/alfajor/i);
            expect(element).toBeInTheDocument();
        });
    });
});
