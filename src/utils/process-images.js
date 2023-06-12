import download from 'image-downloader'
import { v2 as cloudinary } from 'cloudinary'
import { updateRecord } from '@/utils/airtable'

cloudinary.config({
  cloud_name: process.env.CLOUDIANRY_CLOUD_NAME,
  api_key: process.env.CLOUDIANRY_API_KEY,
  api_secret: process.env.CLOUDIANRY_API_SECRET,
  secure: true,
})

let localImageDirectory
let baseTable = 'Doulas'

const updateRecordsImageObject = async (record) => {
  const updatedRecord = {
    id: record.id,
    fields: {
      images_obj: JSON.stringify(record.images),
    },
  }

  try {
    await updateRecord([updatedRecord], baseTable)
  } catch (error) {
    console.log({ error })
  }

  console.log('Done updating record', record.id)
}

const processImages = async (images) => {
  const promisedImages = await Promise.allSettled(
    images.map(async (image) => {
      const downloadedImage = await downloadImage(image, localImageDirectory)
      return downloadedImage
    })
  )

  const processedImages = promisedImages.map((image) => {
    return image.value
  })

  return processedImages
}

const downloadImage = async (image) => {
  const { url, filename } = image

  const options = {
    url,
    dest: `${localImageDirectory}/${filename}`,
  }

  let cloudinaryFile = {
    secure_url: '',
  }

  const cloudinaryOptions = {
    folder: 'birth-doulas/doulas',
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  }

  try {
    const file = await download.image(options)
    cloudinaryFile = await cloudinary.uploader.upload(
      file.filename,
      cloudinaryOptions
    )
  } catch (error) {
    console.log({ error })
  }

  return cloudinaryFile
}

export async function processRecordImages(object, directory, updateTable) {
  baseTable = updateTable
  localImageDirectory = directory

  const { images, images_obj } = object

  if (!images) return object

  if (images_obj) {
    object.images = JSON.parse(images_obj)
    return object
  }

  object.images = await processImages(images)

  updateRecordsImageObject(object)

  return object
}
