import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my first app';
  displayDetails = false;
  buttonClickCount = 0;
  ClickNumbersLog =[];
  
  onShowDeaiils()
  {
    this.displayDetails = !this.displayDetails;//toggle details
    this.buttonClickCount++;//increase click count
    this.ClickNumbersLog.push(this.buttonClickCount);// added click count to array
    
  }
  getcolor(number){
    if(number % 2 == 0){
      return 'red';
    } else{
      return 'green';
    }
  }
}
