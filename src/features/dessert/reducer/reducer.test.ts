import { Dessert } from "../types/dessert";
import { actionTypes } from "./action.types";
import { dessertReducer } from "./reducer";

describe("Given the function dessertReducer", () => {
    const dessertMock: Dessert = {
        id: 1,
        title: "Alfajores de maicena",
        details: "",
        brand: "",
        price: "",
        img: "",
        onSale: false,
    };

    let action: { type: string; payload: unknown };
    let state: Array<Dessert>;

    describe("When the action is load", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [dessertMock],
            };
        });
        test("Then the returned state should be the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe("When the action is add", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: dessertMock,
            };
        });
        test("Then the returned state should be the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe("When the action is update and the id is valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...dessertMock, title: "Update product" },
            };
            state = [dessertMock];
        });
        test("Then the returned state should include the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe("When the action is update and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...dessertMock, id: "2", title: "Update product" },
            };
            state = [dessertMock];
        });
        test("Then the returned state should be the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is delete", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: dessertMock,
            };
            state = [dessertMock];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe("When the action is delete and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...dessertMock, id: "2" },
            };
            state = [dessertMock];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is any other", () => {
        beforeEach(() => {
            action = {
                type: "",
                payload: null,
            };
            state = [dessertMock];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = dessertReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
