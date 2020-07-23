import React from 'react';
class Change extends React.Component {


    myFunction = () => {
        var x = 0;
        setInterval(function () {
            console.log(x);
            x = x + 1;
            x = x % 8;
            switch (x) {
                case 0:
                    document.getElementById("txt").innerText = "I am a Data Scientist";
                    break;
                case 1:
                    document.getElementById("txt").innerText = "I am a Full Stack Developer";
                    break;
                case 2:
                    document.getElementById("txt").innerText = "I am a Cloud Practioner";
                    break;
                case 3:
                    document.getElementById("txt").innerText = "I am a Software Developer";
                    break;
                case 4:
                    document.getElementById("txt").innerText = "I am a Ethical Hacker";
                    break;
                case 5:
                    document.getElementById("txt").innerText = "I am a Game Developer";
                    break;
                case 6:
                    document.getElementById("txt").innerText = "I am a Video Editor";
                    break;
                case 7:
                    document.getElementById("txt").innerText = "I am a Mobile App Developer";
                    break;
                default:
                    document.getElementById("txt").innerText = "Just a Guy";
                    break;
            }
        }, 1500);
    }



    render() {
        this.myFunction();
        return (
            <div>
                <p id="txt"></p>
            </div>
        );
    }
}

export default Change;