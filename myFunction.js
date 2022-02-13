

function myFunction() {
  var searchTerm = document.querySelector('#searchTerm').value;
  const m = document.getElementById("response-container");
 
  console.log(searchTerm);
  fetch(
    'https://api.zippopotam.us/us/' + searchTerm
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var table='<table><tr>';
   for (var prop in data) {

         //alert(prop + " is " + prop);
       
      
      
         if (prop == "places") {

          for (var key in data[prop][0]) {
            table+='<td>'+data[prop][0][key] +'</td>';
            }
          table+='</tr></table>';
        }
        $('#mytable').empty().html(table);

      }
    })
    
    }


function myFunction2() {
  var liq = document.querySelector('#liq').value;
  const m = document.getElementById("response-container2");
  m.innerHTML = "";

  //alert("liq " + liq);
  fetch(
    //// 'http://universities.hipolabs.com/search?country=' + country
    'https://thecocktaildb.com/api/json/v1/1/search.php?s='+liq
    
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
       //alert(data[0].strDrinkThumb);
       // for (let i = 0; i < 5; i++) {
        // m.innerHTML += `<h6>${data[i].name}</h6>`;
        // m.innerHTML += `<h6>${data[i].web_pages[0]}</h6>`;
        //alert(data[i].strIngredient1);
         //'
        // m.innerHTML += `<h6>${data[i].strDrinkThumb}</h6>`;
        //alert(data.drinks[0].strDrinkThumb);
        for (let i = 0; i <9; i++) {
          console.log(data.drinks[i].strDrinkThumb);
          m.innerHTML+= '<img src='+data.drinks[i].strDrinkThumb +' width=300px; height=300px> ';
      }})
      // for (var prop in data) {

      //   //alert(prop + " is " + prop);
      //   m.innerHTML = m.innerHTML +
      //     "<h6>" + data[prop] + "</h6>";


      // }


    }

