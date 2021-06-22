let userName = prompt("Your login name, please.")

// Swap following lines to test different days of the week. To test, change the date in the 3rd number from 20-26.

//let checkToday = new Date(2021, 5, 23, 8, 30, 5, 0)
let checkToday = new Date()

currentDay = checkToday.getDay()
console.log(currentDay)
let hoursWorked = 33
let motd
let holiday = false

// Check for current day

if (currentDay === 1){
    motd = "Welcome back to another week! Do you have a case of the Mondays already?"
}
    else if (currentDay === 2){
        motd = "It's Taco Tuesday! Get your tacos on, man!"
    }
    else if (currentDay === 3){
        motd = "As a reminder, anyone caught making camel jokes on Wednesdays must undergo mandatory electroshock therapy. 🎉"
    }
    else if (currentDay === 4){
        if (holiday === true){
            motd = "Looks like you lucked out in getting a three day weekend. You know that means you'll have to work harder today to make up for it. Mwhahahahahahaha!!"
        }
        else {
            motd = "It's still not the weekend yet. ;)"
        }
    }
    else if (currentDay === 5){
        motd = "You're almost there!"
    }
    else if (currentDay === 0 || 6){
        motd = "What are you doing here? You're not authorized to work today. Go home!"
    }

document.write("Greetings " + userName + "!<p></p>")
    document.write(motd)

if (hoursWorked >= 35){
    document.write("<p>You're pushing 40 hours. That's not cool. Make sure you're not hitting OT - you know we're not approving it.</p>")
}