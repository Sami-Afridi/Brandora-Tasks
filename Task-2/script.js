const students = [];
let choice;

do {
    // options
    choice = prompt(`Choose an action:
        1. Add a student
        2. Remove a student
        3. Display all students
        0. Quit\n`);

    // conditions

    // ---- Action 1
    if (choice === `1`) {
        let addStudent = prompt(`Enter the name of the student to add:`);
        if (!students.includes(addStudent)) {
            students.push(addStudent);
            alert(`${addStudent} has been added.`);
        } else {
            alert(`${addStudent} is already in the list. Duplicate entries are not allowed.`);
        };
    }

    // ---- Action 2
    else if (choice === `2`) {
        let removeStudent = prompt(`Enter the name of the student to remove:`);
        if (students.includes(removeStudent)) {
            students.filter(name => name !== removeStudent);
            alert(`${removeStudent} has been removed. `);
        } else {
            alert(`${removeStudent} is not in the list.`);
        };
    }

    // ---- Action 3
    else if (choice === `3`) {
        if (students.length > 0) {
            students.map((val) => {
                console.log(val);
            });
        } else {
            alert(`The list is currently empty.`);
        };
    }

    // ---- Action 3
    else if (choice !== `0`) {
        alert(`Invalid choice. Please select a valid option.`)
    };

} while (choice !== `0`);
alert(`Program ended.`);