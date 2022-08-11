<?php 

/**
* 
*/
class m_user extends CI_Model
{
	
	public function tambah_data()
	{
		$NoMakan = "MKN-".date('ymdhis');
		$data = array(
			'ID_Makan'		=> null,
			'ID_Karyawan'	=> $this->input->post('nik'),
			'NoInputMakan'	=> $NoMakan,
			'TglMakan'		=> date('Y-m-d',strtotime($this->input->post('tgl'))),
			'JenisMakan'	=> $this->input->post('jenis'),
			'JumlahMakan'	=> $this->input->post('jumlah'),
			'NamaSupplier'	=> $this->input->post('supplier'),
			'Keperluan'		=> $this->input->post('keperluan')
			);

		$this->db->insert('m_makan_masuk',$data);
	}
}
 ?>