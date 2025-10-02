import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaNumComponent } from './nota-num.component';

describe('NotaNumComponent', () => {
  let component: NotaNumComponent;
  let fixture: ComponentFixture<NotaNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaNumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
