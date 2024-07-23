import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('ErrorHandlerService', () => {
  let errorService: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    errorService = TestBed.get(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(errorService).toBeTruthy();
  });

  describe('Test for errorHandler', () => {
    it('when errorHandler is called with NOT an instance of Error Event, correct message should be populated', () => {
      const httpErrorResponse = new HttpErrorResponse({
        error: new Error('Error retrieving information for quote'),
      });
      errorService.errorHandler(httpErrorResponse, '').subscribe(
        (resp) => console.log(resp),
        (error) => {
          expect(error.message).toEqual('');
        }
      );
    });

    it('when errorHandler is called with  an instance of Error Event, correct message should be populated', () => {
      const httpErrorResponse = new HttpErrorResponse({
        error: new ErrorEvent('client error'),
      });
      errorService.errorHandler(httpErrorResponse, 'client error').subscribe(
        (resp) => console.log(resp),
        (error) => {
          expect(error.message).toEqual('client error');
        }
      );
    });
  });
});
