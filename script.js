const Books = [{title: "Ada Alien Di Rumahku", url: "/baca.html?id=1JDcVbVfE0N84djOE8YrTMyRG8ELUJuxP"}, {title: "Awas, Satya", url: "/baca.html?id=1P9PI9nuxznB0B6YOPHRCuYpCB_hsLInG"}, {title: "Ayah, Ayah, Warna Apa Yang Kau Lihat", url: "/baca.html?id=1YaXsxiIhRW-oinCX96HzfLwJcC78JWEW"}, {title: "Ayam Pemarah", url: "/baca.html?id=1CB7qBMOScC0gOKVrxwAwH6tqyHJhZoLF"}, {title: "Ayo Kenali Indera Kita! - Ranjy Ramadani", url: "/baca.html?id=15_BhDvPJ8ALaI0itCKYJxFjXD7g6OgJO"}, {title: "Berjalan-Jalan Bersama Mama", url: "/baca.html?id=1hBd3x1t-nh4rbmLTjUj7_VE71IuwKS4Y"}, {title: "Burung Kecil Yang Selalu Cemberut", url: "/baca.html?id=1KhOoYX06OnJYb_QaVuG5lLSc1zMoXId_"}, {title: "Cokelat Ulang Tahun", url: "/baca.html?id=1OMTYsz52bbXAjGKOpfVy_xIVrEHmIQx2"}, {title: "Damaru", url: "/baca.html?id=1aTFR6aW8ZrEkF-dHt4AvzjC9p5SXyDQv"}, {title: "Dari Pilar Hingga Istana 01", url: "/baca.html?id=1dpwQDzNQQ4gGdxc0KQb6ysL3rS7ikl4W"}, {title: "Dengarkan Suara Ayah, Yuk! - Neysa Putri Ardianti", url: "/baca.html?id=1ADJJI0waaF5ZiA7iBAT7oT-iidPbR2Cp"}, {title: "Di Mana Rainette Bersembunyi", url: "/baca.html?id=18zPTFVo2UofiawDRkf0lLfULcU-decqV"}, {title: "Hari Yang Mengesankan", url: "/baca.html?id=1dwWd4wD3DlOIQ0b7xi1If2MOckXi4gX7"}, {title: "Hidup Saat Virus Merebak", url: "/baca.html?id=1Y5hYoJc6xMkUJ-uCSlIq2HG-LF4RRqQD"}, {title: "Hujan Badai 01", url: "/baca.html?id=1zXONWN98avlDCpnr4C4Ug4IVZ3OnKAbJ"}, {title: "Hutan Seram - Khairina Eka Kurnia", url: "/baca.html?id=1ju-8hR1G7Hh_pn9_W1nfUnFRoYUkhIjF"}, {title: "Kisah Hidup", url: "/baca.html?id=1hxZZBL1TeBlPMBqF2J_7EbkYdAHV4tzw"}, {title: "Kisah Sapi Pintar Yang Angkuh", url: "/baca.html?id=1bjDc5AXRQhAiDgy9xoKOJaB4VwhsePhZ"}, {title: "Kisah Seorang Gamer", url: "/baca.html?id=17GfucNs5hG1otpxbKX55eoYoLd4bD_L6"}, {title: "Kisah Tentang Hanoi", url: "/baca.html?id=1-KxpICdkk-fKxmBxpDwN145OIPw4fKqi"}, {title: "Koki Meena Membuat Salad Sayur 01", url: "/baca.html?id=16gpe4UuVtuxMwFvV2id1S91pkwds4LUE"}, {title: "Kokokan Ayam Jago - Dessy Listyarini", url: "/baca.html?id=1OD0IAyNVsbQEM03tNhum1cvXRRkdgLHy"}, {title: "Masalah Rambut", url: "/baca.html?id=1VJcdtc4nJ2UzP8DDGYkeP_ugRZZCHxR5"}, {title: "Matahari Ketujuh", url: "/baca.html?id=1bKLeNwnl_MymO6QnTmj9kGuYq6FzIDUJ"}, {title: "Matematika Ada Di Mana-Mana", url: "/baca.html?id=1ti5oHpEcn7ioU_BunivT7yEIDgjeKwYX"}, {title: "Matematika Di Taman Hiburan", url: "/baca.html?id=1y1f7EETZdYegkl3_9CCfSe0C2Kt2Uo7g"}, {title: "Mau Dan Tidak Mau", url: "/baca.html?id=1kEr-DCzKn2gpSGwjDthtNdiZIlzG3IGU"}, {title: "Memasak Apa 01", url: "/baca.html?id=1t4A40FurMlR0D_x_9pajijyxtDq_jArj"}, {title: "Membaca Itu Asyik - Dessy Listyarini", url: "/baca.html?id=15q8IHMCu7ytvDPKqZrmDS_8O5yY-hv1o"}, {title: "Nafi Dan Bora", url: "/baca.html?id=1dIDIL9ZS5_M7RBuOr37c8ltAuA54TEPQ"}, {title: "Penerbangan Seumur Hidup", url: "/baca.html?id=1MfsYiAvBXjkO1RX9ZT7Go19LQQ1BKFbX"}, {title: "Perasaanku", url: "/baca.html?id=1H_fbJP-fPRWL79rgx88dA1An-hFgGhpr"}, {title: "Pergi Ke Kota Besar", url: "/baca.html?id=1jGP1yw5x-d-x1lAO567s9yagBJeWjhF_"}, {title: "Pergi Ke Pasar 01", url: "/baca.html?id=1zqoyaexkUjoC9ulrdFmQ7oS8DiPNsMdA"}, {title: "Perjalanan Janice Ke Pasar Pecinan - Ranjy Ramadani", url: "/baca.html?id=1HOZcHU_cOXnAGY4fC81GtWfCjfJQi9x3"}, {title: "Raja Yang Gemuk Dan Anjing Yang Kurus", url: "/baca.html?id=1_YmsoWzYGgUaNdl2PtRU2uc7N3_gvnyV"}, {title: "Sebuah Berkah Atau Sebuah Bencana", url: "/baca.html?id=1NQkVrK8LV8xVzVlQ4SMOYQpd6Z9DlCRR"}, {title: "Sebuah Jalan Atau Kebun Binatang", url: "/baca.html?id=11odXsIeDjYLKJWqDTrhx9JwAWBQKzV7O"}, {title: "Selamatkan Pohon Kita", url: "/baca.html?id=1Q2wY9Qzo0MmzK23vJoYPYeLDdf_oU74w"}, {title: "Semut Dan Kacang Hijau 01", url: "/baca.html?id=1SU5n43d67eVbvzDTF2_HmicdMkZNnxlA"}, {title: "Senang Dan Sedih - Yuni Annisah", url: "/baca.html?id=1ORIqaanPXVH5bUf2xB-iSmZbzAeSUyfM"}, {title: "Singa Selalu Pemberani 01", url: "/baca.html?id=1KQBkJip0PYaNigeX7rm0rutt3bhAJlNn"}, {title: "Teman Berbulu", url: "/baca.html?id=1j74Ee6Me6-KG8c0pjDUKBG9Q1ieFIKBF"}, {title: "Teman Jadi Musuh", url: "/baca.html?id=1btED9qq4HJaHMcCjJuwkvi4XQ4gkU6ec"}, {title: "Tiga Kotak Harta Warisan", url: "/baca.html?id=1PmprndlxznsCNb71GqUgEYo_xy5rvUJJ"}, {title: "Tikar Ajaib Milik Akai", url: "/baca.html?id=1YAM5SvcNcW6nR-VOLTwFIxypVTwNIyTJ"}, {title: "Tikus Dan Tetikus 01", url: "/baca.html?id=1F7zhIXdnUBmF2gM0dU9hvy26MlYBPeuw"}, {title: "Tikus Yang Cerdik - Defiyan Saputra Simbolon", url: "/baca.html?id=19R-t_Jm3Uj9eqjEhKIV8JjIpntJqpDGY"}, {title: "Tubuhku - Tiara Putri", url: "/baca.html?id=1VZpPebs2puF8XGIOoIxdymEY8F5fL8ef"}, {title: "Bahasa Indonesia", url: "/baca.html?id=1f_MqVDCHwNGVvpSPKuzaBMQzOUgBK3p9"}, {title: "Bahasa Inggris", url: "/baca.html?id=1f_JR6HVaByEEUdlMfI9wjc8Xp49u0smD"}, {title: "Ilmu Pengetahuan Alam", url: "/baca.html?id=1dro4y2g4gzwXFhNIkOds3t-5dmPsvkoG"}, {title: "Informatika", url: "/baca.html?id=1g-vyF_vJ7DjJEE0Irxx9GyExOT9BHEer"}, {title: "Informatika Semester 1", url: "/baca.html?id=1g-Aq1VVWDc2P4h1WNsTx_Xe0NxxHVAg2"}, {title: "Matematika", url: "/baca.html?id=1dqAw0koARoCjk6pNJEoqUOBGJkKAOtec"}, {title: "Pendidikan Agama Islam", url: "/baca.html?id=1g5KR6d8k41h3pgKPZwCl-Y1f8t2uRdfU"}, {title: "Pendidikan Pancasila", url: "/baca.html?id=1g3AfmcCkEIKzWyj7aOFsraipLNPnqxp5"}, {title: "Sejarah", url: "/baca.html?id=1diFBSegp6lXQEYlC-lJhGnuqACbxxq45"}, {title: "Bahasa Indonesia", url: "/baca.html?id=1fhEIs3s6WAlI095RcMz06BmNZoS8QbZG"}, {title: "Bahasa Inggris", url: "/baca.html?id=1ffUFJet4Zz2C3OJUnQrlMioMd8Q_9SFL"}, {title: "Bahasa Inggris Tingkat Lanjut", url: "/baca.html?id=1fd6zmKfbFTkKIIAeYv6zD_dXStmZbldi"}, {title: "Biologi", url: "/baca.html?id=1eKuZUrxZIj2URi8EHqWq6FlIy6WZeQm3"}, {title: "Ekonomi", url: "/baca.html?id=1dxoMFMH2PFqg_4nf4sa_6NYRKs65tMjA"}, {title: "Fisika", url: "/baca.html?id=1eFZzTtFE7SNQkaRAqpOxy8_zfuxvsHsY"}, {title: "Geografi", url: "/baca.html?id=1fHNpYFDYlMumn2TPQ0GyHMB51cLe0vIt"}, {title: "Kimia", url: "/baca.html?id=1e4zSanW2rwvdoRhBwMk4wOwHuHs2gf9x"}, {title: "Matematika", url: "/baca.html?id=1e9TseXcoFPCh_v1lwFutUsR0GOU1rFK9"}, {title: "Matematika Tingkat Lanjut", url: "/baca.html?id=1e04zjFlanJToR1wRvk5PMa7t-tathDVQ"}, {title: "Pendidikan Agama Islam", url: "/baca.html?id=1gEsCL0jZuqMlJ3dmcILC-oifwuXcWa4Q"}, {title: "Pendidikan Pancasila", url: "/baca.html?id=1gJl8gYAHNEi9f6D4ENd39pXMJNOiII8n"}, {title: "Sejarah", url: "/baca.html?id=1dyuxYbZmzH3bKHwC1UCh07xHXtzTiYEZ"}, {title: "Sosiologi", url: "/baca.html?id=1dwSCwSUul1SaSka2c8bJ5kJKHPqd51Uh"}, {title: "100 Tokoh Yang Mengubah Indonesia", url: "/baca.html?id=1hNIhep6IpgAl1ykFNQEcwanGKM0veroQ"}, {title: "A Short History of Bali", url: "/baca.html?id=1hX5vHMuocpX9LayY9aoFJl21ZWfkgJC3"}, {title: "A Short History of Indonesia", url: "/baca.html?id=1hZcqAmSBWot0HK6DxFdW3tYTLGcKCMO8"}, {title: "Catatan Hitam Lima Presiden Indonesia", url: "/baca.html?id=1hZkFVJw9O99VmA3cUYf0Vaezol59JKQZ"}, {title: "Ensiklopedi Peradaban Dunia", url: "/baca.html?id=1heHt7Ni4E3PAmlF6hWkjaCYBuvfDiyx2"}, {title: "Jaman Bergerak di Hindia Belanda", url: "/baca.html?id=1heO1twD_W6vwG0E3Gtk7G4esyWLrOevk"}, {title: "Jejak Para Pemimpin", url: "/baca.html?id=1hhpL8RdR2IQIaZYEI24jt6-EPxYwMSF7"}, {title: "Kumpulan Fakta Unik", url: "/baca.html?id=1hiuuntv1B-meC9fKDlsE1dMk2EJS_jhR"}, {title: "Mengorek Abu Sejarah Hitam Indonesia", url: "/baca.html?id=1hm5dsAHe2ENvCvqXi4IYLycB9E3tZGyT"}, {title: "Menguak Tabir Peristiwa 1965", url: "/baca.html?id=1hnWbVWRRYA1q_CW_Y4GDw0AOiNhQxr7q"}, {title: "Motivasi Bab 1", url: "/baca.html?id=1hnYNwieeF1w-zt6HlSfswRXYzxpLPBe0"}, {title: "Motivasi Bab 2", url: "/baca.html?id=1hofTCQq49sL5TZ1E29YlIPkrDKT_wzh-"}, {title: "Motivasi Bab 3", url: "/baca.html?id=1hutf8lJwB_3pfhW8W61Uw2AnhmuDXFCN"}, {title: "Motivasi Bab 4", url: "/baca.html?id=1hw8bk-VLIyNIe5ybQvuA271gDt2rjrGu"}, {title: "Puisi-Puisi Koran Tempo", url: "/baca.html?id=1hxKyYHqT-pYwxt1YfL18h-HbeEBiVHtp"}, {title: "Sejarah Kepulauan Rempah-Rempah", url: "/baca.html?id=1hzJhuvKHQNdB8lqq6DIxi2x7ZaWtT7XL"}, {title: "About Friend", url: "/baca.html?id=1YtRq0_Hy_-JPz9h-kpOrLBHnDNuj77jw"}, {title: "About Life", url: "/baca.html?id=1YtfGIZSOHUHYkjCU2DFKacCvcIG9IpiC"}, {title: "Amiko_Te Amo", url: "/baca.html?id=1WhY-vJtbhvFDhHCHDbDiVRzT2nqsahv_"}, {title: "Ancika", url: "/baca.html?id=1Xle1nHpl9hy9sWfY6tjHuMW14Jp99dIt"}, {title: "Autopilot Romance", url: "/baca.html?id=1YAEhoxFrt5VSBTWGBExy8mIev4m8BOiZ"}, {title: "Ayahku Bukan Pembohong", url: "/baca.html?id=1Z1a-aKDZlMITtO4cDt6iIKIENFe7wYUo"}, {title: "Bedebah di Ujung Tanduk", url: "/baca.html?id=1ZCU4oyv2FtdjggQGzg2PZJb7UU0XwQMP"}, {title: "Behind The Scene", url: "/baca.html?id=1YAi9mugmpqGEp2cR0HBWUEqIGvzqdwQf"}, {title: "Bibi Gill", url: "/baca.html?id=1ZEl3grn1xd2irPIiU3XUfkHnJCoNfQob"}, {title: "Boulevard of Wedding Dreams", url: "/baca.html?id=1WnS95lKGxYMx8CdZdp32LL2lgQ_BwupJ"}, {title: "Bulan", url: "/baca.html?id=1ZKspK4MNpzcymt3izq7msTw02SiX8h8L"}, {title: "Bumi", url: "/baca.html?id=1ZPr1C0k7mhgy6SzhVaxDpQMdqAMzSeIB"}, {title: "Ceroz Batozar", url: "/baca.html?id=1ZSXbwfic80AzO5CoR4Qi0pyVp1LNl9RG"}, {title: "Cut The Crap 1 & 2", url: "/baca.html?id=1YEVVCSg9TD_ASHw2zgwnklv3GWmueAV4"}, {title: "DIKATAKAN ATAU TIDAK DIKATAKAN", url: "/baca.html?id=1ZUwDJ7OzwjZYhSBZBAUBGqDrmkxHuIWv"}, {title: "Dangerous Sister", url: "/baca.html?id=1XHqZRGp8ibTRn47IcYoa7hJgRTeGdEqk"}, {title: "Daun Yang Jatuh Tak Pernah Membenci Angin", url: "/baca.html?id=1ZUOL4tHxg-xGCMB3M-f-6qT_49gOYnCC"}, {title: "Diandra (The Real Pelakor)", url: "/baca.html?id=1XJuXf1P5xUqhO4hrfZD9soAcNvthw_KU"}, {title: "Eray Dewi Pringgo", url: "/baca.html?id=1b8Rr5TyPMlIXOklLfB-ZfhuaghlAe_8d"}, {title: "Ex Cetera", url: "/baca.html?id=1XMdb1woWFRslqHJbTL-36K-HioE_FA3f"}, {title: "Forgive Me", url: "/baca.html?id=1XMeRE7tHjt7jYzql7qyirTTAARjxsAta"}, {title: "Gnalup Pergi", url: "/baca.html?id=1ZVge-7boeDSV24c_XjVF9WYzdj3gYtDF"}, {title: "Heavenly", url: "/baca.html?id=1XzdjrHjdqTANnlbH1RCy9dBMcolPbMwd"}, {title: "Hello cello", url: "/baca.html?id=1Xk4SiDGTlPwun9V9rRDGsP25M0SrrQMp"}, {title: "Hope", url: "/baca.html?id=1Y2_50PUDtV_zeV-sI1oqxu7WNYtc5DuE"}, {title: "Hujan", url: "/baca.html?id=1ZacS-2mPvftcB38bytQGbrZXYxQDDNiq"}, {title: "Ilusi", url: "/baca.html?id=1YoWSJAP8lxICSArPMGw_hw6NKyB__PVM"}, {title: "Istri Muda Sang Pewaris", url: "/baca.html?id=1XP2JaLj4UDeOJWP1NILlKA59mNSmJdAo"}, {title: "Kanthi(L)", url: "/baca.html?id=1XTOy0_lb8de34qUMJm2wNE09rqd168um"}, {title: "Kastil Es & Air Mancur yang Berdansa", url: "/baca.html?id=1Y3_mFbYR036yUqRAZmNubVVGpoZBZYZh"}, {title: "Kau Aku dan Sepucuk Angpau Merah-1", url: "/baca.html?id=1ZlVjaRlSm21BhK1sQ1A4F5r9N0it3epI"}, {title: "Komet Minor", url: "/baca.html?id=1Zr0gt8LfxCLjpWGZWLaHkxy0-1uW08Qv"}, {title: "LUMPU ", url: "/baca.html?id=1ZxSsUCgHsDdtAKmMhv0zw8oTieBU21nb"}, {title: "Love Paint", url: "/baca.html?id=1YGDIKc-O3gFe4JBomq6TQZGXALiK6NbS"}, {title: "Love The Way You Lie", url: "/baca.html?id=1XTx2jKqr9RSeH-S_pmBxwie6XHdFmlad"}, {title: "Love Theft", url: "/baca.html?id=1Y4r5rDb-_CRq3mjcKH86zd4y5pinRkgg"}, {title: "Lovely Natalie", url: "/baca.html?id=1XYXJFsyy2N8FqNneEOSpYa4nMUfsSxji"}, {title: "Matahari", url: "/baca.html?id=1_0t2dd7WJCLEVQzcdSJmkPFKXuGSTu0H"}, {title: "Melarung Mimpi", url: "/baca.html?id=1ar8aphfp6emNTXzs4xcdqhphQc7UCzOT"}, {title: "Melarung Mimpi Extra Part", url: "/baca.html?id=1au2MNKznpqEsvC6grWXGmglMJBKq619Z"}, {title: "Midnight Secretary", url: "/baca.html?id=1XeJkmm8DKqT1aLCk90a8QcbXI3i5LF57"}, {title: "Mr. Perfect", url: "/baca.html?id=1axSAX7LYWURjnHXjY6hxJ9f2yVmlbu7k"}, {title: "Mr. Perfect Extra Part", url: "/baca.html?id=1b7o6haDDtSR0UP3bKdlyHTi_9zlORhbb"}, {title: "My Friends Wife Maia", url: "/baca.html?id=1XhXe4Hjjm6lmWa1qwaqoKQip_XIzRgLY"}, {title: "Nebula (unedited version)", url: "/baca.html?id=1_1VykoAfLXL7Tl_kY_WH0b7txtCUuSsp"}, {title: "Negeri Para bedebah", url: "/baca.html?id=1_9YpZXTh_3Lhq_X-o4LyWMLRr-Q2bTkm"}, {title: "Negeri di Ujung Tanduk", url: "/baca.html?id=1_90CWtJzelzpvTd8h1h3x87o9xVL6Qz6"}, {title: "Never Been Kissed", url: "/baca.html?id=1YIqSjKtMo0Dl2qaZExLE91lp5YDWeApE"}, {title: "Only With Me", url: "/baca.html?id=1XkQ3de9vmgLjV1GBAgv6fFZGh9zhwx1K"}, {title: "Partner with benefit", url: "/baca.html?id=1YJmShFU4RqD4-fA95qFf-NvEQMFDTqC2"}, {title: "Partner with benefit extra part", url: "/baca.html?id=1YOxoJS-E7su3_DJvgCgP1RA7gbP77D_n"}, {title: "Pergi", url: "/baca.html?id=1_HrR9wUchBwc0Kg9xq7yHdc1VCkmZ1Lx"}, {title: "Philosophy of Love", url: "/baca.html?id=1YXjqNRPHyRTG1eL4nH3SaYc27o7dIyAI"}, {title: "Pulang", url: "/baca.html?id=1_I85lGuzupPtMqy12an8T-wruclmtMC0"}, {title: "Purple Eyes", url: "/baca.html?id=1Y5QMDWLm00yd__pvnlrNcSN2EofklD0S"}, {title: "Rasa", url: "/baca.html?id=1_NRyElFETfzDppr3N1VEhzx2sy_c7LIR"}, {title: "Relationshit ", url: "/baca.html?id=1W_eK4OoppJyIxN-C9Dr64zeusZdzHIv8"}, {title: "Rembulan Tenggelam Di Wajahmu", url: "/baca.html?id=1_RJ_EAdQBidThZ7AMKcVSYgXb-WFT22G"}, {title: "Revenge", url: "/baca.html?id=1_RJ_EAdQBidThZ7AMKcVSYgXb-WFT22G"}, {title: "Rindu", url: "/baca.html?id=1_SRGvUefMdGUVYwX-zkmLctVg0h-y9KL"}, {title: "Sagaras", url: "/baca.html?id=1_UGd3QuI0wcH0Xq9-CR3MgAk7iE_Pspd"}, {title: "Sang Panandai", url: "/baca.html?id=1_WSfMJt3HAHqhbu3JZCE4D6s6JMsmL1X"}, {title: "Sang Perawan", url: "/baca.html?id=1YdMJF65bJA1_HRnPUxEtywCeX2sHKC2b"}, {title: "Selena", url: "/baca.html?id=1_oft6IwVUGnlcvPYZ7WMozLU5v4PCmTK"}, {title: "Selena (unedited version)", url: "/baca.html?id=1_sIBtb22huEBoeanfNo93Zn8c9rtsDKZ"}, {title: "Sepotong Hati Yang Baru", url: "/baca.html?id=1_zMHCx0quj8qAdr2IB6PYBqjQV-Utpia"}, {title: "Sesuk", url: "/baca.html?id=1_zmiMqu6RER6qdY24BNARLQrgteC3HMP"}, {title: "Si Anak Badai", url: "/baca.html?id=1a-V4AtbMu7sOtcn8Q3i_rgszlsaWn6wC"}, {title: "Si Anak Kuat", url: "/baca.html?id=1a4tykf9dWEKHm5UvnuTuZUOMikGLzjkk"}, {title: "Si Anak Pintar", url: "/baca.html?id=1aN2cYmB6cNdmuHLxeiEC9yyr63L_FH-q"}, {title: "Si Anak Spesial", url: "/baca.html?id=1aizlzTGRvsRb8QgNiQmXNpp34thhU0VI"}, {title: "Si Putih", url: "/baca.html?id=1ajQickaL9rSQ9r0RfsXLazvuRLqGucG0"}, {title: "Si anak cahaya", url: "/baca.html?id=1a3fi73yM4Rp-1sNvNJWgujgk37vXvrSw"}, {title: "Si anak pemberani", url: "/baca.html?id=1a7RO7pqZZgwnQYbZz8OjWnhHfV0dVILM"}, {title: "Silencio", url: "/baca.html?id=1b8j-0lEUMEOrX2rO1dId8bweDn2LVlcR"}, {title: "Suami Pengganti", url: "/baca.html?id=1YsZHw52CF_099pIxGXHU7kWr8wOa6Bk5"}, {title: "TENTANG KAMU", url: "/baca.html?id=1ajU9mPPKSVOHE5PMcUv4o35hicoYMbqa"}, {title: "The DaddyS Affair", url: "/baca.html?id=1YXtD2ki-2mReWKxxOOppe8anZGUjuX5A"}, {title: "The Marriage Cure", url: "/baca.html?id=1WtglXdNTTn7pS3WJr38I-vp5THXhGeh-"}, {title: "Titik Tanpa Koma", url: "/baca.html?id=1auA3Vqx0lMhohG24n39BwnqjCxcAo3GC"}, {title: "To Forgive", url: "/baca.html?id=1Xe419SS20n_WQdFhBazcNAcJNOu-Vplu"}, {title: "Trapped", url: "/baca.html?id=1au_991wJlmS4I4zH1f36x0IIs0I9p0kR"}, {title: "Trapped By You", url: "/baca.html?id=1Xs7W1b2H-MliFC9o-e3bsCwzKt3EVLMU"}, {title: "Trapped By You Extra Part", url: "/baca.html?id=1XyFcVWJKj7CZSKqMq2_6KYZbAEz5v1Kf"}, {title: "Apa Daya Hati Ini", url: "/baca.html?id=1WiXSsf4Uj6uWSKYSlv9OXXjCqgq2SNR9"}];

