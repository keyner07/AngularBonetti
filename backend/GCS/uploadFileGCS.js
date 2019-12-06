const { Storage } = require('@google-cloud/storage');
const express = require('express');
const path = require('path');
const moment = require('moment');
const TTS = require('./text-to-speech');

// Instantiate a storage client

exports.UploadFile = async function(req, res, next) {
    const googleCloudStorage = new Storage({
      projectId: process.env.GCLOUD_PROJECT,
      keyFilename: process.env.GCS_KEYFILE
    });
    let reqFileName = req.file.originalname;
    let extension = path.extname(reqFileName);
    
    // Aqui nos localizamos en el bucket que queremos subir el archivo.
    const bucket = googleCloudStorage.bucket(process.env.GCS_BUCKET);
    let fileName = `${moment().unix()}${extension}`;
      // Aqui creamos un archivo en el bucket donde lo subiremos
      const blob = bucket.file(fileName);

      // Aqui comenzamos a escribir el archivo y le decimos que tipo de archivo es.
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: 'text/plain'
        }
      });

      // Esto se dispara cuando ocurre un error.
      blobStream.on("error", err => {
        next();
      });

      // Esto se dispara cuando lo de escribir el archivo termina.
      blobStream.on("finish", () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          
        // Aqui guardamos el url.
          req.body.publicUrlTxt = publicUrl;
          next();
        });
      
      // Aqui se le pasa lo que escribira en el archivo del bucket.
      blobStream.end(req.file.buffer);
}