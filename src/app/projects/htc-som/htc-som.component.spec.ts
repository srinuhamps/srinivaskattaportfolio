import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcSomComponent } from './htc-som.component';

describe('HtcSomComponent', () => {
  let component: HtcSomComponent;
  let fixture: ComponentFixture<HtcSomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtcSomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtcSomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
