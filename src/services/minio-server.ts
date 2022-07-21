import * as minio from "minio";
import http from 'http';

const minioClient = new minio.Client({
  endPoint: "101.43.129.224",
  port: 9000,
  useSSL: false,
  accessKey: "minio",
  secretKey: "minio@123"
});

function getListBuckets() {
  
  minioClient.listBuckets().then((res) => {
    console.log(1, http)
    console.log(1117, res);
  });
}

export default {
  minioClient,
  getListBuckets,
} as const;
