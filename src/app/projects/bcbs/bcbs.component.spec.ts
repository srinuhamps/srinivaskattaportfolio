import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcbsComponent } from './bcbs.component';

describe('BcbsComponent', () => {
  let component: BcbsComponent;
  let fixture: ComponentFixture<BcbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
