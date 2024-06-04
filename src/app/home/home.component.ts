import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  about:any = {}
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
      this.about = this.aboutService.about
  }
}
