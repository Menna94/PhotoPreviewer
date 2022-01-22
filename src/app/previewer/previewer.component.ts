import { Component, OnInit } from '@angular/core';
import { PreviewerServiceService } from '../previewer-service.service';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css']
})
export class PreviewerComponent implements OnInit {
  imgUrl:any;

  constructor(
    private _pps: PreviewerServiceService
  ) { }

  ngOnInit(): void {
    this.fetchNewPhoto();
  }

  onClick(){
    this.fetchNewPhoto();
  }

  private fetchNewPhoto(){
    this._pps.getPhotos()
    .subscribe(d=>{
      this.imgUrl = d.urls.regular
    })
  }

}
