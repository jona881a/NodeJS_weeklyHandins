function addNormalFunction(x, y) {
  return x + y;
}

const addAnonymousFunction = function (x, y) {
  return x + y;
};

const addArrowFunction = (x, y) => {
  return x + y;
};

const addLambdaFunction = (x, y) => x + y;

console.log(addNormalFunction(10, 5));

function doActionWithSomeone(anyFunctionReference, name) {
  anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

doActionWithSomeone(running, "Anders");

const catching = (name, action) => `${name} was ${action}`;

const capturePokemon = (functionReference, name, action) =>
  console.log(functionReference(name, action));

capturePokemon(catching, "Palkia", "Captured!");
capturePokemon(catching, "Magikarp", "brutally murdered by your infernape 😱");
capturePokemon(
  catching,
  "Piplup",
  "flattened like a pancake by your fat Snorlax"
);
capturePokemon(catching, "Pikachu", "grilled by Charizard 🔥");
