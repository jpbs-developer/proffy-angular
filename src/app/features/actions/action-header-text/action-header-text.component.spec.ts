import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ActionHeaderTextComponent } from './action-header-text.component';

describe('ActionHeaderTextComponent', () => {
  let component: ActionHeaderTextComponent;
  let fixture: ComponentFixture<ActionHeaderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionHeaderTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionHeaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    component.title = 'Que incrível que você quer dar aulas.';
    fixture.detectChanges();
    expect(component.title).toBe('Que incrível que você quer dar aulas.');
    expect(h1.nativeElement.textContent).toBe(
      'Que incrível que você quer dar aulas.'
    );
  });

  it('should display subtitle', () => {
    component.subTitle =
      'O primeiro passo, é preencher esse formulário de inscrição.';
    fixture.detectChanges();
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(component.subTitle).toBe(
      'O primeiro passo, é preencher esse formulário de inscrição.'
    );
    expect(h2).toBeTruthy();
    expect(h2.nativeElement.textContent).toBe(
      'O primeiro passo, é preencher esse formulário de inscrição.'
    );
  });

  it('should not display subtitle', () => {
    const h2 = fixture.debugElement.query(By.css('h2'));
    component.subTitle = '';
    fixture.detectChanges();
    expect(component.subTitle).toBe('');
    expect(h2).not.toBeTruthy()
  });
});
