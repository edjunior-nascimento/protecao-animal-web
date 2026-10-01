declare module 'qrcode.react' {
  import * as React from 'react';

  export type QRCodeProps = {
    value: string;
    size?: number;
    level?: 'L' | 'M' | 'Q' | 'H';
    bgColor?: string;
    fgColor?: string;
    includeMargin?: boolean;
  } & React.HTMLAttributes<HTMLCanvasElement>;

  export const QRCodeCanvas: React.FC<QRCodeProps>;
  export const QRCodeSVG: React.FC<QRCodeProps>;

  const _default: any;
  export default _default;
}
