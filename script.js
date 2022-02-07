$(".attitude-button").click(function() {
    let q1Input = $(".q1").val();
	let q2Input = $(".q2").val();

    
    
//$(".fashion-button").click(function() {
   

    if (q2Input === "Edgy Couture" && q1Input >= 8) {
        $(".fashion-answer").text("Youre Giving Raqelle! You are more clever (or devious). You know how to use people in order to get what you want. Even if you fail, you never give up!");
        $(".barb").hide();
        $(".ken").hide();
        $(".nik").hide();
    } else if (q2Input === "Edgy Couture" && q1Input >= 7) {
        $(".fashion-answer").text("Youre Giving Raqelle! You are more clever (or devious). You know how to use people in order to get what you want. Even if you fail, you never give up! ");
        $(".barb").hide();
        $(".ken").hide();
        $(".nik").hide();
    } else if (q2Input === "Y2k streetwear" && q1Input >=6 ) { 
             $(".fashion-answer").text("Youre Giving Nikki! Smart, sassy, and totally fun to be around, youre a “what you see is what you get” kind of girl. For you no adventure is too crazy. To your friends youre a softy, but if someone crosses one of your friends, they’ll discover a dose of your wicked wit. You always know whats trending!"); 
        $(".barb").hide();
        $(".ken").hide();
        $(".elle").hide();
    } else if (q2Input === "Cool and Casual" && q1Input <=5) { 
             $(".fashion-answer").text("Youre Giving Ken!");
        $(".barb").hide();
        $(".elle").hide();
          $(".nik").hide();
    } else if (q2Input === "Preppy Glam" && q1Input <=3) { 
             $(".fashion-answer").text("You'*----------------                                               re Giving Barbie!");

        $(".ken").hide();
        $(".elle").hide();
        $(".nik").hide();
      
}
    
});
    
    
    
