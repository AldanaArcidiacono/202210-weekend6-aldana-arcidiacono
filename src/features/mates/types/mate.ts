export type Mate = {
    id: number;
    title: string;
    details: string;
    color: string;
    price: string;
    img: string;
    onSale: boolean;
};

export type ProtoMate = {
    title: string;
    details: string;
    color: string;
    price: string;
    img: string;
    onSale: boolean;
};

export class MateModel {
    onSale: boolean;
    constructor(
        public details: string,
        public color: string,
        public price: string,
        public img: string
    ) {
        this.onSale = false;
    }
}
