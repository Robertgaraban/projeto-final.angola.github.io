import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoFinalAngolaCLI';
  onSubmit(search){
    console.log(search.form.value);
  };
}
