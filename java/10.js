let carParts = 
{
    engine: 5,
    tires: 8,
    brakes: 4,
    lights: 10,
    battery: 2
  };
  
  function addQuantityToParts(parts, numberToAdd) 
  {
    for (let part in parts) 
    {
      if (parts.hasOwnProperty(part)) 
      {
        parts[part] += numberToAdd;
      }
    }
  }