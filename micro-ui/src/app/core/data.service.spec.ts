import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostService } from './host.service';
import { ErrorHandlerService } from './error-handler.service';
import { ThemeProviderService } from './theme-provider.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HostService, ErrorHandlerService, ThemeProviderService],
})
export class CoreModule {}
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
