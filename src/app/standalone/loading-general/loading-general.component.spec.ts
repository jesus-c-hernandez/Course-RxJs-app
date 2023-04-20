import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingGeneralComponent } from './loading-general.component';

describe('LoadingGeneralComponent', () => {
  let component: LoadingGeneralComponent;
  let fixture: ComponentFixture<LoadingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
