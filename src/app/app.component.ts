import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@Component({standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'Projeto LavaCar';
}
