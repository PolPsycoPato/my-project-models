import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComic } from './hijo-comic';

describe('HijoComic', () => {
  let component: HijoComic;
  let fixture: ComponentFixture<HijoComic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoComic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoComic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
