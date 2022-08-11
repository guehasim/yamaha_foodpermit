<!DOCTYPE html>
<html lang="en">
<head>

  <?php 
  error_reporting(0);
  ?>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Yamaha</title>
  
    <!-- Bootstrap 4.0-->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/awal/vendor_components/bootstrap/dist/css/bootstrap.min.css">
    
    <!-- Bootstrap extend-->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/awal/css/bootstrap-extend.css">
    
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/awal/css/master_style.css">

    <!-- skins -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/awal/css/skins/_all-skins.css">
    
    <!-- main-nav -->
    <link href="<?php echo base_url(); ?>assets/awal/css/main-nav.css" rel="stylesheet" />    

    <!-- bootstrap datepicker --> 
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/awal/vendor_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">

    <!-- toast CSS -->
    <link href="<?php echo base_url(); ?>assets/awal/vendor_components/jquery-toast-plugin-master/src/jquery.toast.css" rel="stylesheet">

    <style type="text/css">

    

    .autocomplete-items div {
      padding: 10px;
      cursor: pointer;
      background-color: #fff; 
      border-bottom: 1px solid #d4d4d4; 
    }

    /*when hovering an item:*/
    .autocomplete-items div:hover {
      background-color: #e9e9e9; 
    }

    /*when navigating through the items using the arrow keys:*/
    .autocomplete-active {
      background-color: DodgerBlue !important; 
      color: #ffffff; 
    }
    </style>
</head>
<body class="hold-transition bg-img" style="background-image: url(<?php echo base_url(); ?>assets/awal/images/bg.jpg)" data-overlay="3">    
    <div class="wrapper">
      <div class="container">
        <div class="row mt-20">
          <div class="col-lg-5 col-xs-12 mb-2">
            <div class="card">
              <div class="card-body">
                <div class="header-left">
                    <img src="<?=base_url('assets/awal/images/img-left.jpg')?>" alt="" class="img-fluid">
                    <h4 class="bg-purple-ym m-0 p-4 text-center font-weight-bold">PT. Yamaha Electronics Manufacturing Indonesia</h4>
                </div>
                <!-- <div class="body-left bg-light p-4">
                  <p class="font-size-18">PT. Yamaha Electronics Manufacturing Indonesia memperhatikan keselamatan karyawan kami dan tamu. Kami memperhatikan dengan seksama perkembangan pandemi COVID19 dan demi memastikan keselamatan dan kesehatan lingkungan Kerja, maka kami meminta agar anda menjawab dengan jujur beberapa pertanyaan berikut ini.</p>
                </div> -->
                <!-- <div class="footer-left p-4">
                  <p class="text-danger font-size-18"><span class="font-weight-bold font-italic">NOTE:</span> Ketika anda berada di PT. YEMI maka wajib mengikuti protokol kesehatan yang berlaku.</p>
                  <p class="font-size-18 text-danger">a. Harus menggunakan masker medis serta faceshield dan atau masker N95.</p>
                  <p class="font-size-18 text-danger">b. Mematuhi protokol kesehatan di YEMI</p>
                  <ol class="list-style-none m-0">
                    <li class="font-size-18 text-danger">
                    Cek suhu dan melewati bilik sterilisasi di pos security
                    </li>
                    <li class="font-size-18 text-danger">
                    Menjaga jarak min 1,5m
                    </li>
                    <li class="font-size-18 text-danger">
                    Selalu mencuci tangan dan membawa sapu tangan pribadi
                    </li>
                    <li class="font-size-18 text-danger">
                    Membawa peralatan ibadah dan peralatan makan pribadi
                    </li>
                    <li class="font-size-18 text-danger">
                    Jika suhu tubuh > 37.5∘C maka tidak diperbolehkan memasuki area PT. YEMI
                    </li>
                  </ol>
                </div> -->
                <!-- <p class="font-size-16">Terima kasih atas kerjasamanya</p> -->
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-xs-12">
            <div class="card">
              <div class="card-body">
                <h2 class="bg-purple-ym p-2 text-center font-weight-bold">Form Izin Membawa Makanan Masuk</h2>
                <form action="<?php base_url();?>user/tambah" id="register-form" method="POST" autocomplete="off">
                  <div class="form-group">
                    <label for="" class="mb-1 font-weight-bold font-size-16">Tanggal :</label>
                    <input type="text" name="tgl" class="form-control font-size-16" onfocus="this.type='date'" onmouseover="this.type='date'" onclick="this.type='date'">
                    <script>
                      function timeFunctionLong(input) {
                        setTimeout(function() {
                          input.type = 'text';
                        }, 60000);
                      }
                    </script>
                  </div>
                  <div class="form-group">
                    <label for="" class="mb-1 font-weight-bold font-size-16">Nama Penanggung Jawab :</label> <br>
                    <label for="" class="mb-1 font-weight-bold font-size-16">Sodik</label>
                  </div>
                  <div class="form-group autocomplete">
                    <label for="" class="mb-1 font-weight-bold font-size-16">NIK :</label>
                  <input type="text" id="karyawan" class="form-control font-size-16" name="nik">
                  </div>
                  <div class="form-group">
                    <label for="" class="mb-1 font-weight-bold font-size-16">Jenis Makan/Nama :</label>
                    <input type="text" class="form-control font-size-16" name="jenis">
                  </div>
                  <div class="form-group">
                    <label for="" class="mb-1 font-weight-bold font-size-16">Jumlah Pesanan</label>
                    <textarea name="jumlah" class="form-control">
                    </textarea>
                  </div>
                  <div class="form-group">
                    <label for="" class="mb-1 font-weight-bold font-size-16">Nama Supplier</label>
                    <input type="text" class="form-control font-size-16" name="supplier" >
                  </div>
                  <div class="form-group">
                    <label for="" class="mb-1 font-weight-bold font-size-16">Keperluan</label>
                    <input type="text" class="form-control font-size-16" name="keperluan">
                  </div>
                  <br>                                  
                
                  <div class="form-group text-right">
                    <button class="btn bg-purple-ym" type="submit">
                      <i class="fa fa-save mr-5"></i> Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php foreach ($karyawan->result() as $ad): ?>
      <?php $data .= '"'.$ad->NikKaryawan.'",';?>
    <?php endforeach ?>
    

    <!-- jQuery 3 -->
    <script src="<?php echo base_url(); ?>assets/awal/vendor_components/jquery-3.3.1/jquery-3.3.1.js"></script>
    
    <!-- popper -->
    <script src="<?php echo base_url(); ?>assets/awal/vendor_components/popper/dist/popper.min.js"></script>
    
    <!-- Bootstrap 4.0-->
    <script src="<?php echo base_url(); ?>assets/awal/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- toast -->
    <script src="<?php echo base_url(); ?>assets/awal/vendor_components/jquery-toast-plugin-master/src/jquery.toast.js"></script>

    <!-- bootstrap datepicker -->
  <script src="<?php echo base_url(); ?>assets/awal/vendor_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>

    <!-- JQuery Validate -->
    <script src="<?php echo base_url(); ?>assets/awal/vendor_components/jquery-validation-1.17.0/dist/jquery.validate.min.js"></script>
    
    <script>
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  /*An array containing all the country names in the world:*/
  var countries = [<?php echo  $data ;?>];

  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("karyawan"), countries);



