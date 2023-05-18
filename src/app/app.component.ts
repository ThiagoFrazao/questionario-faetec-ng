import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public questions = [
    {
      id: 1,
      title: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3'],
      image: "assets/famosos/anitta.png",
      selectedOption: ''
    },
    {
      id: 2,
      title: 'Question 2',
      options: ['Option 1', 'Option 2', 'Option 3'],
      image: "assets/famosos/anitta.png",
      selectedOption: ''
    },
    {
      id: 3,
      title: 'Question 3',
      options: ['Option 1', 'Option 2', 'Option 3'],
      image: "assets/famosos/anitta.png",
      selectedOption: ''
    }
  ];


}
