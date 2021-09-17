import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  APIUrl = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';

  constructor(public http: HttpClient) { }

  getMovies(): any {
    return this.http.get(this.APIUrl);
  }

  getMovie(id): any {
    return this.http.get(this.APIUrl + '/' + id);
  }
}
