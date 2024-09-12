/* Javascript Practice Exercises for Beginners
    ============================================
    
    Beginner Excercises: Part 1
    ----------------------------*/


/*  Exercise 1 :
    -------------- 
    Write a JS program to check two numbers and return true,
    if one of the number is 100 or if the sum of the two numbers is 100 */

   /* const isEqualto100 =(a,b) => a === 100 || b === 100 || (a+b)===100;
    console.log(isEqualto100(100,7));
    console.log(isEqualto100(20,80));   */

/*  Exercise 2 :
    -------------- 
    Write a JS program to get the extension of a filename*/

    // const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
    // console.log(getFileExtension('index.html'));

/*  Exercise 3 :
    -------------- 
    Write a JS program to replace every character in a given string with the character following it in the alphabet*/

    // const newStr = (str)=> str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)) .join('');
    // console.log(newStr('abc'));

/*  Exercise 4 :
    -------------- 
    Write a JS program to get the current date.
    Expected Output:
    mmm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyyy */

    // const newDate = (date = new Date()) => {
    //     const days = date.getDate();
    //     const months = date.getMonth()+1;
    //     const years = date.getFullYear();
    //     return `${days}/${months}/${years}`;
    // }
    // console.log(newDate());

    /*  Exercise 5 :
    -------------- 
    Write a JS program to create a new string adding "New!" in front of a given string. If the given string begins
    with "New!" already then return the original string */

    const addNew = (str) =>
        str.indexOf('New!') === 0 ? str : `New! ${str}`;
    console.log(addNew('New!  offers'));


    