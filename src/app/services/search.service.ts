import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toPromise } from 'rxjs/operator/toPromise';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;

  constructor(private http: HttpClient) {
      this.results = [];
      this.loading = false;
  }

  search(term: string) {
    const promise = new Promise((resolve, reject) => {
        const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        this.http.get(apiUrl)
            .toPromise()
            .then(response => {
                console.log(response);
                return response;
            });
    });
    return;
  }
}
