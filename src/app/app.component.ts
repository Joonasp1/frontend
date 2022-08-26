import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordcloud-angular';

  cloud = {};
  constructor(private http: HttpClient){
    http.get('localhost:8080/resource').subscribe(data => this.cloud)
  }

  onSubmit(){ //Method for uploading the file to the backend for processing

  }

  updateFile(){

  }
}
