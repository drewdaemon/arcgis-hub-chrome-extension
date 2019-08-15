class SandboxService {

  constructor () {
    this.sandbox = document.getElementById('sandbox');
    this.callback = () => {};
    window.addEventListener('message', (event) => {this.callback(event)});
  }

  /**
   * Sends a command to the sandbox
   * @param {string} command - the command key
   * @param {any} context - the context information
   * TODO make this more robust to parallel calls to the sandbox
   */
  sendCommand(command, context) {
    return new Promise(resolve => {
      this.callback = messageEvent => { resolve(messageEvent.data) };
      this.sandbox.contentWindow.postMessage({command, context}, '*');
    });
  }

}

export default SandboxService;
