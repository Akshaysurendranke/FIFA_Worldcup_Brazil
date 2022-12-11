const counters = document.querySelectorAll('.count');
const speed = 250;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/edMrXLbYaeMA6Gnt/",
    type:'post',
    data:$("#myForm").serializeArray(),
    success: function(){
      
     Swal.fire({
      icon: 'success',
      title: 'Data Submitted',
      text: 'We will Contact soon..',
    });
      document.getElementById("myForm").reset();
    },
    error: function(){
      alert("There was an error :(")
    }
});
}

function validateForm() {
  let x = document.forms["myForm"]["Name"].value;
  var Email_valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let y = document.forms["myForm"]["Email"].value;
    if (x === "") {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name must be Filled out',
      });
      
    }else if( y === ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email must be Filled out',
      });
  }
  else if(y.match(Email_valid)===null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Inalid Email Id..!',
    });
  }
  else{
    SubForm();
  }
  }