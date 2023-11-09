import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopoundComponent } from './ecopound.component';

describe('EcopoundComponent', () => {
  let component: EcopoundComponent;
  let fixture: ComponentFixture<EcopoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcopoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcopoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
