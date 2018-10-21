export class Product {
    index: number;
    isExclusive: boolean;
    isSale: boolean;
    price: string;
    productImage: string;
    productName: string;
    size: Size[];
}

export class Size {
    size: string;
}
