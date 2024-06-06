import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreH3Component } from './titre-h3.component';

describe('TitreH3Component', () => {
  let component: TitreH3Component;
  let fixture: ComponentFixture<TitreH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreH3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
