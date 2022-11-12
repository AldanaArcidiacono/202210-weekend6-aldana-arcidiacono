import { Mate } from "../types/mate";
import { actionTypes } from "./action.types";
import { mateReducer } from "./reducer";

describe("Given the function mateReducer", () => {
    const mateMock: Mate = {
        id: 1,
        title: "Mate imperial",
        details: "",
        color: "",
        price: "",
        img: "",
        onSale: false,
    };

    let action: { type: string; payload: unknown };
    let state: Array<Mate>;

    describe("When the action is load", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [mateMock],
            };
        });
        test("Then the returned state should be the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe("When the action is add", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: mateMock,
            };
        });
        test("Then the returned state should be the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe("When the action is update and the id is valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mateMock, title: "Update product" },
            };
            state = [mateMock];
        });
        test("Then the returned state should include the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe("When the action is update and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mateMock, id: "2", title: "Update product" },
            };
            state = [mateMock];
        });
        test("Then the returned state should be the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is delete", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: mateMock,
            };
            state = [mateMock];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe("When the action is delete and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...mateMock, id: "2" },
            };
            state = [mateMock];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is any other", () => {
        beforeEach(() => {
            action = {
                type: "",
                payload: null,
            };
            state = [mateMock];
        });
        test("Then the returned state should not include the action payload", () => {
            const result = mateReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
