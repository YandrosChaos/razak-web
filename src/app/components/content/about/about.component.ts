import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public type: string = 'about';
  public bannerImg: string = 'https://imgur.com/hjnmdpU.jpg';

  //links
  public steelWitchInstagram: string = GlobalConstants.STEEL_WITCH_INSTAGRAM;
  public alvaroGomezFacebook: string = GlobalConstants.ALVARO_GOMEZ_FACEBOOK;
  public alvaroGomezInstagram: string = GlobalConstants.ALVARO_GOMEZ_INSTAGRAM;
  public victorDevelopsLinkedin: string = GlobalConstants.VICTOR_DEVELOPS_LINKEDIN;
  public darkVoidStudiosWeb: string = GlobalConstants.DARK_VOID_STUDIOS_WEB;
  public wildCrowStudiosFacebook: string = GlobalConstants.WILDCROW_STUDIOS_FACEBOOK

  constructor() {}

  ngOnInit(): void {}
}