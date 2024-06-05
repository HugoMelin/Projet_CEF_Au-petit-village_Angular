import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreH1Component } from './titre-h1.component';

describe('TitreH1Component', () => {
  let component: TitreH1Component;
  let fixture: ComponentFixture<TitreH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreH1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
