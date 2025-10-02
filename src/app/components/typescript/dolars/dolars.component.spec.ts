import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarsComponent } from './dolars.component';

describe('DolarsComponent', () => {
  let component: DolarsComponent;
  let fixture: ComponentFixture<DolarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
