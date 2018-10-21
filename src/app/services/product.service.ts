import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { AppSettings } from '../core/app-settings';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    serviceUrl = '';

    constructor(private http: Http) {
    }

    getAllProducts(){
        this.serviceUrl = AppSettings.productUrl;
        return this.http.get(this.serviceUrl)
        .pipe(
            map(response => response.json())
        );
    }    
    
}
