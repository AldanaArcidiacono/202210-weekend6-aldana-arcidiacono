import { DessertModel } from "./dessert";

describe("Given the class DessertModel", () => {
    describe("When we instantiate it", () => {
        const dessert = new DessertModel("", "", "", "");
        test("Then we should have an object ot the class", () => {
            expect(dessert).toBeInstanceOf(DessertModel);
        });
    });
});
