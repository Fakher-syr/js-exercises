/*
 Colonisers would like to bring some researchers to the planet to scrunise the surface. 
  
 They also need pupils who would act as assistants. Unfortunately, the number
 of seats is limited on the spaceship therefore they set the following algorithm
 to select students:

 Only students who have attended enough classes are eligible to join the research teams.

 Implement the body of function called "eligibleStudents" which:
  - Accepts an array which contains all the students' names and their attendance counts.
    For example:
    [
      ["Hunor", 10],
      ["Magor", 1]
    ]
    See that each student's information is stored separately as an embedded array.
    
    This is also called as 2 dimensional array when you can find array inside of array.

  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function eligibleStudents(candidates) {
  // You have to implement this function body
}

/* ======= TESTS - DO NOT MODIFY ===== */

const alphaStudentGroup = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
  ["Bob", 9],
  ["Lee", 1]
]

const deltaStudentGroup = [
  ["Zoidber", 6],
  ["Bender", 5],
  ["Zapp", 7]
]

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
}

function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
}

test("eligibleStudents function works",
  arraysEqual(
    eligibleStudents(alphaStudentGroup), ["Ahmed", "Clement", "Tayoa", "Nina", "Bob"]
  )
)

test("eligibleStudents function without eligible candidates",
  arraysEqual(eligibleStudents(deltaStudentGroup), [])
)

test("eligibleStudents function with no candidates",
  arraysEqual(eligibleStudents([]), [])
)
