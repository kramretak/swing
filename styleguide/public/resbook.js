// Responsive Bookmarklet namespace
// Borrowed (and then modified!) from Victor Coulon -- http://responsive.victorcoulon.fr/

window.resbook = {};

(function(rb) {
    // Private var & methods
    var d = document,
        w = window,
        url = d.URL,
        title = d.title,
        wrapper = null,
        devices = null,
        body = null,
        size = null,
        auto = true,
        isResized = false,
        isAnimated = false,
        sizes = {
            smartphonePortrait: [320, 548],
            smartphoneLandscape: [568, 300],
            tabletPortrait: [768, 1004],
            tabletLandscape: [1024, 748],
            auto: 'auto'
        },
        refreshCss = function(disable){
            var ifrm = d.querySelector('#wrapper iframe');
            ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
            console.log(ifrm);
            var b = ifrm.document.querySelector('body');
            console.log(b);
            if(disable){
                var el = ifrm.document.getElementById('cssrefresh');
                if(el){
                    el.parentNode.removeChild(el);
                    b.classList.remove('cssrefresh');
                }
            } else {

                b.classList.add('cssrefresh');

            }
        },
        resize = function(w,h,f) {
            w = w || wrapper.clientWidth;
            h = h || wrapper.clientHeight;
            size.innerHTML = w + 'x' + h;
        },
        setPosition = function(wh,t,cl){
            var width = (wh == 'auto') ? w.innerWidth*.8 : wh[0],
                height = (wh == 'auto') ? w.innerHeight : wh[1],
                style = 'width:'+width+'px;height:'+height+'px;margin-top:20px;';

            if (typeof(width) == 'undefined' || typeof(height) == 'undefined') return false;

            style += (wh === 'auto') ? 'margin-top:0;' : '';
            wrapper.setAttribute('style',style);
            wrapper.setAttribute('data-device',cl);
            $('#kss-main').attr('class', cl);
            body.setAttribute('style','min-height:'+(height+200)+'px;min-width:'+width+'px;');
            resize(width,height);
            if(wh === 'auto' && !t){
                isResized = false;
                setTimeout(function(){
                    body.setAttribute('style','');
                    isAnimated = false;
                }, 260);
            } else {
                isAnimated = false;
            }
        },
        readyElement = function(id,callback){
          var interval = setInterval(function(){
            if(d.getElementById(id)){
              callback(d.getElementById(id));
              clearInterval(interval);
            }
          },60);
        };

    // === Public methods ====
    /**
     * Change url and the document title with pushState method
     * @param  {string} u   url of the new page
     * @param  {title} t title of the new page
     */
    rb.changeUrl = function (u,t){
        d.title = t + ' - Responsive test';
        if(history.pushState) {
            try {
                history.pushState({},  "New Page", u);
            }
            catch (e) {}
        }
        if(refreshBtn.classList.contains('active')){
            refreshCss();
        } else {
            refreshCss(true);
        }
    };

    // "document ready"
    readyElement('wrapper', function(){
        // Set var cache
        wrapper = d.getElementById('wrapper');
        devices = d.getElementById('devices');
        size = d.getElementById('size');
        body = d.querySelector('body');

        // Events
        [].forEach.call(document.querySelectorAll('#devices a'), function(el) {
          el.addEventListener('click', function(e) {

            [].forEach.call(document.querySelectorAll('#devices a'), function(el) {
                el.classList.remove('active');
            });

            e.preventDefault();
            e.stopPropagation();
            var self = this;

            if((self.classList.contains('auto') && isResized === false) || isAnimated === true)
                return false;

            isAnimated = true;
            if(isResized === false){
                isResized = true;
                setPosition(sizes.auto,true);
            }
     
            setTimeout(function(){
                self.classList.add('active');
                if(self.classList.contains('smartphone-portrait')){
                    setPosition(sizes.smartphonePortrait, false,'smartphonePortrait');
                } else if(self.classList.contains('smartphone-landscape')){
                    setPosition(sizes.smartphoneLandscape, false, 'smartphoneLandscape');
                } else if(self.classList.contains('tablet-portrait')){
                    setPosition(sizes.tabletPortrait, false, 'tabletPortrait');
                } else if(self.classList.contains('tablet-landscape')){
                    setPosition(sizes.tabletLandscape, false, 'tabletLandscape');
                } else if(self.classList.contains('auto')){
                    setPosition(sizes.auto, false, 'auto');
                }
            }, 10);
            
          });
        });

        w.addEventListener('resize', function(){
            resize();
        }, false);

        w.addEventListener('keyup', function(e){
            var key = e.keyCode ? e.keyCode : e.charCode,
                keys = {
                    49: 'tabletPortrait',
                    50: 'tabletLandscape',
                    51: 'smartphonePortrait',
                    52: 'smartphoneLandscape',
                    53: 'auto'
                };

            // Quit now if the key isn't in our object map
            if (typeof(keys[key]) == 'undefined') return false;

            setPosition(sizes[keys[key]], false, keys[key]);

        }, false);

        resize();
        size.style.minWidth = 0;

    });

})(resbook);