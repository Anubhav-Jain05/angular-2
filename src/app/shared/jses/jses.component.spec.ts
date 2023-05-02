import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsesComponent } from './jses.component';

describe('JsesComponent', () => {
  let component: JsesComponent;
  let fixture: ComponentFixture<JsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
