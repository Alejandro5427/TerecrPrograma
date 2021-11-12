import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalGifsComponent } from './principal-gifs.component';

describe('PrincipalGifsComponent', () => {
  let component: PrincipalGifsComponent;
  let fixture: ComponentFixture<PrincipalGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
