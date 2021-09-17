import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: any;
  movie: any;

  constructor(protected activateRoute: ActivatedRoute, protected moviesAPIService: MoviesApiService) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    this.movie = this.moviesAPIService.getMovie(id).subscribe(
      result => {
        this.movie = result;
      },
      err => {
        console.log(err);
      }
    );
  }

}
