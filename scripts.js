$(document).ready(function () {

    $("#send_button").click(function () {
        $date_time = getDateTime();
        $user_text = $("#message-to-send").val();


        /**
         * Add user question in the UI
         */

        $user_text_li_elem = '<li class="clearfix" style="list-style-type: none;"><div class="message-data align-right"><span class="message-data-time">' + $date_time + '</span> &nbsp; &nbsp;<span class="message-data-name">You</span> <i class="fa fa-circle me"></i></div><div class="message other-message float-right">' + $user_text + '</div></li> ';
        $(".chat-history").append($user_text_li_elem);
        //clear user text from text area
        $("#message-to-send").val('').empty();



        /**
         * Make ajax call to send text to backend api
         */
        $.get("http://161.97.148.36:8000/web-bot?user_message="+$user_text, function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            console.log(data);
          });
        // $.ajax({
        //     url: "http://161.97.148.36:8000/web-bot",
        //     data: { "user_message": $user_text },
        //     type: "GET",
        //     beforeSend: function (xhr) { xhr.setRequestHeader('authorization', 'adsfaawerjhjknafkannkjrehker'); },
        //     success: function (response) {
        //         /**
        //         * Add bot text to chat history UI
        //         */
        //        console.log(response);
        //         $bot_text = response.form.query;
        //         $bot_text_li_elem = '<li style="list-style-type: none;"><div class="message-data"><span class="message-data-name"><img width="35px;" style="border-radius: 45px;" src="bot-image.png" alt="avatar" /> BOT</span><span class="message-data-time">' + $date_time + '</span></div><div class="message my-message">' + $bot_text + '</div></li>';
        //         $(".chat-history").append($bot_text_li_elem);
        //         // console.log(response.form.query);
        //         /**
        //          * Scroll down the chat box for better experience
        //          */
        //         var d = $('#chat_history');
        //         d.scrollTop(d.prop("scrollHeight"));
        //     },
        //     error: function (xhr, status, error) {
        //         console.log(error);
        //     }
        // });


        /**
        * Add bot text to chat history UI
        */
        // $bot_text = "I am bot text";
        // $bot_text_li_elem = '<li><div class="message-data"><span class="message-data-name"><img width="35px;" src="bot-image.png" alt="avatar" /> BOT</span><span class="message-data-time">' + $date_time + '</span></div><div class="message my-message">' + $bot_text + '</div></li>';
        // $(".chat-history").append($bot_text_li_elem);
        //clear user text from text area
        // $("#message-to-send").val('').empty();






    });
}); //jQuery ends


/**
 * Scratch JS 
 * @returns 
 */
function getDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " at "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return datetime;
}
