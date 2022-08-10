import { TestBed } from '@angular/core/testing';

import { DataSupplierService } from './data-supplier.service';

describe('DataSupplierService', () => {
  let service: DataSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
