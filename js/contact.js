window.onload = function () {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_inkr9yr', 'template_bds85ip', this)
      .then(function () {
        console.log('SUCCESS!');
        document.getElementById('form').reset();
      }, function (error) {
        console.log('FAILED...', error);
        document.getElementById('form').reset();
      });
  });

};