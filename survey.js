const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknmes are also acceptable :)", (name) => {
  console.log(`Your name is : ${name}`);
  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`Your favorite activity is : ${activity}`);
    rl.question("What do you listen to while doing that?", (music) => {
      console.log(`You listen : ${music}`);
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (meal) => {
          console.log(`Your favourite meal is : ${meal}`);
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (food) => {
              console.log(`your favourite things for the meal is : ${food}`);
              rl.question(
                "Which sport is your absolute favourite?",
                (sport) => {
                  console.log(`Your favourite sports is: ${sport}`);
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (power) => {
                      console.log(`Your super power is: ${power}`);

                      console.log(
                        `${name} likes doing ${activity} while lietening ${music} and likes eating ${food} for ${meal}. Favorite sport is ${sport} and great at ${power}!!`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
