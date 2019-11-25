export class DoctorName{
  async getName(docName, userSymptom) {
    try {
      let nameResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?${docName}&query=${userSymptom}&user_location=45.5051%2C122.6750&skip=0&limit=10&user_key=262c57b8c7d02a5e7fab8baba2a526b4`);
      let jsonifiedResponse = await nameResponse.json();
      return jsonifiedResponse;
    } catch(error) {
    alert("hi");
    }
  }

  // async getName(userSymptom) {
  //   try {
  //     let nameResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userSymptom}&user_location=45.5051%2C122.6750&skip=0&limit=10&user_key=262c57b8c7d02a5e7fab8baba2a526b4`);
  //       let jsonifiedResponse = await nameResponse.json();
  //       return jsonifiedResponse;
  //     } catch(error) {
  //       if (this.status === 200) {
  //         resolve(nameResponse.response);
  //       } else {
  //         reject(Error(nameResponse.statusText));
  //       }
  //
  //     }
    }
  