let hasScrolled = window.scrollY > 10;

const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const navbar = document.getElementById('navbar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');

// Handle search input and results
searchIcon.addEventListener('click', () => {
    searchIcon.classList.add('hidden'); // Sembunyikan ikon pencarian
    searchInput.classList.remove('hidden'); // Tampilkan form input
    searchInput.focus(); // Fokus pada form input
    if (!hasScrolled) {
        navbar.classList.add('navbar-solid');
        navbar.classList.remove('navbar-transparent');
    }
});

searchInput.addEventListener('blur', () => {
    // Hanya sembunyikan form input jika tidak ada teks yang diketik
    if (!searchInput.value.trim()) {
        searchIcon.classList.remove('hidden'); // Tampilkan ikon pencarian
        searchInput.classList.add('hidden'); // Sembunyikan form input
        if (!hasScrolled) {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-transparent');}
    }
});

searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase(); // Trim untuk menghapus spasi di awal dan akhir
    const minLength = 3; // Jumlah minimum karakter untuk menampilkan hasil

    // Kosongkan hasil pencarian sebelumnya
    searchResults.innerHTML = '';

    if (query.length < minLength || query === "") {
        // Sembunyikan hasil pencarian jika input kurang dari minLength atau kosong
        searchResults.classList.add('hidden');
    } else {
        // Filter dan tampilkan hasil pencarian
        const filteredBooks = Books.filter(book => book.title.toLowerCase().includes(query));
        
        if (filteredBooks.length === 0) {
            searchResults.classList.add('hidden');
        } else {
            searchResults.classList.remove('hidden');
            filteredBooks.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'p-2 hover:bg-gray-100';
                bookItem.innerHTML = `<a href="${book.url}" class="block text-blue-600 hover:underline">${book.title}</a>`;
                searchResults.appendChild(bookItem);
            });
        }
    }
});





