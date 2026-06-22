#Database Creation (DDL)
CREATE DATABASE project_group4;
USE project_group4;

#Tables Creation
CREATE TABLE students (
	student_id INT PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    ic_number VARCHAR(20) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    faculty VARCHAR(10) NOT NULL,
	gender ENUM('Male', 'Female', 'Not Specified') DEFAULT 'Not Specified'
);

CREATE TABLE room_types(
	type_id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(10) NOT NULL UNIQUE, 
    price DECIMAL(6, 2) NOT NULL CHECK (price > 0),
    capacity INT NOT NULL CHECK(capacity >=1)
);

CREATE TABLE room_locations(
	location_id INT PRIMARY KEY AUTO_INCREMENT,
    college VARCHAR(50) NOT NULL UNIQUE,
    gender_type ENUM('Male', 'Female') NOT NULL
);

CREATE TABLE rooms(
	room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_number INT NOT NULL,
    type_id INT,
    location_id INT,
    status ENUM('Available', 'Occupied') DEFAULT 'Available',
    CONSTRAINT fk_type_id
		FOREIGN KEY(type_id) REFERENCES room_types(type_id),
	CONSTRAINT fk_location_id
		FOREIGN KEY(location_id) REFERENCES room_locations(location_id)
);

CREATE TABLE reservations(
	reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    room_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reserve_date DATE DEFAULT (CURDATE()),
    CONSTRAINT fk_student_id
		FOREIGN KEY(student_id) REFERENCES students(student_id) ON DELETE CASCADE,
	CONSTRAINT fk_room_id
		FOREIGN KEY(room_id) REFERENCES rooms(room_id) ON DELETE RESTRICT,
	CONSTRAINT date_chk CHECK (end_date > start_date)
);

CREATE TABLE payments (
  payment_id INT  PRIMARY KEY AUTO_INCREMENT,
  reservation_id INT,
  amount DECIMAL(6,2) NOT NULL CHECK (amount >= 0),
  method ENUM('FPX','CARD','CASH','OTHER') NOT NULL,
  payment_date DATE DEFAULT (CURDATE()),
  CONSTRAINT fk_reservation_id
	FOREIGN KEY (reservation_id) REFERENCES reservations(reservation_id) ON DELETE CASCADE
);

#Demonstrate the use of DROP and ALTER
#Drop the existing foreign key and change its behaviour in rooms table
ALTER TABLE rooms 
DROP FOREIGN KEY fk_location_id;

ALTER TABLE rooms
ADD CONSTRAINT fk_location_id
	FOREIGN KEY(location_id) REFERENCES room_locations(location_id) ON DELETE SET NULL ON UPDATE CASCADE;


    
    

    
    
    
    

