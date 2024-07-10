export const containerVariants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2,
      delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: -20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
      delay: 0.2,
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
      delay: 0.4,
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    x: 30,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 2.6,
      delay: 0.4,
    },
  },
};

export const btnVariants = {
  offscreen: {
    opacity: 0,
    x: -30,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
      delay: 0.5,
    },
  },
};
