import { act, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { AppRoutes } from "./app.routes";

jest.mock("../../features/page/home/home.page", () => {
    return () => <div>Test Home</div>;
});

jest.mock("../../features/mates/page/mate.page", () => {
    return () => <div>Test Mate Page</div>;
});

jest.mock("../../features/dessert/page/dessert.page", () => {
    return () => <div>Test Postre Page</div>;
});

jest.mock("../../features/page/sales/sales", () => {
    return () => <div>Test Ofertas Page</div>;
});

describe("Given AppRoutes component", () => {
    let paths: Array<string>;
    beforeEach(() => {
        paths = ["/home", "/mate", "/dessert", "/sale"];
    });
    describe("When we render the component and the route is home", () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={0}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test("Then it should display the HomePage", async () => {
            const element = await screen.findByText(/Home/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe("When we render the component and the route is MatePage", () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={1}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test("Then it should display the MatePage", async () => {
            const text = /Test Mate Page/i;
            const element = await screen.findByText(text);
            expect(element).toBeInTheDocument();
        });
    });

    describe("When we render the component and the route is DessertPage", () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={2}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test("Then it should display the DessertPage", async () => {
            const element = await screen.findByText(/Postre/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe("When we render the component and the route is SalePage", () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={3}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test("Then it should display the SalePage", async () => {
            const element = await screen.findByText(/Oferta/i);
            expect(element).toBeInTheDocument();
        });
    });
});
