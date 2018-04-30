/**
 * long description for the file
 *
 * @summary This script sends an email from the site
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-23 20:18:03 
 * Last modified  : 2018-04-30 15:57:36
 */

// Declare sending IP
var ADDRESS = 'http://34.242.179.249:8008/';
// var URL = 'http://172.16.0.104:8008/';
// var URL = 'http://192.168.1.184:8020/';
// var URL = 'http://192.168.1.128:8020/';

//var showAlert = require('./14_alerts'); // get alert controls

// declare mail validation patternn
var pattern = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var sendMail = data => {
  $.ajax({
    url: ADDRESS,
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    //headers: ({'Content-Type:','Access-Control-Allow-Origin':'*'}),
    data: JSON.stringify(data),
    dataType: 'text',
    timout: 10000,
    success: function (response, status) {
      console.log(response);
      console.log(status);
    },
    error: function (err, xhr, third) {
      console.log(err);
      console.log(xhr);
      console.log(third);
    }
  });
};
