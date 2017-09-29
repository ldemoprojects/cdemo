module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('contacts', JSON.stringify([
      {
        name: 'Alex',
        image: './img/avatar.png',
        contacts: [
          {
            id: 1,
            name: 'John Wittaker',
            email: 'jwittaker@email.com'
            phoneNumber: '123-345-4567',
            address: '124 Willow Lane',
            company: 'XYZ Corp',
            birthday: '12-09-1990',
            image: './img/john.png'
          },
          {
            id: 2,
            name: 'Alice Lane',
            email: 'alane@email.com',
            phoneNumber: '345-466-4567',
            address: '100 Park Ave',
            company: 'ABC Corp',
            birthday: '01-12-1970',
            image: './img/alice.png'
          },
          {
            id: 3,
            name: 'Joey King',
            email: 'jking@email.com',
            phoneNumber: '452-345-4567',
            address: '10 Oak St',
            company: 'DET Enterprises',
            birthday: '03-09-1976',
            image: './img/joey.png'
          },
          {
            id: 4,
            name: 'Emma Harris',
            email: 'eharris@email.com',
            phoneNumber: '905-345-4567',
            address: '89 Rose Ave',
            company: 'KOP Inc',
            birthday: '02-13-1982',
            image: './img/emma.png'
          },
          {
            id: 5,
            name: 'Steve Owens',
            email: 'sowens@email.com',
            phoneNumber: '876-244-4567',
            address: '20 Aspen Road',
            company: 'Jacobson Corp',
            birthday: '05-13-1995',
            image: './img/steve.png'
          }
        ]
      }
    ]));
  }

};
