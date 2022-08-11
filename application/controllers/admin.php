<?php 

/**
* 
*/
class admin extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$this->load->model('m_admin');
	}

	public function index()
	{
		$user = $this->session->userdata('ses_idadmin');

		if ($user=="") {
			$this->load->view('login/index');
		}else{
		$data['admin'] = $this->m_admin->lihat_data();
		$this->load->view('template/header');
		$this->load->view('admin/index',$data);
		$this->load->view('template/footer');
		}		
	}

	public function aksi_login()
	{
		$user = $this->input->post('user');
		$pass = sha1(md5($this->input->post('pass')));

		$this->db->where('UserAdmin', $user);
		$this->db->where('PassAdmin', $pass);
		$query = $this->db->get('m_admin');

		if ($query->num_rows() > 0) {
			$row = $query->row();
			$data = array(
				'ses_idadmin'	=> $row->ID_admin,
				'ses_namaadmin'	=> $row->NamaAdmin
				);
			$this->session->set_userdata($data);			

			redirect('admin');
		}else{
			
			$this->session->set_flashdata('msg','Ada kesalahan dalam Login, Periksa Username atau Password');
			redirect('admin');
		}
	}

	public function tambah()
	{
		if (isset($_POST)) {
			$this->m_admin->tambah_data();
			redirect('admin');
		}
	}

	public function update()
	{
		$data = array(
			'NamaAdmin' 		=> $this->input->post('nama'),
			'UserAdmin'	=> $this->input->post('user')
			);

		$where = array(
			'ID_admin'	=> $this->input->post('id')
			);

		$this->m_admin->update_data($where,$data,'m_admin');
		redirect('admin');
	}

	public function hapus()
	{
		$id = $this->input->post('id');
		$this->m_admin->hapus_data($id);

		redirect('admin');
	}

	public function logout()
	{
		$this->session->unset_userdata('ses_idadmin');
		$this->session->unset_userdata('ses_namaadmin');
		session_destroy();

		redirect('admin');
	}
}
 ?>