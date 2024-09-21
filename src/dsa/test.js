const data = [
    {
      "id": 13,
      "ElectionPostId": 24,
      "name": "Jerry Bayo",
      "image": {
        "id": "87b320b0-69f3-4c68-b3a8-b8b253f2f382",
        "link": "https://smooth-ballot.s3.eu-north-1.amazonaws.com/87b320b0-69f3-4c68-b3a8-b8b253f2f382",
        "extension": "png"
      },
      "bio": "This is a bio",
      "ElectionId": 13,
      "UserId": 11,
      "createdAt": "2024-06-29T22:40:15.018Z",
      "updatedAt": "2024-06-29T22:40:15.018Z",
      "ElectionPost": {
        "id": 24,
        "title": "president"
      }
    },
    {
      "id": 14,
      "ElectionPostId": 25,
      "name": "Kemi Adeyemi",
      "image": {
        "id": "2e7a1dcb-2197-4519-a5f0-8df1f550d265",
        "link": "https://smooth-ballot.s3.eu-north-1.amazonaws.com/2e7a1dcb-2197-4519-a5f0-8df1f550d265",
        "extension": "jpg"
      },
      "bio": "I am me",
      "ElectionId": 13,
      "UserId": 11,
      "createdAt": "2024-06-29T22:41:21.818Z",
      "updatedAt": "2024-06-29T22:41:21.818Z",
      "ElectionPost": {
        "id": 25,
        "title": "Vice President"
      }
    },
    {
      "id": 15,
      "ElectionPostId": 24,
      "name": "Psalm Sheg",
      "image": {
        "id": "ef26f1d8-1c11-4fd0-868a-dd3f41276ad5",
        "link": "https://smooth-ballot.s3.eu-north-1.amazonaws.com/ef26f1d8-1c11-4fd0-868a-dd3f41276ad5",
        "extension": "jpg"
      },
      "bio": "This is anu",
      "ElectionId": 13,
      "UserId": 11,
      "createdAt": "2024-06-29T22:50:33.915Z",
      "updatedAt": "2024-06-29T22:50:33.915Z",
      "ElectionPost": {
        "id": 24,
        "title": "president"
      }
    },
    {
      "id": 16,
      "ElectionPostId": 25,
      "name": "Bayo Philips",
      "image": {
        "id": "5e10f66c-c741-432a-8a57-d3e5a9cde143",
        "link": "https://smooth-ballot.s3.eu-north-1.amazonaws.com/5e10f66c-c741-432a-8a57-d3e5a9cde143",
        "extension": "jpg"
      },
      "bio": "This is anu",
      "ElectionId": 13,
      "UserId": 11,
      "createdAt": "2024-06-29T22:51:24.946Z",
      "updatedAt": "2024-06-29T22:51:24.946Z",
      "ElectionPost": {
        "id": 25,
        "title": "Vice President"
      }
    },
    {
      "id": 16,
      "ElectionPostId": 25,
      "name": "Bayo Philips",
      "image": {
        "id": "5e10f66c-c741-432a-8a57-d3e5a9cde143",
        "link": "https://smooth-ballot.s3.eu-north-1.amazonaws.com/5e10f66c-c741-432a-8a57-d3e5a9cde143",
        "extension": "jpg"
      },
      "bio": "This is anu",
      "ElectionId": 13,
      "UserId": 11,
      "createdAt": "2024-06-29T22:51:24.946Z",
      "updatedAt": "2024-06-29T22:51:24.946Z",
      "ElectionPost": {
        "id": 25,
        "title": "General Secretary"
      }
    }
]

function groupByAttribute(array) {
  return array.reduce((acc, obj) => {
      const key = obj['ElectionPost']['title'];
      if (!acc[key]) {
          acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
  }, {});
}
const gruped_candidate = groupByAttribute(data);
const candidates_to_array = Object.entries(gruped_candidate);
// console.log(candidates_to_array)
// console.log(candidates_to_array.map(child => child[0]))
console.log(candidates_to_array.find( child => child[0] === "General Secretary"))