// Toggle sidebar on mobile
sidebarToggle.addEventListener('click', () => {
	const isSidebarOpen = !sidebar.classList.contains('-translate-x-full');

    sidebar.classList.toggle('-translate-x-full');
    navbar.classList.add('navbar-solid');
    sidebar.classList.toggle('translate-x-0');
    overlay.classList.toggle('overlay-visible');
    overlay.classList.toggle('overlay-hidden');
    if (isSidebarOpen) {
        // Jika sidebar baru saja ditutup dan posisi scroll kurang dari 10px, kembalikan navbar ke transparan
        if (!hasScrolled) {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    } else {
        // Jika sidebar baru saja dibuka dan posisi scroll kurang dari 10px, tambahkan background solid
        if (!hasScrolled) {
            navbar.classList.add('navbar-solid');
            navbar.classList.remove('navbar-transparent');
        }
        }
    
});

// Close sidebar on clicking the overlay or button
closeSidebar.addEventListener('click', () => {
    closeSidebarFunction();
});

overlay.addEventListener('click', () => {
    closeSidebarFunction();
});

function closeSidebarFunction() {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
    overlay.classList.add('overlay-hidden');
    overlay.classList.remove('overlay-visible');
    
}

// Mengubah background navbar ketika scroll
window.addEventListener('scroll', function () {
    hasScrolled = window.scrollY > 10; // Update status scroll

    if (hasScrolled) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-solid');
    } else {
        // Hanya ubah background jika sidebar dan search bar tidak sedang terbuka
        if (!sidebar.classList.contains('translate-x-0') && searchInput.classList.contains('hidden')) {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-solid');
        }
    }
});
