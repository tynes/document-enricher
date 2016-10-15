const alchemy = require('./connection');

// currently hard-coded with a few features that look interesting

exports.enrich = text => {
  const features = ['doc-sentiment', 'concept', 'entity', 'doc-emotion'];
  return new Promise((resolve, reject) => {
    alchemy.combined(text, features, {}, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

/*
Possible Features:
page-image, image-kw, feed 
entity, keyword, title 
author, taxonomy, concept 
relation, pub-date
doc-sentiment, doc-emotion

Can build a function that accepts an array of features or
use a hash so that a simple string can be passed in
and have constant time lookup to commonly combined features
*/
