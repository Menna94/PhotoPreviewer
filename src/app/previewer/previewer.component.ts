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
    this._pps.getPhotos()
    .subscribe(d=>{
      this.imgUrl = d.urls.regular
    })
  }

  // onClick(){
  //   this._pps.getPhotos()
  //   .subscribe(d=>{
  //     console.log(d);
  //   })
  // }

}
