export class Doctor{
constructor() {}
static showStats(name, query) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&name=${name}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`).then(function(response){
      console.log(response);
    });

};
}
