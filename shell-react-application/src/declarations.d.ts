declare global {
  namespace JSX {
    interface IntrinsicElements {
      // item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      [customElementName: string]: any;
    }
  }
}