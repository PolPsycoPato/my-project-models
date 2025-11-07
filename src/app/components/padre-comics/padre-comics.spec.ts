import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComics } from './padre-comics';

describe('PadreComics', () => {
  let component: PadreComics;
  let fixture: ComponentFixture<PadreComics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
