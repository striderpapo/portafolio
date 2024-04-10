import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportafolioComponent } from './viewportafolio.component';

describe('ViewportafolioComponent', () => {
  let component: ViewportafolioComponent;
  let fixture: ComponentFixture<ViewportafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewportafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewportafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
