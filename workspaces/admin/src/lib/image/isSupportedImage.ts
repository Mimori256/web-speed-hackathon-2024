const SUPPORTED_EXTENSION_LIST = ['bmp', 'jpeg', 'jpg', 'png', 'webp', 'avif', 'jxl'];

export async function isSupportedImage(image: File): Promise<boolean> {
  const extension = image.name.split('.').pop()?.toLowerCase();
  if (extension && SUPPORTED_EXTENSION_LIST.includes(extension)) {
    return true;
  }

  return false;
}
