import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreH2Component } from './titre-h2.component';

describe('TitreH2Component', () => {
  let component: TitreH2Component;
  let fixture: ComponentFixture<TitreH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreH2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
