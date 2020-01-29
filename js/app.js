/*jslint browser: true*/
/*global $, jQuery*/

(function () {
    'use strict';

    var app = function($) {

        $('body').scrollTop(0);
        $('body').show();

        $('.home').click(function(e) {
            e.preventDefault();
            $('body').scrollTop(0);
        });

        // Init page animations
        $('.fadeCtrl').addClass('animated fadeIn');
        $('.bounceUpCtrl').addClass('animated bounceInUp');
        $('.bounceDownCtrl').addClass('animated bounceInDown');

        // Mobile nav selecting
        if ($('.contact').is(':visible')) {
            $('nav .contact').addClass('active');
        } else if ($('.mission').is(':visible')) {
            $('nav .mission').addClass('active');
        } else if ($('.experience').is(':visible')) {
            $('nav .experience').addClass('active');
        } else if ($('.skills').is(':visible')) {
            $('nav .skills').addClass('active');
        } else if ($('.education').is(':visible')) {
            $('nav .education').addClass('active');
        } else if ($('.interests').is(':visible')) {
            $('nav .interests').addClass('active');
        }

        var stripStyle = function() {
            $('main.wrapper > div > div').hide();
            $('nav a').removeClass('active');
        };

        //Mobile nav page flow
        $('nav .contact').click(function(e) {
            e.preventDefault();
            stripStyle();
            $('nav .contact').addClass('active');
            $('main.wrapper .contact').show();
        });

        $('nav .mission').click(function(e) {
            e.preventDefault();
            stripStyle();
            $('nav .mission').addClass('active');
            $('main.wrapper .mission').show();
        });

        $('nav .experience').click(function(e) {
            e.preventDefault();
            stripStyle();
            $('nav .experience').addClass('active');
            $('main.wrapper .experience').show();
        });

        $('nav .skills').click(function(e) {
            e.preventDefault();
            stripStyle();
            $('nav .skills').addClass('active');
            $('main.wrapper .skills').show();
        });

        $('nav .education').click(function(e) {
            e.preventDefault();
            stripStyle();
            $('nav .education').addClass('active');
            $('main.wrapper .education').show();
        });

        $('nav .interests').click(function(e) {
            e.preventDefault();
            stripStyle();
            $('nav .interests').addClass('active');
            $('main.wrapper .interests').show();
        });

        $(window).resize(function() {
            // Hide modal on resize
            $('aside').fadeOut();

            // Show all content when sized to Tablet/Web
            // or reset to initial Mobile version
            if ($(window).width() > 767) {
                $('main.wrapper > div > div').show();
            } else {
                $('main.wrapper > div > div').hide();
                $('main.wrapper > div .contact').show();
                $('nav a').removeClass('active');
                $('nav .contact').addClass('active');
            }
        });

        // Launch skills modal
        $('.skills a').click(function(e) {
            e.preventDefault();
            $('#skillsModal').removeClass('fadeOut').addClass('fadeIn').show();
            $('#skillsModal .wrapper').removeClass('bounceOutUp').addClass('bounceInDown');
        });

        // Launch message modal
        // $('.message').click(function(e) {
        //     e.preventDefault();
        //     $('#messageModal').removeClass('fadeOut').addClass('fadeIn').show();
        //     $('#messageModal .wrapper').removeClass('bounceOutUp').addClass('bounceInDown');
        //     $('#name').focus();
        // });

        // Hide modal on click out
        var closeModal = function(e) {
            var container = $('aside .wrapper');

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('aside').removeClass('fadeIn').addClass('fadeOut').fadeOut(800);
                $('aside .wrapper').removeClass('bounceInDown').addClass('bounceOutUp');

                // Clear and show fields
                setTimeout(function() {
                    $('#messageModal h2.error').hide();
                    $('#messageModal h2.sent').hide();
                    $('#messageModal h2.intro').show();
                    $('#messageModal form').show();
                    $('#messageModal input').val('');
                    $('#messageModal textarea').val('');
                    $('#messageModal button').val('');
                    // Disable
                    $('#submit').attr('disabled', 'true');
                }, 800);
            }
        };

        // Close modal on click outside
        $('aside').mouseup(function(e) {
            closeModal(e);
        });

        // Close dropdown on touch outside
        // $('aside').touchend(function(e) {
        //   closeModal(e);
        // });

        // function validateEmail(email) {
        //     var reg = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return reg.test(email);
        // }

        $('#submit').attr('disabled', 'true');
        $('#email').on('keyup', function() {
            if ($('#email').val() !== '') {
                $('#submit').removeAttr('disabled');
            } else {
                $('#submit').attr('disabled', 'true');
            }
        });

        // Send Massage
        // $('#messageForm').submit(function() {
        //     // Validate form items
        //     var emailVal = $('#email').val();
        //     var nameVal = $('#name').val();
        //     var msgVal = $('#message').val();
        //     var subjectVal = 'Resume Message';
        //     $.ajax({
        //         type: 'POST',
        //         url: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
        //         data: {
        //             'key': '',
        //             'template_name': 'maxwell-avenue',
        //             "template_content": [
        //                 {
        //                     'name': 'Maxwell Avenue',
        //                     'content': 'via maxwell avenue'
        //                 }
        //             ],
        //             'message': {
        //                 'global_merge_vars': [
        //                     {
        //                         'name': 'nameVal',
        //                         'content': nameVal
        //                     },
        //                     {
        //                         'name': 'emailVal',
        //                         'content': emailVal
        //                     },
        //                     {
        //                         'name': 'messageVal',
        //                         'content': msgVal
        //                     },
        //                     {
        //                         'name': 'titleVal',
        //                         'content': subjectVal
        //                     }
        //                 ],
        //                 'from_email': emailVal,
        //                 'from_name': nameVal,
        //                 'headers': {
        //                     'Reply-To': emailVal
        //                 },
        //                 'subject': subjectVal,
        //                 'to': [
        //                     {
        //                         'email': 'murphy@maxwellavenue.com',
        //                         'name': 'Murphy ORourke',
        //                         'type': 'to'
        //                     }]
        //             }
        //         }
        //     })
        //         .done(function(response) {
        //             $('#messageModal h2.intro').hide();
        //             $('#messageModal h2.sent').fadeIn();
        //             $('#messageModal h2.error').hide();
        //             $('#messageModal form').hide();
        //         })
        //         .fail(function(response) {
        //             $('#messageModal h2.intro').hide();
        //             $('#messageModal h2.error').fadeIn();
        //         });
        //     return false;
        // });

    };

    $(document).ready(app);

}());
