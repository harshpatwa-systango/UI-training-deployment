// global.d.ts
export {};

declare global {
  // Extend globalThis for Jest React 19 compatibility
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
