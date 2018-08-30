import { Doctor } from './doc-api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#search').click(function(){
    $('#query').val("");
    $('#name').val("");

    let query= $('#query').val();
    let name = $('#name').val();

    function searchResults(response){
      if (response.data.length == 0) {
        $(".result").text("no search results")

      }

      for (let i=0; i<response.data.length; i++){
        $('.result').append('<p>Name:${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p>}')

      }
    }
    Doctor.showStats(name, query, searchResults);
  });
});
