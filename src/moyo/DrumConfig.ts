import DrumTongue from './DrumTongue'

/**
 * Configuration of a drum, including its tongues and image.
 */
export interface DrumConfig {
  scaleName: string;
  imagePath: string;
  tongues: DrumTongue[];
}
