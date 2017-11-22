var express = require("express");
var router =  express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");


// INDEX ROUTE - SHOW ALL CAMPGROUNDS
router.get("/",function(req,res){
    // I removed the is logged in function from here
    // GET ALL CAMPGROUNDS FROM DB THE RENDER
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campground: allCampgrounds, currentUser: req.user});

        }
    });
});


//CREATE -- ADD NEW CAMPGROUND TO DB
router.post("/", middleware.isLoggedIn  , function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author  = {
        id: req.user._id,
        username: req.user.username
    }

    var newCampground = {name:name ,price:price ,image:image, description: desc, author:author};
     
 Campground.create(newCampground,function(err,newlyCreated){
    if(err){
        console.log(err);
        }else{
             // redirect back to campground page
             res.redirect("/campgrounds");
        }
  });  //close create campground
   
});  // close app.post 


// NEW - SHOW FORM TO CREATE NEW CAMPGROUND
router.get("/new", middleware.isLoggedIn,function(req, res) {
   res.render("campgrounds/new"); 
});

//SHOW -- SHOWS MOER INFO ABOUT ONE CAMPGROUND
router.get("/:id", function(req,res){
    //FIND THE CAMPGROUND WOTH PROVIDED ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
           console.log(foundCampground);
           // RENDER SHOW TEMPLATE WITH THAT PAGE
            res.render("campgrounds/show", {campground: foundCampground});
       }
    });
    
});

//EDIT CAMPGROUND ROUTES
router.get("/:id/edit" , middleware.checkCampgroundOwndership ,function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
        
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwndership ,function(req,res){
   //find and update correct campground
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
      if(err){
          res.redirect("/campgrounds");
      }else{
          res.redirect("/campgrounds/"+ req.params.id);
      } 
   });

});

//DESTROY ROUTE
router.delete("/:id", middleware.checkCampgroundOwndership ,function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});



module.exports = router;