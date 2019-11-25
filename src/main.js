import { DoctorName } from './business.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

$(document).ready(function(){
  $("#symptomButton").click(function(event){
    event.preventDefault;
    const userSymptom = $("#symptom").val();
    const docName = $("#name").val();
    $("#name").val('');
    $("#symptom").val('');
    (async () => {
      let doctor = new DoctorName();
      // const nameResponse = await doctor.getName(userSymptom);
      const nameResponse = await doctor.getName(docName, userSymptom);
      getPath(nameResponse);
    })();
      function getPath(response) {
        const doctors = response.data
        if (doctors.length > 0) {
          doctors.forEach(function(doctor) {
            // const name = `${doctor.profile.first_name} ${doctor.profile.last_name}`

          const template = `<li>
          <div>First Name: <span>${doctor.profile.first_name}</span></div>
          <div>Last Name: <span>${doctor.profile.last_name}</div>
          </li>`
          // <li>Address: <span>${address'></span></li>
          // <li>Phone Number: <span class='phone'></span></li>`
            $('#showDoctor ul').append(template)
          })
        } else {
          $("#showDoctor").text('No doctors meet this criteria.')
        }
      }
    });
  });
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
