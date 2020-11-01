use wrfcenter;
INSERT INTO WRFCENTER_R_DATA (ID, TYPE, LABEL, IS_ACTIVE, PARENT_ID, SORT_ORDER)
VALUES
	(1, 'PAINT_CATEGORY', 'Milk Paint', 1, NULL, 1),
	(2, 'PAINT_CATEGORY', 'Water Based Top Coat', 1, NULL, 2),
	(10, 'PAINT_COLOR', 'Alabaster', 1, 1, 2),
	(11, 'PAINT_COLOR', 'Antique White', 1, 1, 2),
	(12, 'PAINT_COLOR', 'Ballet Pink', 1, 1, 2),
	(13, 'PAINT_COLOR', 'Blue Moon', 1, 1, 2),
	(50, 'PAINT_COLOR', 'Flat Out Flat Topcoat', 1, 2, 2),
	(51, 'PAINT_COLOR', 'High Performance Flat Topcoat', 1, 2, 2);