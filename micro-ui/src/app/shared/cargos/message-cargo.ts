export class MessageCargo {
    severity: AlertType | undefined;
    message: string | undefined;
    visible: boolean;
    timeout: number | undefined;
    dismissible: boolean;
  
    constructor(
      severity?: AlertType,
      message?: string,
      visible: boolean = false,
      timeout?: number,
      dismissible: boolean = true
    ) {
      this.severity = severity;
      this.message = message;
      this.visible = visible;
      this.timeout = timeout;
      this.dismissible = dismissible;
    }
  }
  
  export enum AlertType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
  }
  