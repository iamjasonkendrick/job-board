import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
})

const s3 = new AWS.S3()

export async function uploadToS3(file: File): Promise<string> {
  if (!process.env.REACT_APP_S3_BUCKET_NAME) {
    throw new Error('S3 bucket name is not defined in environment variables')
  }

  const params: AWS.S3.PutObjectRequest = {
    Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
    Key: `resumes/${Date.now()}-${file.name}`,
    Body: file,
    ACL: 'public-read',
  }

  try {
    const { Location } = await s3.upload(params).promise()
    return Location
  } catch (error) {
    console.error('Error uploading file: ', error)
    throw error
  }
}
