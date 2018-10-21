import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'page-not-found',
    templateUrl: 'page-not-found.component.html',
    styleUrls: ['page-not-found.component.scss']
})

export class PageNotFoundComponent implements OnInit {
    message: string = "Page Not Found...";

    constructor() {
    }

    ngOnInit() { }
}