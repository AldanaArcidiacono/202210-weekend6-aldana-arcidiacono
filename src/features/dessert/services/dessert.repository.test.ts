import { Dessert, DessertModel } from "../types/dessert";
import { DessertRepository } from "./dessert.repository";

describe("Given DessertRepository Service", () => {
    describe("When we instantiate it", () => {
        let service: DessertRepository;
        beforeEach(() => {
            service = new DessertRepository();
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

        test(`Then if we use getAllDessert() 
            it should return a Promise of an Array of Mates`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAllDessert();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test(`Then if we use getAllDessert() and an error happens,
            it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.getAllDessert();
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test(`Then if we use createDessert() 
            it should return a Promise of the create a Dessert`, async () => {
            const mockMate = new DessertModel("", "", "", "");
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockMate),
            });
            const result = await service.createDessert(mockMate);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockMate);
        });

        test(`Then if we use createDessert() and an error happens,
            it should throw an error`, async () => {
            const mockMate = new DessertModel("", "", "", "");
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.createDessert(mockMate);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test("Then if we use updateDessert() it should return a Promise of an Array of Mates", async () => {
            const dessertMock: Dessert = {
                id: 1,
                title: "Alfajores de maicena",
                details: "",
                brand: "",
                price: "",
                img: "",
                onSale: false,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([dessertMock]),
            });
            const result = await service.updateDessert({
                title: "Facturas",
            });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([dessertMock]);
        });

        test(`Then if we use updateDessert() and an error happens,
            it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.updateDessert({});
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test("Then if we use deleteDessert() it should delete a Mate", async () => {
            const DessertMock: Dessert = {
                id: 1,
                title: "Alfajores de maicena",
                details: "",
                brand: "",
                price: "",
                img: "",
                onSale: false,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.deleteDessert(DessertMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test(`Then if we use deleteDessert() and an error happens,
            it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.deleteDessert(5);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });
});
