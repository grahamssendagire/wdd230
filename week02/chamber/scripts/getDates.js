function getLastModifiedDate() {
    var lastModified = new Date(document.lastModified);
    return lastModified.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  // Insert the last modification date into the HTML element with id 'lastModified'
  document.getElementById('lastModified').textContent = getLastModifiedDate();function getLastModifiedDate() {
    var lastModified = new Date(document.lastModified);
    return lastModified.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  // Insert the last modification date into the HTML element with id 'lastModified'
  document.getElementById('lastModified').textContent = getLastModifiedDate();