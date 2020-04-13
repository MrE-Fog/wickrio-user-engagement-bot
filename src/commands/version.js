const state = require('../state');
const pkgjson = require('../../package.json');

class Version {
  static shouldExecute(command, state, message) {

  }

  static execute() {
    const reply = `*Versions*\nIntegration: ${pkgjson.version
    }\nWickrIO Addon: ${pkgjson.dependencies.wickrio_addon
    }\nWickrIO API: ${pkgjson.dependencies['wickrio-bot-api']}`;
    return {
      reply,
      state: state.NONE,
    };
  }
}

module.exports = Version;
