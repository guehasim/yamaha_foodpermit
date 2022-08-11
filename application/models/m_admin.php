<?php 

/**
* 
*/
class m_admin extends CI_Model
{

	public function lihat_data()
	{
		$query = $this->db->query("SELECT * FROM m_admin");
		return $query;
	}

	public function tambah_data()
	{
		$data = array(
			'ID_admin' 		=> null,
			'NamaAdmin'		=> $this->input->post('nama'),
			'UserAdmin'		=> $this->input->post('user'),
			'PassAdmin'		=> sha1(md5($this->input->post('pass')))
			);

		$this->db->insert('m_admin',$data);
	}

	public function update_data($where,$data,$table)
	{
		$this->db->where($where);
		$this->db->update($table,$data);
	}	

	public function delete($id)
	{
		$this->db->where('ID_admin');
		$this->db->delete('m_admin');
	}
}
 ?>