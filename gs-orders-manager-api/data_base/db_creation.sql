
create database gsbar;

create user 'gsbarmanagerapp'@'%' identified by 'gsbarmanagerapp';

grant all on gsbar.* to 'gsbarmanagerapp'@'%';

use gsbar;

CREATE TABLE gsb_mesurement_unit (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL UNIQUE,
  description varchar(200),
  
  PRIMARY KEY (id)
);

CREATE TABLE gsb_city (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL UNIQUE,
  
  PRIMARY KEY (id)
);

CREATE TABLE gsb_user (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL UNIQUE,
  email varchar(50),
  
  PRIMARY KEY (id)
);

CREATE TABLE gsb_location (
  id        int(11) NOT NULL AUTO_INCREMENT,
  name      varchar(30) NOT NULL UNIQUE,
  address   varchar(100),
  city_id   int(11),
  comment   varchar(200),

  PRIMARY KEY (id),
  FOREIGN KEY (city_id)  REFERENCES gsb_city(id)
);

CREATE TABLE gsb_item (
  id                    int(11) NOT NULL AUTO_INCREMENT,
  name                  varchar(30) NOT NULL UNIQUE,
  description           varchar(100) ,
  created               datetime DEFAULT NULL,
  active                boolean DEFAULT true,
  
  mesurement_unit_id    int(2) NOT NULL,
  user_id               int(11) NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (mesurement_unit_id)  REFERENCES gsb_mesurement_unit(id),
  FOREIGN KEY (user_id)  			REFERENCES gsb_user(id)
);

CREATE TABLE gsb_item_location (
  id                    int(11) NOT NULL AUTO_INCREMENT,
  item_id               int(11) NOT NULL,
  location_id           int(11) NOT NULL,
  quantity              int(11) NOT NULL DEFAULT '0',

  PRIMARY KEY (id),
  FOREIGN KEY (item_id)       REFERENCES gsb_item(id),
  FOREIGN KEY (location_id)  	REFERENCES gsb_location(id)
);


CREATE TABLE gsb_local (
  id                    int(11) NOT NULL,
  name                  varchar(30) NOT NULL UNIQUE,
  location_id           int(11) NOT NULL,
  comment               varchar(200),

  PRIMARY KEY (id),
  FOREIGN KEY (location_id)  	REFERENCES gsb_location(id)
);


CREATE TABLE gsb_room (
  id                    int(11) NOT NULL,
  name                  varchar(30) NOT NULL UNIQUE,
  local_id              int(11) NOT NULL,
  comment               varchar(200),

  PRIMARY KEY (id),
  FOREIGN KEY (local_id)  	REFERENCES gsb_local(id)
);

CREATE TABLE gsb_table (
  id                    int(11) NOT NULL AUTO_INCREMENT,
  name                  varchar(30) NOT NULL UNIQUE,
  left_margin           int(2),
  top_margin            int(2),
  room_id               int(11) NOT NULL,
  comment               varchar(200),

  PRIMARY KEY (id),
  FOREIGN KEY (room_id)  	REFERENCES gsb_room(id)
);

CREATE TABLE gsb_order (
    id int(11) NOT NULL AUTO_INCREMENT,
    user_id int(11) NOT NULL,
    created datetime DEFAULT NULL,
    local_id int(11) NOT NULL,
    table_id int(11),

    PRIMARY KEY (id),
    FOREIGN KEY (user_id)  		REFERENCES gsb_user(id),
    FOREIGN KEY (table_id)  	REFERENCES gsb_table(id)
);

CREATE TABLE gsb_order_item (
    id int(11) NOT NULL AUTO_INCREMENT,
    order_id int(11) NOT NULL,
    item_id int(11),
    quantity int(11) NOT NULL DEFAULT '0',

    PRIMARY KEY (id),
    FOREIGN KEY (order_id)  REFERENCES gsb_order(id),
    FOREIGN KEY (item_id)  REFERENCES gsb_item(id)
);




CREATE TABLE gsb_purchase_order (
    id int(11) NOT NULL AUTO_INCREMENT,
    user_id int(11) NOT NULL,
    comment varchar(200) ,
    created datetime DEFAULT NULL,
    location_id int(11),

    PRIMARY KEY (id),
    FOREIGN KEY (user_id)  		REFERENCES gsb_user(id),
    FOREIGN KEY (location_id)  	REFERENCES gsb_location(id)
);

CREATE TABLE gsb_purchase_order_item (
    id                  int(11) NOT NULL AUTO_INCREMENT,
    item_id             int(11) NOT NULL,
    purchase_order_id   int(11) NOT NULL,
    quantity            int(11) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (item_id)  				REFERENCES gsb_item(id),
    FOREIGN KEY (purchase_order_id)  	REFERENCES gsb_purchase_order(id)
);

CREATE TABLE gsb_purchase (
    id                  int(11) NOT NULL AUTO_INCREMENT,
    purchase_order_id   int(11),
    created             datetime NOT NULL,
    purchase_date       date NOT NULL,
    user_id             int(11) NOT NULL,
    location_id         int(11) NOT NULL,
    comment             varchar(200),
    total               float NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id)  		REFERENCES gsb_user(id),
    FOREIGN KEY (location_id)  	REFERENCES gsb_location(id)
);

CREATE TABLE gsb_purchase_item (
    id int(11) NOT NULL AUTO_INCREMENT,
    purchase_id int(11) NOT NULL,
    item_id int(11),
    purchase_price float NOT NULL,
    quantity int(11) NOT NULL DEFAULT '0',

    PRIMARY KEY (id),
    FOREIGN KEY (item_id)  REFERENCES gsb_item(id)
);
