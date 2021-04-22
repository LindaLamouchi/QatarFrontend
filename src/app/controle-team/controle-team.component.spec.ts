import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleTeamComponent } from './controle-team.component';

describe('ControleTeamComponent', () => {
  let component: ControleTeamComponent;
  let fixture: ComponentFixture<ControleTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
