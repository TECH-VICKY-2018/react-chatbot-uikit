import React from 'react';

/**
 * Props to customize the appearance of an avatar.
 */
export interface CustomAvatarProps {
  /**
   * Image source URL for the avatar.
   */
  src?: string;
  /**
   * Fallback content for the avatar (e.g., icon, text, custom element).
   * Rendered if src is not provided or fails to load.
   */
  fallback?: React.ReactNode;
}
