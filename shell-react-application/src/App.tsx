import React from 'react';
//import { render } from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import { useCustomElementRef, fluid } from './fluid'; // Replaced by @lmig/fluid-react-utils
import { useEffect } from 'react';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [customElementName: string]: any;
    }
  }
}
function App() {
  // ---- Initialise FLUID
  let env = fluid.environments.external;
  useEffect(() => fluid.init(env));
  // ---- Start Building
  const inputRef = useCustomElementRef({},
    { label: 'Prop Format 3 (Complex/Reference Types)', autoFocus: true }
  );
  return (
    <div>
      <h1>React consuming angular micr-ui</h1>
   
    <fluid-theme-provider theme="lm"></fluid-theme-provider>
    <fluid-header links="navLinks"></fluid-header>
    <fluid-page>
    <fluid-input-field ref={inputRef}></fluid-input-field>
      <idoc-forms></idoc-forms>
    </fluid-page>
    <fluid-footer>
      <fluid-footer-content slot="footer-content">
        &copy; 2020 Liberty Mutual Insurance, 175 Berkeley Street, Boston, MA
        02116
      </fluid-footer-content>
    </fluid-footer>
  </div>
  );
}

export default App;
