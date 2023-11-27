function createUser(name, address, bodyDimensions) 
{
    return {
      personalinfo: 
      {
        name: name,
        address: address,
      },
      bodyDimensions: bodyDimensions,
      getUserName: function() 
      {
        return this.personalInfo.name;
      },
      getUserAddress: function() 
      {
        return this.personalinfo.address;
      },
      getBodyDimensions: function() 
      {
        return this.bodyDimensions;
      },
      getUserFriends: function() 
      {
        return this.friends || [];
      },
    };
  }
  
  const usuario1 = createUser("John Doe", "123 Main St", { height: 180, weight: 75 });
  
  const usuario2 = { ...usuario1 };