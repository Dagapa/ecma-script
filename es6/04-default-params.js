function newUser(name, age, country) {
    var name = name || 'David';
    var age = age || 20;
    var country = country || "CO"
    console.log(name, age, country);
}

newUser();
newUser('Oscar', 15, 'CO')

function newAdmin(name = 'David', age = 20, country = 'AR') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE')