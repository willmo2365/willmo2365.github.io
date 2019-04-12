$(document).ready(function() {
    "use strict";


    //------- Niceselect  js --------//  

    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };    


    //------- Skill  js --------//

    $('.skill').simpleSkillbar();

    //------- Filter  js --------//  

      $('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data
        })
      });


      if(document.getElementById("portfolio")){
            var $grid = $(".grid").isotope({
              itemSelector: ".all",
              percentPosition: true,
              masonry: {
                columnWidth: ".all"
              }
            })
      };


    //------- Timeline js --------//  


    $('.content').each( function(i){
      
      var bottom_of_object= $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).height();
      
      if( bottom_of_object > bottom_of_window){
        $(this).addClass('hidden');
      }
    });


    $(window).scroll( function(){
        /* Check the location of each element hidden */
        $('.hidden').each( function(i){
          
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},700);
            }
        });
    });


    //------- Superfish nav menu  js --------//

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });



    //------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

});

function adduser(){
    alert("adding user!");
    var email = document.getElementById("addEmail").value;
    var password = document.getElementById("addPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error"+ error.message);
    });
}

function signIn(){
    alert("Signing In");
    var email = document.getElementById("signinEmail").value;
    var password = document.getElementById("signinPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert("Error signing in");
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}




firebase.auth().onAuthStateChanged(function(user) {

    if (user) {

        alert(user.email);
        console.log(user.toJSON());

    }
});


function signOut(){
    firebase.auth().signOut().then(function() {
        alert("Signed out!");
    }).catch(function(error) {

    });
}