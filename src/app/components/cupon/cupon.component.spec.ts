import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuponComponent } from './cupon.component';

describe('CuponComponent', () => {
  let component: CuponComponent;
  let fixture: ComponentFixture<CuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
