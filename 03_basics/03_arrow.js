const user = {
    username: "Pradipta",
    price: 999,
    
    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`) //If we write username inside the braces, it works but there is another more convenient way
    }
    
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()