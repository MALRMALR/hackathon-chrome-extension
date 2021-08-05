// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   });

document.addEventListener('DOMContentLoaded', () => {
  // check current date and time
  // let progressBar = document.createElement('div');
  // progressBar.setAttribute('id', 'progress-percentage');
  const progressBar = document.querySelector('#progress-percentage');
  const container1 = document.querySelector('#container');
  const grad = document.querySelector('#graduation')

  let prog = 0.01;
  const cohortStart = new Date('July 26, 2021 09:00:00').getTime() / 1000 | 0;
  const cohortEnd = new Date('October 22, 2021, 20:00:00').getTime() / 1000 | 0;
  const totalTime = cohortEnd - cohortStart;

  const timeElapsed = () => {
    const timeNow = new Date().getTime() / 1000 | 0;
    const timeElapsed = (timeNow - cohortStart);
    let timeRemaining = (cohortEnd - timeNow);

    const days = Math.floor(timeRemaining / 86400);
    timeRemaining -= days * 86400;
    const hours = Math.floor(timeRemaining / 3600) % 24;
    timeRemaining -= hours * 3600;
    const minutes = Math.floor(timeRemaining / 60) % 60;
    timeRemaining -= minutes * 60;
    const seconds = timeRemaining % 60;

    grad.innerText = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
    prog = (timeElapsed / (cohortEnd - cohortStart)) * 100;

    //console.log("Your progress is: ", prog)

    progressBar.innerText = prog.toFixed(4) + ' %';
    // container1.appendChild(progressBar)
    //console.log('inner progres::', prog);
  }


  //return prog;
  // invoke draw function

  //let totalTimeElapsed = timeElapsed();
  //console.log(totalTimeElapsed);
  //function logMe() {
  //console.log(totalTimeElapsed);
  //console.log('prog: ', prog);
  //}

  timeElapsed();
  setInterval(timeElapsed, 1000)
  // const dateNow = () => {
  //   return
  // }

  // function drawProgressBar() {
  const decPercentage = prog / 100;
  console.log(decPercentage);
  const bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: { color: '#F7BF68' },
    to: { color: '#F05177' }
  });
  //console.log(bar.value())
  setTimeout(bar.animate(decPercentage), 1001);  // Number from 0.0 to 1.0
  // bar.animate(decPercentage);
  // setInterval(() => {
  //   console.log("CHANGE!");
  //   bar.animate(decPercentage)
  // }, 1000);
  //}
  //drawProgressBar();
  // setInterval(drawProgressBar, 1000);

  //container1.after(progressBar);
  //function progressUpdate(prog) {
  //progressBar.setText(prog)


  //}
  //setInterval(progressUpdate(prog), 500)
  // }
});