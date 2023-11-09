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
      }
    ];
  }

}
