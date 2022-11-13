import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../infrastructure/app/redux-toolkit/store";
import { MateRepository } from "../services/mate.repository";
import { Mate, ProtoMate } from "../types/mate";
import { useMate } from "./usemate";

jest.mock("../services/mate.repository");

const mateMock: Mate = {
    id: 1,
    title: "Mate imperial",
    details: "",
    color: "",
    price: "",
    img: "",
    onSale: false,
};

const mateMock2: Mate = {
    id: 2,
    title: "Mate de calabaza",
    details: "",
    color: "",
    price: "",
    img: "",
    onSale: true,
};

describe("Given the custom hook useMate()", () => {
    let result: {
        current: {
            mates: Mate[];
            handleAdd: (newMate: ProtoMate) => void;
            handleUpdate: (updateMate: Mate) => void;
            handleDelete: (mate: Mate) => void;
        };
    };

    beforeEach(() => {
        MateRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mateMock]);
        MateRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(mateMock2);
        MateRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(mateMock2);
        MateRepository.prototype.delete = jest.fn().mockResolvedValue(mateMock);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useMate(), { wrapper }));
    });

    test("Then it should return mateMock", async () => {
        await waitFor(() => {
            expect(result.current.mates).toEqual([mateMock]);
        });
    });

    describe("'When we use the handleAdd(),", () => {
        test("Then it should return mateMock and have been called", async () => {
            await waitFor(() => {
                result.current.handleAdd(mateMock2);
                expect(result.current.mates.at(-1)).toEqual(mateMock2);
            });
            await waitFor(() => {
                expect(MateRepository.prototype.create).toHaveBeenCalled();
            });
        });
    });

    describe("'When we use the handleUpdate(),", () => {
        test("Then it should return the mateMock2 updated and have been called", async () => {
            await waitFor(() => {
                result.current.handleUpdate(mateMock2);
                expect(result.current.mates.at(-1)).toEqual(mateMock);
            });
            await waitFor(() => {
                expect(MateRepository.prototype.update).toHaveBeenCalled();
            });
        });
    });

    describe("'When we use the handleDelete(),", () => {
        test("Then it should return the same object and have been called", async () => {
            await waitFor(() => {
                result.current.handleDelete(mateMock);
                expect(result.current.mates.at(-1)).toEqual(mateMock);
            });
            await waitFor(() => {
                expect(MateRepository.prototype.delete).toHaveBeenCalled();
            });
        });
    });
});
