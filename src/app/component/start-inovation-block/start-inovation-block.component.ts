import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-inovation-block',
  templateUrl: './start-inovation-block.component.html',
  styleUrls: ['./start-inovation-block.component.css']
})
export class StartInovationBlockComponent implements OnInit {

  projects = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        id : 'clinique-phones',
        img : 'project-clinique-1.png',
        title: 'Clinique phones',
        slug : '/project/clinique-phones'
      },
      {
        id : 'alwane-kids',
        img : 'alwan-kids-1.png',
        title: 'Alwane Kids',
        slug : '/project/alwane-kids'
      },
      {
        id : 'jilsmart',
        img : 'Jilsmart–ecomerce platforme-1.jpg',
        title: 'Jilsmart – ecomerce platforme',
        slug : '/project/jilsmart'
      },
      {
        id : 'solucity',
        img : 'solucity-1.png',
        title: 'solucity Immigration Consulting',
        slug : '/project/solucity'
      }
    ];
  }

}
