import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typing';
  randomText= faker.lorem.sentence();
  enteredText = '';

  generateClass(a: string, b: string){
    if(!b){
      return "pending"
    }
    else if(a===b){
      return "correct"
    }
    else{
      return "incorrect"
    }
  }
  onInput(value: string){
    this.enteredText = value;
  }
}
