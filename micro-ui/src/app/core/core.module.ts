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
