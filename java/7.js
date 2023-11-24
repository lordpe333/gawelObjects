function getTotalKgPerFruit(frutas) 
{
    const result = {};
  
    for (const fruit in frutas) 
    {
      if (frutas.hasOwnProperty(fruit)) {
        const [fruitName, variety] = fruit.split(' ');
        const totalKg = frutas[fruit];
  
        if (result[fruitName]) 
        {
          result[fruitName].totalKg += totalKg;
        } else 
        {
          result[fruitName] = 
          {
            totalKg,
            varieties: [variety],
          };
        }
      }
    }
  
    return result;
  }
  
  const frutas = 
  {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  
  const totalKgPerFruit = getTotalKgPerFruit(frutas);
  console.log("Total kg per fruit:", totalKgPerFruit);