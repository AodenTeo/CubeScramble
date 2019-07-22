var express = require("express");
var app = express();
//Here we set the view engine so that we don't need to write .ejs after everything
app.set("view engine", "ejs");

//Here we put the landing page
app.get("/", function(req, res){
    var images = ["https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/66495555_868118760214546_8897381016906235904_o.png?_nc_cat=109&_nc_oc=AQnDp9LeoimO6LV4k8jYkSf5RWJN1x6lukmd9wAykXojplVqVpCJrT2hJwOIHZqyKT4&_nc_ht=scontent.fsin9-2.fna&oh=b030c323e6535398ae14cb95656d9b43&oe=5DE37530"]
    res.render("landing", {images: images});
})

//Here we put the scrambling page
app.get("/scramble", function(req, res){
    res.render("scramble")
})

//Here we put the reconstructions page
app.get("/reconstructions", function(req, res){   
    res.render("reconstruct")
})
app.get("/my-reconstructions", function(req, res){
    
    //This is the data that will be passed into the ejs file
    var reconStrings = ["https://alg.cubing.net/?alg=x2_%2F%2F_inspection%0Ar-_F2_R_U-_R_u_%2F%2F_Xcross%0AU-_R_U-_R-_U_R_U-_R-_%2F%2F_2nd_pair%0Ay-_U_F_R_U-_R-_U-_F-_%2F%2F_3rd_pair%0AU_U_R_U-_R-_y-_%2F%2F_EO(CP)%0AU-_R-_U_R_%2F%2F_ini%0AU-_R-_U-_R_U_R-_U-_R_U_R-_U_R_%2F%2F_WVLS%0AR-_U_R-_U-_R-_U-_R-_U_R_U_R2-_U_%2F%2F_EPLL&setup=L2_B2_F_D2_B_F-_D2_R-_U_B_R_U-_L2_B-_F2_D2_F2_L&type=reconstruction&title=Feliks%20Zemdegs", "https://alg.cubing.net/?alg=z_y2_%2F%2F_inspection%0AD-_r_U2_R2-_U-_F2_D_%2F%2F_Xcross%0AU_R-_U-_R_U-_R-_U-_R_%2F%2F_2nd_pair%0Ay-_U_F_R_U-_U-_R-_F-_%2F%2F_3rd_pair%0Ay-_U_R-_U-_R_U_R-_U2-_R2_%2F%2F_4th_pair%0AU_R-_U_R_U2-_R-_%2F%2F_OLL%0AU_R-_U-_F-_R_U_R-_U-_R-_F_R2_U-_R-_U-_R_U_R-_U_R_U_%2F%2F_PLL&setup=L-_R_D2_F2_L_D2_R-_D2_B-_R_B2_F_U-_B_D-_B_U2_R_B&type=reconstruction&title=Feliks%20Zemdegs", "https://alg.cubing.net/?alg=x-_y-_%2F%2F_inspection%0AR2-_D-_r_U_L_D-_%2F%2F_Xcross%0AR_U_R-_U_R-_U-_R_%2F%2F_2nd_pair%0AU-_F_R-_F-_R_%2F%2F_3rd_pair%0Ad-_x-_R_U-_R-_U_l-_U_R_%2F%2F_4th_pair%0AU-_R_U_R-_U_R_U2-_R-_%2F%2F_OLL%0AU2_R_U_R-_F-_R_U2-_R-_U2-_R-_F_R_U_R_U2-_R-_U_%2F%2F_PLL&setup=D2_U2_R2_U2_B2_F-_R2_F-_D2_F_U_L_F-_R2_B_R-_B2_D-_B-_F&type=reconstruction&title=Feliks%20Zemdegs", "https://alg.cubing.net/?alg=x-_y2_%2F%2F_inspection%0AR2_(U-_D)_L-_D_R-_%2F%2F_cross%0Ay-_R_U-_R-_%2F%2F_1st_pair%0AU-_U-_R-_U-_R_U-_R-_U_R_%2F%2F_2nd_pair%0Ay-_R_U2-_R-_U_U_L-_U-_L_%2F%2F_3rd_pair%0AU-_R_U_R-_U2_R_U-_R-_%2F%2F_4th_pair%0AF_R_U-_R-_U-_R_U_R-_F-_%2F%2F_OLL%0AR_U-_R-_U-_R_U_R_D_R-_U-_R_D-_R-_U2_R-_U-_%2F%2F_PLL&setup=L_B2_D2_F2_D2_R-_F2_D2_R_B_R_B-_L2_F_U2_B-_R_D_F-&type=reconstruction&title=Feliks%20Zemdegs"]
    ///////////////////////////////////

    res.render("myreconstructions", {urls: reconStrings})
})
app.get("/login", function(req, res){   
    res.render("login")
})

app.get("/sign-up", function(req, res) {
    res.render("signup")
})


app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("The CubeScramble server has started");
})