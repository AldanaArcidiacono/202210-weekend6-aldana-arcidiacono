import { Mate, MateModel } from "../types/mate";
import { MateRepository } from "./mate.repository";

describe("Given MateRepository Service", () => {
    describe("When we instantiate it", () => {
        let service: MateRepository;
        beforeEach(() => {
            service = new MateRepository();
        });

        test(`Then if createError() is called, 
            it should return throw an error`, async () => {
            const error = service.createError(
                new Response("Error", {
                    status: 400,
                    statusText: "error",
                })
            );
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(error).toEqual(result);
        });

        test(`Then if we use getAll() 
            it should return a Promise of an Array of Mates`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test(`Then if we use getAll() and an error happens,
            it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.getAll();
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test(`Then if we use create() 
            it should return a Promise of the create Mates`, async () => {
            const mockMate = new MateModel("", "", "", "");
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockMate),
            });
            const result = await service.create(mockMate);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockMate);
        });

        test(`Then if we use create() and an error happens,
            it should throw an error`, async () => {
            const mockMate = new MateModel("", "", "", "");
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.create(mockMate);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test("Then if we use update() it should return a Promise of an Array of Mates", async () => {
            const mateMock: Mate = {
                id: 1,
                title: "Mate imperial",
                details: "",
                color: "",
                price: "",
                img: "",
                onSale: false,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mateMock]),
            });
            const result = await service.update({ title: "Mate Cactus" });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mateMock]);
        });

        test(`Then if we use update() and an error happens,
            it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.update({});
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test("Then if we use delete() it should delete a Mate", async () => {
            const mateMock: Mate = {
                id: 1,
                title: "Mate imperial",
                details: "",
                color: "",
                price: "",
                img: "",
                onSale: false,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.delete(mateMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test(`Then if we use delete() and an error happens,
            it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.delete(5);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });
});
