function getTotalKgUsingForOf(frutas) 
{
    let totalKg = 0;
  
    for (const fruit in frutas) 
    {
      if (frutas.hasOwnProperty(fruit)) 
      {
        totalKg += frutas[fruit];
      }
    }
  
    return totalKg;
  }
  const frutas = 
  {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  
  const totalKg = getTotalKgUsingForOf(frutas);
  console.log("Total kg using for...of:", totalKg);