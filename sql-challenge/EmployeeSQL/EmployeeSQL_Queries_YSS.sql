--QUERIES--

----------
--List the following details of each employee: employee number, last name, first name, gender, and salary.
--Process: complete a join to view data from different tables.
SELECT employees.emp_no, employees.last_name, employees.first_name, employees.gender, salaries.salary
FROM salaries
INNER JOIN employees ON employees.emp_no=salaries.emp_no;

----------
--List employees who were hired in 1986.
--Process: select in the particular year as a condition using select*
SELECT * FROM employees
WHERE date_part('YEAR', hire_date) IN ('1986');

----------
--List the manager of each department with the following information: 
--department number, department name, the manager's employee number, 
--last name, first name, and start and end employment dates.
--Process: find common linkages to join the three tables together
CREATE VIEW managers_information AS 
SELECT departments.dept_no, departments.dept_name, dept_manager.emp_no, employees.last_name, employees.first_name, dept_manager.from_date, dept_manager.to_date
FROM departments
JOIN dept_manager ON departments.dept_no = dept_manager.dept_no
JOIN employees ON dept_manager.emp_no = employees.emp_no;
SELECT * FROM managers_information;

----------
--List the department of each employee with the following information: 
--employee number, last name, first name, and department name.
--Process: need to join dept_empl to bridge the gap between deptartments and employees to be able to select the dept_name for all employees.
--It is possible to call the columns we need after this join is completed.
CREATE VIEW employees_information AS
SELECT employees.emp_no, employees.last_name, employees.first_name, departments.dept_name
FROM employees
JOIN dept_empl on employees.emp_no = dept_empl.emp_no
JOIN departments on dept_empl.dept_no = departments.dept_no;
SELECT * FROM employees_information;

----------
--List all employees whose first name is "Hercules" and last names begin with "B."
--Process: first select all results with the first name, and subquery first name results by last name request.
SELECT * FROM employees
WHERE first_name = 'Hercules'
AND last_name SIMILAR TO 'B%'

----------
--List all employees in the Sales department, 
--including their employee number, last name, first name, and department name.
--Process:
CREATE VIEW sales_employees AS
SELECT employees.emp_no, employees.last_name, employees.first_name, departments.dept_name
from departments
JOIN dept_empl on departments.dept_no = dept_empl.dept_no
JOIN employees on dept_empl.emp_no = employees.emp_no;
SELECT * FROM sales_employees
WHERE dept_name = 'Sales';

----------
--List all employees in the Sales and Development departments, 
--including their employee number, last name, first name, and department name.
--Process: same as above, but add development to the dept_name condition to find both.
CREATE VIEW sales_and_department_employees AS
SELECT employees.emp_no, employees.last_name, employees.first_name, departments.dept_name
from departments
JOIN dept_empl on departments.dept_no = dept_empl.dept_no
JOIN employees on dept_empl.emp_no = employees.emp_no;
SELECT * FROM sales_and_department_employees
WHERE dept_name = 'Sales'
OR dept_name = 'Development';

----------
--In descending order, list the frequency count of employee last names, 
--i.e., how many employees share each last name.
--Process: Count the last names of all employees, and choosing to just show the two relevant columns for clarity.
SELECT last_name, COUNT(last_name) AS "last name count"
FROM employees
GROUP BY last_name
ORDER BY "last name count" DESC;

----------