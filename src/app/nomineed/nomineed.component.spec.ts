import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineedComponent } from './nomineed.component';

describe('NomineedComponent', () => {
  let component: NomineedComponent;
  let fixture: ComponentFixture<NomineedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
