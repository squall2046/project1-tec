
$(document).ready(function () {

  //==============================
  // Click Search Meal(Left side)
  //==============================
  $("#food-search-button").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    // $(".video-play").empty();
    event.preventDefault();

    // api:
    var searchTerm = $("#food-search").val();
    var foodQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm;
    $.ajax({
      url: foodQueryURL,
      method: "GET"
    }).then(function (response) {

      // firebase:
      // database.ref("/mealDB").set({
      //   video: response.meals[0].strYoutube,
      // })
      // database.ref("/mealDB").on("value", function (snapshot) {
      //   var apiMVideo = snapshot.val().video;

      // left side changes:
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')

      //==============================
      // Click Video Button(Left side)
      //==============================
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID

      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions);
      // other recommended:
      var recommendURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchTerm;
      $.ajax({
        url: recommendURL,
        method: "GET"
      }).then(function (response) {
        $("#food-recommend").empty();
        if (response.meals.length > 1) {
          $("#food-recommend").html("<br><div>Other Recommendations:</div>")
          for (var i = 0; i < response.meals.length; i++) {
            $("#food-recommend").append("&star; " + response.meals[i].strMeal + "<br>");
          }
        }
      })
    })
  });

  //==============================
  // Click Random Meal(Left side)
  //==============================
  $("#food-random-button").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();
    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {

      // left side changes:
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')

      //==============================
      // Click Video Button(Left side)
      //==============================
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID

      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })

      // right side changes:
      $("#right-default").hide();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions);
    })
  });

  //===========================================↑↑ Food ↑↑=========================================================================================================================
  //===========================================================================↓↓ Drink ↓↓========================================================================================

  //==============================
  // Click Search Drink(right side)
  //==============================
  $("#drink-search-button").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    searchTerm = $("#drink-search").val();
    var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm;
    $.ajax({
      url: drinkQueryURL,
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
      // other recommended:
      if (response.drinks.length > 1) {
        $("#drink-results").append("<br><div class='wow fadeInLeft'>Recommended:</div>")
        for (var i = 0; i < response.drinks.length; i++) {
          $("#drink-results").append("<div class='wow fadeInLeft'>&star; " + response.drinks[i].strDrink + "<br></div>");
        }
      }
    });
  });

  //==============================
  // Click Random Drink(right side)
  //==============================
  $("#drink-random-button").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#drink-results").empty();
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  //==============================
  // Click Sample Pictures
  //==============================
  $(".sample-drink").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
  })
  $(".sample-food").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
  })


  //-----------------------------------------------------------------------------
  /////////////// Circle 1 ///////////////
  $(".circle1").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle1").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 2 ///////////////
  $(".circle2").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle2").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 3 ///////////////
  $(".circle3").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle3").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 4 ///////////////
  $(".circle4").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle4").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 5 ///////////////
  $(".circle5").on("click", function () {
    $("#drink-video").css("display", "none");
    $("#food-video").css("display", "block");
    $("#right-side").css("background-image", "url(#)");
    $("#right-side").css("background-color", "black");
    $(".video-play").empty();

    event.preventDefault();

    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      // left side changes:
      $(".circle5").attr("src", response.meals[0].strMealThumb);
      $("#food-photo").attr("src", response.meals[0].strMealThumb);
      $(".switch-video").html('<a class="btn-floating btn-large red pulse"><i class="material-icons">movie</i></a>')
      var videoID = response.meals[0].strYoutube.split('v=')[1];
      var VideoLink = "https://www.youtube.com/embed/" + videoID
      $(".switch-video").on("click", function () {
        $(".switch-video").empty();
        $(".video-play").html('<iframe width="100%" src="' + VideoLink + '" frameborder="0" allowfullscreen></iframe>');
      })
      // right side changes:
      $("#left-default").show();
      $("#right-default").hide();
      $("#drink-photo").attr("src", "#");
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-results").append("<h4></br>Meal: " + response.meals[0].strMeal + "</h4>");
      $("#food-results").append("</br> Area: " + response.meals[0].strArea);
      $("#food-results").append("</br> Category: " + response.meals[0].strCategory + "</br>");
      $("#food-results").append("<br><br> Ingredients:<br>");
      if (response.meals[0].strIngredient1.length > 0) { $("#food-results").append(response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1 + "<br>") };
      if (response.meals[0].strIngredient2.length > 0) { $("#food-results").append(response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2 + "<br>") };
      if (response.meals[0].strIngredient3.length > 0) { $("#food-results").append(response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3 + "<br>") };
      if (response.meals[0].strIngredient4.length > 0) { $("#food-results").append(response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4 + "<br>") };
      if (response.meals[0].strIngredient5.length > 0) { $("#food-results").append(response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5 + "<br>"); };
      if (response.meals[0].strIngredient6.length > 0) { $("#food-results").append(response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6 + "<br>") };
      if (response.meals[0].strIngredient7.length > 0) { $("#food-results").append(response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7 + "<br>") };
      if (response.meals[0].strIngredient8.length > 0) { $("#food-results").append(response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8 + "<br>") };
      if (response.meals[0].strIngredient9.length > 0) { $("#food-results").append(response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9 + "<br>") };
      if (response.meals[0].strIngredient10.length > 0) { $("#food-results").append(response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10 + "<br>") };
      if (response.meals[0].strIngredient11.length > 0) { $("#food-results").append(response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11 + "<br>") };
      if (response.meals[0].strIngredient12.length > 0) { $("#food-results").append(response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12 + "<br>") };
      if (response.meals[0].strIngredient13.length > 0) { $("#food-results").append(response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13 + "<br>") };
      if (response.meals[0].strIngredient14.length > 0) { $("#food-results").append(response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14 + "<br>") };
      if (response.meals[0].strIngredient15.length > 0) { $("#food-results").append(response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15 + "<br>") };
      if (response.meals[0].strIngredient16.length > 0) { $("#food-results").append(response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16 + "<br>") };
      if (response.meals[0].strIngredient17.length > 0) { $("#food-results").append(response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17 + "<br>") };
      if (response.meals[0].strIngredient18.length > 0) { $("#food-results").append(response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18 + "<br>") };
      if (response.meals[0].strIngredient19.length > 0) { $("#food-results").append(response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19 + "<br>") };
      if (response.meals[0].strIngredient20.length > 0) { $("#food-results").append(response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20 + "<br>") };
      $("#food-results").append("<br> Instructions: <br> " + response.meals[0].strInstructions + "<br>");
    })
  });

  /////////////// Circle 6 ///////////////
  $(".circle6").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle6").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("<br> Instructions: <br> " + response.drinks[0].strInstructions + "<br>");
    });
  });

  /////////////// Circle 7 ///////////////
  $(".circle7").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle7").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  /////////////// Circle 8 ///////////////
  $(".circle8").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle8").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  /////////////// Circle 9 ///////////////
  $(".circle9").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle9").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });

  /////////////// Circle 10 ///////////////
  $(".circle10").on("click", function () {
    $("#food-video").css("display", "none");
    $("#drink-video").css("display", "block");
    $("#left-side").css("background-image", "url(#)");
    $("#left-side").css("background-color", "black");
    event.preventDefault();

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET"
    }).then(function (response) {
      $("#drink-photo").attr("src", response.drinks[0].strDrinkThumb);
      $(".circle10").attr("src", response.drinks[0].strDrinkThumb);

      // left side changes:
      $("#left-default").hide();
      $("#right-default").show();
      $("#drink-results").empty();
      $("#food-results").empty();
      $("#food-photo").attr("src", "#");
      $("#drink-results").append("<h4></br>Drink: " + response.drinks[0].strDrink + "</h4></br>");
      $("#drink-results").append("</br> Glass type: " + response.drinks[0].strGlass + "</br>");
      $("#drink-results").append("</br> Ingredients:</br>");
      if (response.drinks[0].strIngredient1.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1 + "<br>") };
      if (response.drinks[0].strIngredient2.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2 + "<br>") };
      if (response.drinks[0].strIngredient3.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3 + "<br>") };
      if (response.drinks[0].strIngredient4.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4 + "<br>") };
      if (response.drinks[0].strIngredient5.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5 + "<br>") };
      if (response.drinks[0].strIngredient6.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6 + "<br>") };
      if (response.drinks[0].strIngredient7.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7 + "<br>") };
      if (response.drinks[0].strIngredient8.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8 + "<br>") };
      if (response.drinks[0].strIngredient9.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9 + "<br>") };
      if (response.drinks[0].strIngredient10.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10 + "<br>") };
      if (response.drinks[0].strIngredient11.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11 + "<br>") };
      if (response.drinks[0].strIngredient12.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12 + "<br>") };
      if (response.drinks[0].strIngredient13.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13 + "<br>") };
      if (response.drinks[0].strIngredient14.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14 + "<br>") };
      if (response.drinks[0].strIngredient15.length > 0) { $("#drink-results").append(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15 + "<br>") };
      $("#drink-results").append("</br> Instructions: </br> " + response.drinks[0].strInstructions + "</br>");
    });
  });
  //==============================
  // Click back to home button
  //==============================
  $(".home-button").on("click", function () {
    location.reload();
  });
})