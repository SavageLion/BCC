/**
 * long description for the file
 *
 * @summary Main entry point for BCC
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-29 17:32:45 
 * Last modified  : 2018-04-29 23:01:45
 */

/****************************************/
/*      LIBRARIES AND FRAMEWORKS        */
/****************************************/

/* JQUERY */
//<script src="node_modules/jquery/dist/jquery.js"></script>
import $ from 'script-loader!./node_modules/jquery/dist/jquery.js';
import jQuery from 'script-loader!./node_modules/jquery/dist/jquery.js';
/* BOOTSTRAP */
import './node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
/* FONT AWESOME 5 */
import './lib/font-awesome5/svg-with-js/js/fontawesome-all.js';

/****************************************/
/*          TEMPLATE CSS FILES          */
/****************************************/

import './css/_fonts.css'; // font css file
import './lib/animate/animate.min.css';
import './lib/ionicons/css/ionicons.min.css';
import './lib/owlcarousel/assets/owl.carousel.css';
import './lib/lightbox/css/lightbox.css';
import './css/style.css';


/****************************************/
/*          TEMPLATE JS FILES           */
/****************************************/

//<!-- JavaScript Libraries -->
import 'script-loader!./lib/jquery/jquery-migrate.min.js';
import 'script-loader!./lib/easing/easing.min.js';
import 'script-loader!./lib/superfish/hoverIntent.js';
import 'script-loader!./lib/superfish/superfish.min.js';
import 'script-loader!./lib/wow/wow.min.js';
import 'script-loader!./lib/waypoints/waypoints.min.js';
import 'script-loader!./lib/counterup/counterup.min.js';
import 'script-loader!./lib/owlcarousel/owl.carousel.min.js';
import 'script-loader!./lib/isotope/isotope.pkgd.min.js';
import 'script-loader!./lib/lightbox/js/lightbox.min.js';
import 'script-loader!./lib/touchSwipe/jquery.touchSwipe.min.js';
import 'script-loader!./lib/_ia_added/jquery.nav.js';
import 'script-loader!./js/main.js';

/****************************************/
/*         IA CSS AND JS FILES          */
/****************************************/


/* 
** IA JS FILES
*/
import './js/_htmlLoader.js';
import './js/_alerts.js';
import './js/_more.js';
/* 
** IA CSS FILES
*/
//<!--Additional CSS by IA-->
//<link rel="stylesheet" type="text/css" href="./css/_more.css">
import './css/_more.css';
//<link rel="stylesheet" type="text/css" href="./css/_alerts.css">
import './css/_alerts.css';