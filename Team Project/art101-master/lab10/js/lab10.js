/**
 * Author:    Alexis Sanchez
 * Created:   2/12/2021
 **/

var buttonEl = document.getElementById('my-button');
buttonEl.addEventListener('click', function buttonPress() {
    var inputValue = document.getElementById('user-name').value;
    var nameArray = inputValue.split('');
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySort.join('');

    var replace = document.getElementById('output')
    var newEL = document.createElement('p')
    newEL.innerHTML = nameSorted; document.body.appendChild(newEL)
  }
)
