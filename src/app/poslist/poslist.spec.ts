import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poslist } from './poslist';

describe('Poslist', () => {
  let component: Poslist;
  let fixture: ComponentFixture<Poslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
