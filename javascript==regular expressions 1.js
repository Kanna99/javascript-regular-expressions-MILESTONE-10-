function valid_email(str)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(str))
    {
        console.log("valid email address!");

    }
    else{
        console.log("you have entered an invalid email address!");
    }
}
valid_email('me-info@example.com');