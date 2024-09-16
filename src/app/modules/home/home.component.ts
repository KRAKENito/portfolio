import { Component } from '@angular/core' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //go to my github profile
   redirectToGitHub() {
    window.location.href = 'https://github.com/faanrm' ;
  }
}
