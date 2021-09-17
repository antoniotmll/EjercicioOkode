import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: any[];

  constructor(protected router: Router, protected moviesAPIService: MoviesApiService) {
    this.movies = moviesAPIService.getMovies().subscribe(
      result => {
        this.movies = result;
      },
      err => {
        console.log(err);
      }
    );
  }

  verPaginaDetalle(id): void {
    this.router.navigate(['/detalles', id]);
  }
}
