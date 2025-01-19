// Descriptions for Narsil
const descriptions = {
    introductory: {
      veryBrief: "Narsil was the sword of Elendil, used in the War of the Last Alliance.",
      midSize: "Narsil, the sword of Elendil, played a pivotal role in the War of the Last Alliance. It was famously broken by Sauron’s forces and later reforged as Andúril.",
      long: "Narsil, forged by the Elven smiths of Rivendell, was the sword of Elendil, High King of Gondor, and wielded during the War of the Last Alliance. It was shattered in the battle against Sauron. The sword’s hilt and shards were preserved until Aragorn, a descendant of Elendil, reforged it as Andúril, the Flame of the West, which became a symbol of hope for Middle-earth during the War of the Ring."
    },
    average: {
      veryBrief: "Narsil was the legendary sword of Elendil, crucial in the defeat of Sauron.",
      midSize: "Narsil was the sword wielded by Elendil, king of Gondor, during the War of the Last Alliance. It was broken during the battle but was later reforged as Andúril by Aragorn.",
      long: "Narsil was forged by the Elven smiths and wielded by Elendil, the last High King of Gondor, during the Last Alliance against Sauron. It shattered in the battle but its shards were kept and eventually reforged into Andúril by Aragorn. Narsil became a symbol of hope and resistance against Sauron’s tyranny, with Aragorn using the reforged blade in the War of the Ring."
    },
    advanced: {
      veryBrief: "Narsil, Elendil's sword, was shattered by Sauron but later reforged as Andúril.",
      midSize: "Narsil, forged by the smiths of Rivendell, was wielded by Elendil during the War of the Last Alliance. The sword was broken in the battle but was later reforged as Andúril by Aragorn, serving as a symbol of his right to the throne of Gondor.",
      long: "Narsil was a symbol of the ancient kings of Gondor and was forged in Rivendell by the Elven smiths. It was wielded by Elendil, the last High King of Gondor, during the War of the Last Alliance, where it was shattered by Sauron’s strike. The sword was preserved, and its shards were passed down through the generations. Eventually, Aragorn, a direct heir of Elendil, reforged Narsil into Andúril. This reforging was significant not only for its martial use but also as a symbol of Aragorn's claim to the throne of Gondor and the fight against Sauron’s forces."
    }
  };
  
// Function to update the description based on selected values
function updateDescription() {
  const complexity = document.querySelector('input[name="complexity"]:checked');
  const length = document.querySelector('input[name="length"]:checked');

  if (complexity && length) {
    const complexityValue = complexity.value;
    const lengthValue = length.value;
    const descriptionText = descriptions[complexityValue][lengthValue];
    document.getElementById("descriptionText").innerText = descriptionText;
  } else {
    document.getElementById("descriptionText").innerText = "Please select both complexity and length to see the description.";
  }
}

// Add event listeners to radio buttons
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
  radio.addEventListener('change', updateDescription);
});

// Initialize with default selected values
document.addEventListener("DOMContentLoaded", () => {
  updateDescription();
});
