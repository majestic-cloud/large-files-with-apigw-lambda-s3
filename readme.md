# Uploading large files to S3 through API Gateway and Lambda

Repository for the video on uploading large files to S3 when you need to use API Gateway and Lambda

Usage:

Deploy infrastructure 

``` sam deploy --guided ```


Then use the client app to upload the files. The client is the client.js file

```node client.js```

Make sure to change the following things in the client:

* Change LOCAL_FILENAME_THAT_YOU_WANT_TO_UPLOAD in client.js to the filename you want to upload
* Change YOUR_API_GATEWAY_URL to the URL of your production stage from API Gateway


