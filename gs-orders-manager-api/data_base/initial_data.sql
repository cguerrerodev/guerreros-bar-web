

use gsbar;

insert into gsb_city (name) values ('Bogotá');

insert into gsb_mesurement_unit (name) values ('Bottles');
insert into gsb_mesurement_unit (name) values ('Can');

insert into gsb_user (name) values ('SYSTEM');


insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Águila de botella', 1, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Costeña de botella', 1, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Póker de botella', 1, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Ligera de botella', 1, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Pilsen de botella', 1, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Águila Cero de botella', 1, 1, CURTIME());

insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Águila de lata', 2, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Costeña de lata', 2, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Póker de lata', 2, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Ligera de lata', 2, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Pilsen de lata', 2, 1, CURTIME());
insert into gsb_item (name, mesurement_unit_id, user_id, created) values ('Águila Cero de lata', 2, 1, CURTIME());



insert into gsb_location(name, address, city_id, comment) values ('Location 1','',1,'Default data');
insert into gsb_local (id, name, location_id ) values(1,'Local 1', 1);
insert into gsb_room (id, name, local_id ) values(1,'Main Room', 1);

insert into gsb_table (id, name, room_id, left_margin, top_margin) values(1,'Table 1', 1, 5, 25);
insert into gsb_table (id, name, room_id, left_margin, top_margin ) values(2,'Table 2', 1, 35, 25);
insert into gsb_table (id, name, room_id, left_margin, top_margin ) values(3,'Table 3', 1, 65, 25);
insert into gsb_table (id, name, room_id, left_margin, top_margin ) values(4,'Table 4', 1, 5, 50);
insert into gsb_table (id, name, room_id, left_margin, top_margin ) values(5,'Table 5', 1, 35, 50);
insert into gsb_table (id, name, room_id, left_margin, top_margin ) values(6,'Table 6', 1, 65, 50);

