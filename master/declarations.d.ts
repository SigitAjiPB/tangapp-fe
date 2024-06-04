declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  
  declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  
  declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }

  declare module './pages/login' {
    const value: any;
    export default value;
  }
  declare module './components/calendar' {
    const value: any;
    export default value;
  }