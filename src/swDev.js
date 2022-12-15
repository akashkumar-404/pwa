const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response);


    response.addEventListener('updatefound', function() {
        // console.log("inside updatefound");
         let worker = response.installing;
         worker.onstatechange = () => {
         if (worker.state === 'installed' &&
             navigator.serviceWorker.controller) {
           // Preferably, display a message asking the user to reload...
           //window.location.reload();
         }
       };
         worker.addEventListener('statechange', function() {
           if (worker.state === 'installed') {
            // console.log('Is installed');
             // Here you can notify the user, that a new version exist.
             // Show a toast view, asking the user to upgrade.
             // The user accepts.
             // Send a message to the sw, to skip wating.
             worker.postMessage({
               action: 'skipWaiting'
             });
           }
         });
       });
    

  });
};

export default swDev;
