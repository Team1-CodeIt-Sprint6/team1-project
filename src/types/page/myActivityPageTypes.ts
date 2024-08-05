export const IMAGE_TYPES = {
  BANNER: 'banner',
  MORE: 'more',
} as const;

export type ImageType = (typeof IMAGE_TYPES)[keyof typeof IMAGE_TYPES];
