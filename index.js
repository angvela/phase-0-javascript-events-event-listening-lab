// index.js
function addingEventListener() {
  const btn = document.getElementById('button');

  function clickAlert(event) {
    alert('I was clicked!');
  }

  // Attach the event listener
  btn.addEventListener('click', clickAlert);

  // Return the handler so we can remove it later
  return { btn, clickAlert };
}

const { btn, clickAlert } = addingEventListener();

// Example: remove the listener after 10 seconds
setTimeout(() => {
  btn.removeEventListener('click', clickAlert);
  console.log('Click listener removed');
}, 10000);

