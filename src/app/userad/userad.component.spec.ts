import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradComponent } from './userad.component';

describe('UseradComponent', () => {
  let component: UseradComponent;
  let fixture: ComponentFixture<UseradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
