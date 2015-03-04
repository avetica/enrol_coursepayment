// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * helper for selecting a payment option
 *
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 *
 * @file      : mollie.js
 * @since     2-3-2015
 * @encoding  : UTF8
 *
 * @package   : enrol_coursepayment
 *
 * @copyright 2015 MoodleFreak.com
 * @author    Luuk Verhoeven
 **/

YUI().use("node", function(Y){

    var method = '';

    // form can't accept if there is no input
    Y.one('#coursepayment_mollie_form').on('submit', function(e) {

        if(method == '')
        {
            e.preventDefault();
            return;
        }

        if(method == 'ideal')
        {
            // get the issuer if set
            var issuer = Y.one('#issuers_ideal select').get('value');
            if(issuer == '')
            {
                e.preventDefault();
                return;
            }
        }
        // set method value
        Y.one('#input_method').setAttribute('value' , method);
    });



    Y.all('#coursepayment_mollie_form tr').on('click', function(e) {

        var item = e.currentTarget;

        if(item.hasClass('skip'))
        {
            return;
        }

        if(item.hasClass('ideal'))
        {
            Y.one('#issuers_ideal').show()
        }
        else
        {
            Y.one('#issuers_ideal').hide();
        }

        // remove class selected
        this.removeClass('selected');
        item.addClass('selected');

        method = item.getData('method');
        console.log(this)
    });
})