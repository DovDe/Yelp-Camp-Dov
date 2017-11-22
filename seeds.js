var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {name: "Ground 1",
     image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=1375&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
     description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue nisi imperdiet hendrerit. Aenean suscipit risus metus, ut elementum lacus pellentesque nec. Fusce nec congue massa. Vivamus lacinia ante tincidunt pulvinar lacinia. Sed eu quam bibendum, egestas leo dignissim, dictum ante. Sed fermentum eros in magna pretium sollicitudin. Maecenas ut efficitur sem. Phasellus accumsan diam eu leo bibendum ultricies. Donec et odio tortor. Fusce quis tortor viverra, imperdiet ante quis, pulvinar libero. Sed malesuada lectus libero, lobortis molestie libero accumsan eget. Maecenas molestie purus vitae tellus posuere, sed pharetra eros scelerisque. Fusce eu elit ac nulla eleifend tristique nec at neque. In ac libero et augue egestas ultricies quis sed orci. Vivamus venenatis lacinia auctor. Vivamus a venenatis augue. Suspendisse maximus faucibus elit. Cras aliquet justo sit amet dolor tincidunt tempus. Aliquam ipsum nunc, lobortis quis pretium viverra, porta sed ante. Pellentesque ac risus at ex cursus vehicula vitae ut velit. Integer sed aliquet leo, ut finibus ligula."
    },
       {name: "Camping Ground",
     image: "https://images.unsplash.com/photo-1496154077138-22d8a3b92e8b?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue nisi imperdiet hendrerit. Aenean suscipit risus metus, ut elementum lacus pellentesque nec. Fusce nec congue massa. Vivamus lacinia ante tincidunt pulvinar lacinia. Sed eu quam bibendum, egestas leo dignissim, dictum ante. Sed fermentum eros in magna pretium sollicitudin. Maecenas ut efficitur sem. Phasellus accumsan diam eu leo bibendum ultricies. Donec et odio tortor."
    },
       {name: "Ground 2",
     image: "https://images.unsplash.com/photo-1505168125601-4ddfdea4c7e7?auto=format&fit=crop&w=1351&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue nisi imperdiet hendrerit. Aenean suscipit risus metus, ut elementum lacus pellentesque nec. Fusce nec congue massa. Vivamus lacinia ante tincidunt pulvinar lacinia. Sed eu quam bibendum, egestas leo dignissim, dictum ante. Sed fermentum eros in magna pretium sollicitudin. Maecenas ut efficitur sem. Phasellus accumsan diam eu leo bibendum ultricies. Donec et odio tortor."
    },
    ]
function seedDB(){
    //REMOVE ALL CAMPGROUNDS

    Campground.remove({}, function(err){
            // if(err){
            //     console.log(err);
            // }else{
            //     console.log("remove");
            //      //ADD A FEW CAMPGROUNDS
            //     data.forEach(function(seed){
            //     Campground.create(seed, function(err, campround){
            //          if(err){
            //              console.log(err);
            //          }else{
            //             console.log("added a campground");
            //                  // ADD A FEW COMMENTS
            //                  Comment.create(
            //                      {
            //                          text: "some seed text for testing the app",
            //                          author: "Homer"
            //                      }, function(err, comment){
            //                          if(err){
            //                              console.log(err);
            //                          }else{
            //                              campround.comments.push(comment);
            //                              campround.save();
            //                              console.log("created comment");
            //                          }
            //                      });
            //              } 
            //         });
            //  });
            // }
    }); 
   
    
   
    
}
module.exports = seedDB;

