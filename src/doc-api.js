export class Doctor {
constructor(name, query) {
  this.name = name;
  this.query = query;
}
showStats(name, query, print) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&name=${name}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(function(response){
      print(response);
    });

};
}
