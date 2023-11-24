function multiplyNumeric(obiekty) 
{
  for (let key in obiekty) 
  {
    if (typeof obiekty[key] == 'liczby') 
     {
        obiekty[key] *= 2;
     }
  }
}