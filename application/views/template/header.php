<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  
  <title>Public Area</title>

  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <link href="<?php echo base_url() ?>assets/admin/bootstrap3/css/bootstrap.css" rel="stylesheet" />
    <link href="<?php echo base_url() ?>assets/admin/assets/css/ct-paper.css" rel="stylesheet"/>
    <link href="<?php echo base_url() ?>assets/admin/assets/css/demo.css" rel="stylesheet" /> 
    <link href="<?php echo base_url() ?>assets/admin/assets/css/examples.css" rel="stylesheet" />
    <link href="<?php echo base_url() ?>assets/admin/login/vendor_plugins/datepicker/css/datepicker.css" rel="stylesheet" />
        
    <!--     Fonts and icons     -->
    <link href="<?php echo base_url() ?>assets/admin/assets/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
      
</head>
<body>
    
    <nav class="navbar navbar-ct-primary" role="navigation-demo" id="demo-navbar">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="www.creative-tim.com">Public Area</a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navigation-example-2">
          <ul class="nav navbar-nav navbar-right">

            <li>
                <a href="<?php echo base_url(); ?>makan">DATA MAKAN</a>
            </li>
            <li>
                <a href="<?php echo base_url(); ?>admin">ADMIN</a>
            </li>
            
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <b class="caret"></b></a>
<!--                                  You can add classes for different colours on the next element -->
              <ul class="dropdown-menu dropdown-menu-right">
                <li class="dropdown-item"><a href="#"><?php echo $this->session->userdata('ses_namaadmin'); ?></a></li>
                <li class="dropdown-item"><a href="<?php echo base_url(); ?>admin/logout">Logout</a></li>
              </ul>
            </li>
           </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-->
    </nav>  