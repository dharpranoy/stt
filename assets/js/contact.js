$(document).ready(() => {
  $('#form-submit').click(() => {
    let name = $('#name').val()
    let surname = $('#surname').val()
    let forward = $('#email').val()
    let txt = $('#bodytext').val()
    $('#bodytext').val('')
    $('#name').val('')
    $('#surname').val('')
    $('#email').val('')
    Email.send({
      //58ee03e5-099c-4502-bf44-20b408bd2517
      //e492b8ae-7f40-42bc-8599-a3d9234afa4c
      SecureToken: '302b3fbf-904c-4ef4-b457-31eb04ac1d0d',
      To: 'pranoydhar@protonmail.com',
      From: `tutor.pnd19@gmail.com`,
      Subject: 'SmallTownTalks - Contact US',
      Body: `
      <div style='border:1px'>
        <p>-----------------------------------------------------------------------</p>
          <strong><h1> SmallTownTalks </h1> </strong>  
        <p>-----------------------------------------------------------------------</p>
    
        <h3>Name : </h3> <p>${name} ${surname}</p>

        <h3>Email : </h3> <p>${forward}</p>
        
        <h3>Body : </h3>
        <p>${txt}</p>
        <p>-----------------------------------------------------------------------</p>
        <img src='https://media.licdn.com/dms/image/D4D03AQEiDzj9oNJT7w/profile-displayphoto-shrink_400_400/0/1669528865782?e=1684368000&v=beta&t=iYRn5eID4T4Kr4bRZUDsbhpg3701IxSVUuEENJSekY4' height=300 width=300>
      </div>
      `

    })
      .then(
        alert('message sent')
      )
  })
})

