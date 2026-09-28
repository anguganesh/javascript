

function courseDetails(): {courseName:string, price:number}
{
    let courseDetailsInfo = {
        courseName : "AI Data Science",
        price : 900
    };
    return courseDetailsInfo;
}

console.log(courseDetails());