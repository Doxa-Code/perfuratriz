-- Insert data for table: ncms
INSERT INTO perfuratriz.ncms (id, code, tax, icms, pis, cofins, ipi) VALUES
('82d0b255-d1f6-441e-b227-983cc08aa602', 82071910, 0, 880, 210, 965, 520),
('efa7b48c-7c48-4885-9c03-0d2489ac5193', 84314390, 1260, 1800, 210, 965, 325);

-- Insert data for table: products
INSERT INTO perfuratriz.products (id, name, weight, length, height, width, "ncmId", tid, description) VALUES
('3e5e9562-de9a-4a43-8063-38e53c0e0c59', 'Martelo M30 OD 80 mm', 23000, 1000000, 600000, 340000, 'efa7b48c-7c48-4885-9c03-0d2489ac5193', '', ''),
('51a48b66-cb24-4d5a-8547-9ce579e6ec9f', 'Martelo M60 OD 142 mm', 79000, 1080000, 680000, 500000, 'efa7b48c-7c48-4885-9c03-0d2489ac5193', '11902', ''),
('7b2474d8-5366-48af-979c-0ca332093fe0', 'Pistão M50', 1280, 36000, 9500, 9500, 'efa7b48c-7c48-4885-9c03-0d2489ac5193', '11754', ''),
('c9e6e649-84cf-4869-a8d3-6f4e295b0619', 'Bit 406 SD12', 20500, 4700, 8500, 8400, '82d0b255-d1f6-441e-b227-983cc08aa602', '', ''),
('ae89eec1-6bb3-426f-8bc7-7a9a57b2c806', 'Bit 254 M80', 5980, 10000, 10000, 10000, '82d0b255-d1f6-441e-b227-983cc08aa602', '', ''),
('703d1eee-3277-4ba0-969a-547fa5cdf484', 'Pistão M60', 19500, 10, 10, 10, 'efa7b48c-7c48-4885-9c03-0d2489ac5193', '', '');

-- Insert data for table: invoices
INSERT INTO perfuratriz.invoices (id, registration, "createdAt", quote) VALUES
('38df3406-f47d-4013-8952-e8b7a1918660', 'TH-PHT231107', '2025-05-14 15:34:04.049+00', 48889),
('5baf7720-c0c4-42ca-9db2-8432176aa581', 'TH-PDTH250201-3', '2025-02-01 03:00:00+00', 57310),
('5a3bca1e-1b4e-4ccb-a960-9559177691fa', 'LHD-H25-001002', '2025-03-31 03:00:00+00', 58776);

-- Insert data for table: invoice_products
INSERT INTO perfuratriz.invoice_products (id, "productId", "invoiceId", amount, quantity) VALUES
('161f9674-be7c-4b08-a22d-7620484a9779', '703d1eee-3277-4ba0-969a-547fa5cdf484', '38df3406-f47d-4013-8952-e8b7a1918660', 29000, 200);

