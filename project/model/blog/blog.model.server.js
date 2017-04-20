module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var BlogSchema = require("./blog.schema.server")();
    var BlogModel  = mongoose.model("BlogModel", BlogSchema);
    var q = require("q");

    var api = {
        "createBlog": createBlog,
        "deleteBlog": deleteBlog,
        "findAllBlogs": findAllBlogs,
        "updateBlog": updateBlog,
        "findBlog": findBlog,
        "setModel" : setModel
    };
    return api;

    function createBlog(newBlog) {
        var deferred = q.defer();
        BlogModel.create(newBlog , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deleteBlog(pid) {
        var deferred = q.defer();
        BlogModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updateBlog(pid, blog) {

        var deferred = q.defer();
        BlogModel.update({"_id": pid}, {$set: blog}, {multi: true}, function(err, blog) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(blog);
            }
        });
        return deferred.promise;
    }

    function findBlog(pid) {
        var deferred = q.defer();
        BlogModel.findOne({'_id': pid}, function(err,blog) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(blog);
            }
        });
        return deferred.promise;
    }

    function findAllBlogs(){
        var deferred = q.defer();
        BlogModel.find({},function(err,blogs){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(blogs);
            }
        });
        return deferred.promise;
    }

    function findBlog(pid) {
        var deferred = q.defer();
        BlogModel.findOne({'_id': pid}, function(err,blog) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(blog);
            }
        });
        return deferred.promise;
    }

    function findAllBlogs(){
        var deferred = q.defer();
        BlogModel.find({},function(err,blogs){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(blogs);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};