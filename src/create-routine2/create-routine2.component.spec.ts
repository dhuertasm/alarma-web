/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateRoutine2Component } from './create-routine2.component';

describe('CreateRoutine2Component', () => {
  let component: CreateRoutine2Component;
  let fixture: ComponentFixture<CreateRoutine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoutine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoutine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
