export class Assets {
  /**
   * Loads all assets for the player.
   * @return The promise which resolves all asset promises.
   */
  public static load(): Promise<void> {
    const promises: Promise<any>[] = [];
    // TODO: Load assets and push each promise to the array.
    return Promise.resolve(promises).then(() => {});
  }

  /**
   * Loads an image with the given URL/file path.
   * @param url The URL of the image.
   * @return An image loaded from the given url.
   */
  public static loadImageFile(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image: HTMLImageElement = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (e: ErrorEvent) => {
        reject(e);
      };
      image.src = url;
    });
  }
}
