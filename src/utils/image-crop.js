import Image from 'next/image'
import clsx from 'clsx'

export function ImageFaceCrop({
  image,
  width = 600,
  height = 600,
  className = '',
}) {
  const { secure_url } = image
  const src = secure_url.replace(
    'upload/',
    `upload/c_fill,g_face,h_${height},w_${width}/`
  )
  return (
    <Image
      className={clsx(
        `aspect-[${width}/${height}]`,
        'w-full rounded-md  object-cover',
        className
      )}
      width={width}
      height={height}
      src={src}
      alt={alt}
    />
  )
}

export function ImageCropUrl({ imageUrl, width = 600, height = 600 }) {
  return imageUrl.replace(
    'upload/',
    `upload/c_fill,g_face,h_${height},w_${width}/`
  )
}
