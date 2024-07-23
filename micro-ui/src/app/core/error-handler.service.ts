import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertType, MessageCargo } from '../shared/cargos/message-cargo';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  /**
   * Error handling.....
   * @param {HttpErrorResponse} error
   * @returns {Observable<never>}
   */
  errorHandler(error: HttpErrorResponse, message: string) {
    const errorMessage = new MessageCargo(AlertType.ERROR, message, true);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(error.error.type);
      errorMessage.message = error.error.type;
    } else {
      // The backend returned an unsuccessful response code.
      console.error(error.message);
    }
    return throwError(errorMessage);
  }
}
