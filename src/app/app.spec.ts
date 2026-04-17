import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

interface SharedTestData {
  fixture: ComponentFixture<App>;
  app: App;
  element: HTMLElement;
}

describe('App', () => {
  beforeEach(async function (context: SharedTestData) {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    context.fixture = TestBed.createComponent(App);
    context.app = context.fixture.componentInstance;
    context.element = context.fixture.nativeElement as HTMLElement;
    context.fixture.detectChanges();
    await context.fixture.whenStable();
  });

  it('should create the app shell', function (context: SharedTestData) {
    expect(context.app).toBeTruthy();
  });

  it('should render the advisor overview starter page', function (context: SharedTestData) {
    expect(context.element.textContent).toContain('Advisor overview');
    expect(context.element.textContent).toContain('Applicant information belongs here');
  });
});
