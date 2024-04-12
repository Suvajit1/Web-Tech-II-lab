function updateSubjectList() {
    var year = document.getElementById("year").value;
    var semester = document.getElementById("semester").value;
    var subjectMessage = document.getElementById("subject-message");
    var subjectList = document.getElementById("subject-list");

    if (year && semester) {
      // Clear the current list
      subjectList.innerHTML = "";

      // Add new subjects based on the year and semester
      if (year === "1st" && semester === "1st") {
        addSubject("Mathematics I");
        addSubject("Sociology");
        addSubject("Engineering Mechanics");
      } else if (year === "1st" && semester === "2nd") {
        addSubject("Mathematics II");
        addSubject("Engineering Drawing");
        addSubject("Basic Electronics");
      } else if (year === "2nd" && semester === "1st") {
        addSubject("Data Strucures and Algorithms");
        addSubject("Database Management Systems");
        addSubject("Object Oriented Programming");
      } else if (year === "2nd" && semester === "2nd") {
        addSubject("Object Oriented Systems");
        addSubject("Software Engineering");
        addSubject("Comuter Networks");
      }else if (year === "3rd" && semester === "1st") {
        addSubject("Operating Systems");
        addSubject("Mobile and Wireless Networks");
        addSubject("Web Technologies I");
      } else if (year === "3rd" && semester === "2nd") {
        addSubject("Design and Analysis of Algorithms");
        addSubject("Web Technologies II");
        addSubject("Information Security");
      } else if (year === "4th" && semester === "1st") {
        addSubject("Machine Learning");
        addSubject("Internet of Things");
        addSubject("Network Security");
      } else if (year === "4th" && semester === "2nd") {
        addSubject("Data Science");
        addSubject("Pattern Recognition");
        addSubject("Management");
      }

      
      // Display the subject message
      subjectMessage.style.display = "block";

      // Display the subject list
      subjectList.style.display = "block";
    } else {
      // Hide the subject list if either year or semester is not selected
      subjectList.style.display = "none";
    }
  }

  function addSubject(subjectName) {
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(subjectName);
    listItem.appendChild(textNode);
    document.getElementById("subject-list").appendChild(listItem);
  }