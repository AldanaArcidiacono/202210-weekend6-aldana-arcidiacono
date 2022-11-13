export type Dessert = {
    id: number;
    title: string;
    details: string;
    brand: string;
    price: string;
    img: string;
    onSale: boolean;
};

export type ProtoDessert = {
    title: string;
    details: string;
    brand: string;
    price: string;
    img: string;
    onSale: boolean;
};

export class DessertModel {
    onSale: boolean;
    constructor(
        public details: string,
        public brand: string,
        public price: string,
        public img: string
    ) {
        this.onSale = false;
    }
}
