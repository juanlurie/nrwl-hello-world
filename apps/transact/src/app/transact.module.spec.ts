import { async, TestBed } from '@angular/core/testing';
import { TransactModule } from './transact.module';

describe('TransactModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [TransactModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(TransactModule).toBeDefined();
  });
});
