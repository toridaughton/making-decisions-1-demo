let obiWanAttack = 35;
let anakinAttack = 25;
let anakinHealth = 100;
let anakinDefense = 0;

if (anakinAttack > obiWanAttack) {
  console.log("Anakin has the stronger attack.")
}
else if (obiWanAttack > anakinAttack) {
  console.log("ObiWan has the higher attack.")
}
else {
  console.log("The force is with both of them")
}

if(anakinHealth <= 0) {
  console.log("Anakin has fallen. #noLegs")
}
else{
  anakinHealth -= obiWanAttack
  console.log(`Anakin's health is now, ${anakinHealth}`)
}

console.log(anakinDefense)

anakinDefense += 25

if(anakinHealth <= obiWanAttack - anakinDefense) {
  console.log ("Anakin has fallen. #oneMetalArm")
}

else {
  anakinHealth -= obiWanAttack - anakinDefense
  console.log(`Anakin's health is now, ${anakinHealth}`)
}

console.log("Anakin takes a medpack")

if (anakinHealth + 50 >= 100) {
  anakinHealth = 100
  console.log(anakinHealth)
}

else {
  anakinHealth += 50
  console.log(anakinHealth)
}