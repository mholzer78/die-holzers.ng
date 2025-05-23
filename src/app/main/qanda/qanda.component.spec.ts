import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QandaComponent } from './qanda.component';

describe('QandaComponent', () => {
  let component: QandaComponent;
  let fixture: ComponentFixture<QandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QandaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
