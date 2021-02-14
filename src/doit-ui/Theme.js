export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
}

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
}

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${ breakpoints[BREAKPOINT_NAMES.LARGE] }px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${ breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1 }px`,
  print: '@media print'
}
export const unit = 4;

export default {
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
    },
    level2: {
      boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.14)',
    },
    level3: {
      boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)',
    }
  },
  unit,
  responsive
}
