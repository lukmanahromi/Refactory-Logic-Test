function palindrome() {

    const text = document.getElementById("inputPalindrome").value;
    const newText = text.toLowerCase();
    const arrayValues = newText.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if (newText == reverseString) {
        // console.log('Palindrome');
        document.getElementById("resultPalindrome").innerHTML = "Palindrome";
    } else {
        // console.log('Not palindrome');
        document.getElementById("resultPalindrome").innerHTML = "Not Palindrome"
    }
}


function leapYear() {
    
    function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++) {
            year_range.push(i);
        }
        var new_array = [];

        year_range.forEach(
            function (year) {
                if (test_LeapYear(year))
                new_array.push(year);
                document.getElementById("resultLeap").innerHTML = new_array;
                // console.log(new_array);
            });

        return new_array;
    }

    function test_LeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
        } else {
            return false;
            
        }
    }

    year1 = document.getElementById("inputYear1").value;
    year2 = document.getElementById("inputYear2").value;
    console.log(leap_year_range(year1, year2));

}

function reverseWord(str) {

    const text = document.getElementById("inputReverse").value;
    newText = text.match(/\S+/g);
    var result = "";
    for (var i = 0; i < newText.length; i++) {
        result += newText[i].split('').reverse().join('') + " ";
        //result1 = result.charAt(0).toUpperCase() + result.slice(1);
        document.getElementById("resultReverse").innerHTML = result;
        //console.log(result);
        //console.log(result1);
    }
}

function fizzBuzz() {

    var output = '';
    const n = document.getElementById("inputFizz").value;
    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            // console.log("FizzBuzz");
            output += "FizzBuzz" + ", ";
        } else if (i % 3 == 0) {
            // console.log("Fizz");
            output += "Fizz" + ", ";
        } else if (i % 5 == 0) {
            // console.log("Buzz");
            output += "Buzz" + ", ";
        } else {
            //    console.log(i);
            output += i + ", ";
        }
    }
    console.log(output)
    document.getElementById("resultFizz").innerHTML = output;
}