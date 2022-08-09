var request = new XMLHttpRequest();

request.open("GET", "https://www.clo-set.com/api/groups");

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log("Status:", this.status);
    console.log("Headers:", this.getAllResponseHeaders());
    console.log("Body:", this.responseText);
  }
};

request.send();

const getGroups = axios
  .get("https://www.clo-set.com/api/lines?brandId=275848", {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA4NTcxNDUsInVzZXJJZCI6MjY1NTgwLCJlbWFpbCI6InNhbGxvdW0xQG1zdS5lZHUiLCJwcm92aWRlciI6MCwic3ViZG9tYWluIjoid3d3IiwiaXNzIjoid3d3LmNsby1zZXQuY29tIiwid2ViVXNlciI6ZmFsc2UsImluc3RhbmNlSWQiOm51bGx9.iDAKQYQWC1PdWHoUK88foxPkZ3JQj33SxxS36twVvnA",
      "api-version": "2.0",
    },
  })
  .then((res) => console.log(res));

// const getGroups = axios 
//   .get("https://www.clo-set.com/api/lines?brandId=275848", {
//     headers: {
//       Authorization:
//         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA4NTcxNDUsInVzZXJJZCI6MjY1NTgwLCJlbWFpbCI6InNhbGxvdW0xQG1zdS5lZHUiLCJwcm92aWRlciI6MCwic3ViZG9tYWluIjoid3d3IiwiaXNzIjoid3d3LmNsby1zZXQuY29tIiwid2ViVXNlciI6ZmFsc2UsImluc3RhbmNlSWQiOm51bGx9.iDAKQYQWC1PdWHoUK88foxPkZ3JQj33SxxS36twVvnA",
//     },
//   })
//   .then((res) => console.log(res));

module.exports = {
  getLines,
};
