import { Doctor } from './doc-api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#search').click(function(){
    $('#query').val("");
    $('#name').val("");

    let illness= $('#query').val();
    let name = $('#name').val();

    function searchResults(response){
      if (response == null) {
        $(".result").text("no search results")
      }

      for (let i=0; i<response.data.length; i++){
        $(".result").append('<li>Name:${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</li>}')
      }
    }
    Doctor.showStats(name, illness);
  });
});
