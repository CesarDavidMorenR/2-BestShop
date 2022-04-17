/*  //Analisis de alamacenar en localStorage el cierre de modal
<html>
  <head>
    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Modal</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <p class="text-left-side">
              <b>Check out your order now </b><br><br>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal"><b>Close<b></button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

$(function() {
    if (typeof Storage != "undefined") {
      if (!localStorage.getItem("done")) {
        setTimeout(function() {
          $('#myModal').modal('show');
        }, 1400);
      }
      localStorage.setItem("done", true);
    }
  }); */