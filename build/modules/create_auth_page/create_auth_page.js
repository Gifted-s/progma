"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAuthPage;

function createAuthPage(avatar_url, name, email, timezone, organization, access_token) {
  console.log('creatig auth oage');
  return ` <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    
        <title>Darey.io</title>
      </head>
      <body class="p-4">
          <div class="container">
              <div class="row justify-content-center d-flex">
                  <div class="col-md-6 mt-4">
                    <div class="card text-center">
                        <div class="img">
                            <img src="${avatar_url}" alt="testing"/>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">${name}</h5>
                          <p class="card-text">${email}</p>
                          <p class="card-text" style="color:rgba(0, 0, 0, 0.6);margin-top: -10px;">${timezone}</p>
                          <a href="https://pm-staging.netlify.app/events/${organization}/${access_token}" class="btn btn-primary">Continue</a>
                        </div>
                        <div class="card-footer text-muted">
                          Calendly
                        </div>
                      </div>
                  </div>
              </div>
            
          </div>
     
        
    
        <!-- Optional JavaScript; choose one of the two! -->
    
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    
        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
       
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
        -->
      </body>
      <style>
          .img{
              justify-content: center;
              align-items: center;
              display: flex;
          }
          .img img{
              margin-top: 30px;
              width:160px;
              height: 160px;
              border-radius: 50%;
              margin-bottom: 30px;
          }
      </style>
    </html>`;
}