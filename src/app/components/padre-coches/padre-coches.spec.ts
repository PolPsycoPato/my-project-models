import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreCoches } from './padre-coches';

describe('PadreCoches', () => {
  let component: PadreCoches;
  let fixture: ComponentFixture<PadreCoches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreCoches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreCoches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
