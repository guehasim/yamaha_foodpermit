
<div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                      <div>
                        <h3>Data Makan</h3>
                      </div>
                      <form action="<?php echo base_url(); ?>makan" method="post">
                      <div class="col-md-12">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Period Awal:</label>
                            <input type="text" onfocus="this.type='date'" onmouseover="this.type='date'" onclick="this.type='date'" id="period_awal" class="form-control" style="background-color:#ede4e4" name="period_awal" value="<?php echo $period_awal; ?>" required>
                          <script>
                              function timeFunctionLong(input) {
                                setTimeout(function() {
                                  input.type = 'text';
                                }, 60000);
                              }
                            </script>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Period Akhir:</label>
                            <input type="text" onfocus="this.type='date'" onmouseover="this.type='date'" onclick="this.type='date'" id="period_akhir" class="form-control" style="background-color:#ede4e4" name="period_akhir" value="<?php echo $period_akhir;?>"  required>
                            <script>
                              function timeFunctionLong(input) {
                                setTimeout(function() {
                                  input.type = 'text';
                                }, 60000);
                              }
                            </script>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                          <input type="submit" name="submitdata" class="btn btn-primary" value="Print PDF"> 
                          <input type="submit" name="submitdata" class="btn btn-success" value="Print Excel">
                          <input type="submit" name="submitdata" class="btn btn-info" value="Reset">
                          <input type="submit" name="submitdata" class="btn btn-warning" value="Search">
                        </div>
                      </div>

                      </form>
                      <div class="col-md-12">
                        <h7>&nbsp;</h7>
                      </div>
                        <table class="table table-hover">
                            <thead>
                              <tr>
                                <th style="text-align: center;">ID Request</th>
                                <th style="text-align: center;">NIK</th>
                                <th style="text-align: center;">Nama</th>
                                <th style="text-align: center;">Tanggal</th>
                                <th style="text-align: center;">Jenis Makanan</th>
                                <th style="text-align: center;">Jumlah Pesanan</th>
                                <th style="text-align: center;">Supplier</th>
                                <th style="text-align: center;">Keperluan</th>
                              </tr>
                            </thead>
                            <tbody>
                              <?php foreach ($makan->result() as $ad): ?>                              
                              <tr>
                                <td style="text-align: center;"><?php echo $ad->NoInputMakan;?></td>
                                <td style="text-align: center;"><?php echo $ad->ID_Karyawan;?></td>
                                <td style="text-align: center;"><?php echo $ad->NamaKaryawan;?></td>
                                <td style="text-align: center;"><?php echo date('d M y',strtotime($ad->TglMakan));?></td>
                                <td style="text-align: center;"><?php echo $ad->JenisMakan;?></td>
                                <td style="text-align: center;"><?php echo $ad->JumlahMakan;?></td>
                                <td style="text-align: center;"><?php echo $ad->NamaSupplier;?></td>
                                <td style="text-align: center;"><?php echo $ad->Keperluan;?></td>
                              </tr>
                              <?php endforeach ?>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>          
    </div>