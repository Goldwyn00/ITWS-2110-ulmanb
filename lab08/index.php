<?php
//connect to mysql
$conn = new mysqli("localhost", "root", "", "websyslab8");
if ($conn->connect_error) {
   die("Failed to Connect! " . $conn->connect_error);
}

//set up all the orderings
$RINOrder = $conn->query("SELECT * FROM students ORDER BY rin ASC");
$lastNameOrder = $conn->query("SELECT * FROM students ORDER BY last_name ASC");
$RCSidOrder = $conn->query("SELECT * FROM students ORDER BY rcsID ASC");
$firstNameOrder = $conn->query("SELECT * FROM students ORDER BY first_name ASC");
$grades = $conn->query("SELECT * FROM grades ORDER BY rin ASC");
$courses = $conn->query("SELECT * FROM courses ORDER BY crn ASC");

?>

<!DOCTYPE html>
<html>

   <head>Student Orderings!</head>
   <body>
      <!-- print associated information for each ordering -->
      <h1>RIN:</h1>
      <?php
         echo "<ul>";
         while ($row = $RINOrder->fetch_assoc()) {
            echo "<li>" . $row["first_name"] . " (" . $row["rin"] . ")</li>";
         }
         echo "</ul>";
      ?>
      <h1>Last Name:</h1>
      <?php
         echo "<ul>";
         while ($row = $lastNameOrder->fetch_assoc()) {
            echo "<li>" . $row["first_name"] . " (" . $row["last_name"] . ")</li>";
         }
         echo "</ul>";
      ?>
      <h1>RCSid:</h1>
      <?php
         echo "<ul>";
         while ($row = $RCSidOrder->fetch_assoc()) {
            echo "<li>" . $row["first_name"] . " (" . $row["rcsID"] . ")</li>";
         }
         echo "</ul>";
      ?>
      <h1>First Name:</h1>
      <?php
         echo "<ul>";
         while ($row = $firstNameOrder->fetch_assoc()) {
            echo "<li>" . $row["first_name"] . "</li>";
         }
         echo "</ul>";
      ?>
      <h1>Students Who Have Grades Higher Than 90</h1>
      <?php
      $RINOrder->data_seek(0);
         while ($row = $RINOrder->fetch_assoc()) {
            $allGrades = $conn->query("SELECT * FROM grades WHERE rin = " . $row["rin"]);
            $has90 = false;
            while ($grade = $allGrades->fetch_assoc()) {
               if ($grade["grade"] >= 90) {
                  $has90 = true;
               }
            }
            if ($has90) {
               echo "<li>" . $row["rin"] . " - " . $row["first_name"] . " " . $row["last_name"] . " - " . $row["street"] . " Street, " . $row["city"] . ", " . $row["state"] . " " . $row["zip"] . "</li>";
            }
         }
      ?>
      <h1>Average Grades in Each Course</h1>
      <?php
         
         while ($row = $courses->fetch_assoc()) {
            $averageGrade = 0;
            $studentCount = 0;
            $grades->data_seek(0);
            while ($gradeRow = $grades->fetch_assoc()) {
               if ($row["crn"] == $gradeRow["crn"]) {
                  $averageGrade += $gradeRow["grade"];
                  $studentCount += 1;
               }
            }
            $averageGrade = $averageGrade/$studentCount;
            echo "<li>" . $row["title"] . " - Average Grade:  " . $averageGrade . " - " . "Number of Students: " . $studentCount . "</li>";
         }
      ?>
      <!-- close the connection -->
      <?php $conn->close(); ?>
   </body>
</html>