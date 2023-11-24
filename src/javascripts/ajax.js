import makeRequest from './make-requests';

makeRequest(
  "GET",
  "https://data.wa.gov/resource/f6w7-q2d2.json",
  (response) => {
    if (response.error) {
      throw response.error;
    }

    let makes={};

    response.data.forEach(item=>{
      if (makes[item.make]) {
        makes[item.make] += 1;
      } else {
        makes[item.make] = 1;
      }
    });
    console.log(makes;)
  }
);
