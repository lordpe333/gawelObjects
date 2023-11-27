function createUser(name, address, bodyDimensions) 
{
    return {
      personalInfo: 
      {
        name: name,
        address: address,
      },
      bodyDimensions: bodyDimensions,
    };
  }
  
  const usuario1 = createUser("John Doe", "123 Main St", { height: 180, weight: 75 });

  const usuario2 = { ...usuario1 };