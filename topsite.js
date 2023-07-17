    window.addEventListener(&quot;scroll&quot;, function() {
      var scrollToTopBtn = document.getElementById(&quot;scrollToTopBtn&quot;);

      if (window.pageYOffset &gt; 100) {
        scrollToTopBtn.style.display = &quot;block&quot;;
      } else {
        scrollToTopBtn.style.display = &quot;none&quot;;
      }
    });

    function scrollToTop() {
      var scrollDuration = 300;
      var scrollStep = -window.scrollY / (scrollDuration / 15);

      var scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }

    document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
      var scrollToTopBtn = document.getElementById(&quot;scrollToTopBtn&quot;);
      scrollToTopBtn.addEventListener(&quot;click&quot;, scrollToTop);
    });