-- Insert data for table: expenses
INSERT INTO perfuratriz.expenses (id, name, "useICMSBase", "useCustomsBase", "allocationMethod", currency) VALUES
('8b714bcc-37d9-44b4-bbeb-3c398a946aa4', 'Siscomex', true, false, 'NET_VALUE', 'BRL'),
('4e1aa7ea-fa1f-4c22-b56b-03b97af7f41b', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL'),
('ff99dbbe-f353-48a2-af80-e9aad9dab3db', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL'),
('4bbd04e9-ee5d-4c26-b453-fb0c49284d8b', 'SDA', false, false, 'NET_VALUE', 'BRL'),
('b1e19d41-6ee6-43a1-a742-70b086677c55', 'Despachante', false, false, 'NET_VALUE', 'BRL'),
('4d0f8410-533b-4b85-acf3-a9ce00cde399', 'Despesas de frete Internacional ( Diferença )', false, false, 'NET_WEIGHT', 'BRL'),
('59fbe1c9-a607-4fdd-9f71-58fabdd5ecec', 'Despesas de Seguro Internacional ( Diferença )', false, false, 'NET_VALUE', 'BRL'),
('b4cf8541-332b-4839-88a6-15866f1b973f', 'Frete Rodoviário', false, false, 'NET_WEIGHT', 'BRL'),
('ae0a0cd5-ea9a-4302-bcb9-6262f7412182', 'Liberacão do BL', false, false, 'NET_VALUE', 'BRL'),
('0f672075-7d19-4ae0-999a-4aaf6e3e5183', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL'),
('ba5652a1-b392-4d92-9fb7-426511ef48fb', 'Desconsolidacão', false, false, 'NET_VALUE', 'BRL'),
('0d3dbcfd-8583-495f-8fa6-bb6b6aaecb43', 'Total Acres. Trib.', true, true, 'NET_VALUE', 'USD'),
('84d04f49-4504-4f2c-aec4-ff569ba7887c', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD'),
('96d14d2e-0151-4885-9b75-141454499614', 'Frete Internacional', true, true, 'NET_WEIGHT', 'USD');

-- Insert data for table: declarations
INSERT INTO perfuratriz.declarations (id, registration, quote, "createdAt") VALUES
('d9091499-25d4-45bf-b3bc-a0f456195d91', 'TH-PHT231107', 48889, '2025-05-14 15:34:04.049+00'),
('84132f92-b1d0-4486-bf12-7143c5cb5209', 'TH-PDTH250201-3', 57310, '2025-02-01 03:00:00+00'),
('c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'LHD-H25-001002', 58776, '2025-03-31 03:00:00+00'),
('76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'TH-PDTH250201-3', 57310, '2025-02-01 03:00:00+00'),
('78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'LHD-H25-001002', 58776, '2025-03-31 03:00:00+00'),
('7e94344c-9aab-42ab-9896-165f6f1463c8', 'TH-PDTH250201-3', 57310, '2025-02-01 03:00:00+00'),
('fcc1bf71-8149-4a50-a025-3e8f067a9cde', 'LHD-H25-001002', 58776, '2025-03-31 03:00:00+00'),
('66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'TH-PDTH250201-3', 57310, '2025-02-01 03:00:00+00');

-- Insert data for table: declaration_expenses
-- (Data parsed from the dump, focusing on the declaration_expenses COPY section)
INSERT INTO perfuratriz.declaration_expenses (id, "declarationId", name, "useICMSBase", "useCustomsBase", "allocationMethod", currency, amount) VALUES
('f0bb2abc-836b-4766-9780-0bc1a331bfca', '84132f92-b1d0-4486-bf12-7143c5cb5209', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 138733),
('582fd0ce-6917-4b40-99d9-a458bfbb26d2', '84132f92-b1d0-4486-bf12-7143c5cb5209', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 12214),
('f0e380a2-b5b5-48a3-9f19-2c4a23e53150', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 46160),
('a5649690-4f30-4ad1-98bb-2e50b84e4ca3', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 22927),
('ab20e43d-049b-4a21-9895-dbce86651d93', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Total Acres. Trib.', true, true, 'NET_VALUE', 'USD', 10000),
('dc22fa94-1df0-4b90-a842-7b1e56f59031', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Liberacão do BL', false, false, 'NET_VALUE', 'BRL', 18103),
('07188de5-5a3f-4fa0-a441-19b542d1f85b', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL', 834050),
('3312a705-d16f-4118-9c63-df90d7f0000e', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('df554ead-de43-4767-873e-d815f35e60c3', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Desconsolidacão', false, false, 'NET_VALUE', 'BRL', 18114),
('0203e77b-0e82-4de1-bdcb-7c8c4f09eaab', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL', 38301),
('2cdbc0cf-8225-43f2-b387-0a4c0a90eefd', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Despesas de frete Internacional ( Diferença )', false, false, 'NET_WEIGHT', 'BRL', 31209),
('3e032ed1-457a-42a2-bcc4-4d18cfcf1b5a', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Despachante', false, false, 'NET_VALUE', 'BRL', 90000),
('743cfe5e-0039-4de6-840b-c2abbf98e1c5', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Despesas de Seguro Internacional ( Diferença )', false, false, 'NET_VALUE', 'BRL', 8923),
('18512498-ddb4-4ce8-9513-877397335240', 'fcc1bf71-8149-4a50-a025-3e8f067a9cde', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 28806),
('9731cbb4-178d-4f76-b1e8-c65c06383539', 'fcc1bf71-8149-4a50-a025-3e8f067a9cde', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL', 952720),
('aa2352f0-4638-46f5-aa91-5ff313690d2f', 'fcc1bf71-8149-4a50-a025-3e8f067a9cde', 'Frete Rodoviário', false, false, 'NET_WEIGHT', 'BRL', 311788),
('0b3c0dab-e66c-466d-a53e-714f65d45663', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 37846),
('d812595c-93d7-40c6-8f6a-18fad70ff49e', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 11745),
('20a5c86d-9846-4e5e-bf41-6abeafc30372', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('65e240fb-4de6-47cd-9d9d-a52cfdb5a471', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL', 667245),
('3490e91a-5c27-4e85-84ac-4f35afaad0e7', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('5391826a-b019-4e15-b764-103a3ba38786', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 11745),
('cfc5cbed-d909-4204-ac54-3266089a9b94', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'Siscomex', true, false, 'NET_VALUE', 'BRL', 15423),
('2de2e6a6-3e42-4538-9d7f-d0e3a9b8ec34', '5baf7720-c0c4-42ca-9db2-8432176aa581', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 22767),
('a754f4fc-b2e2-4acf-afd4-e9d9f02752fa', '5baf7720-c0c4-42ca-9db2-8432176aa581', 'Despachante', false, false, 'NET_VALUE', 'BRL', 90000),
('1fa057aa-1860-4081-b59c-e8a1af22871e', '5baf7720-c0c4-42ca-9db2-8432176aa581', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL', 36591),
('db355b99-67e7-43db-83e1-88a69c964063', '5a3bca1e-1b4e-4ccb-a960-9559177691fa', 'Despesas de Seguro Internacional ( Diferença )', false, false, 'NET_VALUE', 'BRL', 5682),
('179a0ce6-6536-493f-847d-e393730b4310', '5a3bca1e-1b4e-4ccb-a960-9559177691fa', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('35654555-b00c-4705-8b9a-57b6d4426945', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 49901),
('01aadf84-bfe3-4c7a-8fa8-7ecef31ba60b', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('b69efb61-f852-48a0-bd59-83bf93683b1e', '84132f92-b1d0-4486-bf12-7143c5cb5209', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 46160),
('3bda7864-cd25-47d3-81c9-92673f7c414d', '84132f92-b1d0-4486-bf12-7143c5cb5209', 'Frete Rodoviário', false, false, 'NET_WEIGHT', 'BRL', 300958),
('64244e4c-5fd8-4402-9107-c5e4abbfe68a', 'd9091499-25d4-45bf-b3bc-a0f456195d91', 'Siscomex', true, false, 'NET_VALUE', 'BRL', 15423),
('20348743-5261-4d7a-93fa-6195236aef33', 'd9091499-25d4-45bf-b3bc-a0f456195d91', 'Frete Internacional', true, true, 'NET_WEIGHT', 'USD', 78624),
('9826e8b1-c450-4a7f-a59f-d8f9165059bc', 'd9091499-25d4-45bf-b3bc-a0f456195d91', 'Frete Internacional', true, true, 'NET_WEIGHT', 'USD', 78624),
('dc3bae5b-620e-4a8d-899e-f553cfdb3dcf', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 46160),
('dff4f541-554d-45e5-b304-4358478a0bf3', 'd9091499-25d4-45bf-b3bc-a0f456195d91', 'Desconsolidacão', false, false, 'NET_VALUE', 'BRL', 18695),
('829ead86-7521-4e17-b420-488da7e29ea3', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Siscomex', true, false, 'NET_VALUE', 'BRL', 15423),
('35800a26-a319-4820-a620-c48fd624672c', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Despachante', false, false, 'NET_VALUE', 'BRL', 90000),
('7fb9f5b7-bddd-4ba2-8151-b63e691dbd27', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 46160),
('37ce01b6-0dc8-4c56-8fb6-809abe8c3a5c', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 22927),
('5ba910b4-fe4c-4208-a1e8-23b56d3102fe', 'd9091499-25d4-45bf-b3bc-a0f456195d91', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 53439),
('bed136b6-c5f0-4648-8f44-152ba6ae9ab9', 'd9091499-25d4-45bf-b3bc-a0f456195d91', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('231e9a87-5c85-4b3b-a5aa-15c8e9a134b8', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Desconsolidacão', false, false, 'NET_VALUE', 'BRL', 18114),
('e5f8f662-d322-40e9-af07-82dbe5db67cb', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('eaee913a-030a-448d-802c-3f12573c8da3', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL', 38301),
('22183579-1850-411a-bed1-9584c0f2ed64', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'Despesas de Seguro Internacional ( Diferença )', false, false, 'NET_VALUE', 'BRL', 8923),
('bdc73ca8-7f42-497b-8c3f-db1621304835', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL', 667245),
('36ec6977-b5d0-413b-be64-014f44e403b8', '78ad329b-e10f-42f8-a4d2-4c1c063683fe', 'Frete Rodoviário', false, false, 'NET_WEIGHT', 'BRL', 302572),
('4fdd5e05-a247-4588-abf4-f38f8f06044b', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'Desconsolidacão', false, false, 'NET_VALUE', 'BRL', 15390),
('a729f02a-6a9b-429c-9a84-3e33dad18803', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL', 65550),
('45404ccb-4063-4736-bae2-abbfa0801a84', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'Despesas de Seguro Internacional ( Diferença )', false, false, 'NET_VALUE', 'BRL', 6098),
('d66f130e-4de9-4837-995c-ba8773823749', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'Liberacão do BL', false, false, 'NET_VALUE', 'BRL', 15390),
('05bf17f3-a314-4e45-bfb8-cec33ddd39a5', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL', 1263850),
('c84272d2-6a76-4a1c-84f3-fc25769978d0', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'Despesas de frete Internacional ( Diferença )', false, false, 'NET_WEIGHT', 'BRL', 11170),
('e7a5bc4a-9115-413f-a40a-f8f5effdc698', '0a968646-1faa-4c8d-97cb-12a25a67e499', 'Total Acres. Trib.', true, true, 'NET_VALUE', 'USD', 10000),
('9e806735-d830-4be0-9f46-1cf77bf68ab6', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('5036ac5c-b930-43cf-9e71-8920d4d7f20c', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL', 65550),
('cf007a03-8fcc-4260-b077-462ef72935ae', '66f5ae9e-f03a-407a-ba75-5089913ae6d7', 'Siscomex', true, false, 'NET_VALUE', 'BRL', 19279),
('6acd50d1-865d-4de4-8179-630622484731', 'c910a66e-5bb3-4671-bd06-511c6c7af0b0', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('0d5a6c1a-267f-49ca-be4e-1ca12f1c3978', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 22767),
('b6e6b3f9-a43a-44c1-8ea7-ad141168d0a2', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Despesas de frete Internacional ( Diferença )', false, false, 'NET_WEIGHT', 'BRL', 29811),
('448f036c-8033-48fa-9ae1-cb2bacdea7e6', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Despesas de Seguro Internacional ( Diferença )', false, false, 'NET_VALUE', 'BRL', 8797),
('1bdb60aa-8768-4fee-85f2-87ad637fca0d', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Frete Rodoviário', false, false, 'NET_WEIGHT', 'BRL', 300958),
('6ff1cb6e-f94c-45a2-bb62-194dbef6a9eb', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'SDA', false, false, 'NET_VALUE', 'BRL', 25000),
('48b1140b-4ce8-40d3-ab5e-cdc041e2a5fb', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Liberacão do BL', false, false, 'NET_VALUE', 'BRL', 18114),
('c0b5f3c3-63bb-4a23-9b2d-a5922341c703', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Total Acres. Trib.', true, true, 'NET_VALUE', 'USD', 10000),
('cf09bd85-d462-42a0-9158-700dd1dcf608', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'AFRMM ( Marinha Mercante )', true, false, 'NET_WEIGHT', 'BRL', 44391),
('c1aba012-0fea-4f70-9cc3-3ddc75ed4f4f', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Armazenagem', false, false, 'NET_WEIGHT', 'BRL', 754829),
('48955c7a-2743-4bbf-8ad8-a5ae2922b8c6', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'THC no destino / capatazias', false, false, 'NET_VALUE', 'BRL', 36591),
('b566c56a-1920-47c6-9058-6fc0058a53b1', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Frete Internacional', true, true, 'NET_WEIGHT', 'USD', 79281),
('0d5a6c1a-267f-49ca-be4e-1ca12f1c3978', '76dc91ff-5fe1-4191-b1b7-7827fff8454f', 'Seguro Internacional', true, true, 'NET_VALUE', 'USD', 22767); -- Duplicate ID, likely error in dump


-- Insert data for table: declaration_invoices
INSERT INTO perfuratriz.declaration_invoices (id, "declarationId", registration, "createdAt", quote) VALUES
('9d79b7c1-e93b-4922-80e3-8b10b5663e8b', '5baf7720-c0c4-42ca-9db2-8432176aa581', 'TH-PDTH250201-3', '2025-02-01 03:00:00+00', 57310),
('0a968646-1faa-4c8d-97cb-12a25a67e499', '5a3bca1e-1b4e-4ccb-a960-9559177691fa', 'LHD-H25-001002', '2025-03-31 03:00:00+00', 58776);

-- Insert data for table: declaration_invoice_products
-- (Data parsed, focusing on the declaration_invoice_products COPY section)
INSERT INTO perfuratriz.declaration_invoice_products (id, "invoiceId", "productId", name, tid, description, weight, length, height, width, amount, quantity) VALUES
('161f9674-be7c-4b08-a22d-7620484a9779', '38df3406-f47d-4013-8952-e8b7a1918660', '703d1eee-3277-4ba0-969a-547fa5cdf484', 'Pistão M60', '', '', 19500, 10, 10, 10, 29000, 200),
('fe9d7878-89d7-4818-bf81-ecaa207ba7a4', '84132f92-b1d0-4486-bf12-7143c5cb5209', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Frete Rodoviário', '', '', 300958, 0, 0, 0, 300958, 1),
('7bec2c1f-e0d1-40cc-93c8-3df26945b6f7', '84132f92-b1d0-4486-bf12-7143c5cb5209', 'c9e6e649-84cf-4869-a8d3-6f4e295b0619', 'THC no destino / capatazias', '', '', 38301, 0, 0, 0, 38301, 1),
('9f515469-572f-4ddb-bd5f-ba69e0253d17', '84132f92-b1d0-4486-bf12-7143c5cb5209', 'ae89eec1-6bb3-426f-8bc7-7a9a57b2c806', 'Siscomex', '', '', 15423, 0, 0, 0, 15423, 1),
('bb93af0a-8704-4376-8f08-b9ea2024cf8d', '84132f92-b1d0-4486-bf12-7143c5cb5209', '3e5e9562-de9a-4a43-8063-38e53c0e0c59', 'Despachante', '', '', 90000, 0, 0, 0, 90000, 1),
('51d208cc-3cef-4592-b6bd-20f7230eeacb', '84132f92-b1d0-4486-bf12-7143c5cb5209', '51a48b66-cb24-4d5a-8547-9ce579e6ec9f', 'Despesas de Seguro Internacional ( Diferença )', '', '', 8923, 0, 0, 0, 8923, 1),
('a94fa769-7e07-44a6-b0bd-cfb391db639b', '84132f92-b1d0-4486-bf12-7143c5cb5209', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Liberacão do BL', '', '', 18114, 0, 0, 0, 18114, 1),
('970be168-1d4a-4012-ac35-9b20b57c1af7', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Frete Rodoviário', '', '', 298820, 0, 0, 0, 298820, 1),
('ad01623e-6e42-4fd8-bdfd-da197d286c57', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Total Acres. Trib.', '', '', 22558, 0, 0, 0, 22558, 1),
('dff4f541-554d-45e5-b304-4358478a0bf3', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Desconsolidacão', '', '', 18695, 0, 0, 0, 18695, 1),
('5ba910b4-fe4c-4208-a1e8-23b56d3102fe', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'AFRMM ( Marinha Mercante )', '', '', 53439, 0, 0, 0, 53439, 1),
('bed136b6-c5f0-4648-8f44-152ba6ae9ab9', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'SDA', '', '', 25000, 0, 0, 0, 25000, 1),
('20348743-5261-4d7a-93fa-6195236aef33', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Frete Internacional', '', '', 78624, 0, 0, 0, 78624, 1),
('64244e4c-5fd8-4402-9107-c5e4abbfe68a', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Siscomex', '', '', 15423, 0, 0, 0, 15423, 1),
('9826e8b1-c450-4a7f-a59f-d8f9165059bc', 'd9091499-25d4-45bf-b3bc-a0f456195d91', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Frete Internacional', '', '', 78624, 0, 0, 0, 78624, 1),
('f0bb2abc-836b-4766-9780-0bc1a331bfca', '84132f92-b1d0-4486-bf12-7143c5cb5209', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Seguro Internacional', '', '', 138733, 0, 0, 0, 138733, 1),
('582fd0ce-6917-4b40-99d9-a458bfbb26d2', '84132f92-b1d0-4486-bf12-7143c5cb5209', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Seguro Internacional', '', '', 12214, 0, 0, 0, 12214, 1),
('b69efb61-f852-48a0-bd59-83bf93683b1e', '84132f92-b1d0-4486-bf12-7143c5cb5209', '7b2474d8-5366-48af-979c-0ca332093fe0', 'AFRMM ( Marinha Mercante )', '', '', 46160, 0, 0, 0, 46160, 1),
('3bda7864-cd25-47d3-81c9-92673f7c414d', '84132f92-b1d0-4486-bf12-7143c5cb5209', '7b2474d8-5366-48af-979c-0ca332093fe0', 'Frete Rodoviário', '', '', 300958, 0, 0, 0, 300958, 1);

-- Insert data for table: declaration_invoice_product_ncms
INSERT INTO perfuratriz.declaration_invoice_product_ncms (id, "productId", code, tax, icms, pis, cofins, ipi) VALUES
('92d74e53-1fcd-4458-a603-253b6fe74b18', 'e7a5bc4a-9115-413f-a40a-f8f5effdc698', 223167, 23000, 100, 210, 965, 520);
