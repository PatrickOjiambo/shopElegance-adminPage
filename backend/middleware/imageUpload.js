import dotenv from "dotenv";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
dotenv.config();
const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
});
export const upload = multer({
  storage: multerS3({
    s3,
    
    bucket: process.env.BUCKETNAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
/**
 * 
 * @param {Object} req - 
 * @param {Object} res 
 * @returns The image url
 */
export const handleImageUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  const uploadedFile = req.file;
  const image_url = uploadedFile.location;
  // res
  // .status(200)
  // .json({ message: "Image successfully uploaded", url: image_url });
  return image_url;
 
};
