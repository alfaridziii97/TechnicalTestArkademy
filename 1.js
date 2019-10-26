function myBiodata(name,address){
  let biodataObj = {
    "name": 'Mochamad Salman Alfaridzi',
    "address": 'Komplek Permata Kopo Blok DA-7',
    "age": '22',
    "hobbies": [
      'Code', 'Browse', 'Music', 'Basket' 
    ],
    "is_married": false,
    list_school: [{
      name: 'SDN Taman Kopo Indah',
      year_in: 2003,
      year_out: 2009,
      major: null,
    },{
      name: 'SMPN 11 Bandung',
      year_in: 2009,
      year_out: 2012,
      major: null,
    },{
      name: 'SMK Angkasa 1 Margahayu',
      year_in: 2012,
      year_out: 2015,
      major: 'Rekayasa Perangkat Lunak',
    },{
      name: 'Universitas Komputer Indonesia',
      year_in: 2015,
      year_out: 2019,
      major: 'Teknik Informatika',
    }],
    skills: [{
      skill_name: 'UI Design',
      level: "Advance"
    },{
      skill_name: 'HTML',
      level: "Expert"
    },{
      skill_name: 'CSS',
      level: "Advance"
    },{
      skill_name: 'PHP',
      level: "Advance"
    },{
      skill_name: 'Laravel',
      level: "Advance"
    },{
      skill_name: 'JavaScript',
      level: "Beginner"
    }]
  }

  return biodataObj
}
console.log(myBiodata('MSalmanA'));