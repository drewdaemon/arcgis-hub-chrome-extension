import { searchItems } from '@esri/arcgis-rest-portal';

window.addEventListener('message', function(event) {
  const [command, context] = [event.data.command, event.data.context];
  let promise;
  switch(command) {
    case 'searchItems':
      promise = searchItems(context);
      break;
  }
  promise.then(result => {
    delete result.nextPage; // Have to remove the nextPage function to toss it back to the app
    event.source.postMessage(result, event.origin);
  })
});