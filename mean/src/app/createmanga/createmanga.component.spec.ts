import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemangaComponent } from './createmanga.component';

describe('CreatemangaComponent', () => {
  let component: CreatemangaComponent;
  let fixture: ComponentFixture<CreatemangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
