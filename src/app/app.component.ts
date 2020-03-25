import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Shopping App';
  showRecipes = true;

  onSelectTab(selectedTab) {
    this.showRecipes = (selectedTab==0) ? true : false;
  }
}
