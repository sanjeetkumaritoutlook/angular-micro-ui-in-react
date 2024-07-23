export function differentialScriptLoader(
    esmScriptPath: string,
    legacyScriptPath: string,
    script: any
  ) {
    script = document.createElement('script');
    if ('noModule' in script) {
      script.type = 'module';
      script.src = esmScriptPath;
    } else {
      script.type = 'text/javascript';
      script.src = legacyScriptPath;
    }
    document.head.appendChild(script);
  }
  
  export function scriptLoader(scriptPath: string, script: any) {
    script.type = 'text/javascript';
    script.src = scriptPath;
    document.head.appendChild(script);
  }
  
  export function stylesheetLoader(stylesheet: any) {
    const element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('href', stylesheet);
    document.head.appendChild(element);
  }
  