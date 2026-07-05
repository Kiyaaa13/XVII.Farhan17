const terminal = document.getElementById("terminal-text");

const lines = [

"PROJECT XVII",
"",
"Initializing...",
"██████████",
"",
"Accessing Private Memory...",
"██████████",
"",
"Decrypting Message...",
"██████████",
"",
"Access Granted."

];

let index = 0;

function typeTerminal(){

    if(index < lines.length){

        terminal.innerHTML += lines[index] + "\n";

        index++;

        setTimeout(typeTerminal,500);

    }else{

        setTimeout(showLetter,1200);

    }

}

const text = `

Happy Sweet Seventeen, Mbull. ❤️

I honestly don't know where to begin.

Who would've thought that someone I only knew by name...
would slowly become one of the most important people in my life.

Thank you...

For every little conversation.

For every laugh.

For every memory.

For every moment that made this year so much brighter.

You probably don't realize it...

But you've made me happier more times than you know.

I hope your seventeenth year brings you endless happiness,
good health,
new opportunities,
and countless reasons to smile.

No matter how busy life gets...

Please don't lose that smile I love so much.

Thank you for staying.

Thank you for choosing me.

And...

thank you for becoming my favorite person.

Happy Birthday, Mbull.

With all my love,

Ndutt ❤️

`;

const typing = document.getElementById("typing");

let i = 0;

function type() {

    if (i < text.length) {

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(type, 25);

    }

}

type();

const btn = document.getElementById("finalBtn");

btn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "finale.html";

    },1000);

});