import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { fluidEnvironments } from './fluid';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
const script = document.createElement('script');

/**
 * Set this to dev, test, prod or local to switch environments
 * for the sandbox
 */
export const fluid = fluidEnvironments.external;

if ('noModule' in script) {
  script.type = 'module';
  script.src = 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js';
} 
//https://d3vissazv1qzch.cloudfront.net/fluid/build/fluid.js
//https://d3vissazv1qzch.cloudfront.net/fluid/build/fluid.css
document.head.appendChild(script);