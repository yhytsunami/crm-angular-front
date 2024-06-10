import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgTemplateComponent } from './msg-template.component';

describe('MsgTemplateComponent', () => {
  let component: MsgTemplateComponent;
  let fixture: ComponentFixture<MsgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
