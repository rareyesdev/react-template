export function usedFunction() {
  return 'This function is used in code';
}

// this function should be removed from bundle.js by webpack Tree Shaking algorithm
export function unusedFunction() {
  return 'This function is not used in code';
}
