<?php 

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx; 
class makan extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->model('m_makan');
	}

	public function index()
	{
		$user = $this->session->userdata('ses_idadmin');
		if ($user == '') {
			$this->load->view('login/index');
		}else{	

			$period_awal  = date('Y-m-d',strtotime($this->input->post('period_awal')));
			$period_akhir = date('Y-m-d',strtotime($this->input->post('period_akhir')));

			$submit = $this->input->post('submitdata');

			

			if ($submit == 'Reset') {

				$data['period_awal'] = '';
				$data['period_akhir']= '';
				$data['makan'] = $this->m_makan->lihat_data();
				$this->load->view('template/header');
				$this->load->view('makan/index',$data);
				$this->load->view('template/footer');

			}else if($submit == 'Print PDF'){

				$data['period_awal'] = date('d/m/Y',strtotime($this->input->post('period_awal')));
				$data['period_akhir'] = date('d/m/Y',strtotime($this->input->post('period_akhir')));
				$data['cetak'] = $this->m_makan->lihat_datanya($period_awal,$period_akhir);
				$this->load->view('makan/laporan_pdf',$data);

			}else if($submit == 'Print Excel'){

				$data['period_awal'] = date('d/m/Y',strtotime($this->input->post('period_awal')));
				$data['period_akhir'] = date('d/m/Y',strtotime($this->input->post('period_akhir')));

				$semua_pengguna = $this->m_makan->lihat_datanya($period_awal,$period_akhir);

				$spreadsheet = new Spreadsheet;

		          $spreadsheet->setActiveSheetIndex(0)
		                      ->setCellValue('A1', 'ID REQUEST')
		                      ->setCellValue('B1', 'NIK')
		                      ->setCellValue('C1', 'NAMA')
		                      ->setCellValue('D1', 'TANGGAL')
		                      ->setCellValue('E1', 'JENIS MAKANAN')
		                      ->setCellValue('F1', 'JUMLAH PESANAN')
		                      ->setCellValue('G1', 'NAMA SUPPLIER')
		                      ->setCellValue('H1', 'KEPERLUAN');

		          $kolom = 2;
		          $nomor = 1;
		          foreach($semua_pengguna->result() as $pengguna) {

		               $spreadsheet->setActiveSheetIndex(0)
		                           ->setCellValue('A' . $kolom, $pengguna->NoInputMakan)
		                           ->setCellValue('B' . $kolom, $pengguna->ID_Karyawan)
		                           ->setCellValue('C' . $kolom, $pengguna->NamaKaryawan)
		                           ->setCellValue('D' . $kolom, date('d M y',strtotime($pengguna->TglMakan)))
		                           ->setCellValue('E' . $kolom, $pengguna->JenisMakan)
		                           ->setCellValue('F' . $kolom, $pengguna->JumlahMakan)
		                           ->setCellValue('G' . $kolom, $pengguna->NamaSupplier)
		                           ->setCellValue('H' . $kolom, $pengguna->Keperluan);

		               $kolom++;
		               $nomor++;

		          }

		          $writer = new Xlsx($spreadsheet);

		          header('Content-Type: application/vnd.ms-excel');
			  header('Content-Disposition: attachment;filename="Laporan Data Makan.xls"');
			  header('Cache-Control: max-age=0');

			  $writer->save('php://output');
			}else if($submit == 'Search'){
				$data['period_awal'] = date('d/m/Y',strtotime($this->input->post('period_awal')));
				$data['period_akhir'] = date('d/m/Y',strtotime($this->input->post('period_akhir')));
				$data['makan'] = $this->m_makan->lihat_datanya($period_awal,$period_akhir);
				$this->load->view('template/header');
				$this->load->view('makan/index',$data);
				$this->load->view('template/footer');
			}
			else{
				$data['period_awal'] = '';
				$data['period_akhir']= '';
				$data['makan'] = $this->m_makan->lihat_data();
				$this->load->view('template/header');
				$this->load->view('makan/index',$data);
				$this->load->view('template/footer');
			}	
		}
	}


}
 ?>