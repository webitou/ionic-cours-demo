import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamPageComponent } from './cam-page.component';

describe('CamPageComponent', () => {
  let component: CamPageComponent;
  let fixture: ComponentFixture<CamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
