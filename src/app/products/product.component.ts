import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    providers: [ ProductService ]
})
export class ProductComponent implements OnInit {
    title = 'AKQA Products';
    products: Product[];
    filteredProducts: Product[];
    productSizes = [
        {key: "All", value:"Filter by size" },
        {key: "XS", value:"Extra Small - XS" },
        {key: "S", value:"Small - S" },
        {key: "M", value:"Medium - M" },
        {key: "L", value:"Large - L" },
        {key: "XL", value:"Extra Large - XL" }
    ]
 
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.getAllProducts();
    }

    getAllProducts() {        
        this.productService.getAllProducts()
            .subscribe(products => {
                this.filteredProducts = this.products = products;
                console.log(products);
            });
    }

    selectChange(value){
        if(value !== 'All'){
            this.filteredProducts = this.products.filter(product => product.size.find(s => s === value));        
        }
        else{
            this.filteredProducts = this.products;
        }

    }
}