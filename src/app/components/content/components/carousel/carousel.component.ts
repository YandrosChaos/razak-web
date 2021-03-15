import {  Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  providers:[NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  constructor(
    public carouselConfig: NgbCarouselConfig
  ) {
    carouselConfig.interval=3000;
    carouselConfig.keyboard=true;
    carouselConfig.pauseOnHover=true;
  }

  ngOnInit(): void {
  }
}