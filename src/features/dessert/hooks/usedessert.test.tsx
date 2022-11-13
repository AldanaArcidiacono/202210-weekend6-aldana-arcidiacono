import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../app/redux-toolkit/store";
import { DessertRepository } from "../services/dessert.repository";
import { Dessert, ProtoDessert } from "../types/dessert";
import { useDessert } from "./usedessert";
jest.mock("../services/dessert.repository");

const dessertMock: Dessert = {
    id: 1,
    title: "Alfajores de maicena",
    details: "",
    brand: "",
    price: "",
    img: "",
    onSale: false,
};

const dessertMock2: Dessert = {
    id: 2,
    title: "Facturas",
    details: "",
    brand: "",
    price: "",
    img: "",
    onSale: true,
};

describe("Given the custom hook useDessert()", () => {
    let result: {
        current: {
            desserts: Dessert[];
            handleAdd: (newDessert: ProtoDessert) => void;
            handleUpdate: (updateDessert: Dessert) => void;
            handleDelete: (dessert: Dessert) => void;
        };
    };

    beforeEach(() => {
        DessertRepository.prototype.getAllDessert = jest
            .fn()
            .mockResolvedValue([dessertMock]);
        DessertRepository.prototype.createDessert = jest
            .fn()
            .mockResolvedValue(dessertMock2);
        DessertRepository.prototype.updateDessert = jest
            .fn()
            .mockResolvedValue(dessertMock2);
        DessertRepository.prototype.deleteDessert = jest
            .fn()
            .mockResolvedValue(dessertMock);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useDessert(), { wrapper }));
    });

    test("Then it should return dessertMock", async () => {
        await waitFor(() => {
            expect(result.current.desserts).toEqual([dessertMock]);
        });
    });

    describe("'When we use the handleAdd(),", () => {
        test("Then it should return dessertMock and have been called", async () => {
            await waitFor(() => {
                result.current.handleAdd(dessertMock2);
                expect(result.current.desserts.at(-1)).toEqual(dessertMock2);
            });
            await waitFor(() => {
                expect(
                    DessertRepository.prototype.createDessert
                ).toHaveBeenCalled();
            });
        });
    });

    describe("'When we use the handleUpdate(),", () => {
        test("Then it should return the dessertMock2 updated and have been called", async () => {
            await waitFor(() => {
                result.current.handleUpdate(dessertMock2);
                expect(result.current.desserts.at(-1)).toEqual(dessertMock);
            });
            await waitFor(() => {
                expect(
                    DessertRepository.prototype.updateDessert
                ).toHaveBeenCalled();
            });
        });
    });

    describe("'When we use the handleDelete(),", () => {
        test("Then it should return the same object and have been called", async () => {
            await waitFor(() => {
                result.current.handleDelete(dessertMock);
                expect(result.current.desserts.at(-1)).toEqual(dessertMock);
            });
            await waitFor(() => {
                expect(
                    DessertRepository.prototype.deleteDessert
                ).toHaveBeenCalled();
            });
        });
    });
});
