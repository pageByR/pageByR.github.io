$(document).ready(function () {
    // Slider
    if (window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            mode: 'fade',
            caption: true,
            slideWidth: 1200,
            responsive: true
        });
    }

    // Slider 2 
    if(window.location.href.indexOf('myskills')> -1){

        $('.galeria2').bxSlider({
            mode: 'fade',
            caption: true,
            slideWidth: 800,
            responsive: true

        });
    } 

    // Posts My Skills

    if (window.location.href.indexOf('myskills') > -1) {

        let posts = [{
                title: 'My Skills',
                date: moment().format("MMMM Do YYYY, h:mm:ss a"),
                content: 'In this beautiful path of programming I have come across different circumstances of life in which few but substantial developments have been developed for both commercial use and personal development. With knowledge in html, css and javascript.'
            },

                 

        ];

        posts.forEach((item, myskills) => {
            let post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        
        </article>
        
        `;

            $("#posts").append(post);
        });

    }

    // Posts About us

    if (window.location.href.indexOf('aboutus') > -1) {

        let posts = [{
                title: 'About Us',
                date: moment().format("MMMM Do YYYY, h:mm:ss a"),
                content: 'We are organized people who solve problems according to the requirements of our clients, independent employees. Fans of the NBA and family activities and TV series.                Enthusiastic with all front end issues and teamwork with the best positive attitude in life.'
            },

                 

        ];

        posts.forEach((item, myskills) => {
            let post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        
        </article>
        
        `;

            $("#posts").append(post);
        });

    }


    // Selector del tema

    let theme = $("#theme");

    $("#to-black").click(function(){
        theme.attr("href", "css/black.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")

    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")

    });



    // Reloj

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {

            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);

        }, 1000);

    }

});
