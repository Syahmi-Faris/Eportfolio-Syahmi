#Database Creation (DDL)
CREATE DATABASE project_group4;
USE project_group4;

-- #Tables Creation
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

-- #Demonstrate the use of DROP and ALTER
#Drop the existing foreign key and change its behaviour in rooms table
ALTER TABLE rooms 
DROP FOREIGN KEY fk_location_id;

ALTER TABLE rooms
ADD CONSTRAINT fk_location_id
	FOREIGN KEY(location_id) REFERENCES room_locations(location_id) ON DELETE SET NULL ON UPDATE CASCADE;
    
    
-- #Task b
#Inserting 10 data for each tables
INSERT INTO students (student_id, fname, lname, ic_number, phone, email, faculty, gender) VALUES
(1, 'Chew', 'Chiu Xian', '040101-01-1234', '0123456701', 'cxchew@graduate.utm.my', 'ENG', 'Male'),
(2, 'Joanne', 'Ching', '040102-02-2345', '0123456702', 'joanne-321@graduate.utm.my', 'SCI', 'Female'),
(3, 'Cheryl', 'Cheong', '040103-03-3456', '0123456703', 'cheryl322@graduate.utm.my', 'BUS', 'Female'),
(4, 'Lubna', 'Al Haani binti Radzuan', '040104-04-4567', '0123456704', 'haani1224@graduate.utm.my', 'ART', 'Female'),
(5, 'Chau', 'Ying Jia', '040105-05-5678', '0123456705', 'chauyingjia@graduate.utm.my', 'ENG', 'Female'),
(6, 'Sabrina', 'Heng Wei Qi', '040106-06-6789', '0123456706', 'sabrinaheng@graduate.utm.my', 'SCI', 'Female'),
(7, 'Teh', 'Ru Qian', '040107-07-7890', '0123456707', 'tehruqian@graduate.utm.my', 'BUS', 'Female'),
(8, 'Evelyn', 'Goh', '040108-08-8901', '0123456708', 'evelynngoh@graduate.utm.my', 'ART', 'Female'),
(9, 'Mohamed', 'Alif Fathi bin Abdul Latif', '040109-09-9012', '0123456709', 'aliffathi@graduate.utm.my', 'ENG', 'Male'),
(10, 'Nurul', 'Asyikin Binti Khairul Anuar', '040110-10-0123', '0123456710', 'nasyikinkhai@graduate.utm.my', 'SCI', 'Female');

INSERT INTO room_types (type, price, capacity) VALUES
('Single', 150.00, 1),
('Double', 250.00, 2),
('Triple', 350.00, 3),
('Quad', 450.00, 4),
('Deluxe', 600.00, 2),
('Suite', 1000.00, 3),
('Standard', 200.00, 1),
('Economy', 100.00, 1),
('Premium', 800.00, 2),
('Family', 1200.00, 4);

INSERT INTO room_locations (college, gender_type) VALUES
('Alpha College', 'Male'),
('Beta College', 'Female'),
('Gamma College', 'Male'),
('Delta College', 'Female'),
('Epsilon College', 'Male'),
('Zeta College', 'Female'),
('Theta College', 'Male'),
('Iota College', 'Female'),
('Kappa College', 'Male'),
('Lambda College', 'Female');

INSERT INTO rooms (room_number, type_id, location_id, status) VALUES
(101, 1, 1, 'Available'),
(102, 2, 2, 'Occupied'),
(103, 3, 3, 'Available'),
(104, 4, 4, 'Occupied'),
(105, 5, 5, 'Available'),
(106, 6, 6, 'Available'),
(107, 7, 7, 'Occupied'),
(108, 8, 8, 'Available'),
(109, 9, 9, 'Occupied'),
(110, 10, 10, 'Available');

INSERT INTO reservations (reservation_id, student_id, room_id, start_date, end_date) VALUES
(1, 1, 1, '2025-12-01', '2025-12-10'),
(2, 2, 2, '2025-12-02', '2025-12-12'),
(3, 3, 3, '2025-12-03', '2025-12-15'),
(4, 4, 4, '2025-12-05', '2025-12-20'),
(5, 5, 5, '2025-12-06', '2025-12-18'),
(6, 6, 6, '2025-12-07', '2025-12-17'),
(7, 7, 7, '2025-12-08', '2025-12-19'),
(8, 8, 8, '2025-12-09', '2025-12-22'),
(9, 9, 9, '2025-12-10', '2025-12-21'),
(10, 10, 10, '2025-12-11', '2025-12-23');

INSERT INTO payments (payment_id, reservation_id, amount, method) VALUES
(1, 1, 150.00, 'FPX'),
(2, 2, 250.00, 'CARD'),
(3, 3, 350.00, 'CASH'),
(4, 4, 450.00, 'FPX'),
(5, 5, 600.00, 'CARD'),
(6, 6, 1000.00, 'OTHER'),
(7, 7, 200.00, 'CASH'),
(8, 8, 100.00, 'FPX'),
(9, 9, 800.00, 'CARD'),
(10, 10, 1200.00, 'OTHER');

#Updating Student phone number
UPDATE students
SET phone = '0192345890'
WHERE student_id = 1;

-- #updating room status
UPDATE rooms
SET status = 'Occupied'
WHERE room_id IN (101, 108);

-- Disable safe updates
SET SQL_SAFE_UPDATES = 0;

-- Delete reservations
DELETE FROM reservations
WHERE end_date < '2025-12-15';

-- Re-enable safe updates
SET SQL_SAFE_UPDATES = 1;

#Task c
#1.filtering
#finding all the female students in science faculty
SELECT * 
FROM students
WHERE gender = 'Female' AND faculty = 'SCI';

#finding reservations between start date 1/12 - 31/12 but end date <20/12
SELECT * 
FROM reservations
WHERE start_date BETWEEN '2025-12-01' AND '2025-12-31'
  AND NOT end_date > '2025-12-20';

#2.Sorting
#a)listing all the students ordered by last name ascending and first name descending
SELECT * 
FROM students
ORDER BY lname ASC, fname DESC;

#b)Show top 5 most expensive room types
SELECT * 
FROM room_types
ORDER BY price DESC
LIMIT 5;

#3.Aggregation
#a)count total students in faculty
SELECT faculty, COUNT(*) AS total_students
FROM students
GROUP BY faculty;

#b)Total payment amount collected for all reservations
SELECT SUM(amount) AS total_revenue
FROM payments;

-- #c)Average room price by type
SELECT type, AVG(price) AS avg_price
FROM room_types
GROUP BY type;











    
    
    
    

