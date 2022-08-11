<?php 

/**
* 
*/
class user extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->model('m_user');
		$this->load->model('m_karyawan');
	}

	public function index()
	{

		$data['karyawan'] = $this->m_karyawan->lihat_data();
		$this->load->view('user_input_makan',$data);
		
	}

	public function tambah()
	{
		if (isset($_POST)) {
			$this->m_user->tambah_data();
			redirect('user');
		}		
	}
}
 ?>