import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedMenuChoice = 'recipe';

  onNavigate(menuChoice: string){
    this.loadedMenuChoice = menuChoice;
  }
}
