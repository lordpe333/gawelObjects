let number = 
{
    current: 0,
    add() 
    {
      this.current++;
      return this; 
    },
    subtract() 
    {
      this.current--;
      return this; 
    },
    showNumber: function() 
    {
      console.log(this.current);
      return this; 
    }
  };