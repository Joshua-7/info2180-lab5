
(function(window, document, undefined){
    window.onload = init;

      function init()
      {
        $(document).ready(function()
        {
            $("#lookup_Cities").click(function(ev)
            {
                let country = $("#country").val();
                ev.preventDefault();
                fetch("http://localhost/info2180-lab5/world.php?q="+country+"&context=cities")
                .then(response => response.text())
                .then(data => {
                  $("#result").html(data);
                })
                .catch(error => {
                console.log(error);
                });
            });  

            $("#lookup").click(function(ev)
            {
                let country = $("#country").val();
                ev.preventDefault();
                fetch("http://localhost/info2180-lab5/world.php?q="+country+"&context=")
                .then(response => response.text())
                .then(data => {
                  $("#result").html(data);
                })
                .catch(error => {
                console.log(error);
                });
            });  
        });
      }
    
    })(window, document, undefined);
