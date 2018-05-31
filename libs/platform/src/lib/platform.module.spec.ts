import { async, TestBed } from '@angular/core/testing';
import { PlatformModule } from './platform.module';

describe('PlatformModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PlatformModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PlatformModule).toBeDefined();
  });
});
