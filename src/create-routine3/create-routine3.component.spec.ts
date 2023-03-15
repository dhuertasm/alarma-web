/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateRoutine3Component } from './create-routine3.component';

describe('CreateRoutine3Component', () => {
  let component: CreateRoutine3Component;
  let fixture: ComponentFixture<CreateRoutine3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoutine3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoutine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
