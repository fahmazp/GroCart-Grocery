import multer from "multer";

const storage = multer.memoryStorage(); // buffer in memory

const fileFilter = (req, file, cb) => {
    // console.log("file===",file);
    
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};

export const upload = multer({ storage: storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 },
});
