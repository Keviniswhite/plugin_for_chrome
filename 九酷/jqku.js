
    // 九酷music MP3  url with download
    var log = console.log.bind(console)


    var append_html = function(html) {
        document.body.insertAdjacentHTML('beforeend', html)
    }
    var html_template = function(url) {
        var t = `
            <style >
                .jsku_wrapper {
                    position: fixed;
                    z-index: 1000;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 45px;
                    transform: translate(-50%, -50%);
                    font-family: jetbrains mono;
                    font-weight: bold;
                }
                .jsku_wrapper, .jqku_input {
                    text-align: center;
                }
                .jqku_input {
                    width: 50%;
                    height: 45px;
                    background: #ffffff;
                    border: none;
                    box-shadow: 0px 20px 38px #ededed;
                    font-size: 15px;


                }
                .jsku_a_target {

                }
            </style>
            <div class='jsku_wrapper'>
                <input class='jqku_input' type="text" name="" value="${url}">
                <a class='jsku_a_target' href='${url}' dowload>download</>
            </div>
        `



        return t
    }

    var find_music_url = function() {
        var o = {}

        var e = function(sel) {
            return document.querySelector(sel)
        }
        var audio_url = function() {
            var src = e('audio').src
            if (src != '') {
                return src
            }
        }
        return audio_url()
    }
    var result = function() {
        var url = find_music_url()
        append_html(html_template(url))
    }

    var main = function() { 
        result()      
        log('jqku is running...')
    }
    main()
