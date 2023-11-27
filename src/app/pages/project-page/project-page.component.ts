import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {projects} from '../../utils/statics/projects';
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  slug;

  projects = projects;
  project;
  // tslint:disable-next-line:variable-name
  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug  = this._activateRoute.snapshot.paramMap.get('slug');
    this.project = projects.filter(value => value.id === this.slug)[0];
  }

}
