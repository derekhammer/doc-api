export class Doctor {
constructor() {}
static showStats(name, query, print) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&name=${name}&skip=0&limit=10&user_key=e1d3c357c0ca979935a1290986f0f6f1`).then(function(response){
      print(response);
    });

};
}
