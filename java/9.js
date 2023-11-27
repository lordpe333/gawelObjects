let fruits = 
{
    name: "",
    kg: 0,
    sell: function() 
    {
      console.log(`Sold ${this.kg} kg of ${this.name}.`);
      return this;
    },
    buy: function() 
    {
      console.log(`Bought ${this.kg} kg of ${this.name}.`);
      return this;
    },
    outOfStockDate: function() 
    {
      console.log(`Out of stock date for ${this.name} is not available.`);
      return this;
    },
    buyingDate: function() 
    {
      console.log(`Buying date for ${this.name} is not available.`);
      return this;
    }
  };