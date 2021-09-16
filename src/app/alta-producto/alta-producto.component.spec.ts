import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProductoComponent } from './alta-producto.component';

describe('AltaProductoComponent', () => {
  let component: AltaProductoComponent;
  let fixture: ComponentFixture<AltaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
