import { Component } from '@angular/core';
import {SearchService} from './services/search.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private  itunes: SearchService) {

    }

    doSearch(term: string) {
        this.itunes.search(term);
    }
}