</script>

    <script type="text/javascript">
    $( function() {
    $( "#period_awal" ).datepicker({dateFormat:'dd-mm-yy'});
  } );

      $(document).ready(function () {
        var notif     = '<?=get_notif()?>';

        if (notif != '') {
            notif = notif.split('#');
            switch (notif[0]) {
                case 'info':
                    buildNotif('warning', notif[1]);
                    break;
                case 'success':
                    buildNotif('success', notif[1]);
                    break;
                case 'error':
                    buildNotif('error', notif[1]);
                    break;
            }
        }

        function buildNotif(colorName, text) {
          $.toast({
              heading: 'Notifications',
              text: text,
              position: 'top-right',
              loaderBg: '#ff6849',
              icon: colorName,
              hideAfter: 3500,
              stack: 6
          });
        }

        $(".datepicker").datepicker({
          autoclose: true,
          format: 'dd/mm/yy'
        });

        $('#register-form').validate({
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                company: {
                    minlength: 2,
                    required: true
                },
                phone: {
                    minlength: 2,
                    digits: true,
                    required: true
                },
                date_from: {
                    required: true
                },
                date_to: {
                    required: true
                },
                reason: {
                    minlength: 2,
                    required: true
                },
                pic: {
                    minlength: 2,
                    required: true
                },
                answer1: {
                  required: true
                },
                answer2: {
                  required: true
                },
                answer3: {
                  required: true
                },
                answer4: {
                  required: true
                },
                answer5: {
                  required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('success').addClass('error');
            },
            success: function (element) {
                element.addClass('valid')
                    .closest('.form-group').removeClass('error').addClass('success');
            },
            errorPlacement: function(error, element) {
              if ($(element).closest('.form-group').find('.error-option').length > 0) {
                $(element).closest('.form-group').find('.error-option').html(error);
              }else {
                error.insertAfter(element);
              }
            }
        });
      });
    </script>
</body>
</html>
