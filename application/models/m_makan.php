<?php 

/**
* 
*/
class m_makan extends CI_Model
{
	
	public function lihat_data()
	{
		$query = $this->db->query("SELECT
					m_makan_masuk.ID_Makan, 
					m_makan_masuk.ID_Karyawan, 
					m_makan_masuk.NoInputMakan, 
					m_makan_masuk.TglMakan, 
					m_makan_masuk.JenisMakan, 
					m_makan_masuk.JumlahMakan, 
					m_makan_masuk.NamaSupplier, 
					m_makan_masuk.Keperluan, 
					m_karyawan.NamaKaryawan
				FROM
					m_karyawan
					INNER JOIN
					m_makan_masuk
					ON 
						m_karyawan.NikKaryawan = m_makan_masuk.ID_Karyawan ORDER BY m_makan_masuk.ID_Makan DESC");
		return $query;
	}

	public function lihat_datanya($period_awal,$period_akhir)
	{
		$query = $this->db->query("SELECT
					m_makan_masuk.ID_Makan, 
					m_makan_masuk.ID_Karyawan, 
					m_makan_masuk.NoInputMakan, 
					m_makan_masuk.TglMakan, 
					m_makan_masuk.JenisMakan, 
					m_makan_masuk.JumlahMakan, 
					m_makan_masuk.NamaSupplier, 
					m_makan_masuk.Keperluan, 
					m_karyawan.NamaKaryawan
				FROM
					m_karyawan
					INNER JOIN
					m_makan_masuk
					ON 
						m_karyawan.NikKaryawan = m_makan_masuk.ID_Karyawan
				WHERE m_makan_masuk.TglMakan BETWEEN '$period_awal' AND '$period_akhir'
				ORDER BY m_makan_masuk.ID_Makan DESC");
		return $query;
	}
}
 ?>