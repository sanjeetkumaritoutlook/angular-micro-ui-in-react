import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  localUrl = 'http://localhost:4200';
  devUrl =
    'http://idoc-experiment-micro-ui-development-bucket.s3-website-us-east-1.amazonaws.com/frontend/ui';

  getHost(
    hostName = window.location.hostname,
    protocol = window.location.protocol,
    port = window.location.port,
    href = window.location.href
  ) {
    let url = `${protocol}//${hostName}`;
    if (href.indexOf('http://localhost:4200/frontend') > -1) {
      url = this.localUrl;
    } else if (hostName === 'localhost') {
      url = this.devUrl;
    }
    return url;
  }
}
