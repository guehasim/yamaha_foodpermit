<?php 

/**
* 
*/
class m_karyawan extends CI_Model
{
	
	public function lihat_data()
	{
		$query = $this->db->query("SELECT * FROM m_karyawan ORDER BY ID_Karyawan DESC");
		return $query;
	}
}
 ?>