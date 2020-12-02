let expenseArray = Array();

let pairThem = (array, sum) => {
    let expenseReport = {},
      choices = []

        for (let i = 0; i < array.length; i++){
            if (expenseReport[array[i]]){
                choices.push([expenseReport[array[i]], array[i]])
            }else{
                expenseReport[sum - array[i]] = array[i];
            }
          }
          return choices;
    }

function getInputValue()
{
  expenseArray = document.getElementById("expensesText").value;
  document.getElementById("theText").innerHTML = expenseArray;
  let individual = expenseArray.split("\n"); //split on a new line

  document.getElementById("theArray").innerHTML = individual;

  desire = document.getElementById("desire").value;
  document.getElementById("goal").innerHTML= desire;

  //valueResult = (pairThem([1721,979,366,299,675,1456],desire));
  valueResult = (pairThem(individual,desire));
  document.getElementById("values").innerHTML= valueResult;
}
