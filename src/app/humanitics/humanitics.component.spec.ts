import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumaniticsComponent } from './humanitics.component';

describe('HumaniticsComponent', () => {
  let component: HumaniticsComponent;
  let fixture: ComponentFixture<HumaniticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumaniticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumaniticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
