import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Unsplash{
  urls:{
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PreviewerServiceService {

  constructor(
    private _http: HttpClient
  ) { }


  getPhotos(){
    return this._http.get<Unsplash>('https://api.unsplash.com/photos/random',{
      headers:{
        Authorization: 'Client-ID 4PtrVhOqIHqkzC_gcf0gwu7dIBTyTj1ZXNOhFu4COmA'
      }
    })
  }
}
