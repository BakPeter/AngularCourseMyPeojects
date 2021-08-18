import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationDest: string = 'recipes';
  onFeatureSelected(feature: string) {
    // console.log('app component : ' + feature);
    this.navigationDest = feature;
  }
}
