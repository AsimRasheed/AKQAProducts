import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() product: Product;
    constructor() { }

    ngOnInit() {        
    }
   
}