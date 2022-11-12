import { MateModel } from "./mate";

describe("Given the class MateModel", () => {
    describe("When we instantiate it", () => {
        const mate = new MateModel("", "", "", "");
        test("Then we should have an object ot the class", () => {
            expect(mate).toBeInstanceOf(MateModel);
        });
    });
});
