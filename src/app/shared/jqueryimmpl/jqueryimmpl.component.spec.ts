import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryimmplComponent } from './jqueryimmpl.component';

describe('JqueryimmplComponent', () => {
  let component: JqueryimmplComponent;
  let fixture: ComponentFixture<JqueryimmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryimmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryimmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
