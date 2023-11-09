import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInovationBlockComponent } from './start-inovation-block.component';

describe('StartInovationBlockComponent', () => {
  let component: StartInovationBlockComponent;
  let fixture: ComponentFixture<StartInovationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartInovationBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartInovationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
