// //==================================(Q.1)==============================

// function createData(num) {
//     return function(x) {
//       return num + x;
//     }
//   }
//   const addFive = createData(5);
//   console.log(addFive(10)); 
//   console.log(addFive(3)); 
//   console.log(addFive(-7)); 





//   //==================================(Q.2)==============================
  

//   function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
//     if (arr[0] === val) {
//       return true;
//     } else {
//       return searchArray(arr.slice(1), val);
//     }
//   }
//   const myArray = [1, 3, 5, 7, 9];
//   console.log(searchArray(myArray, 5));
//   console.log(searchArray(myArray, 2)); 
  




//    //==================================(Q.3)==============================

//    function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph('Muhammad Sumama Khan');


// //==================================(Q.4)==============================  


// function addListItem(text) {
//     const newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     const list = document.getElementById('my-list');
//     list.appendChild(newListItem);
//   }
//   addListItem('This is a new list item.');
  





//  //==================================(Q.5)==============================

//  function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.getElementById('my-element');
//   changeBackgroundColor(myElement, 'blue');



// //==================================(Q.6)==============================


// function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const myObject = { name: 'Sumama', age: 20 };
//   saveObjectToLocalStorage('my-object', myObject);
  


// //==================================(Q.7)==============================


// function getObjectFromLocalStorage(key) {
//     const objString = localStorage.getItem(key);
//     if (objString) {
//       return JSON.parse(objString);
//     } else {
//       return null;
//     }
//   }
//   const myObject = getObjectFromLocalStorage('my-object');
//   console.log(myObject);
  





  
// //==================================(Q.8)==============================


// function saveObjectPropertiesToLocalStorage(obj) {
//     // save each property to localStorage
//     for (const [key, value] of Object.entries(obj)) {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
  
//     // retrieve the object from localStorage and return it
//     const newObj = {};
//     for (const key of Object.keys(obj)) {
//       const valueString = localStorage.getItem(key);
//       if (valueString) {
//         newObj[key] = JSON.parse(valueString);
//       } else {
//         newObj[key] = null;
//       }
//     }
//     return newObj;
//   }
//   const myObject = { name: 'Sumama', age: 20 };
//   const savedObject = saveObjectPropertiesToLocalStorage(myObject);
//   console.log(savedObject);
  

  