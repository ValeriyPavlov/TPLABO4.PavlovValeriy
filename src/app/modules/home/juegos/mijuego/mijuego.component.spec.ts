import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MijuegoComponent } from './mijuego.component';

describe('MijuegoComponent', () => {
  let component: MijuegoComponent;
  let fixture: ComponentFixture<MijuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MijuegoComponent]
    });
    fixture = TestBed.createComponent(MijuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
