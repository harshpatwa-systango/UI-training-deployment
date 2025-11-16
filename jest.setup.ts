import "@testing-library/jest-dom";
// Fix for React 19 / RTL / Jest act() mismatch during CI builds
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
