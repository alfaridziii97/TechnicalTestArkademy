function is_name_valid(name) {
    // Huruf dari a sampai z
    var uppercaseRe = /[A-Z]/g;
    
    // check panjang string dan memastikan karater yang ditemukan sama dengan panjang string
      if(name.length >= 3 && name.match(uppercaseRe).length == name.length) {
          return true;
      }
      return false;
  }
  
  function is_age_valid(age) {
    // angka dari 0 sampai 9
    var numberRe = /[0-9]/g;
  
    if(age.length == 2 && numberRe.test(age)) {
       return true;
    }
  
    return false;
  }
  
  function is_username_valid(username) {
    // huruf keci a sampai z
    var lowercaseRe = /[a-z]/g;
  
    // karater unik _@#$ atau %
    var specialRe = /[_.]/g;
    
    // angka dari 0 sampai 9
    var numberRe = /[0-9]/g;
  
    if(username.length == 8
       && lowercaseRe.test(username)
       && specialRe.test(username)
       && numberRe.test(username.length==3)) {
       return true;
    }
  
    return false;
  }

  console.log(is_name_valid('sal'));
  console.log(is_age_valid('12'));
  console.log(is_username_valid('123'));