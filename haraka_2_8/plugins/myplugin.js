exports.register = function() {
    this.register_hook('data', 'set_parse_body');
    this.register_hook('data_post', 'my_processing');
};

exports.set_parse_body = function(next, connection) {
  connection.transaction.parse_body = true;
  connection.transaction.set_banner("XXXXX banner_text XXXXXX", "<h3>XXXXX banner_html XXXXXX</h3>");
  next();
}

exports.my_processing = function (next, connection, params) {
  connection.notes.quarantine = 1;
  connection.notes.quarantine_action = OK;
  next();
}
