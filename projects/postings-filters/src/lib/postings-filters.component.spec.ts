import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingsFiltersComponent } from './postings-filters.component';

describe('PostingsFiltersComponent', () => {
  let component: PostingsFiltersComponent;
  let fixture: ComponentFixture<PostingsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
