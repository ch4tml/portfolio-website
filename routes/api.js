/*
 * API MICRSERVICE TO GET PROJECT DATA
 */
 
var mongo = require("mongodb");

exports.getProjects = (req, res) => {
    mongo.connect(process.env.MONGOLAB_URI, (err, db) => {
        if(err)throw err;
        else{
            db.collection("projects").find({})
                .toArray((err, docs) => {
                    if (err) throw err;
                    else res.end(JSON.stringify(docs));
                    db.close();
                });
            }
    });
};