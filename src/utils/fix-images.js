export function fixImages(images) {
  return images.map((image) => {
    return {
      ...image,
      src: image.secure_url,
    }
  })
}
