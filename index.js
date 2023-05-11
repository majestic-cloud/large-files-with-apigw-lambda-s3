const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  signatureVersion: 'v4',
});

exports.handler = async (event) => {
  const bucketName = process.env.BUCKET_NAME;
  const body = JSON.parse(event.body);

  // Generate a signed URL for uploading the file to S3
  const signedUrl = s3.getSignedUrl('putObject', {
    Bucket: bucketName,
    Key: body.filename,
    Expires: 300, // The URL expires in 5 minutes
  });

  // Return the signed URL and file key as a JSON object
  const responseBody = {
    uploadUrl: signedUrl,
    fileKey: body.filename,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
};
