import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerimgComponent } from './bannerimg.component';

describe('BannerimgComponent', () => {
  let component: BannerimgComponent;
  let fixture: ComponentFixture<BannerimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
