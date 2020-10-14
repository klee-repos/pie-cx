

self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
  console.log('service worker activate')
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  console.log(event.notification)
  console.log(event)
  let options = {
    type: "all"
  }
  self.clients.matchAll().then(clients => {
    console.log(clients)
  })
  console.log(self)
  self.localStorage.setItem('myCat', 'Tom');
  
});
