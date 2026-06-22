#Database Creation
CREATE DATABASE hostel_mgmt_AfiqSyahmi;
USE hostel_mgmt_AfiqSyahmi;

#Tables Creation 
CREATE TABLE room_types(
	type_id INT PRIMARY KEY,
    type_name VARCHAR(30) NOT NULL,
    rent DECIMAL(6, 2) NOT NULL,
    deposit DECIMAL(6, 2) NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE rooms(
	room_id INT PRIMARY KEY,
    room_no VARCHAR(10) NOT NULL,
    floor_no INT NOT NULL,
    is_occupied BOOLEAN DEFAULT FALSE,
    type_id INT,
    CONSTRAINT fk_type_id
		FOREIGN KEY(type_id) REFERENCES room_types(type_id)
);

CREATE TABLE students(
	student_id INT PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL,
    checkin_date DATE NOT NULL,
    room_id INT,
    CONSTRAINT fk_room_id
		FOREIGN KEY(room_id) REFERENCES rooms(room_id)
);

CREATE TABLE maintenance(
	maint_id INT PRIMARY KEY,
    issue_desc TEXT NOT NULL,
    severity VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    reported_on DATE NOT NULL,
    resolved_on DATE,
    room_id INT,
    CONSTRAINT fk_room_id2
		FOREIGN KEY(room_id) REFERENCES rooms(room_id)
);

CREATE TABLE payments(
	payment_id INT PRIMARY KEY,
    amount DECIMAL(6, 2) NOT NULL,
    paid_on DATE NOT NULL,
    method VARCHAR(20) NOT NULL,
    note VARCHAR(70) NOT NULL,
    student_id INT,
    CONSTRAINT fk_student_id
		FOREIGN KEY(student_id) REFERENCES students(student_id)
);

#Insert 10 values in all tables following the order
#room_types -> rooms -> students -> maintenance -> payments
INSERT INTO room_types(type_id, type_name, rent, deposit, capacity)
VALUES
(1, 'Single', '600.00', '300.00', 1),
(2, 'Double', '400.00', '200.00', 2),
(3, 'Premium', '900.00', '450.00', 1),
(4, 'Family', '1000.00', '500.00', 4),
(5, 'Twin Share', '350.00', '175.00', 2),
(6, 'Deluxe Single', '750.00', '375.00', 1),
(7, 'Triple', '300.00', '150.00', 3),
(8, 'Executive Suite', '1200.00', '600.00', 1),
(9, 'Budget Double', '280.00', '140.00', 2),
(10, 'Studio', '650.00', '325.00', 1);

#Insert a default value of 'VACANT' first for all rooms
INSERT INTO rooms(room_id, room_no, floor_no, type_id)
VALUES
(101, 'A101', 4, 1),
(102, 'B101', 3, 2),
(103, 'C101', 2, 3),
(104, 'D101', 1, 4),
(105, 'E101', 5, 5),
(106, 'F101', 6, 6),
(107, 'G101', 1, 7),
(108, 'H101', 2, 8),
(109, 'J101', 3, 9),
(110, 'K101', 3, 10);

INSERT INTO students(student_id, fname, lname, status, checkin_date, room_id)
VALUES
('0118', 'Afiq', 'Danish', 'ACTIVE', '2025-01-10', 101),
('0138', 'Syahmi', 'Faris', 'ACTIVE', '2025-01-10', 102),
('0205', 'Afif', 'Shaqir', 'NON_ACTIVE', '2024-01-10', 103),
('0116', 'Adam', 'Razali', 'NON_ACTIVE', '2024-01-09', 104),
('0100', 'Naim', 'Abdullah', 'ACTIVE', '2025-01-09', 105),
('0185', 'Mukhritz', 'Iman', 'ACTIVE', '2025-01-11', 106),
('0218', 'Afiq', 'Danial', 'ACTIVE', '2025-01-10', 107),
('0098', 'ALif', 'Fathi', 'NON_ACTIVE', '2024-01-08', 108),
('0170', 'Mikail', 'Aisy', 'ACTIVE', '2025-01-12', 109),
('0075', 'Rizwan', 'Hakim', 'NON_ACTIVE', '2023-10-10', 110);

SELECT * FROM students;

INSERT INTO maintenance(maint_id, issue_desc, severity, status, reported_on, resolved_on, room_id)
VALUES
(1, 'Aircond not working', 'HIGH', 'RESOLVED', '2025-02-01', '2025-02-05', 101),
(2, 'Light bulb broken', 'LOW', 'RESOLVED', '2025-02-15', '2025-02-19', 102),
(3, 'Leaking Ceiling', 'MEDIUM', 'OPEN', '2025-02-15', NULL, 103),
(4, 'Broken Bed', 'HIGH', 'RESOLVED', '2024-03-28', '2024-03-29', 104),
(5, 'Light bulb broken', 'MEDIUM', 'RESOLVED', '2025-04-16', '2025-04-20', 105),
(6, 'Leaking Ceiling', 'LOW', 'OPEN', '2025-05-01', NULL, 106),
(7, 'Electric switch not working', 'LOW', 'OPEN', '2025-04-30', NULL, 107),
(8, 'Broken Furniture', 'HIGH', 'RESOLVED', '2024-09-02', '2024-09-10', 108),
(9, 'Aircond not working', 'MEDIUM', 'RESOLVED', '2025-04-29', '2024-05-05', 110),
(10, 'Broken Bed', 'HIGH', 'OPEN', '2025-04-30', NULL, 102);

INSERT INTO payments(payment_id, amount, paid_on, method, note, student_id)
VALUES
(1, 600.00, '2024-12-01', 'CASH', 'December Rent', '0118'),
(2, 200.00, '2024-12-01', 'CARD', 'December Deposit', '0138'),
(3, 900.00, '2024-12-05', 'FPX', 'December Rent', '0205'),
(4, 1000.00, '2024-12-10', 'TNG', 'December Rent', '0116'),
(5, 1200.00, '2024-12-03', 'CASH', 'August Rent', '0098'),
(6, 325.00, '2024-12-01', 'TNG', 'September Deposit', '0075'),
(7, 280.00, '2025-01-05', 'CARD', 'January Rent', '0170'),
(8, 350.00, '2025-01-06', 'FPX', 'January Rent', '0100'),
(9, 375.00, '2025-03-01', 'CASH', 'March Deposit', '0185'),
(10, 300.00, '2025-02-02', 'FPX', 'February Rent', '0218');

#Add email column to students
ALTER TABLE students
	ADD COLUMN email VARCHAR(100) UNIQUE;
    
#Create a temporary test table and drop it
CREATE TABLE test(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS test;

#Update the is_occupied column in rooms table
UPDATE rooms
	SET is_occupied = TRUE
    WHERE room_id IN (
    SELECT room_id FROM students WHERE status = 'ACTIVE');

SELECT * FROM rooms;

#Delete maintenance record where status = 'RESOLVED' and reported date > 60 days
DELETE FROM maintenance
WHERE status = 'RESOLVED' AND DATEDIFF(CURDATE(), reported_on) > 60;

#Display room types where rent is between RM400 and RM800
SELECT * FROM room_types 
WHERE rent BETWEEN 400 AND 800;

#Retrieve students whose names start with the letter 'A'
SELECT * FROM students
WHERE fname LIKE 'A%';

#Display payments that use payment method either FPX or CARD
SELECT * FROM payments
WHERE method IN ('FPX', 'CARD');

#Filtering query that combine AND, OR and NOT
SELECT * FROM payments
WHERE (amount > 300 AND NOT method = 'TNG')
OR note = 'December Rent';

#Aggregate funtions 
#Count how many transactions and total amount of payments made by each method
SELECT method, COUNT(payment_id) as total_transactions, SUM(amount) as total_amount
FROM payments
GROUP BY method;

#String functions
#Display all students' full name and in uppercase
SELECT UPPER(CONCAT(fname, ' ', lname)) as full_name
FROM students;

#Create view v_room_status
CREATE OR REPLACE VIEW v_room_status AS
SELECT
	r.room_no,
    rt.type_name,
    rt.rent,
    r.floor_no,
    rt.capacity,
    
    #Count how many ACTIVE students assigned to this room
    (SELECT COUNT(*)
     FROM students s
     WHERE s.room_id = r.room_id
     AND s.status = 'ACTIVE'
	) AS n_occupants,
    
    #Count how many maintenance issue are still OPEN for this room
    (SELECT COUNT(*)
     FROM maintenance m
     WHERE m.room_id = r.room_id
     AND m.status = 'OPEN'
	) AS pending_issues,
    #Room is vacant if no ACTIVE students
    CASE
		WHEN (
			SELECT COUNT(*)
            FROM students s
            WHERE s.room_id = r.room_id
            AND s.status = 'ACTIVE'
            ) = 0
		THEN TRUE
		ELSE FALSE
	END AS is_vacant
FROM rooms r
JOIN room_types rt ON r.type_id = rt.type_id;

select * from v_room_status;

#total number of students per room type
SELECT rt.type_name,
COUNT(s.student_id) AS total_students
FROM room_types rt
JOIN rooms r ON r.type_id = rt.type_id
LEFT JOIN students s ON s.room_id = r.room_id
GROUP BY rt.type_name;

#average rent & total deposit per room type
SELECT 
	type_name,
    ROUND(AVG(rent),2) AS avg_rent,
    ROUND(SUM(deposit), 2) AS total_deposit
FROM room_types
GROUP BY type_name;

#monthly payment totals grouped by year & month
SELECT
	YEAR(paid_on) AS pay_year,
    MONTH(paid_on) AS pay_month,
    SUM(amount) AS total_paid
FROM payments
GROUP BY YEAR(paid_on), MONTH(paid_on)
ORDER BY pay_year, pay_month;

#count OPEN maintenance issues per floor (having > 2)
SELECT 
	r.floor_no,
    COUNT(m.maint_id) AS open_issues
FROM rooms r
JOIN maintenance m ON m.room_id = r.room_id
WHERE m.status = 'OPEN'
GROUP BY r.floor_no
HAVING COUNT(m.maint_id) > 2;

#report queries
SELECT 
    rt.type_name,

    # ROUND() example
    ROUND(rt.rent, 2) AS rounded_rent,

    # CONCAT() + UPPER() example
    UPPER(CONCAT(rt.type_name, ' ROOM')) AS type_name_upper,
    
    # LOWER() example
    LOWER(rt.type_name) AS type_name_lower,

    # CASE example (categorizing rent)
    CASE
        WHEN rt.rent < 400 THEN 'LOW'
        WHEN rt.rent BETWEEN 400 AND 800 THEN 'MEDIUM'
        ELSE 'HIGH'
    END AS rent_category

FROM room_types rt;

	