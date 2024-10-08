import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasComponent } from './areas.component';

describe('AreasComponent', () => {
  let component: AreasComponent;
  let fixture: ComponentFixture<AreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
