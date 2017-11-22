// middleware
var Campground = require("../models/campground");
var Comment  = require("../models/comment")
var middlewareObj = {};
 
middlewareObj.checkCampgroundOwndership = function(req,res,next){
    //is user logged in?
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
                    if(err){
                            res.redirect("back");
                      }else{
                            //foundCampground.author.id is a mongoose object
                            // so to campare I need to use mongoose methoid .equals
                            if(foundCampground.author.id.equals(req.user.id)){
                                next();
                            }else{
                                req.flash("error", "You don't have permission to do that");
                                res.redirect("back");
                            }
                     }
            });
    }else{
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
    
    // if not redirect
  
 }

middlewareObj.checkCommentOwnership = function(req,res,next){
    //is user logged in?
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
                    if(err){
                        req.flash("error", " Campground not found");
                            res.redirect("back");
                      }else{
                            //foundCampground.author.id is a mongoose object
                            // so to campare I need to use mongoose methoid .equals
                            if(foundComment.author.id.equals(req.user.id)){
                                next();
                            }else{
                                req.flash("error", "You don't have permission to do that");
                                res.redirect("back");
                            }
                     }
            });
    }else{
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
    
    // if not redirect
}

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}
module.exports = middlewareObj;