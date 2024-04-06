import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaContainerComponent } from './ia_container.component';

describe('IaContainerComponent', () => {
  let component: IaContainerComponent;
  let fixture: ComponentFixture<IaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
