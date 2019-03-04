

function printPrimes(num) {
for (var i = 3; i <= num; i++) {
    primeNumber = true;
    for (var x = 2; x <= (i/2); x++) {
            if (i%x === 0) {
                primeNumber = false;
            }
        }
    if (primeNumber === true)
    {
        console.log(i);
    }

}
}

var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];

  var videoFiles = [];
  var imageFiles = [];

  files.forEach(function splittingHairs(x) {
      y = x.split(".");
      if ((y[1] === "jpg") || (y[1] === "gif") || (y[1] === "jpeg") || (y[1] === "png")) {
        y=y.join(".");
        imageFiles.push(y);  
      }
      else if ((y[1] === "mov") || (y[1] === "avi") || (y[1] === "mpeg") || (y[1] === "mp4") || (y[1] === "mpg")) {
          y=y.join(".");
          videoFiles.push(y);
      }

  })

  console.log(videoFiles);
  console.log(imageFiles);