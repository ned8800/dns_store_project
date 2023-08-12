drop database dns;
CREATE DATABASE `dns` CHARACTER SET utf8 COLLATE utf8_general_ci;

use dns;

insert into categories (title) values ("Материнские платы"), ("Видеокарты"), ("Процессоры");

insert into items
(name, description, price, category_id, photo)
values ("GIGABYTE B550 AORUS ELITE V2", "AM4, AMD B550, 4xDDR4-3200 МГц, 3xPCI-Ex16, 2xM.2, Standard-ATX", 12499, 1, "1.png"),
 ("MSI MPG B550 GAMING PLUS", "AM4, AMD B550, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Standard-ATX", 11999, 1, "2.png"),
 ("GIGABYTE GeForce RTX 3070 GAMING OC (LHR) [GV-N3070GAMING OC-8GD rev2.0]", "PCI-E 4.0 8 ГБ GDDR6, 256 бит, DisplayPort x2, HDMI x2, GPU 1500 МГц ", 49999, 2, "3.png"),
 ("GIGABYTE GeForce RTX 3050 GAMING OC [GV-N3050GAMING OC-8GD]", "PCI-E 4.0 8 ГБ GDDR6, 128 бит, DisplayPort x2, HDMI x2, GPU 1552 МГц", 27999, 2, "4.png"),
  ("PowerColor AMD Radeon RX 580 Red Dragon OC [AXRX 580 8GBD5-DHDV2/OC]", "PCI-E 3.0 8 ГБ GDDR5, 256 бит, DisplayPort, DVI-D, HDMI, GPU 1257 МГц", 15499, 2, "5.png"),
 ("AMD Ryzen 5 5600G OEM", "AM4, 6 x 3.9 ГГц, L2 - 3 МБ, L3 - 16 МБ, 2хDDR4-3200 МГц, AMD Radeon Vega 7, TDP 65 Вт", 12599, 3, "6.png"),
 ("Intel Core i5-12400F OEM", "LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2хDDR4, DDR5-4800 МГц, TDP 117 Вт", 13499, 3, "7.png");