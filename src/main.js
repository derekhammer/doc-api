import { Doctor } from './doc-api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#search').click(function(){
    let query= $('#query').val();
    let name = $('#name').val();

    $('#query').val("");
    $('#name').val("");


    let doctor = new Doctor(name, query);
console.log(doctor);
    function searchResults(response){
      if (response.data.length == 0) {
        console.log(response.data);
        $(".result").text("no search results")

      }

      for (let i=0; i<response.data.length; i++){
        $('.result').append('<p>Name: '+response.data[i].profile.first_name + response.data[i].profile.last_name+ ' </p>')

      }
    }
    doctor.showStats(name, query, searchResults);
  });
});
