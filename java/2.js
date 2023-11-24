let salaries = {
  Piotr: 100,
  Daniel: 160,
  Damian: 130
};

let sum = 0;
for (let key in salaries) 
{
  sum += salaries[key];
}

alert(sum);